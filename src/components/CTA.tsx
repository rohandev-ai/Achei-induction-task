import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, spacious card without loud gradients */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xs">
          
          {/* Subtle background dotted grid */}
          <div className="absolute inset-0 bg-scientific-grid opacity-30 pointer-events-none" />

          {/* Faint subtle teal corner glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Small chapter pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200/80 text-teal-800 text-xs font-semibold mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Induction & Chapter Membership</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Want to be part of what we&apos;re building?
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore AIChE NIT Rourkela, connect with our community and be part of the next chapter.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:aiche.nitrkl@gmail.com?subject=Inquiry%20regarding%20AIChE%20NIT%20Rourkela"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-xs hover:shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              >
                <span>Join AIChE NIT Rourkela</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/aiche.nitrkl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Connect With Us</span>
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-8 text-xs font-mono text-slate-400">
              Department of Chemical Engineering • National Institute of Technology, Rourkela, Odisha 769008
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
