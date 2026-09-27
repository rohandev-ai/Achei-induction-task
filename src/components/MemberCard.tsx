'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, ArrowUpRight, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { Member } from '@/types/member';

interface MemberCardProps {
  member: Member;
  onSelect: (member: Member) => void;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Executive':
        return 'bg-teal-50 text-teal-800 border-teal-200/80';
      case 'Technical':
        return 'bg-blue-50 text-blue-800 border-blue-200/80';
      case 'Chem-E-Car':
        return 'bg-amber-50 text-amber-900 border-amber-200/80';
      case 'Events':
        return 'bg-purple-50 text-purple-800 border-purple-200/80';
      case 'Design & Media':
        return 'bg-rose-50 text-rose-800 border-rose-200/80';
      case 'Outreach':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(member)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(member);
        }
      }}
      className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 hover:border-teal-500/40 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2 cursor-pointer text-left"
      aria-label={`View detailed profile for ${member.name}, ${member.role}`}
    >
      <div>
        {/* Top: Category Tag & Role Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(
              member.category
            )}`}
          >
            {member.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {member.year || 'NIT Rourkela'}
          </span>
        </div>

        {/* Member Photo & Basic Details */}
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-teal-500/40 transition-colors flex-shrink-0 bg-slate-100">
            {!imageError ? (
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                fill
                sizes="(max-width: 640px) 64px, 72px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                <User className="w-8 h-8" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* 1. Name */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate">
              {member.name}
            </h3>

            {/* 2. Role */}
            <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-0.5 truncate">
              {member.role}
            </p>

            {/* 3. Team/Department */}
            <p className="text-xs text-slate-500 mt-0.5 truncate font-medium">
              {member.department}
            </p>
          </div>
        </div>

        {/* 4. Bio */}
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {member.bio}
        </p>
      </div>

      {/* 5. Footer with Social Links & Modal Trigger */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
        {/* Social / Contact Icons */}
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-teal-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-1"
              aria-label={`${member.name}'s LinkedIn Profile`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-1"
              aria-label={`${member.name}'s GitHub Profile`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-1.5 rounded-md text-slate-400 hover:text-teal-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-1"
              aria-label={`Send email to ${member.name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* View Details hint */}
        <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-slate-500 group-hover:text-teal-700 transition-colors">
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
