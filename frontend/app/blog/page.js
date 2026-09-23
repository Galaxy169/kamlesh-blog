import Link from 'next/link';
import { ArrowRight, Clock, Search } from 'lucide-react';

// Temporary mock data until Sanity is connected
const mockPosts = [
  {
    title: 'Understanding the New Tax Regime Updates for 2024',
    slug: 'understanding-new-tax-regime-2024',
    excerpt: 'Key changes in the new tax regime and how they might affect your personal and business tax planning this financial year.',
    category: 'Tax Updates',
    date: 'Oct 12, 2023',
    readTime: '5 min read'
  },
  {
    title: 'Essential GST Compliance Checklist for Small Businesses',
    slug: 'gst-compliance-checklist-small-business',
    excerpt: 'Avoid penalties and streamline your filing process with our comprehensive GST compliance checklist tailored for growing businesses.',
    category: 'Compliance',
    date: 'Sep 28, 2023',
    readTime: '7 min read'
  },
  {
    title: 'Benefits of Registering as an LLP vs. Private Limited',
    slug: 'llp-vs-private-limited-benefits',
    excerpt: 'Choosing the right business structure is crucial. We break down the pros and cons of Limited Liability Partnerships vs Private Limited Companies.',
    category: 'Business Setup',
    date: 'Sep 15, 2023',
    readTime: '6 min read'
  },
  {
    title: 'How to Respond to an Income Tax Notice',
    slug: 'respond-income-tax-notice',
    excerpt: 'Received a notice from the IT department? Don\'t panic. Here is a step-by-step guide on how to understand and respond to tax notices effectively.',
    category: 'Tax Updates',
    date: 'Aug 30, 2023',
    readTime: '8 min read'
  },
  {
    title: 'Top 5 Tax Deductions Business Owners Often Miss',
    slug: 'top-tax-deductions-business-owners-miss',
    excerpt: 'Are you leaving money on the table? Discover the most commonly overlooked tax deductions that could save your business thousands.',
    category: 'Tax Planning',
    date: 'Aug 12, 2023',
    readTime: '4 min read'
  },
  {
    title: 'A Guide to TDS Returns and Due Dates',
    slug: 'guide-tds-returns-due-dates',
    excerpt: 'Keep your business compliant with our complete guide to Tax Deducted at Source (TDS) filing requirements and crucial deadlines.',
    category: 'Compliance',
    date: 'Jul 25, 2023',
    readTime: '6 min read'
  }
];

export const metadata = {
  title: 'Blog | Tax & Financial Compliance Insights',
  description: 'Read our latest articles on tax filing, accounting, business registration, and financial compliance.',
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      
      {/* Blog Header */}
      <div className="bg-deep-navy text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-corporate-blue/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax & Financial Insights</h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Stay informed with our latest articles, guides, and updates on tax regulations, business compliance, and financial strategies.
            </p>
            
            {/* Search Bar Placeholder */}
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-md text-deep-navy focus:outline-none focus:ring-2 focus:ring-fresh-green"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories (Static for now) */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-6">
          <span className="bg-corporate-blue text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
            All Articles
          </span>
          {['Tax Updates', 'Compliance', 'Business Setup', 'Tax Planning'].map((category) => (
            <span 
              key={category} 
              className="bg-white border border-gray-200 text-slate-600 hover:bg-light-blue px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              {/* Image Placeholder */}
              <div className="h-56 w-full bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-corporate-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 transform group-hover:scale-105 transition-transform duration-700">
                  <svg className="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-fresh-green bg-fresh-green/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-deep-navy mb-3 group-hover:text-corporate-blue transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 mb-6 text-sm flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-slate-500 text-sm font-medium">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-corporate-blue text-sm font-bold hover:text-fresh-green transition-colors flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Static) */}
        <div className="flex justify-center">
          <button className="bg-white border border-gray-200 text-deep-navy font-medium px-8 py-3 rounded-md hover:bg-light-blue hover:text-corporate-blue transition-colors">
            Load More Articles
          </button>
        </div>

      </div>
    </div>
  );
}
