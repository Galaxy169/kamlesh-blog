'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import {
  FileText,
  Briefcase,
  Building2,
  Calculator,
  PieChart,
  Landmark,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

// Hardcoded fallback data in case CMS is empty
const fallbackServices = [
  {
    title: 'Income Tax Return Filing',
    description: 'Accurate and timely ITR filing for individuals, professionals, and businesses.',
    iconName: 'FileText',
  },
  {
    title: 'GST Registration & Returns',
    description: 'End-to-end GST compliance, from new registration to monthly return filing.',
    iconName: 'Briefcase',
  },
  {
    title: 'Business Registration',
    description: 'Setup your Company, LLP, or Partnership firm with complete legal compliance.',
    iconName: 'Building2',
  },
  {
    title: 'Accounting & Bookkeeping',
    description: 'Maintain accurate financial records with our professional accounting services.',
    iconName: 'Calculator',
  },
  {
    title: 'TDS Returns & Compliance',
    description: 'Hassle-free preparation and filing of quarterly TDS returns.',
    iconName: 'PieChart',
  },
  {
    title: 'Financial & Tax Advisory',
    description: 'Strategic tax planning and financial advice to optimize your tax liabilities.',
    iconName: 'Landmark',
  }
];

export default function Services({ data }) {
  // Use CMS data if available and not empty, otherwise fallback
  const servicesToDisplay = data && data.length > 0 ? data : fallbackServices;
  console.log(data);


  return (
    <section id="services" className="py-24 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-corporate-blue uppercase mb-3">
              What We Do
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Our Services
            </h3>
            <p className="text-lg text-slate-600">
              We offer comprehensive tax filing and financial compliance services tailored to meet the needs of individuals and businesses.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => {
            // Dynamically resolve the icon component based on the string name from CMS
            const IconComponent = LucideIcons[service.iconName] || LucideIcons.FileText;

            return (
              <motion.div
                key={service._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-md hover:shadow-blue-800/20 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                {/* Service Card Image Placeholder */}
                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-corporate-blue/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 transform group-hover:scale-105 transition-transform duration-700">
                    {service.image ? (
                      <Image
                        src={urlFor(service?.image)?.url()}
                        alt={service?.image?.alt || "Service Image"}
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />) : (
                      <svg className="w-24 h-24 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="absolute -top-10 right-8 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-corporate-blue border border-gray-50 group-hover:text-fresh-green group-hover:-translate-y-1 transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-deep-navy mb-3 pr-12">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {service.shortDescription || service.description}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-flex items-center text-corporate-blue font-medium hover:text-fresh-green transition-colors mt-auto group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-deep-navy hover:bg-corporate-blue text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
