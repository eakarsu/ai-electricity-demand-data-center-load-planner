import { randomBytes, scryptSync } from 'node:crypto';
import pg from 'pg';

const databaseUrl = process.env.DATABASE_URL;
const email = String(process.env.BOOTSTRAP_ADMIN_EMAIL || process.env.ADMIN_EMAIL || '').trim().toLowerCase();
const password = String(process.env.BOOTSTRAP_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || '');
const fullName = String(process.env.BOOTSTRAP_ADMIN_NAME || 'Runtime Administrator').trim().split(/\s+/);
if (!databaseUrl) throw new Error('DATABASE_URL is required');
if (process.env.BOOTSTRAP_ACKNOWLEDGEMENT !== 'create-initial-admin') throw new Error('BOOTSTRAP_ACKNOWLEDGEMENT=create-initial-admin is required');
if (!email || password.length < 8) throw new Error('Bootstrap admin credentials are required');

const salt = randomBytes(16).toString('hex');
const passwordHash = `scrypt$${salt}$${scryptSync(password, salt, 64).toString('hex')}`;
const client = new pg.Client({ connectionString: databaseUrl });
await client.connect();
try {
  await client.query(
    `INSERT INTO app_users(email, password_hash, first_name, last_name, role, is_active)
     VALUES(lower($1), $2, $3, $4, 'admin', true)
     ON CONFLICT(email) DO UPDATE SET password_hash=EXCLUDED.password_hash, first_name=EXCLUDED.first_name,
       last_name=EXCLUDED.last_name, role='admin', is_active=true, updated_at=NOW()`,
    [email, passwordHash, fullName[0] || 'Runtime', fullName.slice(1).join(' ') || 'Administrator'],
  );
  console.log(`provisioned ${email}`);
} finally {
  await client.end();
}
