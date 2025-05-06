import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://hqaigntkrngrbrikfzti.supabase.co/','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxYWlnbnRrcm5ncmJyaWtmenRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMTc5NzcsImV4cCI6MjA1ODg5Mzk3N30.lI4kJ9NHrG9GxAcOOeRs8tdRpSZHCv94TkEkj4rgF98')


export default supabase