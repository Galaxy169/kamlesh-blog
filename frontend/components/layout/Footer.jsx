import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  const siteName = data?.siteName || "TaxFirm";
  const address = data?.address || "123 Business Avenue, Suite 400\nFinancial District, NY 10001";
  const phone = data?.phoneNumber || "+1 (234) 567-890";
  const email = data?.email || "contact@taxfirm.com";
  const description = data?.siteDescription || "Professional tax filing, accounting, and financial compliance services helping businesses and individuals navigate complex financial regulations with ease and accuracy.";
  const social = data?.socialLinks || {};

  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8 border-t-4 border-corporate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Firm Information */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-block">
              {data?.logo ? (
                <div className="relative h-10 w-auto min-w-[40px] flex items-center">
                  <Image
                    src={urlFor(data.logo).url()}
                    alt={`${siteName} Logo`}
                    width={150}
                    height={40}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {siteName.charAt(0)}
                  </div>
                  <span className="font-bold text-xl text-white tracking-tight">
                    {siteName}
                  </span>
                </>
              )}
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              {description}
            </p>
            <div className="flex space-x-4 pt-2">
              {social?.facebook && (
                <a href={social.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/facebook.svg" className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {social?.twitter && (
                <a href={social.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/x.svg" className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              )}
              {social?.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/linkedin.svg" className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
              {social?.instagram && (
                <a href={social.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/instagram.svg" className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {social?.youtube && (
                <a href={social.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/youtube.svg" className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              )}
              {social?.whatsapp && (
                <a href={social.whatsapp} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-fresh-green transition-colors">
                  <img src="/whatsapp.svg" className="w-5 h-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              )}
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
                <Link href="/#about" className="text-slate-300 hover:text-white hover:underline transition-all text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-green"></span>
                  About Us
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
                <span className="whitespace-pre-line">
                  {address}
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-5 h-5 text-fresh-green shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="w-5 h-5 text-fresh-green shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {currentYear} {siteName}. All rights reserved.
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
