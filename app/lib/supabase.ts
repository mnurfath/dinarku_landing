import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpdmrmjqsacrknigekaf.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey!);
