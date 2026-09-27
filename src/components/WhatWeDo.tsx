import React from 'react';
import { PILLAR_AREAS } from '@/data/members';
import { Cpu, Car, Calendar, Palette, Globe, Check, ArrowRight } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-700" />;
      case 'Car':
        return <Car className="w-5 h-5 text-teal-700" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-teal-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-teal-700" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-teal-700" />;
      default:
        return <Cpu className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="what-we-do" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Domains of Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What We Do
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Bridging fundamental chemical principles and real-world engineering through focused student teams, cutting-edge software simulations, and community engagement.
          </p>
        </div>

        {/* 5 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLAR_AREAS.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-6 sm:p-7 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-teal-400/50 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100/80 group-hover:bg-teal-100/60 transition-colors flex-shrink-0">
                    {getIcon(pillar.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {pillar.summary}
                </p>

                {/* Focus Areas List */}
                <ul className="space-y-2 border-t border-slate-200/60 pt-4">
                  {pillar.focus.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>AIChE NITR • Focus</span>
                <span className="text-teal-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Active
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
