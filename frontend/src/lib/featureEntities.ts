export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "site-load-profile",
    "Site Load Profile Records",
    "Site Load Profile priority queue",
    "Open",
    "Site Load Profile exception list",
    "Planning Lead",
    "$0"
  ],
  [
    "grid-capacity-screening",
    "Grid Capacity Screening Records",
    "Grid Capacity Screening priority queue",
    "Review",
    "Grid Capacity Screening exception list",
    "Grid Lead",
    "$0"
  ],
  [
    "interconnection-tracker",
    "Interconnection Tracker Records",
    "Interconnection Tracker priority queue",
    "Action needed",
    "Interconnection Tracker exception list",
    "Grid Lead",
    "$0"
  ],
  [
    "rate-exposure-model",
    "Rate Exposure Model Records",
    "Rate Exposure Model priority queue",
    "Open",
    "Rate Exposure Model exception list",
    "Finance Lead",
    "$0"
  ],
  [
    "renewable-ppa-planning",
    "Renewable PPA Planning Records",
    "Renewable PPA Planning priority queue",
    "Review",
    "Renewable PPA Planning exception list",
    "Energy Supply Lead",
    "$0"
  ],
  [
    "cooling-energy-scenario",
    "Cooling Energy Scenario Records",
    "Cooling Energy Scenario priority queue",
    "Action needed",
    "Cooling Energy Scenario exception list",
    "Engineering Lead",
    "$0"
  ],
  [
    "resilience-plan",
    "Resilience Plan Records",
    "Resilience Plan priority queue",
    "Open",
    "Resilience Plan exception list",
    "Risk Lead",
    "$0"
  ],
  [
    "permitting-risk",
    "Permitting Risk Records",
    "Permitting Risk priority queue",
    "Review",
    "Permitting Risk exception list",
    "Permitting Lead",
    "$0"
  ],
  [
    "cost-forecast",
    "Cost Forecast Records",
    "Cost Forecast priority queue",
    "Action needed",
    "Cost Forecast exception list",
    "Finance Lead",
    "$0"
  ],
  [
    "executive-site-scorecard",
    "Executive Site Scorecard Records",
    "Executive Site Scorecard priority queue",
    "Open",
    "Executive Site Scorecard exception list",
    "Reporting Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
