import { Member, ChapterStat, ActivityHighlight, PillarArea } from '@/types/member';

export const CHAPTER_STATS: ChapterStat[] = [
  {
    id: 'teams',
    value: '5+',
    label: 'Core Teams',
    description: 'Technical, Chem-E-Car, Events, Outreach, Design & Media',
  },
  {
    id: 'members',
    value: '50+',
    label: 'Active Members',
    description: 'Undergraduate & postgraduate researchers across disciplines',
  },
  {
    id: 'events',
    value: '12+',
    label: 'Annual Events',
    description: 'Workshops, hackathons, K-12 sessions, & technical conclaves',
  },
  {
    id: 'chapter',
    value: '1',
    label: 'AIChE Chapter',
    description: 'Affiliated with AIChE Global & NIT Rourkela, Odisha',
  },
];

export const PILLAR_AREAS: PillarArea[] = [
  {
    id: 'tech',
    iconName: 'Cpu',
    title: 'Technical & Research',
    summary:
      'Advancing computational chemical engineering, CFD simulations, and process modeling using modern software tools.',
    focus: ['Aspen Plus & DWSIM Simulations', 'Computational Fluid Dynamics', 'Green Hydrogen & Energy Systems'],
  },
  {
    id: 'chem-e-car',
    iconName: 'Car',
    title: 'Chem-E-Car',
    summary:
      'Engineering autonomous model vehicles powered and controlled purely by precise chemical reactions and custom circuitry.',
    focus: ['Chemical Reaction Kinetics', 'Iodine Clock Stopping Mechanisms', 'Chassis & Electronic Control'],
  },
  {
    id: 'events',
    iconName: 'Calendar',
    title: 'Events & Workshops',
    summary:
      'Curating flagship symposiums, guest speaker series with global alumni, and hands-on skill development bootcamps.',
    focus: ['Annual Chemical Conclave', 'Process Design Hackathons', 'Industrial Alumni Panels'],
  },
  {
    id: 'design',
    iconName: 'Palette',
    title: 'Design & Media',
    summary:
      'Crafting clean visual narratives, scientific infographics, newsletters, and digital experiences for our global audience.',
    focus: ['Scientific Infographics', 'Social Media & Brand Identity', 'Chapter Web & UI Development'],
  },
  {
    id: 'outreach',
    iconName: 'Globe',
    title: 'Outreach & Community',
    summary:
      'Fostering STEM curiosity through interactive science demonstrations in rural schools and inter-chapter collaborations.',
    focus: ['K-12 STEM Education Camps', 'Inter-NIT Technical Exchanges', 'Women in Engineering Circles'],
  },
];

export const CHAPTER_HIGHLIGHTS: ActivityHighlight[] = [
  {
    id: 'chem-e-car-initiative',
    tag: 'Flagship Project',
    title: 'Chem-E-Car 4.0 Prototype',
    description:
      'Designing an automated braking mechanism driven by spectrophotometric iodine clock kinetics to compete at the AIChE Student Regional Conference.',
    metrics: '99.2% Stopping Accuracy',
  },
  {
    id: 'k12-outreach',
    tag: 'Community Impact',
    title: 'K-12 STEM Discovery Days',
    description:
      'Hands-on chemistry and renewable energy workshops conducted across government and high schools in the Sundargarh district.',
    metrics: '650+ Students Reached',
  },
  {
    id: 'process-bootcamp',
    tag: 'Technical Bootcamp',
    title: 'Process Modeling with DWSIM',
    description:
      'A 3-week intensive workshop teaching undergraduates thermodynamics, flash distillation column sizing, and plant flowsheeting.',
    metrics: '140+ Certified Attendees',
  },
  {
    id: 'industry-symposium',
    tag: 'Annual Conclave',
    title: 'Sustainable Process Conclave',
    description:
      'Bringing together chemical process leaders, petrochemical experts, and researchers to discuss carbon capture and circular economy.',
    metrics: '8 Keynote Addresses',
  },
];

