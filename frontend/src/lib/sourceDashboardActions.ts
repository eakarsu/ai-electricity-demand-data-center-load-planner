export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "site-load-profile",
    "label": "Site Load Profile",
    "description": "Site Load Profile action group for Data Center Load Planner.",
    "href": "/site-load-profile",
    "sourceProjects": [
      "Utility tariffs",
      "Interconnection queues"
    ],
    "examples": [
      "Open Site Load Profile",
      "Review Planning",
      "Run Site Load Profile AI check"
    ],
    "count": 3
  },
  {
    "id": "grid-capacity-screening",
    "label": "Grid Capacity Screening",
    "description": "Grid Capacity Screening action group for Data Center Load Planner.",
    "href": "/grid-capacity-screening",
    "sourceProjects": [
      "Interconnection queues",
      "Load forecasts"
    ],
    "examples": [
      "Open Grid Capacity Screening",
      "Review Grid",
      "Run Grid Capacity Screening AI check"
    ],
    "count": 3
  },
  {
    "id": "interconnection-tracker",
    "label": "Interconnection Tracker",
    "description": "Interconnection Tracker action group for Data Center Load Planner.",
    "href": "/interconnection-tracker",
    "sourceProjects": [
      "Load forecasts",
      "Site constraints"
    ],
    "examples": [
      "Open Interconnection Tracker",
      "Review Grid",
      "Run Interconnection Tracker AI check"
    ],
    "count": 3
  },
  {
    "id": "rate-exposure-model",
    "label": "Rate Exposure Model",
    "description": "Rate Exposure Model action group for Data Center Load Planner.",
    "href": "/rate-exposure-model",
    "sourceProjects": [
      "Site constraints"
    ],
    "examples": [
      "Open Rate Exposure Model",
      "Review Finance",
      "Run Rate Exposure Model AI check"
    ],
    "count": 3
  },
  {
    "id": "renewable-ppa-planning",
    "label": "Renewable PPA Planning",
    "description": "Renewable PPA Planning action group for Data Center Load Planner.",
    "href": "/renewable-ppa-planning",
    "sourceProjects": [
      "Utility tariffs",
      "Interconnection queues"
    ],
    "examples": [
      "Open Renewable PPA Planning",
      "Review Energy Supply",
      "Run Renewable PPA Planning AI check"
    ],
    "count": 3
  },
  {
    "id": "cooling-energy-scenario",
    "label": "Cooling Energy Scenario",
    "description": "Cooling Energy Scenario action group for Data Center Load Planner.",
    "href": "/cooling-energy-scenario",
    "sourceProjects": [
      "Interconnection queues",
      "Load forecasts"
    ],
    "examples": [
      "Open Cooling Energy Scenario",
      "Review Engineering",
      "Run Cooling Energy Scenario AI check"
    ],
    "count": 3
  },
  {
    "id": "resilience-plan",
    "label": "Resilience Plan",
    "description": "Resilience Plan action group for Data Center Load Planner.",
    "href": "/resilience-plan",
    "sourceProjects": [
      "Load forecasts",
      "Site constraints"
    ],
    "examples": [
      "Open Resilience Plan",
      "Review Risk",
      "Run Resilience Plan AI check"
    ],
    "count": 3
  },
  {
    "id": "permitting-risk",
    "label": "Permitting Risk",
    "description": "Permitting Risk action group for Data Center Load Planner.",
    "href": "/permitting-risk",
    "sourceProjects": [
      "Site constraints"
    ],
    "examples": [
      "Open Permitting Risk",
      "Review Permitting",
      "Run Permitting Risk AI check"
    ],
    "count": 3
  },
  {
    "id": "cost-forecast",
    "label": "Cost Forecast",
    "description": "Cost Forecast action group for Data Center Load Planner.",
    "href": "/cost-forecast",
    "sourceProjects": [
      "Utility tariffs",
      "Interconnection queues"
    ],
    "examples": [
      "Open Cost Forecast",
      "Review Finance",
      "Run Cost Forecast AI check"
    ],
    "count": 3
  },
  {
    "id": "executive-site-scorecard",
    "label": "Executive Site Scorecard",
    "description": "Executive Site Scorecard action group for Data Center Load Planner.",
    "href": "/executive-site-scorecard",
    "sourceProjects": [
      "Interconnection queues",
      "Load forecasts"
    ],
    "examples": [
      "Open Executive Site Scorecard",
      "Review Reporting",
      "Run Executive Site Scorecard AI check"
    ],
    "count": 3
  }
];
