import { list, group } from "@keystone-6/core";
import { text, password, relationship, timestamp, virtual, checkbox } from "@keystone-6/core/fields";
import { graphql } from "@keystone-6/core";
import { permissions } from "../access";

export const User = list({
  access: {
    item: {
      create: permissions.canManageUsers,
      query: permissions.canManageUsers,
      update: permissions.canManageUsers,
      delete: permissions.canManageUsers,
    },
    operation: {
      query: permissions.canManageUsers,
      create: permissions.canManageUsers,
      update: permissions.canManageUsers,
      delete: permissions.canManageUsers,
    }
  },

    // this is the fields for our User list
    fields: {
      ...group({
        label: 'App Settings',
        description: 'Define the settings for this user. Users with these settings will have these permissions.',
        fields: {
          isActive: checkbox({
            defaultValue: true,
            label: 'Active User',
            ui: {
              description: 'Is this user active? If unchecked, they will not be able to log in.',
            } 
          }),

          role: relationship({
            ref: 'Role.users',
            label: 'User Role',
            ui: {
              description: 'Select the role for this user. This will determine their permissions.',
            },
          }),
        },
      }),

      ...group({
        label: 'Personal Information',
        description: 'Define the personal information for this user. This will be used to identify the user in the system.',
        fields: {
          firstName: text({ validation: { isRequired: true } }),
          surname: text({ validation: { isRequired: true } }),

          name: virtual({
            field: graphql.field({
              type: graphql.String,
              resolve(item) {
                return `${item.firstName} ${item.surname}`;
              },
            }),
            ui: {
              listView: {
                fieldMode: 'read',
              },
            },
          }),
        },
      }),

      ...group({
        label: 'Login Information',
        description: 'Define the login information for this user. This will be used to authenticate the user in the system.',
        fields: {
          email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
          }),

          password: password({ validation: { isRequired: true } }),
        },
      }),

      posts: relationship({ ref: 'Post.author', many: true }),

      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: 'now' },
      }),
  },
    
  ui: {
    listView: {
      initialColumns: ['name', 'isActive', 'role', 'email'],
      }
    }
  })