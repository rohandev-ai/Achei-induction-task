export type TeamCategory =
  | 'All'
  | 'Executive'
  | 'Technical'
  | 'Events'
  | 'Design & Media'
  | 'Outreach'
  | 'Chem-E-Car';

export interface Member {
  id: string;
  name: string;
  role: string;
  department: string;
  category: Exclude<TeamCategory, 'All'>;
  bio: string;
  extendedBio?: string;
  image: string;
  email: string;
  github: string;
  linkedin: string;
  responsibilities?: string[];
  projects?: string[];
  year?: string;
}

export interface ChapterStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ActivityHighlight {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics?: string;
}

export interface PillarArea {
  id: string;
  iconName: 'Cpu' | 'Car' | 'Calendar' | 'Palette' | 'Globe';
  title: string;
  summary: string;
  focus: string[];
}
