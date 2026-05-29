# AI Electricity Demand Data Center Load Planner

Runnable Next.js full-stack app for Data Center Load Planner.

## Workflows

- `/site-load-profile` - Site Load Profile (Planning): AI cluster load, ramps, redundancy, cooling demand, and operating assumptions.
- `/grid-capacity-screening` - Grid Capacity Screening (Grid): Substation capacity, transmission constraints, queue position, and curtailment risk.
- `/interconnection-tracker` - Interconnection Tracker (Grid): Applications, studies, deposits, milestones, blockers, and utility owner.
- `/rate-exposure-model` - Rate Exposure Model (Finance): Tariffs, demand charges, time-of-use exposure, penalties, and savings options.
- `/renewable-ppa-planning` - Renewable PPA Planning (Energy Supply): PPA offers, term sheets, generation fit, basis risk, and carbon impact.
- `/cooling-energy-scenario` - Cooling Energy Scenario (Engineering): Cooling design, weather, water constraints, efficiency, and peak risk.
- `/resilience-plan` - Resilience Plan (Risk): Backup generation, storage, fuel plans, outage risk, and recovery objectives.
- `/permitting-risk` - Permitting Risk (Permitting): Local permits, environmental constraints, public opposition, and approval path.
- `/cost-forecast` - Cost Forecast (Finance): Power cost forecast, capex, operating risk, incentives, and executive options.
- `/executive-site-scorecard` - Executive Site Scorecard (Reporting): Site ranking, grid readiness, cost, risk, carbon, and recommendation.

## Local Run

```bash
cd ai-electricity-demand-data-center-load-planner/frontend
npm run dev
```

Demo login: `admin@datacenter-load.local` / `admin123`
