import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpdmrmjqsacrknigekaf.supabase.co";
const supabaseAnonKey = "sb_publishable_NXy0J066xNcWN1Z3yUs2zA_kj1dA26V";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
