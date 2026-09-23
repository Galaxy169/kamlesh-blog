'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookText, BuildingComplex, HomeIcon, Menu, Rss, UserStar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', icon: <HomeIcon />, href: '/' },
  { name: 'About Us', icon: <BookText />, href: '/#about' },
  { name: 'Our Services', icon: <BuildingComplex />, href: '/#services' },
  { name: 'Client Process', icon: <UserStar />, href: '/#process' },
  { name: 'Blog', icon: <Rss />, href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#EAF2F8] backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-bold text-xl text-deep-navy tracking-tight">
                Tax<span className="text-corporate-blue">Firm</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark-slate hover:text-corporate-blue font-medium text-sm transition-colors duration-200"
              >
                <div className='flex items-center gap-2'>
                {link.icon}
                {link.name}
                </div>
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-fresh-green hover:bg-emerald-600 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors duration-300 shadow-sm shadow-emerald-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-dark-slate hover:text-corporate-blue focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-dark-slate hover:text-corporate-blue hover:bg-light-blue"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center bg-fresh-green hover:bg-emerald-600 text-white px-4 py-3 rounded-md font-medium text-base transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
