#!/usr/bin/env bash
set -euo pipefail
# Local demo credential bridge (Codex managed)
demo_credentials_project_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
if [ -f "$demo_credentials_project_dir/.env" ]; then
  while IFS= read -r demo_credentials_line || [ -n "$demo_credentials_line" ]; do
    case "$demo_credentials_line" in ''|'#'*) continue ;; esac
    demo_credentials_line="${demo_credentials_line#export }"
    demo_credentials_key="${demo_credentials_line%%=*}"
    demo_credentials_value="${demo_credentials_line#*=}"
    case "$demo_credentials_key" in
      NODE_ENV|ENABLE_DEMO_CREDENTIAL_AUTOFILL|DEMO_EMAIL|DEMO_PASSWORD|SEED_ADMIN_EMAIL|SEED_ADMIN_PASSWORD|SEED_USER_EMAIL|SEED_USER_PASSWORD|PROVISION_ADMIN_EMAIL|PROVISION_ADMIN_PASSWORD|BOOTSTRAP_ADMIN_EMAIL|BOOTSTRAP_ADMIN_PASSWORD|ADMIN_EMAIL|ADMIN_PASSWORD|DEFAULT_EMAIL|DEFAULT_PASSWORD|DEMO_TENANT|BOOTSTRAP_TENANT_SLUG|GOVERNANCE_TENANT_ID|TENANT_ID) ;;
      *) continue ;;
    esac
    [ -n "${!demo_credentials_key+x}" ] && continue
    demo_credentials_first="${demo_credentials_value:0:1}"
    demo_credentials_last="${demo_credentials_value: -1}"
    if { [ "$demo_credentials_first" = '"' ] && [ "$demo_credentials_last" = '"' ]; } || { [ "$demo_credentials_first" = "'" ] && [ "$demo_credentials_last" = "'" ]; }; then
      demo_credentials_value="${demo_credentials_value:1:${#demo_credentials_value}-2}"
    fi
    export "$demo_credentials_key=$demo_credentials_value"
  done < "$demo_credentials_project_dir/.env"
fi
demo_credentials_email=""
demo_credentials_password=""
demo_credentials_tenant="${DEMO_TENANT:-${BOOTSTRAP_TENANT_SLUG:-${GOVERNANCE_TENANT_ID:-${TENANT_ID:-}}}}"
demo_credentials_tenant="${DEMO_TENANT:-${BOOTSTRAP_TENANT_SLUG:-${GOVERNANCE_TENANT_ID:-${TENANT_ID:-}}}}"
demo_credentials_tenant="${DEMO_TENANT:-${BOOTSTRAP_TENANT_SLUG:-${GOVERNANCE_TENANT_ID:-${TENANT_ID:-}}}}"
demo_credentials_tenant="${DEMO_TENANT:-${BOOTSTRAP_TENANT_SLUG:-${GOVERNANCE_TENANT_ID:-${TENANT_ID:-}}}}"
demo_credentials_tenant="${DEMO_TENANT:-${BOOTSTRAP_TENANT_SLUG:-${GOVERNANCE_TENANT_ID:-${TENANT_ID:-}}}}"
if [ -n "${PROVISION_ADMIN_EMAIL:-}" ] && [ -n "${PROVISION_ADMIN_PASSWORD:-}" ]; then
  demo_credentials_email="$PROVISION_ADMIN_EMAIL"
  demo_credentials_password="$PROVISION_ADMIN_PASSWORD"
elif [ -n "${BOOTSTRAP_ADMIN_EMAIL:-}" ] && [ -n "${BOOTSTRAP_ADMIN_PASSWORD:-}" ]; then
  demo_credentials_email="$BOOTSTRAP_ADMIN_EMAIL"
  demo_credentials_password="$BOOTSTRAP_ADMIN_PASSWORD"
elif [ -n "${SEED_ADMIN_EMAIL:-}" ] && [ -n "${SEED_ADMIN_PASSWORD:-}" ]; then
  demo_credentials_email="$SEED_ADMIN_EMAIL"
  demo_credentials_password="$SEED_ADMIN_PASSWORD"
