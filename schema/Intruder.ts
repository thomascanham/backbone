import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { select, text } from '@keystone-6/core/fields';

export const Intruder = list({
  access: allowAll,

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
      defaultValue: 'Unbranded',
    }),
    model: text({
      validation: { isRequired: true },
      label: 'Model',
    }),

    code: text({
      label: 'Internal Brodman Code',
    }),
  }
});