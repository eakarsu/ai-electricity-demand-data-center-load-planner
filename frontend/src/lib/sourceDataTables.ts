export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-electricity-demand-data-center-load-planner-site-load-profile",
    "sourceProject": "Data Center Load Planner",
    "name": "site_load_profile",
    "displayName": "Site Load Profile",
    "framework": "AppSchema",
    "sourceFile": "generated/site-load-profile.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Planning",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-grid-capacity-screening",
    "sourceProject": "Data Center Load Planner",
    "name": "grid_capacity_screening",
    "displayName": "Grid Capacity Screening",
    "framework": "AppSchema",
    "sourceFile": "generated/grid-capacity-screening.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Grid",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-interconnection-tracker",
    "sourceProject": "Data Center Load Planner",
    "name": "interconnection_tracker",
    "displayName": "Interconnection Tracker",
    "framework": "AppSchema",
    "sourceFile": "generated/interconnection-tracker.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Grid",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-rate-exposure-model",
    "sourceProject": "Data Center Load Planner",
    "name": "rate_exposure_model",
    "displayName": "Rate Exposure Model",
    "framework": "AppSchema",
    "sourceFile": "generated/rate-exposure-model.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Finance",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-renewable-ppa-planning",
    "sourceProject": "Data Center Load Planner",
    "name": "renewable_ppa_planning",
    "displayName": "Renewable PPA Planning",
    "framework": "AppSchema",
    "sourceFile": "generated/renewable-ppa-planning.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Energy Supply",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-cooling-energy-scenario",
    "sourceProject": "Data Center Load Planner",
    "name": "cooling_energy_scenario",
    "displayName": "Cooling Energy Scenario",
    "framework": "AppSchema",
    "sourceFile": "generated/cooling-energy-scenario.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Engineering",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-resilience-plan",
    "sourceProject": "Data Center Load Planner",
    "name": "resilience_plan",
    "displayName": "Resilience Plan",
    "framework": "AppSchema",
    "sourceFile": "generated/resilience-plan.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Risk",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-electricity-demand-data-center-load-planner-permitting-risk",
    "sourceProject": "Data Center Load Planner",
    "name": "permitting_risk",
    "displayName": "Permitting Risk",
    "framework": "AppSchema",
    "sourceFile": "generated/permitting-risk.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Permitting",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  }
];
