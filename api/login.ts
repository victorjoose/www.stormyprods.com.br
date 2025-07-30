
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_USER = process.env.VITE_ADMIN_USER;
const ADMIN_PASS = process.env.VITE_ADMIN_PASS;

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 405,
    });
  }

  try {
    const { username, password } = await req.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const token = await new jose.SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1h')
        .sign(secret);
      
      return new Response(JSON.stringify({ token }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `Login API error: ${error.message}` }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