export const MEMBERS: Member[] = [
  // --- EXECUTIVE COMMITTEE (5-6 members) ---
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    role: 'President',
    department: 'Chemical Engineering',
    category: 'Executive',
    year: 'Final Year B.Tech',
    bio: 'Guiding chapter strategy, academic collaborations, and international AIChE liaison with a focus on sustainable chemical processes.',
    extendedBio:
      'Aarav is passionate about catalytic reaction engineering and carbon capture systems. As President, he spearheads the chapter vision, coordinates with NIT Rourkela administration and AIChE Global, and mentors student teams in academic publishing and conference participation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    email: 'president.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Strategic leadership and chapter governance',
      'Liaison with AIChE Global & Faculty Advisors',
      'Overseeing annual budget and institutional sponsorships',
    ],
    projects: ['CO2 Absorption Column Pilot Study', 'AIChE Regional Chapter Charter 2025'],
  },
  {
    id: 'ananya-patel',
    name: 'Ananya Patel',
    role: 'Vice President',
    department: 'Chemical Engineering',
    category: 'Executive',
    year: 'Pre-Final Year B.Tech',
    bio: 'Overseeing chapter operations, cross-team synchronization, and student mentorship across technical and design branches.',
    extendedBio:
      'Ananya focuses on process dynamics, computational modeling, and collaborative STEM initiatives. She ensures operational alignment across all five core teams and directs internal talent development programs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    email: 'vp.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Day-to-day team coordination and milestone tracking',
      'Student chapter induction and onboarding programs',
      'Organizing semester project showcases',
    ],
    projects: ['Biofuels Transesterification Optimization', 'Chapter Induction Roadmap'],
  },
  {
    id: 'rohan-verma',
    name: 'Rohan Verma',
    role: 'Secretary',
    department: 'Chemical Engineering',
    category: 'Executive',
    year: 'Pre-Final Year B.Tech',
    bio: 'Managing chapter communications, official correspondence, documentation, and institutional compliance.',
    extendedBio:
      'Rohan maintains the administrative backbone of AIChE NIT Rourkela. His work ensures that every workshop, symposium, and student paper complies with student activity center guidelines and AIChE national reporting requirements.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    email: 'secretary.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Official documentation and annual activity reporting',
      'Membership registry and certification management',
      'Faculty advisor and department committee coordination',
    ],
    projects: ['AIChE Annual Outstanding Student Chapter Report', 'Digital Archive Repository'],
  },
  {
    id: 'priya-iyer',
    name: 'Priya Iyer',
    role: 'Technical Lead',
    department: 'Chemical Engineering & Computing',
    category: 'Executive',
    year: 'Final Year B.Tech',
    bio: 'Directing research projects, process simulation clinics, and computational chemistry tools for undergraduate members.',
    extendedBio:
      'Priya blends traditional transport phenomena with modern machine learning for predictive property estimation. She leads technical workshops on DWSIM, Aspen Plus, and OpenFOAM.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    email: 'technical.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Technical curriculum and workshop architecture',
      'Directing undergraduate research and review papers',
      'Process simulation software mentorship',
    ],
    projects: ['PINN for Non-Newtonian Flow Estimation', 'Open-Source Heat Exchanger Sizer'],
  },
  {
    id: 'vikramaditya-das',
    name: 'Vikramaditya Das',
    role: 'Events & Outreach Lead',
    department: 'Chemical Engineering',
    category: 'Executive',
    year: 'Pre-Final Year B.Tech',
    bio: 'Orchestrating technical conclaves, guest masterclasses, and regional science engagement camps.',
    extendedBio:
      'Vikramaditya has spearheaded community-centered science education and high-impact guest speaker series, connecting students with engineers from Indian and global research institutes.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    email: 'events.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Flagship event planning and logistics',
      'School science demonstration drives (K-12)',
      'Industry speaker and guest alumni coordination',
    ],
    projects: ['Annual Chemical Conclave 2024', 'Sundargarh K-12 Chemistry Camp'],
  },
  {
    id: 'sneha-mukherjee',
    name: 'Sneha Mukherjee',
    role: 'Design & Media Lead',
    department: 'Industrial Design & Media',
    category: 'Executive',
    year: 'Final Year B.Tech',
    bio: 'Crafting the chapter visual identity, scientific communication design, and digital engagement assets.',
    extendedBio:
      'Sneha believes that clear design translates complex science into accessible community knowledge. She manages the visual aesthetics across Instagram (@aiche.nitrkl), event posters, and web interfaces.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    email: 'design.aiche@nitrkl.ac.in',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Brand guideline maintenance and social media design',
      'Design of research posters and event collateral',
      'Visual asset production for video and web',
    ],
    projects: ['AIChE NITRKL Brand Refresh 2024', 'Scientific Infographics Series'],
  },

  // --- CORE TEAM: TECHNICAL ---
  {
    id: 'kabir-mehta',
    name: 'Kabir Mehta',
    role: 'Process Simulation Specialist',
    department: 'Chemical Engineering',
    category: 'Technical',
    year: 'Second Year B.Tech',
    bio: 'Specializing in continuous distillation flowsheets, heat integration, and Aspen Plus simulations.',
    extendedBio:
      'Kabir conducts weekly problem-solving sessions on McCabe-Thiele and Ponchon-Savarit graphical methods along with computer simulation.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    email: 'kabir.mehta@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Simulation module authoring', 'Lab tutorial support'],
    projects: ['Extractive Distillation Model', 'DWSIM Community Tutorials'],
  },
  {
    id: 'tanya-sen',
    name: 'Tanya Sen',
    role: 'CFD & Transport Modeling Analyst',
    department: 'Chemical Engineering',
    category: 'Technical',
    year: 'Third Year B.Tech',
    bio: 'Simulating multiphase flows, fluidized bed reactors, and velocity profiles using ANSYS Fluent.',
    extendedBio:
      'Tanya analyzes hydrodynamic properties and boundary layer behaviors in packed columns, contributing computational insights to student research.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    email: 'tanya.sen@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Multiphase mesh generation', 'Reactor fluid dynamic modeling'],
    projects: ['Packed Bed Void Fraction Analysis', 'Turbulent Mixing Simulations'],
  },

  // --- CORE TEAM: CHEM-E-CAR ---
  {
    id: 'dev-prasad',
    name: 'Dev Prasad',
    role: 'Chem-E-Car Captain',
    department: 'Chemical Engineering',
    category: 'Chem-E-Car',
    year: 'Pre-Final Year B.Tech',
    bio: 'Leading chemical reaction vehicle prototyping, battery chemistry, and precision stopping kinematics.',
    extendedBio:
      'Dev manages the fabrication of the chapter Chem-E-Car prototype, benchmarking zinc-air batteries and photo-resistor triggered iodine clock braking.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    email: 'dev.prasad@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Vehicle hardware architecture', 'Chemical safety compliance in testing'],
    projects: ['Chem-E-Car Generation 4', 'Zinc-Air Electrochemical Cell Stack'],
  },
  {
    id: 'meera-nambiar',
    name: 'Meera Nambiar',
    role: 'Reaction Kinetics Strategist',
    department: 'Chemistry & Engineering',
    category: 'Chem-E-Car',
    year: 'Second Year B.Tech',
    bio: 'Calibrating concentration-dependent chemical stopping triggers for exact target distance stopping.',
    extendedBio:
      'Meera models temperature and catalyst effects on reaction rates to guarantee millisecond-level precision in car braking tests.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    email: 'meera.nambiar@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Reagent concentration calibration', 'Optical sensor calibration'],
    projects: ['Temperature-Compensated Iodine Clock', 'Sodium Thiosulfate Titration Automation'],
  },

  // --- CORE TEAM: EVENTS ---
  {
    id: 'arjun-nair',
    name: 'Arjun Nair',
    role: 'Conclave Coordinator',
    department: 'Chemical Engineering',
    category: 'Events',
    year: 'Second Year B.Tech',
    bio: 'Curating technical schedules, guest registrations, and panel discussions for regional symposiums.',
    extendedBio:
      'Arjun manages logistics and speaker liaisons, ensuring smooth execution of multi-day chapter conferences and hands-on laboratory workshops.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    email: 'arjun.nair@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Venue & audio-visual orchestration', 'Speaker accommodation and reception'],
    projects: ['Virtual Process Hackathon', 'Alumni Mentorship Weekend'],
  },
  {
    id: 'ritika-das',
    name: 'Ritika Das',
    role: 'Workshops Manager',
    department: 'Chemical Engineering',
    category: 'Events',
    year: 'Third Year B.Tech',
    bio: 'Organizing peer-led laboratory demonstrations, safety drills, and induction challenge activities.',
    extendedBio:
      'Ritika ensures that every workshop has clear pedagogical objectives, lab safety protocols, and follow-up resource kits for junior students.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    email: 'ritika.das@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Workshop scheduling and resource kits', 'Participant feedback analysis'],
    projects: ['Lab Safety Interactive Drill', 'Freshmen Chemical Engineering Primer'],
  },

  // --- CORE TEAM: DESIGN & MEDIA ---
  {
    id: 'karthik-rajan',
    name: 'Karthik Rajan',
    role: 'Visual Identity Designer',
    department: 'Mechanical & Product Design',
    category: 'Design & Media',
    year: 'Second Year B.Tech',
    bio: 'Designing typography layouts, merchandise, vector graphics, and Instagram event posters.',
    extendedBio:
      'Karthik translates scientific themes into modern, accessible graphics that elevate the chapter digital footprint across social platforms.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    email: 'karthik.rajan@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Social media promotional graphics', 'Chapter merchandise and badges'],
    projects: ['Conclave 2024 Design System', 'Digital Newsletter "Alchemist"'],
  },
  {
    id: 'aditi-joshi',
    name: 'Aditi Joshi',
    role: 'Digital Content & Web Curator',
    department: 'Computer Science & Engineering',
    category: 'Design & Media',
    year: 'Second Year B.Tech',
    bio: 'Maintaining the chapter digital presence, web directory, and technical article formatting.',
    extendedBio:
      'Aditi bridges software engineering and science communication, helping keep our web platforms performant, modern, and accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1534751516642-a171edd25218?auto=format&fit=crop&w=600&q=80',
    email: 'aditi.joshi@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Web component architecture', 'Accessible content publishing'],
    projects: ['Interactive Chapter Team Directory', 'Event Registration Portal'],
  },

  // --- CORE TEAM: OUTREACH ---
  {
    id: 'siddharth-mishra',
    name: 'Siddharth Mishra',
    role: 'K-12 STEM Ambassador',
    department: 'Chemical Engineering',
    category: 'Outreach',
    year: 'Third Year B.Tech',
    bio: 'Developing exciting, safe kitchen-chemistry demonstrations to ignite young minds in local schools.',
    extendedBio:
      'Siddharth believes in early scientific curiosity. He coordinates volunteer teams delivering fun experiments in acids, polymers, and clean water filtration.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    email: 'siddharth.mishra@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['School partnership liaisons', 'Safe demonstration protocol design'],
    projects: ['Water Filtration DIY Kits', 'Polymer Slime Chemistry Workshops'],
  },
  {
    id: 'pooja-choudhury',
    name: 'Pooja Choudhury',
    role: 'Community & Alumni Relations',
    department: 'Chemical Engineering',
    category: 'Outreach',
    year: 'Second Year B.Tech',
    bio: 'Connecting current students with AIChE alumni in industry and leading inter-chapter exchange forums.',
    extendedBio:
      'Pooja builds long-term networks with graduated members across global universities and chemical industry leaders, creating career guidance avenues.',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80',
    email: 'pooja.choudhury@aichenitrkl.org',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    responsibilities: ['Alumni database coordination', 'Inter-chapter virtual summits'],
    projects: ['Alumni Spotlight Podcast Series', 'Global Graduate Study Roadmap'],
  },
];
