import { type EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/confirm-email";

  if (token_hash && type) {
    const { error } = await supabaseServer.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      return NextResponse.redirect(
        new URL(`${next}?confirmed=true`, request.url),
      );
    }

    return NextResponse.redirect(
      new URL(`/confirm-email?error=${encodeURIComponent(error.message)}`, request.url),
    );
  }

  return NextResponse.redirect(
    new URL("/confirm-email?error=Missing%20confirmation%20token", request.url),
  );
}
