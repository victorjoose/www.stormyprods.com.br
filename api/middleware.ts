
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function withAuth(handler) {
  return async (req: Request) => {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jose.jwtVerify(token, secret);
      return handler(req);
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 401,
      });
    }
  };
}
