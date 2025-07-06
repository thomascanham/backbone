import { group, list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, checkbox, relationship } from "@keystone-6/core/fields";
import { permissions } from "../access";

//query
//create
//update
//delete 

export const Role = list({
  access: {
    item: {
      query: permissions.canManageRoles,
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles,
    },
    operation: {
      query: permissions.canManageRoles,
      create: permissions.canManageRoles,
      update: permissions.canManageRoles,
      delete: permissions.canManageRoles,
    },
  },

  fields: {
    name: text({
      validation: { isRequired: true },
      label: 'Role Name',
    }),

    ...group({
      label: 'Product Permissions',
      description: 'Define the permissions for this role regarding products. Users with this role will have these permissions.',

      fields: {
        canViewProducts: checkbox({
          label: 'Can view Products',
          ui: {
            description: 'Allow users with this role to view Products. If unchecked, they will not see any Products.',
          },
          defaultValue: false,
        }),
        canCreateProducts: checkbox({
          label: 'Can create Products',
          ui: {
            description: 'Allow users with this role to create new Products. If unchecked, they will not be able to add any Products.',
          },
          defaultValue: false,
        }),
        canUpdateProducts: checkbox({
          label: 'Can update Products',
          defaultValue: false,
        }),
        canDeleteProducts: checkbox({
          label: 'Can delete Products',
          defaultValue: false,
        }),
      }
    }),

    ...group({
      label: 'Role Permissions',
      description: 'Define the permissions for this role. Users with this role will have these permissions.',
      fields: {
        canManageRoles: checkbox({
          label: 'Can Manage Roles',
          defaultValue: false,
          ui: {
            description: 'Allow users with this role to manage other roles. If unchecked, they will not be able to create, update or delete roles.',
          },
        }),

        canManageUsers: checkbox({
          label: 'Can Manage Users',
          defaultValue: false,
        }),

        canManageManufacturers: checkbox({
          label: 'Can Manage Manufacturers',
          defaultValue: false,
        }),
      }
    }),

    users: relationship({
      ref: 'User.role',
      many: true,
      label: 'Users'
    })
  }
})
