BEGIN;
CREATE TABLE IF NOT EXISTS load_sources(id BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,provider TEXT NOT NULL,source_id TEXT NOT NULL,source_version TEXT NOT NULL,payload_hash CHAR(64) NOT NULL,source_freshness_at TIMESTAMPTZ NOT NULL,received_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),provider_receipt JSONB,UNIQUE(tenant_id,provider,source_id,source_version));
CREATE TABLE IF NOT EXISTS load_plans(tenant_id TEXT NOT NULL,id TEXT NOT NULL,site_id TEXT NOT NULL,owner_id TEXT NOT NULL,state TEXT NOT NULL DEFAULT 'draft',version INTEGER NOT NULL DEFAULT 1,input JSONB NOT NULL,evaluation JSONB NOT NULL,request_hash CHAR(64) NOT NULL,idempotency_key TEXT NOT NULL,created_by TEXT NOT NULL,approved_by TEXT,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),PRIMARY KEY(tenant_id,id),UNIQUE(tenant_id,idempotency_key));
CREATE TABLE IF NOT EXISTS plan_events(seq BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,plan_id TEXT NOT NULL,actor_id TEXT NOT NULL,event_type TEXT NOT NULL,reason TEXT,details JSONB NOT NULL DEFAULT '{}'::jsonb,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),FOREIGN KEY(tenant_id,plan_id) REFERENCES  load_plans(tenant_id,id) ON DELETE RESTRICT);
CREATE TABLE IF NOT EXISTS plan_outbox(id BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,plan_id TEXT NOT NULL,provider TEXT NOT NULL,operation TEXT NOT NULL,payload JSONB NOT NULL,idempotency_key TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'queued',attempts INTEGER NOT NULL DEFAULT 0,lease_token UUID,lease_expires_at TIMESTAMPTZ,next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),provider_receipt JSONB,last_error_code TEXT,FOREIGN KEY(tenant_id,plan_id) REFERENCES  load_plans(tenant_id,id),UNIQUE(tenant_id,provider,idempotency_key));
CREATE TABLE IF NOT EXISTS plan_metrics(id BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,plan_id TEXT NOT NULL,metric TEXT NOT NULL,value DOUBLE PRECISION NOT NULL,observed_at TIMESTAMPTZ NOT NULL,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),FOREIGN KEY(tenant_id,plan_id) REFERENCES  load_plans(tenant_id,id));
CREATE INDEX IF NOT EXISTS load_plan_state_idx ON load_plans(tenant_id,state,updated_at);
CREATE OR REPLACE FUNCTION plan_events_append_only() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'plan events are append-only';
END
$$;
DROP TRIGGER IF EXISTS plan_events_append_only_trigger ON plan_events;
CREATE TRIGGER plan_events_append_only_trigger BEFORE UPDATE OR DELETE ON plan_events FOR EACH ROW EXECUTE FUNCTION plan_events_append_only();
COMMIT;
