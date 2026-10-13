import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://laiglouukdrcyofkjdhj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_J56hwuabq09eRc0yDAJcIw_-Y-Ei96s';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  readonly client = createClient(SUPABASE_URL, SUPABASE_KEY);

}