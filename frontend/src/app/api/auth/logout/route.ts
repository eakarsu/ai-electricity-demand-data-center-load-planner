import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE } from '@/lib/auth';
import { revokeDatabaseSession } from '@/lib/databaseAuth';

export async function POST(request: NextRequest) {
  await revokeDatabaseSession(request.cookies.get(AUTH_COOKIE)?.value);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
  return response;
}
