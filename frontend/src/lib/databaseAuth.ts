import crypto from 'crypto';
import { promisify } from 'util';
import { getPostgresPool } from '@/lib/postgres';
import type { SessionUser } from '@/lib/auth';

const scrypt = promisify(crypto.scrypt);

async function passwordHash(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString('hex');
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt}$${derived.toString('hex')}`;
}

async function passwordMatches(password: string, encoded: string): Promise<boolean> {
  const [scheme, salt, expectedHex] = encoded.split('$');
  if (scheme !== 'scrypt' || !salt || !expectedHex) return false;
  const expected = Buffer.from(expectedHex, 'hex');
  const actual = (await scrypt(password, salt, expected.length)) as Buffer;
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function mapUser(row: any): SessionUser {
  return {
    id: String(row.id),
    email: row.email,
    firstName: row.first_name,
    lastName: row.last_name,
    role: row.role,
  };
}

async function provisionInitialAdmin(): Promise<void> {
  const email = process.env.BOOTSTRAP_ADMIN_EMAIL || process.env.PROVISION_ADMIN_EMAIL;
  const password = process.env.BOOTSTRAP_ADMIN_PASSWORD || process.env.PROVISION_ADMIN_PASSWORD;
  if (process.env.BOOTSTRAP_ACKNOWLEDGEMENT !== 'create-initial-admin' || !email || !password || password.length < 8) return;
  const pool = getPostgresPool();
  const existing = await pool.query('SELECT 1 FROM app_users LIMIT 1');
  if (existing.rows.length > 0) return;
  await pool.query(
    `INSERT INTO app_users (email, password_hash, first_name, last_name, role)
     VALUES (lower($1), $2, $3, $4, 'admin')
     ON CONFLICT (email) DO NOTHING`,
    [email, await passwordHash(password), process.env.BOOTSTRAP_ADMIN_NAME || 'Runtime', 'Administrator'],
  );
}

export async function authenticateCredentials(email: string, password: string): Promise<SessionUser | null> {
  if (!email || !password) return null;
  await provisionInitialAdmin();
  const pool = getPostgresPool();
  const result = await pool.query(
    'SELECT id, email, password_hash, first_name, last_name, role FROM app_users WHERE email = lower($1) AND is_active = true',
    [email],
  );
  const row = result.rows[0];
  if (!row || !(await passwordMatches(password, row.password_hash))) return null;
  return mapUser(row);
}

export async function createDatabaseSession(userId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('base64url');
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  await getPostgresPool().query(
    `INSERT INTO app_sessions (token_hash, user_id, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '8 hours')`,
    [tokenHash, userId],
  );
  return token;
}

export async function getDatabaseSession(token?: string | null): Promise<SessionUser | null> {
  if (!token) return null;
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const result = await getPostgresPool().query(
    `SELECT u.id, u.email, u.first_name, u.last_name, u.role
     FROM app_sessions s
     JOIN app_users u ON u.id = s.user_id
     WHERE s.token_hash = $1 AND s.expires_at > NOW() AND u.is_active = true`,
    [tokenHash],
  );
  return result.rows[0] ? mapUser(result.rows[0]) : null;
}

export async function revokeDatabaseSession(token?: string | null): Promise<void> {
  if (!token) return;
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  await getPostgresPool().query('DELETE FROM app_sessions WHERE token_hash = $1', [tokenHash]);
}
