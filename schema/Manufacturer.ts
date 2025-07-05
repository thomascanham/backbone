import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, text } from '@keystone-6/core/fields';

export const Manufacturer = list({
  access: allowAll,

  fields: {
    name: text({
      validation: { isRequired: true },
      label: 'Name',
    }),

    website: text({
      label: 'Website',
    }),

    support: text({
      label: 'Technical Support',
    }),

    products: relationship({
      ref: 'Product.manufacturer',
      many: true,
    }),
  },
})