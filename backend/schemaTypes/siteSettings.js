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
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Used in the navigation bar and footer.',
      group: 'branding',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon shown in browser tabs (recommended 32x32px).',
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
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ],
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
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ],
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
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'whatsapp', type: 'url', title: 'Whatsapp URL' },
        { name: 'twitter', type: 'url', title: 'Twitter URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'youtube', type: 'url', title: 'Youtube URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
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
