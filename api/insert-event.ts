import { createClient } from '@supabase/supabase-js';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response(JSON.stringify({ error: 'Supabase environment variables are not set.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }

  const supabaseClient = createClient(
    supabaseUrl,
    supabaseAnonKey,
    { global: { headers: { 'x-my-custom-header': 'Vercel Edge Functions' } } }
  );

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 405,
    });
  }

  try {
    const { name, date, location, bands, ticketLink, image, upcoming, photos, photosUrl } = await req.json();

    if (!name || !date || !location) {
      return new Response(JSON.stringify({ error: 'Missing required fields: name, date, or location' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const { data, error } = await supabaseClient
      .from('events')
      .insert([
        { name, date, location, bands, ticketLink, image, upcoming, photos, photosUrl },
      ])
      .select();

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `insert-event API error: ${error.message}` }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
