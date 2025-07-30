
import { createClient } from '@supabase/supabase-js';
import { withAuth } from './middleware';

export const config = {
  runtime: 'edge',
};

async function handler(req: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response(JSON.stringify({ error: 'Supabase environment variables are not set.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }

  const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 405,
    });
  }

  try {
    const { data, error } = await supabaseClient
      .from('events')
      .select('name, date, location, bands, ticketlink, image, upcoming, photos, photosurl');

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data.reverse()), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `get-all-events API error: ${error.message}` }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}

export default withAuth(handler);
