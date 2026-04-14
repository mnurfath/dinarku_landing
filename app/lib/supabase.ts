import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpdmrmjqsacrknigekaf.supabase.co";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY env var.");
}

/**
 * Server-side Supabase client using the service role key.
 * Use this ONLY in server-side API routes that need to bypass RLS.
 * NEVER use this in client components — use supabaseBrowser instead.
 */
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey);

/** @deprecated Use supabaseServer (server routes) or supabaseBrowser (client components) */
export const supabase = supabaseServer;
