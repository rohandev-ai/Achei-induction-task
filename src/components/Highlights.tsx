import React from 'react';
import { CHAPTER_HIGHLIGHTS } from '@/data/members';
import { Award, Zap, BookMarked, ArrowUpRight } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-teal-600" />
              <span>Chapter Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Initiatives & Highlights
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              From our flagship Chem-E-Car prototype to district-wide STEM camps, explore how our students make a tangible mark.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            *Mock data structured for chapter records
          </span>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CHAPTER_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 hover:border-teal-500/40 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
                    {item.tag}
                  </span>
                  {item.metrics && (
                    <span className="text-xs font-mono font-semibold text-teal-700 bg-teal-50/60 px-2 py-0.5 rounded border border-teal-100">
                      {item.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px]">AIChE NIT Rourkela</span>
                <span className="inline-flex items-center gap-1 font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>View Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
