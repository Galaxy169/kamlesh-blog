'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactDetails() {
  return (
    <section id="contact" className="py-24 bg-white relative">
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
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Contact Us
            </h3>
            <p className="text-lg text-slate-600">
              Ready to streamline your financial compliance? Reach out to our team today to schedule an initial consultation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-light-blue p-6 rounded-xl flex items-start gap-4 border border-corporate-blue/10"
            >
              <div className="bg-white p-3 rounded-lg text-corporate-blue shadow-sm shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-navy mb-1">Visit Our Office</h4>
                <p className="text-slate-600 text-sm">
                  123 Business Avenue, Suite 400<br />
                  Financial District, NY 10001
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-light-blue p-6 rounded-xl flex items-start gap-4 border border-corporate-blue/10"
            >
              <div className="bg-white p-3 rounded-lg text-corporate-blue shadow-sm shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-navy mb-1">Call Us</h4>
                <a href="tel:+1234567890" className="text-slate-600 text-sm hover:text-corporate-blue transition-colors block mb-1">
                  +1 (234) 567-890
                </a>
                <p className="text-slate-500 text-xs">Mon-Fri, 9am - 6pm</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-light-blue p-6 rounded-xl flex items-start gap-4 border border-corporate-blue/10"
            >
              <div className="bg-white p-3 rounded-lg text-corporate-blue shadow-sm shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-navy mb-1">Email Us</h4>
                <a href="mailto:contact@taxfirm.com" className="text-slate-600 text-sm hover:text-corporate-blue transition-colors">
                  contact@taxfirm.com
                </a>
                <p className="text-slate-500 text-xs mt-1">We typically reply within 24 hours</p>
              </div>
            </motion.div>

          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-gray-100 p-8 md:p-10"
          >
            <h4 className="text-2xl font-bold text-deep-navy mb-6">Send us a message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none bg-white"
                >
                  <option>Select a service...</option>
                  <option>Income Tax Return</option>
                  <option>GST Services</option>
                  <option>Business Registration</option>
                  <option>Accounting & Bookkeeping</option>
                  <option>Other Advisory</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none resize-y"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  type="submit"
                  className="bg-fresh-green hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors shadow-md shadow-emerald-200"
                >
                  Send Message
                </button>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-medium px-4 py-3 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
