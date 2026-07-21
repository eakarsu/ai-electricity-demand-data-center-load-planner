import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE } from '@/lib/auth';
import { authenticateCredentials, createDatabaseSession } from '@/lib/databaseAuth';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email : '';
  const password = typeof body?.password === 'string' ? body.password : '';
  const user = await authenticateCredentials(email, password);
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = await createDatabaseSession(user.id);
  const response = NextResponse.json({ user });
  response.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  return response;
}
