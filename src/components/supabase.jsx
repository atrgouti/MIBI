import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://byclccpokszkbxfgiwhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Y2xjY3Bva3N6a2J4Zmdpd2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwOTg3ODYsImV4cCI6MjAxMjY3NDc4Nn0.COzxMPwqyubvY0lh9yRkrBQeYwwwLAV_Qax24fgXecs";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
