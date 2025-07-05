import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text } from "@keystone-6/core/fields";

export const Block = list({
  access: allowAll,

  ui: {
    isHidden: true,
  },
  
  fields: {
    title: text({
      validation: { isRequired: true },
      label: 'Title',
    }),
    content: text({
      validation: { isRequired: true },
      label: 'Content',
    }),
  }
})