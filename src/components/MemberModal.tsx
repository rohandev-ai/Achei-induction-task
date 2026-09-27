'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, Mail, CheckCircle2, FlaskConical, User, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { Member } from '@/types/member';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ member, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setImageError(false);
  }, [member]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
      aria-labelledby="member-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8 text-left"
      >
        {/* Decorative Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-teal-600 via-teal-500 to-amber-500" />

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2 z-10"
          aria-label="Close modal dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header Info: Photo + Name + Role */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-teal-500/20 shadow-xs flex-shrink-0 bg-slate-100">
              {!imageError ? (
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                  <User className="w-12 h-12" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
                  {member.category}
                </span>
                {member.year && (
                  <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                    {member.year}
                  </span>
                )}
              </div>

              <h2 id="member-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
                {member.name}
              </h2>

              <p className="text-sm font-semibold text-teal-700 mt-1">
                {member.role}
              </p>

              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                {member.department} • NIT Rourkela
              </p>

              {/* Direct Quick Contact Buttons */}
              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-teal-700" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{member.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Extended Bio */}
          <div className="py-5 border-b border-slate-100">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Background & Leadership Profile
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {member.extendedBio || member.bio}
            </p>
          </div>

          {/* Key Responsibilities */}
          {member.responsibilities && member.responsibilities.length > 0 && (
            <div className="py-5 border-b border-slate-100">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Key Chapter Responsibilities
              </h3>
              <ul className="space-y-2">
                {member.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Featured Chapter Projects & Research Interests */}
          {member.projects && member.projects.length > 0 && (
            <div className="pt-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                <span>Featured Projects & Initiatives</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.projects.map((proj, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-100/80 text-slate-800 border border-slate-200"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono text-[11px]">AIChE NIT Rourkela Chapter ID: #AIChE-NITR</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
