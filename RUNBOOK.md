# Data-center load planning operations

Primary users are utility capacity planners and facility engineers. `/api/governed-load-plans` is authoritative for one acceptance journey: ingest fresh metering/workload/weather/market snapshots; validate exactly 24 hourly points against reserve-adjusted capacity; obtain independent approval; submit a versioned capacity plan; retain receipts and metrics. It never dispatches grid or facility equipment autonomously.

Acceptance requires a complete 24-hour horizon, fresh observations, bounded nonnegative MW values, an approved forecast-method version/source snapshot, peak load within effective capacity, an accountable owner, independent approval, and a grid-provider receipt. Configure `.env.example`, install dependencies explicitly, run `./start.sh check`, back up PostgreSQL, then run `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Startup never installs, seeds, resets, creates schema, edits secrets, or kills ports. Rollback retains additive tables and reconciles provider receipts first.

Adapters require stable source IDs/versions, freshness, hashes, idempotency, typed receipts, retries, and dead letters. Metrics expose peak/effective capacity and operational outcomes. Backup/restore, retention, alerting, stale-source and dead-letter response must be exercised before launch.

Utility/grid authorization, telemetry calibration, forecast validation, provider credentials, infrastructure deployment, field acceptance, and safety/regulatory/security certification are external gates and are not asserted here. Rotate historical secrets after Git-history review.
