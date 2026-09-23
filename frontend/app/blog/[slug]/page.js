import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';

// Temporary mock data until Sanity is connected
const getMockPost = (slug) => {
  return {
    title: 'Understanding the New Tax Regime Updates for 2024',
    slug: slug,
    excerpt: 'Key changes in the new tax regime and how they might affect your personal and business tax planning this financial year.',
    content: `
      <p>The financial landscape is constantly evolving, and staying updated with the latest tax regulations is crucial for both individuals and businesses. The recent updates to the tax regime in 2024 bring several significant changes that you need to be aware of.</p>
      
      <h3>Key Changes in Income Slabs</h3>
      <p>One of the most notable changes is the adjustment to income tax slabs. The new structure aims to provide relief to middle-income earners while simplifying the calculation process.</p>
      
      <ul>
        <li>Income up to ₹3,000,000 is now entirely tax-free.</li>
        <li>The standard deduction has been increased for salaried professionals.</li>
        <li>Surcharge rates for high net worth individuals have been revised.</li>
      </ul>

      <h3>Impact on Business Planning</h3>
      <p>For small and medium enterprises (SMEs), these updates mean a shift in how operational expenses and capital investments should be structured to maximize benefits under the new provisions. It is highly recommended that businesses review their current financial strategies with a certified professional.</p>

      <blockquote>
        "Proactive tax planning is no longer just about compliance; it's a strategic tool for sustainable business growth."
      </blockquote>

      <h3>What You Should Do Next</h3>
      <p>To ensure you're fully compliant and taking advantage of the new rules:</p>
      <ol>
        <li>Review your current investment portfolio.</li>
        <li>Consult with a tax advisor to run a comparative analysis between the old and new regimes for your specific case.</li>
        <li>Update your payroll systems if you are an employer.</li>
      </ol>
      
      <p>If you have any questions or need personalized assistance, our team is here to help.</p>
    `,
    category: 'Tax Updates',
    tags: ['Income Tax', 'Budget 2024', 'Personal Finance'],
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    author: 'Jane Doe, CPA'
  };
};

export async function generateMetadata({ params }) {
  // Await params here as well to be safe with Next.js 15+ changes, although guide implies standard Next.js App router
  const { slug } = await params;
  const post = getMockPost(slug);
  
  return {
    title: `${post.title} | TaxFirm Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getMockPost(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-deep-navy">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Article Header (Hero) */}
      <div className="bg-light-blue pt-24 pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-corporate-blue/5 rounded-bl-[100px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center text-corporate-blue font-medium hover:text-fresh-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-fresh-green text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-corporate-blue" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-corporate-blue" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-corporate-blue" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Featured Image Placeholder */}
        <div className="w-full aspect-[21/9] bg-slate-100 rounded-2xl mb-12 relative overflow-hidden shadow-md">
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
            <svg className="w-24 h-24 opacity-30" fill="currentColor" viewBox="0 0 24 24">
               <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          </div>
        </div>

        {/* Article Body */}
        {/* 
          Using dangerouslySetInnerHTML for mock HTML data. 
          When Sanity is integrated, this will be replaced with PortableText component.
        */}
        <article 
          className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-deep-navy prose-headings:font-bold
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-corporate-blue hover:prose-a:text-fresh-green
            prose-li:text-slate-600
            prose-blockquote:border-l-4 prose-blockquote:border-fresh-green prose-blockquote:bg-light-blue prose-blockquote:p-4 prose-blockquote:italic prose-blockquote:text-deep-navy"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-slate-400" />
            <h4 className="font-bold text-deep-navy">Tags:</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm hover:bg-slate-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
