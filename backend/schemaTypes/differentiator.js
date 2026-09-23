import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'differentiator',
  title: 'Differentiator (Comparison)',
  type: 'document',
  fields: [
    defineField({
      name: 'challenge',
      title: 'Common Client Challenge',
      type: 'text',
      rows: 2,
      description: 'e.g., "Unclear pricing and hidden fees"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach (The Solution)',
      type: 'text',
      rows: 2,
      description: 'e.g., "Transparent fee structure discussed upfront"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this comparison appears',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      challenge: 'challenge',
      approach: 'approach',
      order: 'order',
    },
    prepare({ challenge, approach, order }) {
      return {
        title: `${order}. ${approach}`,
        subtitle: `vs. ${challenge}`,
      };
    },
  },
});
