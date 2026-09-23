'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { urlFor } from '@/lib/sanity/client';

// Temporary mock data until Sanity is connected/populated
const fallbackPosts = [
  {
    title: 'Understanding the New Tax Regime Updates for 2024',
    slug: { current: 'understanding-new-tax-regime-2024' },
    excerpt: 'Key changes in the new tax regime and how they might affect your personal and business tax planning this financial year.',
    category: 'Tax Updates',
    publishedAt: '2023-10-12T00:00:00.000Z',
    readTime: 5
  },
  {
    title: 'Essential GST Compliance Checklist for Small Businesses',
    slug: { current: 'gst-compliance-checklist-small-business' },
    excerpt: 'Avoid penalties and streamline your filing process with our comprehensive GST compliance checklist tailored for growing businesses.',
    category: 'Compliance',
    publishedAt: '2023-09-28T00:00:00.000Z',
    readTime: 7
  },
  {
    title: 'Benefits of Registering as an LLP vs. Private Limited',
    slug: { current: 'llp-vs-private-limited-benefits' },
    excerpt: 'Choosing the right business structure is crucial. We break down the pros and cons of Limited Liability Partnerships vs Private Limited Companies.',
    category: 'Business Setup',
    publishedAt: '2023-09-15T00:00:00.000Z',
    readTime: 6
  }
];

export default function BlogSpotlight({ data }) {
  const postsToDisplay = data && data.length > 0 ? data : fallbackPosts;

  return (
    <section className="py-24 bg-slate-50 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-wider text-corporate-blue uppercase mb-3">
              Latest Insights
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy">
              From Our Blog
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-corporate-blue font-medium hover:text-fresh-green transition-colors group"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToDisplay.map((post, index) => {
            // Format date correctly
            const dateObj = new Date(post.publishedAt);
            const dateString = isNaN(dateObj.getTime()) ? 'Unknown Date' : dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            return (
              <motion.div
                key={post._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                {/* Image Placeholder or Real Image */}
                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-corporate-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {post.mainImage ? (
                    <Image 
                      src={urlFor(post.mainImage).url()} 
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 transform group-hover:scale-105 transition-transform duration-700">
                      <svg className="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-fresh-green bg-fresh-green/10 px-3 py-1 rounded-full">
                      {post.category || 'Uncategorized'}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime || 5} min read
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-deep-navy mb-3 group-hover:text-corporate-blue transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug?.current || '#'}`}>
                      {post.title}
                    </Link>
                  </h4>
                  
                  <p className="text-slate-600 mb-6 text-sm flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <span className="text-slate-500 text-sm font-medium">{dateString}</span>
                    <Link 
                      href={`/blog/${post.slug?.current || '#'}`}
                      className="text-corporate-blue text-sm font-bold hover:text-fresh-green transition-colors flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
