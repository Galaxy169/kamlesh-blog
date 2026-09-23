'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactDetails({ data }) {
  const address = data?.address || "123 Business Avenue, Suite 400\nFinancial District, NY 10001";
  const phone = data?.phone || "+1 (234) 567-890";
  const email = data?.email || "contact@taxfirm.com";
  const whatsappNumber = data?.whatsappNumber;

  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/[^\d+]/g, '')}` : '#';

  // Form State
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(event.target);
    // Append Web3Forms Access Key
    // Using environment variable for security, fallback to placeholder for dev
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      console.warn("Web3Forms API key is missing. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local.");
      // Fake success for development if key is missing
      setTimeout(() => setFormStatus('success'), 1500);
      return;
    }

    formData.append("access_key", accessKey);
    // Include a subject
    formData.append("subject", "New Contact Form Submission from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        event.target.reset(); // Clear form
      } else {
        console.error("Form Error", data);
        setFormStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error", error);
      setFormStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    }
  };

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
                <p className="text-slate-600 text-sm whitespace-pre-line">
                  {address}
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
                <a href={phoneHref} className="text-slate-600 text-sm hover:text-corporate-blue transition-colors block mb-1">
                  {phone}
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
                <a href={`mailto:${email}`} className="text-slate-600 text-sm hover:text-corporate-blue transition-colors">
                  {email}
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
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Spam Protection Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none"
                    placeholder="John Doe"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none"
                    placeholder="john@example.com"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none bg-white"
                  disabled={formStatus === 'submitting'}
                >
                  <option value="General Inquiry">Select a service...</option>
                  <option value="Income Tax Return">Income Tax Return</option>
                  <option value="GST Services">GST Services</option>
                  <option value="Business Registration">Business Registration</option>
                  <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                  <option value="Other Advisory">Other Advisory</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-corporate-blue focus:border-corporate-blue transition-colors outline-none resize-y"
                  placeholder="Tell us about your requirements..."
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4">
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="bg-fresh-green hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors shadow-md shadow-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
                {whatsappNumber && (
                  <a 
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-medium px-4 py-3 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