elif [ -n "${SEED_USER_EMAIL:-}" ] && [ -n "${SEED_USER_PASSWORD:-}" ]; then
  demo_credentials_email="$SEED_USER_EMAIL"
  demo_credentials_password="$SEED_USER_PASSWORD"
elif [ -n "${DEMO_EMAIL:-}" ] && [ -n "${DEMO_PASSWORD:-}" ]; then
  demo_credentials_email="$DEMO_EMAIL"
  demo_credentials_password="$DEMO_PASSWORD"
elif [ -n "${ADMIN_EMAIL:-}" ] && [ -n "${ADMIN_PASSWORD:-}" ]; then
  demo_credentials_email="$ADMIN_EMAIL"
  demo_credentials_password="$ADMIN_PASSWORD"
elif [ -n "${DEFAULT_EMAIL:-}" ] && [ -n "${DEFAULT_PASSWORD:-}" ]; then
  demo_credentials_email="$DEFAULT_EMAIL"
  demo_credentials_password="$DEFAULT_PASSWORD"
fi
if [ "${NODE_ENV:-development}" != production ] && [ "${ENABLE_DEMO_CREDENTIAL_AUTOFILL:-true}" = true ] && [ -n "$demo_credentials_email" ] && [ -n "$demo_credentials_password" ]; then
  export NEXT_PUBLIC_ENABLE_DEMO_CREDENTIAL_AUTOFILL=true
  export NEXT_PUBLIC_DEMO_EMAIL="$demo_credentials_email"
  export NEXT_PUBLIC_DEMO_PASSWORD="$demo_credentials_password"
  export VITE_ENABLE_DEMO_CREDENTIAL_AUTOFILL=true
  export VITE_DEMO_EMAIL="$demo_credentials_email"
  export VITE_DEMO_PASSWORD="$demo_credentials_password"
  export REACT_APP_ENABLE_DEMO_CREDENTIAL_AUTOFILL=true
  export REACT_APP_DEMO_EMAIL="$demo_credentials_email"
  export REACT_APP_DEMO_PASSWORD="$demo_credentials_password"
  if [ -n "$demo_credentials_tenant" ]; then
    export NEXT_PUBLIC_DEMO_TENANT="$demo_credentials_tenant"
    export VITE_DEMO_TENANT="$demo_credentials_tenant"
    export REACT_APP_DEMO_TENANT="$demo_credentials_tenant"
  else
    unset NEXT_PUBLIC_DEMO_TENANT VITE_DEMO_TENANT REACT_APP_DEMO_TENANT
  fi
else
  export NEXT_PUBLIC_ENABLE_DEMO_CREDENTIAL_AUTOFILL=false
  export VITE_ENABLE_DEMO_CREDENTIAL_AUTOFILL=false
  export REACT_APP_ENABLE_DEMO_CREDENTIAL_AUTOFILL=false
  unset NEXT_PUBLIC_DEMO_EMAIL NEXT_PUBLIC_DEMO_PASSWORD NEXT_PUBLIC_DEMO_TENANT
  unset VITE_DEMO_EMAIL VITE_DEMO_PASSWORD VITE_DEMO_TENANT
  unset REACT_APP_DEMO_EMAIL REACT_APP_DEMO_PASSWORD REACT_APP_DEMO_TENANT
fi
unset demo_credentials_email demo_credentials_password demo_credentials_tenant demo_credentials_project_dir demo_credentials_line demo_credentials_key demo_credentials_value demo_credentials_first demo_credentials_last

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT_DIR/.env"

read_env(){ awk -F= -v key="$1" '$0!~/^[[:space:]]*#/&&$1==key{v=substr($0,index($0,"=")+1);gsub(/^[[:space:]]+|[[:space:]]+$/,"",v);gsub(/^["\047]|["\047]$/,"",v);print v;exit}' "$ENV_FILE"; }
load_key(){ local key="$1" value; [ -n "${!key-}" ] && return; [ -f "$ENV_FILE" ] || return; value="$(read_env "$key")"; [ -z "$value" ] || export "$key=$value"; }
for key in DATABASE_URL GOVERNANCE_GATEWAY_SECRET SECRET_KEY PGSSLROOTCERT ALLOW_SCHEMA_MIGRATION PORT BACKEND_PORT FRONTEND_PORT BOOTSTRAP_ADMIN_EMAIL BOOTSTRAP_ADMIN_PASSWORD BOOTSTRAP_ADMIN_NAME BOOTSTRAP_ACKNOWLEDGEMENT ADMIN_EMAIL ADMIN_PASSWORD OPENROUTER_API_KEY OPENROUTER_MODEL OPENROUTER_BASE_URL; do load_key "$key"; done

