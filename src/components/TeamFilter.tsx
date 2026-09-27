'use client';

import React from 'react';
import { TeamCategory, Member } from '@/types/member';

interface TeamFilterProps {
  categories: TeamCategory[];
  activeCategory: TeamCategory;
  onSelectCategory: (category: TeamCategory) => void;
  members: Member[];
}

export const TeamFilter: React.FC<TeamFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  members,
}) => {
  const getCount = (category: TeamCategory) => {
    if (category === 'All') return members.length;
    return members.filter((m) => m.category === category).length;
  };

  return (
    <div
      role="tablist"
      aria-label="Filter team members by domain"
      className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1 focus-ring"
    >
      {categories.map((category) => {
        const isSelected = activeCategory === category;
        const count = getCount(category);

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2 ${
              isSelected
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                isSelected
                  ? 'bg-teal-800 text-teal-100'
                  : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
