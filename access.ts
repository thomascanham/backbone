export const isSignedIn = ({ session }) => {
  return !!session;
}

const permissionFromRole = (field) => {
  return ({ session }) => {
    return !!session?.data?.role?.[field];
  };
};

export const permissions = {
  canViewProducts: permissionFromRole('canViewProducts'),
  canCreateProducts: permissionFromRole('canCreateProducts'),
  canUpdateProducts: permissionFromRole('canUpdateProducts'),
  canDeleteProducts: permissionFromRole('canDeleteProducts'),

  canManageUsers: permissionFromRole('canManageUsers'),

  canManageRoles: permissionFromRole('canManageRoles'),
}