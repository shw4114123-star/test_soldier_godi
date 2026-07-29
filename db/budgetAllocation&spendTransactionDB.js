import { createClient } from "@supabase/supabase-js";
import "dotenv/config"

const SUPABASE_URL = process.env.SUPABASE_URL
const API_KEY = process.env.API_KEY

const client = createClient(
    SUPABASE_URL, 
    API_KEY
)

export default client