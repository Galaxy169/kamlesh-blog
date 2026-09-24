'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

export default function Hero({ data }) {
  const headline = data?.heroHeadline;
  const description = data?.heroDescription || "We provide professional tax filing, accounting, and business compliance services. Let our experts handle the numbers while you focus on what matters most.";
  const label = data?.heroLabel;

  

  return (
    <section className="relative bg-deep-navy overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-corporate-blue/20 transform skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-fresh-green/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-corporate-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* {label && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-fresh-green text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-fresh-green animate-pulse" />
                {label}
              </div>
            )} */}
            
            {headline ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {headline}
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Expert Financial Guidance for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-green to-emerald-300">Peace of Mind</span>
              </h1>
            )}
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#services"
                className="inline-flex justify-center items-center gap-2 bg-fresh-green hover:bg-emerald-600  text-white px-8 py-3.5 rounded-md font-medium transition-all shadow-lg shadow-emerald-500/30 group"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/#contact"
                className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 hover:ring-2 hover:ring-blue-800/60 text-white border border-white/30 px-8 py-3.5 rounded-md font-medium transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto hidden md:block mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-2xl mx-auto aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-corporate-blue/40 to-deep-navy/40 z-10" />
              
              {/* Dynamic Hero Image or Fallback */}
              {data?.heroImage ? (
                <Image 
                  src={urlFor(data.heroImage).url()} 
                  alt={data?.heroImage?.alt || "Hero Image"} 
                  width={1024}
                  height={683}
                  className="object-cover w-full h-full"  
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                  <svg className="w-16 h-16 opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm4 4h8v2H8V9zm0 4h8v2H8v-2z" />
                  </svg>
                  <p className="text-sm font-medium">Add a Hero Image in Sanity CMS</p>
                  <p className="text-xs mt-2 opacity-60">This placeholder will be replaced.</p>
                </div>
              )}
            </div>
              
            {/* Overlapping floating card (Moved OUTSIDE the overflow-hidden div so it doesn't get clipped) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl z-20 border border-gray-100 min-w-[200px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-fresh-green/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-fresh-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-dark-slate font-bold text-sm">Expert Support</h4>
                  <p className="text-xs text-gray-500">Always available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
