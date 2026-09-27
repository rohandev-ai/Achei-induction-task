'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Team', href: '#team' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand Identity */}
          <Link
            href="#"
            className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2 rounded-lg p-1"
            aria-label="AIChE NIT Rourkela Home"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 bg-white p-0.5 shadow-xs transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="AIChE NIT Rourkela Chapter Emblem"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                AIChE NIT Rourkela
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wide flex items-center gap-1.5">
                <span>Student Chapter</span>
                <span className="w-1 h-1 rounded-full bg-teal-600 inline-block"></span>
                <span className="text-[11px] font-mono text-slate-400">EST. 2013</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Affiliation Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>NIT Rourkela • ChE</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-md transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-md transition-colors"
              >
                Connect With AIChE
              </a>
              <div className="text-center text-xs text-slate-400 font-mono py-1">
                American Institute of Chemical Engineers • NIT Rourkela
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
