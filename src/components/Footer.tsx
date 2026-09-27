import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/icons/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1 & 2: Chapter Branding & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-white p-0.5 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="AIChE NIT Rourkela Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 tracking-tight">
                  AIChE NIT Rourkela
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Student Chapter #AIChE-NITR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              The official student chapter of the American Institute of Chemical Engineers at National Institute of Technology, Rourkela. Fostering excellence in chemical sciences, process modeling, and student innovation.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>NIT Rourkela Campus, Sector 1, Rourkela, Odisha 769008</span>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-3.5">
              Directory
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#team" className="hover:text-teal-700 transition-colors">
                  Executive Committee
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-teal-700 transition-colors">
                  Core Teams
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-teal-700 transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-teal-700 transition-colors">
                  Chapter Highlights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-700 transition-colors">
                  Join & Inductions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Focus Areas */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-3.5">
              Initiatives
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-600">Chem-E-Car 4.0</span>
              </li>
              <li>
                <span className="text-slate-600">Process Simulation</span>
              </li>
              <li>
                <span className="text-slate-600">K-12 STEM Camps</span>
              </li>
              <li>
                <span className="text-slate-600">Annual Chemical Conclave</span>
              </li>
              <li>
                <span className="text-slate-600">Industrial Visits</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect & Socials */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-3.5">
              Connect
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/aiche.nitrkl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-rose-600" />
                  <span>@aiche.nitrkl</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>AIChE NIT Rourkela</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:aiche.nitrkl@gmail.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-700" />
                  <span>aiche.nitrkl@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aichenitrkl.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>aichenitrkl.github.io</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AIChE NIT Rourkela Student Chapter. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span>Affiliated with AIChE Global</span>
            <span>•</span>
            <span>NIT Rourkela Induction Task Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
