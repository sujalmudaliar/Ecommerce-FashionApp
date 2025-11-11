import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lacnnghkvqjfrhrjbgjj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhY25uZ2hrdnFqZnJocmpiZ2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4OTA3MzUsImV4cCI6MjA3ODQ2NjczNX0.-sCTCyPROyeACY-l_NKq15HgsTEnHwgutJor5AS57fs'

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    redirectTo: 'driphouse://auth/callback',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
})

export default supabase
