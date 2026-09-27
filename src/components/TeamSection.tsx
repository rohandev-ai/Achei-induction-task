'use client';

import React, { useState, useMemo } from 'react';
import { Member, TeamCategory } from '@/types/member';
import { MEMBERS } from '@/data/members';
import { MemberCard } from '@/components/MemberCard';
import { MemberModal } from '@/components/MemberModal';
import { TeamFilter } from '@/components/TeamFilter';
import { Search, Sparkles, Users } from 'lucide-react';

const CATEGORIES: TeamCategory[] = [
  'All',
  'Executive',
  'Technical',
  'Events',
  'Design & Media',
  'Outreach',
  'Chem-E-Car',
];

export const TeamSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Filter members based on category and search query
  const filteredMembers = useMemo(() => {
    return MEMBERS.filter((member) => {
      const matchesCategory =
        activeCategory === 'All' ? true : member.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Executive members subset for "All" view
  const executiveMembers = useMemo(() => {
    return filteredMembers.filter((m) => m.category === 'Executive');
  }, [filteredMembers]);

  // Core team members subset for "All" view
  const coreTeamMembers = useMemo(() => {
    return filteredMembers.filter((m) => m.category !== 'Executive');
  }, [filteredMembers]);

  return (
    <section id="team" className="py-16 sm:py-24 bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/70">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-teal-600" />
              <span>Chapter Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive Committee & Core Team
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Meet the student leaders, researchers, and engineers driving AIChE NIT Rourkela.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search member, role, or team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white rounded-lg border border-slate-200/90 text-slate-800 placeholder-slate-400 focus:outline-2 focus:outline-teal-600 focus:border-transparent transition-colors shadow-2xs"
                aria-label="Search members"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 mb-10">
          <TeamFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            members={MEMBERS}
          />
        </div>

        {/* --- DUAL SECTION VIEW (When 'All' is active and no restrictive search) --- */}
        {activeCategory === 'All' && !searchQuery ? (
          <div className="space-y-16">
            {/* Section 1: Executive Committee */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium mb-1">
                  <span>Leadership</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Executive Committee
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Meet the students leading AIChE NIT Rourkela.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {executiveMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onSelect={setSelectedMember}
                  />
                ))}
              </div>
            </div>

            {/* Section 2: Core Team */}
            <div className="pt-8 border-t border-slate-200/80">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-1">
                  <span>Specialized Domains</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Core Team
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Different teams, one chapter, working together to build meaningful experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreTeamMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onSelect={setSelectedMember}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* --- FILTERED / SEARCH VIEW --- */
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {activeCategory === 'All'
                    ? `Search results for "${searchQuery}"`
                    : `${activeCategory} Team`}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing {filteredMembers.length} team members
                </p>
              </div>

              {(searchQuery || activeCategory !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 underline"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onSelect={setSelectedMember}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white rounded-xl border border-slate-200 p-8">
                <p className="text-base font-semibold text-slate-700">No team members found</p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search query or select another category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-md transition-colors"
                >
                  View All Members
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Member Detail Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
