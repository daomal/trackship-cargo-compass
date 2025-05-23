
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { ExtendedDatabase } from './customTypes';

const SUPABASE_URL = "https://adxgzitxnqytdgcdmejt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkeGd6aXR4bnF5dGRnY2RtZWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MjI3NjYsImV4cCI6MjA2MjA5ODc2Nn0.vPWGqeHWK7QwFxxv1iL49YOqym3jLydNXN2m9hXkrXk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<ExtendedDatabase>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
    debug: true // Enable debug mode to see more detailed logs
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Helper function untuk memeriksa apakah respons error dari supabase
export const handleSupabaseError = (error: any) => {
  if (error) {
    console.error('Supabase error:', error);
    return error.message || 'Terjadi kesalahan pada server';
  }
  return null;
};
