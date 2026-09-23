import { getCliClient } from 'sanity/cli';

const client = getCliClient();

const services = [
  { _type: 'service', title: 'Income Tax Return', slug: { _type: 'slug', current: 'income-tax-return' }, shortDescription: 'File your returns accurately and on time with expert guidance.', iconName: 'FileText', displayOrder: 1 },
  { _type: 'service', title: 'GST Registration & Filing', slug: { _type: 'slug', current: 'gst-registration' }, shortDescription: 'End-to-end GST compliance, from registration to monthly filing.', iconName: 'Briefcase', displayOrder: 2 },
  { _type: 'service', title: 'Business Registration', slug: { _type: 'slug', current: 'business-registration' }, shortDescription: 'Start your journey right with seamless company incorporation.', iconName: 'Building', displayOrder: 3 },
  { _type: 'service', title: 'Bookkeeping', slug: { _type: 'slug', current: 'bookkeeping' }, shortDescription: 'Maintain clean, compliant books without the administrative headache.', iconName: 'Calculator', displayOrder: 4 },
  { _type: 'service', title: 'Tax Planning', slug: { _type: 'slug', current: 'tax-planning' }, shortDescription: 'Strategic tax advisory to optimize your liabilities legally.', iconName: 'TrendingUp', displayOrder: 5 },
  { _type: 'service', title: 'Payroll Services', slug: { _type: 'slug', current: 'payroll-services' }, shortDescription: 'Automated, compliant payroll processing for your employees.', iconName: 'Users', displayOrder: 6 }
];

const workProcessSteps = [
  { _type: 'workProcess', stepNumber: '01', title: 'Initial Consultation', description: 'We understand your business needs and financial goals.', iconName: 'FileText', order: 1 },
  { _type: 'workProcess', stepNumber: '02', title: 'Document Collection', description: 'Secure and straightforward process to gather necessary records.', iconName: 'Calculator', order: 2 },
  { _type: 'workProcess', stepNumber: '03', title: 'Processing & Review', description: 'Meticulous analysis and preparation by our experts.', iconName: 'Briefcase', order: 3 },
  { _type: 'workProcess', stepNumber: '04', title: 'Final Delivery', description: 'Timely filing and delivery of compliance documents.', iconName: 'CheckCircle', order: 4 }
];

const coreValues = [
  { _type: 'coreValue', title: 'Integrity First', description: 'We maintain the highest ethical standards in all our financial dealings.', iconName: 'Shield', order: 1 },
  { _type: 'coreValue', title: 'Precision & Accuracy', description: 'Meticulous attention to detail in every calculation and filing.', iconName: 'Target', order: 2 },
  { _type: 'coreValue', title: 'Client-Centric', description: 'Your financial success and peace of mind are our top priorities.', iconName: 'Users', order: 3 },
  { _type: 'coreValue', title: 'Continuous Learning', description: 'Staying updated with the latest tax laws and regulations.', iconName: 'BookOpen', order: 4 }
];

const differentiators = [
  { _type: 'differentiator', challenge: 'Generic advice that doesn\'t fit your business model.', approach: 'Tailored financial strategies based on your industry and goals.', order: 1 },
  { _type: 'differentiator', challenge: 'Confusing tax jargon and lack of transparency.', approach: 'Clear, straightforward communication and full visibility into your numbers.', order: 2 },
  { _type: 'differentiator', challenge: 'Reactive accounting that only looks at the past.', approach: 'Proactive planning that helps you prepare for the future.', order: 3 },
  { _type: 'differentiator', challenge: 'Slow response times and hard-to-reach advisors.', approach: 'Dedicated support with guaranteed 24-hour response times.', order: 4 }
];

const siteSettings = {
  _type: 'siteSettings',
  siteName: 'Kamlesh Tax & Advisory',
  siteDescription: 'Professional tax filing, accounting, and financial compliance services for businesses and individuals.',
  phone: '+91 9876543210',
  email: 'contact@taxfirm.com',
  whatsappNumber: '919876543210',
  address: '123 Business Avenue, Suite 400\\nFinancial District',
  heroLabel: 'Expert Financial Services',
  heroHeadline: 'Streamline Your Finances with Expert Compliance',
  heroDescription: 'Professional tax filing, accounting, and business advisory services tailored to your unique needs.',
  yearsOfExperience: 10,
  aboutHeadline: 'Your Trusted Partner in Financial Compliance',
  aboutDescription: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: [], text: 'For over a decade, we have been helping businesses and individuals navigate the complex landscape of taxation and financial compliance. Our approach is built on a foundation of trust, transparency, and technical excellence.' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: [], text: 'We believe that proper financial management shouldn\'t be a headache. By combining deep industry expertise with modern technology, we deliver seamless compliance solutions that let you focus on what you do best—growing your business.' }
      ]
    }
  ]
};

async function seed() {
  console.log('Seeding data...');
  
  for (const doc of services) {
    await client.create(doc);
    console.log(`Created service: ${doc.title}`);
  }
  
  for (const doc of workProcessSteps) {
    await client.create(doc);
    console.log(`Created process: ${doc.title}`);
  }
  
  for (const doc of coreValues) {
    await client.create(doc);
    console.log(`Created core value: ${doc.title}`);
  }
  
  for (const doc of differentiators) {
    await client.create(doc);
    console.log(`Created differentiator: ${doc.challenge}`);
  }
  
  await client.create(siteSettings);
  console.log(`Created Site Settings`);

  console.log('Seeding complete! You can now safely delete your "test" entries in Sanity Studio.');
}

seed().catch(console.error);
