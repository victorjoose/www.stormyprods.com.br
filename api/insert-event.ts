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
    const { name, date, location, bands, ticketlink, image, upcoming, photos, photosurl } = await req.json();

    if (!name || !date || !location) {
      return new Response(JSON.stringify({ error: 'Missing required fields: name, date, or location' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const { data, error } = await supabaseClient
      .from('events')
      .insert([
        { name, date, location, bands, ticketlink, image, upcoming, photos, photosurl },
      ])
      .select();

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error: unknown) {
    let errorMessage = 'insert-event API error: Unknown error';
    if (error instanceof Error) {
      errorMessage = `insert-event API error: ${error.message}`;
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
