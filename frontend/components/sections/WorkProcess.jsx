'use client';

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { MessageSquare, FileInput, CheckSquare, Send, HeartHandshake } from 'lucide-react';

const fallbackSteps = [
  {
    stepNumber: '01',
    title: 'Initial Consultation',
    description: "Understand the client's requirements and identify the relevant service.",
    iconName: 'MessageSquare'
  },
  {
    stepNumber: '02',
    title: 'Document Collection',
    description: 'Collect and review the required information and supporting documents securely.',
    iconName: 'FileInput'
  },
  {
    stepNumber: '03',
    title: 'Review & Preparation',
    description: 'Prepare the relevant tax returns, registrations, or compliance documentation.',
    iconName: 'CheckSquare'
  },
  {
    stepNumber: '04',
    title: 'Filing & Submission',
    description: 'Complete the applicable filing or submission process after necessary client approvals.',
    iconName: 'Send'
  },
  {
    stepNumber: '05',
    title: 'Follow-up & Support',
    description: 'Provide relevant updates and assistance regarding the completed service.',
    iconName: 'HeartHandshake'
  }
];

export default function WorkProcess({ data }) {
  const stepsToDisplay = data && data.length > 0 ? data : fallbackSteps;

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fresh-green/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-corporate-blue uppercase mb-3">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Our Work Process
            </h3>
            <p className="text-lg text-slate-600">
              We follow a streamlined, transparent process to ensure your financial compliance is handled efficiently and accurately.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-light-blue via-corporate-blue/20 to-light-blue z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {stepsToDisplay.map((step, index) => {
              const IconComponent = LucideIcons[step.iconName] || LucideIcons.CheckCircle;
              
              return (
                <motion.div
                  key={step._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative z-10 group"
                >
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-light-blue flex items-center justify-center relative shadow-sm group-hover:border-fresh-green transition-colors duration-300">
                      <div className="text-corporate-blue group-hover:text-fresh-green transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center lg:px-2">
                    <h4 className="text-lg font-bold text-deep-navy mb-3">
                      {step.stepNumber && <span className="text-fresh-green block text-xs mb-1 uppercase tracking-wider">Step {step.stepNumber}</span>}
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
