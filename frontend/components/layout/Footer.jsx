import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8 border-t-4 border-corporate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Firm Information */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-block">
              <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Tax<span className="text-corporate-blue">Firm</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              Professional tax filing, accounting, and financial compliance services helping businesses and individuals navigate complex financial regulations with ease and accuracy.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-fresh-green transition-colors">
                <div className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-fresh-green transition-colors">
                <div className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-fresh-green transition-colors">
                <div className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  Our Work Process
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Income Tax Return Filing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  GST Registration & Returns
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Business Registration
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Financial Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin className="w-5 h-5 text-fresh-green shrink-0 mt-0.5" />
                <span>
                  123 Business Avenue, Suite 400<br />
                  Financial District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-5 h-5 text-fresh-green shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-fresh-green shrink-0" />
                <a href="mailto:contact@taxfirm.com" className="hover:text-white transition-colors">
                  contact@taxfirm.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {currentYear} TaxFirm. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
