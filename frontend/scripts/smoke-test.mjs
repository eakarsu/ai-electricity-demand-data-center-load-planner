const baseUrl = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:5300';
const email = process.env.SMOKE_LOGIN_EMAIL || process.env.BOOTSTRAP_ADMIN_EMAIL;
const password = process.env.SMOKE_LOGIN_PASSWORD || process.env.BOOTSTRAP_ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error('SMOKE_LOGIN_EMAIL and SMOKE_LOGIN_PASSWORD are required');
}

const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
if (!loginResponse.ok) throw new Error(`Login failed with ${loginResponse.status}`);
const cookieHeader = loginResponse.headers.get('set-cookie');
if (!cookieHeader) throw new Error('Login did not issue a session cookie');
const cookie = cookieHeader.split(';')[0];

for (const path of ['/api/auth/me', '/api/dashboard']) {
  const response = await fetch(`${baseUrl}${path}`, { headers: { cookie } });
  if (!response.ok) throw new Error(`${path} failed with ${response.status}`);
}

console.log('Database authentication smoke passed');
