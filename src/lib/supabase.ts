import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

// ค่าจากไฟล์ .env.local
const url = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const key = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(url, key, {
  auth: { persistSession: false },
});
