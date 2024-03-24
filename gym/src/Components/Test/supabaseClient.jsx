import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://hwgnzqgierwxhbdzdhlt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3Z256cWdpZXJ3eGhiZHpkaGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDAyNDksImV4cCI6MjAyNjA3NjI0OX0.zL1pf2rKCmjr8nZffv9IdT7e3rvF_ch00H_Lc0DTkZw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);