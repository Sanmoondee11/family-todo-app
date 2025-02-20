import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rumkhqlrzshxcnbyqxru.supabase.co'; // SupabaseのURL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bWtocWxyenNoeGNuYnlxeHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NzA0MjEsImV4cCI6MjA1NTI0NjQyMX0.tNfizon_1POZXo2rIezPVYoJCkv_73J_WrVuiqtxbdY'; // APIキー
export const supabase = createClient(supabaseUrl, supabaseKey);
