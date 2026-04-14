import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpdmrmjqsacrknigekaf.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY env var. " +
      "Add it to .env.local (get it from Supabase Dashboard → Settings → API → anon/public key)",
  );
}

export const supabaseBrowser = createClient(supabaseUrl, supabaseAnonKey);
