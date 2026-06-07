import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Utility tariffs","Interconnection queues","Load forecasts","Site constraints"];

const features = [
  {
    slug: "site-load-profile",
    title: "Site Load Profile",
    href: "/site-load-profile",
    category: "Planning",
    icon: Bot,
    summary: "AI cluster load, ramps, redundancy, cooling demand, and operating assumptions.",
    bullets: ["Site Load Profile queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Site Load Profile", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "grid-capacity-screening",
    title: "Grid Capacity Screening",
    href: "/grid-capacity-screening",
    category: "Grid",
    icon: Workflow,
    summary: "Substation capacity, transmission constraints, queue position, and curtailment risk.",
    bullets: ["Grid Capacity Screening queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Grid Capacity Screening", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "interconnection-tracker",
    title: "Interconnection Tracker",
    href: "/interconnection-tracker",
    category: "Grid",
    icon: Users,
    summary: "Applications, studies, deposits, milestones, blockers, and utility owner.",
    bullets: ["Interconnection Tracker queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Interconnection Tracker", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "rate-exposure-model",
    title: "Rate Exposure Model",
    href: "/rate-exposure-model",
    category: "Finance",
    icon: CalendarCheck,
    summary: "Tariffs, demand charges, time-of-use exposure, penalties, and savings options.",
    bullets: ["Rate Exposure Model queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Rate Exposure Model", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "renewable-ppa-planning",
    title: "Renewable PPA Planning",
    href: "/renewable-ppa-planning",
    category: "Energy Supply",
    icon: ClipboardList,
    summary: "PPA offers, term sheets, generation fit, basis risk, and carbon impact.",
    bullets: ["Renewable PPA Planning queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Renewable PPA Planning", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "cooling-energy-scenario",
    title: "Cooling Energy Scenario",
    href: "/cooling-energy-scenario",
    category: "Engineering",
    icon: FileText,
    summary: "Cooling design, weather, water constraints, efficiency, and peak risk.",
    bullets: ["Cooling Energy Scenario queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Cooling Energy Scenario", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "resilience-plan",
    title: "Resilience Plan",
    href: "/resilience-plan",
    category: "Risk",
    icon: BarChart3,
    summary: "Backup generation, storage, fuel plans, outage risk, and recovery objectives.",
    bullets: ["Resilience Plan queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Resilience Plan", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "permitting-risk",
    title: "Permitting Risk",
    href: "/permitting-risk",
    category: "Permitting",
    icon: PackageCheck,
    summary: "Local permits, environmental constraints, public opposition, and approval path.",
    bullets: ["Permitting Risk queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Permitting Risk", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "cost-forecast",
    title: "Cost Forecast",
    href: "/cost-forecast",
    category: "Finance",
    icon: ShieldCheck,
    summary: "Power cost forecast, capex, operating risk, incentives, and executive options.",
    bullets: ["Cost Forecast queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Cost Forecast", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "executive-site-scorecard",
    title: "Executive Site Scorecard",
    href: "/executive-site-scorecard",
    category: "Reporting",
    icon: Activity,
    summary: "Site ranking, grid readiness, cost, risk, carbon, and recommendation.",
    bullets: ["Executive Site Scorecard queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Executive Site Scorecard", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Data Center Load Planner documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Data Center Load Planner alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Data Center Load Planner connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Data Center Load Planner users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Data Center Load Planner assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Data Center Load Planner AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const supplementalFeatures = [
  {
    slug: "load-forecast-scenarios",
    title: "Load Forecast Scenarios",
    href: "/load-forecast-scenarios",
    category: "Planning",
    icon: ShieldCheck,
    summary: "Load Forecast Scenarios workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Load Forecast Scenarios queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Load Forecast Scenarios", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "interconnect-queue",
    title: "Interconnect Queue",
    href: "/interconnect-queue",
    category: "Utilities",
    icon: Workflow,
    summary: "Interconnect Queue workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Interconnect Queue queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Interconnect Queue", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "capacity-reservation",
    title: "Capacity Reservation",
    href: "/capacity-reservation",
    category: "Finance",
    icon: BarChart3,
    summary: "Capacity Reservation workspace for financial exposure, cost movement, approval thresholds, variance review, and executive reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Capacity Reservation queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Capacity Reservation", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "ppa-energy-procurement",
    title: "PPA & Energy Procurement",
    href: "/ppa-energy-procurement",
    category: "Energy",
    icon: ClipboardList,
    summary: "PPA & Energy Procurement workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["PPA & Energy Procurement queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "PPA & Energy Procurement", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "demand-response-plan",
    title: "Demand Response Plan",
    href: "/demand-response-plan",
    category: "Operations",
    icon: CalendarCheck,
    summary: "Demand Response Plan workspace for intake queues, assignments, SLA tracking, exception handling, stakeholder updates, and closeout evidence in Electricity Demand Data Center Load Planner.",
    bullets: ["Demand Response Plan queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Demand Response Plan", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "grid-constraint-map",
    title: "Grid Constraint Map",
    href: "/grid-constraint-map",
    category: "Planning",
    icon: PackageCheck,
    summary: "Grid Constraint Map workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Grid Constraint Map queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Grid Constraint Map", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "capex-scenario-board",
    title: "Capex Scenario Board",
    href: "/capex-scenario-board",
    category: "Finance",
    icon: Activity,
    summary: "Capex Scenario Board workspace for financial exposure, cost movement, approval thresholds, variance review, and executive reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Capex Scenario Board queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Capex Scenario Board", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const productionPlatformFeatures = [
  {
    slug: "enterprise-identity-access",
    title: "Enterprise Identity & Access",
    href: "/enterprise-identity-access",
    category: "Production Platform",
    icon: ShieldCheck,
    summary: "Enterprise Identity & Access workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Enterprise Identity & Access", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "connector-operations-center",
    title: "Connector Operations Center",
    href: "/connector-operations-center",
    category: "Production Platform",
    icon: Workflow,
    summary: "Connector Operations Center workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Connector Operations Center", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "audit-export-center",
    title: "Audit Export Center",
    href: "/audit-export-center",
    category: "Production Platform",
    icon: BarChart3,
    summary: "Audit Export Center workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Audit Export Center", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "notification-delivery-ledger",
    title: "Notification Delivery Ledger",
    href: "/notification-delivery-ledger",
    category: "Production Platform",
    icon: ClipboardList,
    summary: "Notification Delivery Ledger workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Notification Delivery Ledger", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "observability-runbooks",
    title: "Observability & Runbooks",
    href: "/observability-runbooks",
    category: "Production Platform",
    icon: CalendarCheck,
    summary: "Observability & Runbooks workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Observability & Runbooks", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-test-harness",
    title: "Release Test Harness",
    href: "/release-test-harness",
    category: "Production Platform",
    icon: PackageCheck,
    summary: "Release Test Harness workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Release Test Harness", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "production-gap-workspace",
    title: "Production Gap Workspace",
    href: "/production-gap-workspace",
    category: "Production Platform",
    icon: Activity,
    summary: "Production Gap Workspace workspace for domain workflows, approvals, evidence, and reporting in Electricity Demand Data Center Load Planner.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Production Gap Workspace", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const allFeatures = [...features, ...supplementalFeatures, ...productionPlatformFeatures, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Production Readiness', href: '/production-readiness', icon: ShieldCheck },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Production Platform Controls', features: ['Enterprise Identity & Access', 'Connector Operations Center', 'Audit Export Center', 'Notification Delivery Ledger', 'Observability & Runbooks', 'Release Test Harness', 'Production Gap Workspace'] },
  { name: "Energy Load Planning Controls", features: ["Load Forecast Scenarios","Interconnect Queue","Capacity Reservation","PPA & Energy Procurement","Demand Response Plan","Grid Constraint Map","Capex Scenario Board"] },
  {
    "name": "Planning",
    "features": [
      "Site Load Profile"
    ]
  },
  {
    "name": "Grid",
    "features": [
      "Grid Capacity Screening",
      "Interconnection Tracker"
    ]
  },
  {
    "name": "Finance",
    "features": [
      "Rate Exposure Model",
      "Cost Forecast"
    ]
  },
  {
    "name": "Energy Supply",
    "features": [
      "Renewable PPA Planning"
    ]
  },
  {
    "name": "Engineering",
    "features": [
      "Cooling Energy Scenario"
    ]
  },
  {
    "name": "Risk",
    "features": [
      "Resilience Plan"
    ]
  },
  {
    "name": "Permitting",
    "features": [
      "Permitting Risk"
    ]
  },
  {
    "name": "Reporting",
    "features": [
      "Executive Site Scorecard"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Data Center Load Planner workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries([...features, ...supplementalFeatures, ...productionPlatformFeatures].map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
