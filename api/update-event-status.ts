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

  if (req.method !== 'PATCH') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 405,
    });
  }

  try {
    const { id, upcoming } = await req.json();

    if (!id || typeof upcoming === 'undefined') {
      return new Response(JSON.stringify({ error: 'Missing required fields: id or upcoming' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const { data, error } = await supabaseClient
      .from('events')
      .update({ upcoming: upcoming })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ error: 'Event not found or no changes made.' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `update-event-status API error: ${error.message}` }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
