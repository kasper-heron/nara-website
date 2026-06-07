import { createClient } from "@supabase/supabase-js";

const EXTERNAL_SUPABASE_URL = "https://vhrershvbrwjwqbeehlj.supabase.co";
const EXTERNAL_SUPABASE_ANON_KEY =
  "sb_publishable_J1LH62GITjHm49kWoJcnpg_2RGvn2r8";

export const supabaseAuth = createClient(
  EXTERNAL_SUPABASE_URL,
  EXTERNAL_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
