'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';
import { urlFor } from '@/lib/sanity/client';
import Image from 'next/image';

const fallbackKeyPoints = [
  'Expert team of certified tax professionals',
  'Transparent pricing with no hidden fees',
  'Proactive communication and timely updates',
  'Secure and confidential document handling'
];

export default function About({ data }) {
  const headline = data?.aboutHeadline || "Your Trusted Partners in Financial Compliance";
  const yearsOfExperience = data?.yearsOfExperience || "10+";
  const keyPoints = data?.aboutKeyPoints && data.aboutKeyPoints.length > 0 ? data.aboutKeyPoints : fallbackKeyPoints;

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* About Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative background shapes */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-light-blue rounded-xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-corporate-blue/10 rounded-xl -z-10" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square bg-slate-100">
              <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                {data.aboutImage ? (
                  <Image
                    src={urlFor(data.aboutImage).url()}
                    alt={data?.aboutImage?.alt || "About Image"}
                    fill
                    className="object-cover w-full h-full"
                    priority
                  />
                ) :
                  (<svg className="w-32 h-32 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>)}
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute bottom-10 -right-8 md:-right-12 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {yearsOfExperience}
                </div>
                <div>
                  <p className="text-dark-slate font-bold text-lg">Years of</p>
                  <p className="text-fresh-green font-medium">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-corporate-blue uppercase mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 leading-tight">
              {headline}
            </h3>

            {data?.aboutDescription ? (
              <div className="mb-8">
                <PortableTextRenderer content={data.aboutDescription} />
              </div>
            ) : (
              <>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  We are a dedicated firm of financial professionals committed to simplifying tax and compliance for businesses and individuals. Our approach combines deep industry knowledge with a commitment to personalized service.
                </p>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Whether you are a startup navigating initial registrations or an established business requiring complex tax planning, we provide the clarity and expertise you need to move forward with confidence.
                </p>
              </>
            )}

            {/* Key Points */}
            <ul className="space-y-4 mb-10">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-fresh-green shrink-0 mt-0.5" />
                  <span className="text-dark-slate font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-corporate-blue hover:bg-deep-navy text-white px-8 py-3.5 rounded-md font-medium transition-all shadow-lg shadow-corporate-blue/20 group"
            >
              Get to Know Us Better
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
