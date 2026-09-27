import React from 'react';
import { CHAPTER_STATS } from '@/data/members';

export const Stats: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-slate-200/70" aria-label="Chapter Overview Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Subtitle */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Chapter At A Glance
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            *Prototype figures for directory preview
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CHAPTER_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`group p-6 rounded-xl bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-teal-400/50 transition-all duration-200 hover:shadow-sm ${
                idx !== 0 ? 'lg:border-l-slate-200' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-base font-bold text-slate-800">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-slate-500 leading-normal line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
