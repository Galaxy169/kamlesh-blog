import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity/client';
import { postBySlugQuery } from '@/lib/sanity/queries';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';

export async function generateMetadata({ params }) {
  // Await params here as well to be safe with Next.js 15+ changes
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  
  if (!post) {
    return { title: 'Post Not Found | TaxFirm Blog' };
  }
  
  return {
    title: `${post.title} | TaxFirm Blog`,
    description: post.excerpt,
  };
}

export const revalidate = 0;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-deep-navy mb-4">Article not found</h1>
        <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="text-corporate-blue hover:text-fresh-green underline font-medium">
          Return to Blog
        </Link>
      </div>
    );
  }

  // Format date correctly
  const dateObj = new Date(post.publishedAt);
  const dateString = isNaN(dateObj.getTime()) ? 'Unknown Date' : dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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
              {post.category || 'Uncategorized'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-corporate-blue" />
                {post.author || 'Editorial Team'}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-corporate-blue" />
                {dateString}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-corporate-blue" />
                {post.readTime || 5} min read
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Featured Image */}
        {post.mainImage && (
          <div className="w-full aspect-[21/9] bg-slate-100 rounded-2xl mb-12 relative overflow-hidden shadow-md">
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        )}

        {/* Article Body */}
        <article className="max-w-none">
          <PortableTextRenderer content={post.body} />
        </article>

        {/* Article Tags */}
        {post.tags && post.tags.length > 0 && (
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
        )}

      </div>
    </div>
  );
}
