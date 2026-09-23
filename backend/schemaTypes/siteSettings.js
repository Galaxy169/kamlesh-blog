import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings & Homepage',
  type: 'document',
  fields: [
    // --- BRANDING & SEO ---
    defineField({
      name: 'siteTitle',
      title: 'Site Title (SEO)',
      type: 'string',
      group: 'branding',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description (SEO)',
      type: 'text',
      rows: 2,
      group: 'branding',
    }),
    
    // --- HERO SECTION ---
    defineField({
      name: 'heroLabel',
      title: 'Hero Small Label',
      type: 'string',
      description: 'e.g., "Tax Filing & Financial Compliance"',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),

    // --- ABOUT SECTION ---
    defineField({
      name: 'aboutHeadline',
      title: 'About Section Headline',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Section Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'about',
    }),
    defineField({
      name: 'aboutKeyPoints',
      title: 'About Section Key Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The checklist items in the about section.',
      group: 'about',
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Number displayed in the floating badge on the About section.',
      group: 'about',
    }),

    // --- CONTACT DETAILS ---
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 2,
      group: 'contact',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      description: 'e.g., "Mon-Fri, 9am - 6pm"',
      group: 'contact',
    }),

    // --- SOCIAL LINKS ---
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'twitter', type: 'url', title: 'Twitter URL' },
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
      ],
      group: 'social',
    }),
  ],
  groups: [
    { name: 'branding', title: 'Branding & SEO' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'about', title: 'About Section' },
    { name: 'contact', title: 'Contact Details' },
    { name: 'social', title: 'Social Links' },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings & Homepage Content',
        subtitle: 'Global content for your website',
      };
    },
  },
});
