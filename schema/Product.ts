import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, select, text } from "@keystone-6/core/fields";

export const Product = list({
  access: allowAll,

  fields: {
    discipline: select({
      type: 'enum',
      options: [
        { label: 'CCTV', value: 'CCTV' },
        { label: 'Intruder', value: 'Intruder' },
        { label: 'Fire', value: 'Fire' },
        { label: 'Access Control', value: 'AccessControl' },
        { label: 'Other', value: 'Other' },
      ],
    }),

    manufacturer: relationship({
      ref: 'Manufacturer.products',
      many: false,
      isOrderable: true,
    }),

    name: text({
      validation: { isRequired: true },
      label: 'Name',
    }),

    code: text({
      validation: { isRequired: true },
      label: 'Internal Brodman Code',
    }),

    info: relationship({
      ref: 'Block',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'content'],
        inlineEdit: { fields: ['title', 'content'] },
        inlineCreate: { fields: ['title', 'content'] },
      }
    })
  }, 
})