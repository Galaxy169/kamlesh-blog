import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'workProcess',
  title: 'Work Process',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., "01", "02", "03"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Initial Consultation"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the Lucide icon to use (e.g., MessageSquare, FileInput)',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Numeric order for sorting (1, 2, 3...)',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Process Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      stepNumber: 'stepNumber',
    },
    prepare({ title, subtitle, stepNumber }) {
      return {
        title: `${stepNumber}: ${title}`,
        subtitle: subtitle,
      };
    },
  },
});
