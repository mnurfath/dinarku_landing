import { NextResponse } from "next/server";
import { snap } from "@/app/lib/midtrans";
import { supabase } from "@/app/lib/supabase";

const PREMIUM_PRICE = parseInt(process.env.PREMIUM_PRICE || "49000", 10);

function generateOrderId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `DKU-${Date.now()}-${suffix}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body as { token: string };

    if (!token) {
      return NextResponse.json(
        { error: "Missing access token" },
        { status: 400 }
      );
    }

    const { data: userData, error: authError } =
      await supabase.auth.getUser(token);

    if (authError || !userData.user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const user = userData.user;
    const orderId = generateOrderId();

    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: PREMIUM_PRICE,
      },
      item_details: [
        {
          id: "dinarku-premium",
          name: "DinarKu Premium",
          price: PREMIUM_PRICE,
          quantity: 1,
          category: "Subscription",
        },
      ],
      customer_details: {
        email: user.email,
      },
      custom_field1: user.id,
      custom_field2: "premium",
    });

    return NextResponse.json({
      token: transaction.token,
      order_id: orderId,
    });
  } catch (error) {
    console.error("Create transaction error:", error);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 }
    );
  }
}
