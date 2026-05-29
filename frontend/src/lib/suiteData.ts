export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Utility tariffs",
    "ownership": "Utility tariffs contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Load Planner.",
    "coverage": [
      "Site Load Profile",
      "Grid Capacity Screening",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Interconnection queues",
    "ownership": "Interconnection queues contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Load Planner.",
    "coverage": [
      "Grid Capacity Screening",
      "Interconnection Tracker",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Load forecasts",
    "ownership": "Load forecasts contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Load Planner.",
    "coverage": [
      "Interconnection Tracker",
      "Rate Exposure Model",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Site constraints",
    "ownership": "Site constraints contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Load Planner.",
    "coverage": [
      "Rate Exposure Model",
      "Renewable PPA Planning",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '343', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Site Load Profile operating view",
  "Grid Capacity Screening operating view",
  "Interconnection Tracker operating view",
  "Rate Exposure Model operating view",
  "Renewable PPA Planning operating view",
  "Cooling Energy Scenario operating view",
  "Resilience Plan operating view",
  "Permitting Risk operating view"
];
export const workflowHighlights = [
  "Site Load Profile workflow with records, AI assist, approvals, audit, and reporting",
  "Grid Capacity Screening workflow with records, AI assist, approvals, audit, and reporting",
  "Interconnection Tracker workflow with records, AI assist, approvals, audit, and reporting",
  "Rate Exposure Model workflow with records, AI assist, approvals, audit, and reporting",
  "Renewable PPA Planning workflow with records, AI assist, approvals, audit, and reporting",
  "Cooling Energy Scenario workflow with records, AI assist, approvals, audit, and reporting"
];
