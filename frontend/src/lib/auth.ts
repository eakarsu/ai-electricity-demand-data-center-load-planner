export const AUTH_COOKIE = 'ai_electricity_demand_data_center_load_planner_session';

export type SessionUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'manager' | 'analyst';
};

export const rolePermissions: Record<SessionUser['role'], { canApprove: boolean; canManageDocuments: boolean; canManageSettings: boolean }> = {
  admin: { canApprove: true, canManageDocuments: true, canManageSettings: true },
  manager: { canApprove: true, canManageDocuments: true, canManageSettings: false },
  analyst: { canApprove: false, canManageDocuments: false, canManageSettings: false },
};

export function canManageDocuments(user: SessionUser | null) {
  return Boolean(user && rolePermissions[user.role].canManageDocuments);
}

export function canApprove(user: SessionUser | null) {
  return Boolean(user && rolePermissions[user.role].canApprove);
}
