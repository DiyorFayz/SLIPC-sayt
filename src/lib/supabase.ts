import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zhaghkkmjyainwelwnbd.supabase.co';

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SVrPhbeSPe6M3F26lYWf2w_bBAMdmBH';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
