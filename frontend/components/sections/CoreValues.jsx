'use client';

import { motion } from 'motion/react';
import { Shield, Eye, Target, Award, Users, Lock } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our financial dealings and professional relationships.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Transparency',
    description: 'We believe in clear, honest communication about processes, timelines, and fees from day one.',
    icon: <Eye className="w-6 h-6" />
  },
  {
    title: 'Accuracy',
    description: 'Precision is paramount. We double-check every figure and form to ensure flawless compliance.',
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Professionalism',
    description: 'We deliver expert service with respect, reliability, and a commitment to excellence.',
    icon: <Award className="w-6 h-6" />
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We tailor our approach to meet your unique financial needs.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Confidentiality',
    description: 'We implement strict security measures to protect your sensitive financial information.',
    icon: <Lock className="w-6 h-6" />
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-light-blue">
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
              Our Philosophy
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Our Core Values
            </h3>
            <p className="text-lg text-slate-600">
              These principles guide everything we do, from how we interact with clients to how we manage our internal processes.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 hover:shadow-md hover:shadow-blue-800/20 hover:cursor-pointer hover:border-corporate-blue/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-corporate-blue/5 rounded-lg flex items-center justify-center text-corporate-blue mb-6 group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-deep-navy mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
