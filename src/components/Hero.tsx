import React from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, BookOpen, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-200/60 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Subtle Chemistry-Inspired Background Geometry (Hexagonal & Molecular Bonds) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-scientific-grid opacity-30" />

        {/* Minimal Hexagonal Chemical Ring SVG Background */}
        <svg
          className="absolute -right-16 -top-12 w-[520px] h-[520px] text-teal-600/10 stroke-current"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon 1 */}
          <polygon
            points="200,60 280,106 280,198 200,244 120,198 120,106"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Hexagon 2 */}
          <polygon
            points="280,198 360,244 360,336 280,382 200,336 200,244"
            strokeWidth="1.5"
          />
          {/* Hexagon 3 */}
          <polygon
            points="120,198 200,244 200,336 120,382 40,336 40,244"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          {/* Molecular Nodes */}
          <circle cx="200" cy="60" r="4" className="fill-teal-600/20" />
          <circle cx="280" cy="106" r="5" className="fill-teal-600/30" />
          <circle cx="280" cy="198" r="4" className="fill-teal-600/20" />
          <circle cx="200" cy="244" r="6" className="fill-teal-700/30" />
          <circle cx="120" cy="198" r="4" className="fill-teal-600/20" />
          <circle cx="120" cy="106" r="4" className="fill-teal-600/20" />
          <circle cx="360" cy="244" r="5" className="fill-teal-600/25" />
          <circle cx="360" cy="336" r="4" className="fill-teal-600/20" />
        </svg>

        {/* Faint Radial Glow behind the Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-100/35 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Small Technical Badge / Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span>AIChE NIT Rourkela</span>
              <span className="text-teal-300">•</span>
              <span className="font-mono text-[11px] text-teal-700 font-normal">Student Chapter Directory</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Meet the <span className="text-teal-700">Team</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Meet the people shaping our chapter through technical innovation, events, collaboration and community.
            </p>

            {/* Quick Badges / Meta Info */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100/90 border border-slate-200">
                <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                Department of Chemical Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100/90 border border-slate-200">
                <Layers className="w-3.5 h-3.5 text-teal-600" />
                National Institute of Technology Rourkela
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-xs hover:shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              >
                <span>Browse Executive & Core Directory</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
              >
                <span>Explore Chapter Initiatives</span>
              </a>
            </div>
          </div>

          {/* Chapter Logo Presentation */}
          <div className="flex-shrink-0 relative">
            <div className="relative p-6 sm:p-8 bg-white/90 backdrop-blur-xs rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/50 flex flex-col items-center text-center max-w-xs transition-transform hover:-translate-y-1 duration-200">
              {/* Technical corner coordinate markings */}
              <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-slate-400">NITRKL-CHE</div>
              <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-teal-700 font-semibold">AIChE</div>

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-2 rounded-full border border-teal-100 bg-gradient-to-b from-teal-50/40 to-white shadow-inner flex items-center justify-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Official AIChE NIT Rourkela Logo"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full drop-shadow-xs"
                  priority
                />
              </div>

              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                AIChE Student Chapter
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                National Institute of Technology, Rourkela
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Rourkela, Odisha</span>
                <span className="text-teal-700 font-semibold">Active Chapter</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
