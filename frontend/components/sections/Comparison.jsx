'use client';

import { motion } from 'motion/react';
import { ShieldCheck, XCircle } from 'lucide-react';

const fallbackComparisons = [
  {
    challenge: 'Generic, one-size-fits-all service',
    approach: 'Personalized assistance tailored to your specific situation'
  },
  {
    challenge: 'Unclear pricing and hidden fees',
    approach: 'Transparent fee structure discussed upfront'
  },
  {
    challenge: 'Confusing processes and disorganized document handling',
    approach: 'Streamlined, organized, and secure document management'
  },
  {
    challenge: 'Limited follow-up after the work is done',
    approach: 'Proactive updates and ongoing support'
  },
  {
    challenge: 'Complex financial jargon that leaves you confused',
    approach: 'Clear, jargon-free communication you can actually understand'
  }
];

export default function Comparison({ data }) {
  const comparisonsToDisplay = data && data.length > 0 ? data : fallbackComparisons;

  return (
    <section className="py-24 bg-deep-navy text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-fresh-green uppercase mb-3">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Us Different
            </h3>
            <p className="text-lg text-slate-300">
              We understand the frustrations clients often face with typical financial firms. That's why we've built our practice around a completely different approach.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Headers (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-2 gap-8 mb-6 px-6">
            <h4 className="text-xl font-bold text-slate-400 text-center uppercase tracking-wide">Common Client Challenges</h4>
            <h4 className="text-xl font-bold text-fresh-green text-center uppercase tracking-wide">Our Approach</h4>
          </div>

          <div className="space-y-4">
            {comparisonsToDisplay.map((item, index) => (
              <motion.div
                key={item._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                {/* Challenge */}
                <div className="flex items-start gap-4 md:pr-4 md:border-r md:border-white/10">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 font-medium">{item.challenge}</p>
                </div>
                
                {/* Approach */}
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-fresh-green shrink-0 mt-0.5" />
                  <p className="text-white font-medium">{item.approach}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