GOVERNANCE_GATEWAY_SECRET="${GOVERNANCE_GATEWAY_SECRET:-${SECRET_KEY:-}}"
BACKEND_PORT="${BACKEND_PORT:-${PORT:-}}"
FRONTEND_PORT="${FRONTEND_PORT:-}"
export GOVERNANCE_GATEWAY_SECRET BACKEND_PORT FRONTEND_PORT

fail(){ printf 'error: %s\n' "$*" >&2; exit 1; }
check(){
  local admin_email="${BOOTSTRAP_ADMIN_EMAIL:-${ADMIN_EMAIL:-}}"
  local admin_password="${BOOTSTRAP_ADMIN_PASSWORD:-${ADMIN_PASSWORD:-}}"
  [ -n "${DATABASE_URL:-}" ] || fail "DATABASE_URL required"
  [ "${#GOVERNANCE_GATEWAY_SECRET}" -ge 32 ] || fail "GOVERNANCE_GATEWAY_SECRET must be 32+ characters"
  [ -n "${OPENROUTER_API_KEY:-}" ] || fail "OPENROUTER_API_KEY required"
  [ -n "${OPENROUTER_MODEL:-}" ] || fail "OPENROUTER_MODEL required"
  [ "${OPENROUTER_BASE_URL:-}" = "https://openrouter.ai/api/v1" ] || fail "OPENROUTER_BASE_URL must be https://openrouter.ai/api/v1"
  [ "${BOOTSTRAP_ACKNOWLEDGEMENT:-}" = "create-initial-admin" ] || fail "BOOTSTRAP_ACKNOWLEDGEMENT=create-initial-admin is required"
  [ -n "$admin_email" ] && [ "${#admin_password}" -ge 8 ] || fail "bootstrap admin credentials are required"
  case "${ALLOW_SCHEMA_MIGRATION:-}" in true|1) ;; *) fail "ALLOW_SCHEMA_MIGRATION=true is required";; esac
  for port in "$BACKEND_PORT" "$FRONTEND_PORT"; do
    case "$port" in *[!0-9]*|'') fail "runtime ports must be numeric";; esac
    [ "$port" -ge 1 ] && [ "$port" -le 65535 ] || fail "runtime port out of range"
  done
  [ "$BACKEND_PORT" != "$FRONTEND_PORT" ] || fail "BACKEND_PORT and FRONTEND_PORT must be distinct"
  command -v node >/dev/null || fail "node required"
}
migrate(){ local migration; check; command -v psql >/dev/null || fail "psql required"; for migration in "$ROOT_DIR"/migrations/*.sql; do [ -f "$migration" ] || continue; psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$migration"; done; }
start(){
  local frontend_run_dir="${RUNTIME_PROJECT_SOURCE:-$ROOT_DIR}/frontend"
  check
  [ -d "$frontend_run_dir/node_modules" ] || fail "dependencies missing; install explicitly"
  for port in "$BACKEND_PORT" "$FRONTEND_PORT"; do if lsof -tiTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then fail "runtime port $port is occupied"; fi; done
  migrate
  (cd "$ROOT_DIR/frontend" && node scripts/create-admin.mjs)
  (cd "$frontend_run_dir" && npm run dev -- -H 127.0.0.1 -p "$BACKEND_PORT") & api_pid=$!
  (cd "$frontend_run_dir" && RUNTIME_TARGET_PORT="$BACKEND_PORT" RUNTIME_PROXY_PORT="$FRONTEND_PORT" node scripts/runtime-proxy.mjs) & proxy_pid=$!
  wait "$api_pid" "$proxy_pid"
}

case "${1:-start}" in check) check;; migrate) migrate;; start) start;; *) fail "usage: $0 {check|migrate|start}";; esac
