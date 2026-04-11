import crypto from "crypto";
import { supabase } from "@/app/lib/supabase";

const SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;

function verifySignature(
  orderId: string,
  statusCode: string,
  grossAmount: string,
  signatureKey: string
): boolean {
  const expected = crypto
    .createHash("sha512")
    .update(orderId + statusCode + grossAmount + SERVER_KEY)
    .digest("hex");
  return expected === signatureKey;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
      payment_type,
    } = body;

    if (
      !verifySignature(order_id, status_code, gross_amount, signature_key)
    ) {
      console.error("Invalid signature for order:", order_id);
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 401,
      });
    }

    const userId = body.custom_field1 as string | undefined;
    const settledAt =
      transaction_status === "settlement" ||
      (transaction_status === "capture" && fraud_status === "accept")
        ? new Date().toISOString()
        : null;

    // Upsert payment record
    await supabase.from("payments").upsert(
      {
        order_id,
        user_id: userId || null,
        amount: parseInt(gross_amount, 10),
        status: transaction_status,
        payment_type: payment_type || null,
        settled_at: settledAt,
      },
      { onConflict: "order_id" }
    );

    // Activate premium on successful payment
    if (
      transaction_status === "settlement" ||
      (transaction_status === "capture" && fraud_status === "accept")
    ) {
      if (!userId) {
        console.error("No user_id in custom_field1 for order:", order_id);
      } else {
        const { error: updateError } = await supabase
          .from("user_profiles")
          .update({
            subscription: "premium",
            premium_since: new Date().toISOString(),
          })
          .eq("id", userId);

        if (updateError) {
          console.error("Failed to update profile:", updateError);
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error("Notification handler error:", error);
    return new Response(JSON.stringify({ error: "Handler failed" }), {
      status: 500,
    });
  }
}
