import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { select, text } from "@keystone-6/core/fields";

export const Fire = list({
  access: allowAll,

  ui: {
    labelField: 'Fire Alarm',
    plural: 'Fire Alarms',
    description: 'Fire Alarm Systems',
    singular: 'Fire Alarm',
    listView: {
      initialColumns: ['name', 'manufacturer', 'discipline'],
    },
  },

  fields: {
    manufacturer: select({
      type: 'enum',
      options: [
        { label: 'Hikvision', value: 'Hikvision' },
        { label: 'Dahua', value: 'Dahua' },
        { label: 'Unbranded', value: 'Unbranded' },
        { label: 'Pyronix', value: 'Pyronix' },
        { label: 'Texecom', value: 'Texecom' },
        { label: 'Honeywell', value: 'Honeywell' },
        { label: 'Other', value: 'Other' },
      ],
    }),

    name: text({
      validation: { isRequired: true },
      label: 'Name',
    }),

    code: text({
      validation: { isRequired: true },
      label: 'Internal Brodman Code',
    }),

    type: select({
      type: 'enum',
      options: [
        { label: 'Conventional', value: 'Conventional' },
        { label: 'Addressable', value: 'Addressable' },
        { label: 'Hybrid', value: 'Hybrid' },
      ],
    })
  }
});