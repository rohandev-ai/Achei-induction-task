# AIChE NIT Rourkela — Executive Team & Chapter Directory

> **Induction Task Submission**  
> A polished, professional, responsive Executive Team Directory website for the **American Institute of Chemical Engineers (AIChE) Student Chapter at National Institute of Technology, Rourkela (NIT Rourkela)**.

---

## 🔬 Project Overview

This project is a modern, academic, chemistry-inspired web application built specifically for the **AIChE NIT Rourkela Student Chapter**. It provides an interactive chapter directory showcasing the **Executive Committee** and **Core Teams** (Technical, Events, Chem-E-Car, Design & Media, Outreach).

The design strictly follows the chapter's official visual identity derived from their official chapter emblem and Instagram presence ([@aiche.nitrkl](https://www.instagram.com/aiche.nitrkl)):
* **Light-First Academic Theme**: Bright, crisp white and warm off-white foundation with subtle slate borders.
* **Restrained Accent Palette**: Muted Scientific Teal (`#0D9488` / `#0F766E`) reflecting chemical engineering clarity, accented by warm amber cues matching the gear in the chapter emblem.
* **Chemistry-Inspired Visual Language**: Minimal hexagonal carbon-ring lattice geometry, faint scientific dot grid, and clean technical badges (`[ChE • NITRKL]`).
* **Zero Dark-Blue / Gold Clutter**: Free of heavy dark themes, corporate SaaS cliches, or loud neon gradients.

---

## ✨ Features

1. **Brand-Aligned Navigation (`Navbar`)**:
   - Official AIChE NIT Rourkela logo with chapter founding metadata.
   - Smooth desktop navigation and accessible mobile drawer with keyboard controls.
   - Affiliation badge for the Department of Chemical Engineering, NIT Rourkela.

2. **Hero Section (`Hero`)**:
   - Heading hierarchy: *"Meet the Team"* with chapter label and mission narrative.
   - Subtle chemistry background: SVG carbon-ring hexagons, bond nodes, and coordinates.
   - Chapter emblem card with active chapter status and geolocation tags.

3. **Chapter Statistics (`Stats`)**:
   - 4 key metrics: **5+ Core Teams**, **50+ Active Members**, **12+ Annual Events**, and **1 Global Chapter**.
   - Transparent disclaimer noting placeholder figures for directory prototyping.

4. **Interactive Team Directory (`TeamSection` & `TeamFilter`)**:
   - **Category Tabs**: Filter between `All`, `Executive`, `Technical`, `Events`, `Design & Media`, `Outreach`, and `Chem-E-Car` with real-time member counts.
   - **Live Search**: Instant keyword search across member names, roles, departments, and bios.
   - **Dual Leadership & Core Grid**: Automatically separates Executive Committee leadership from specialized Core Teams when browsing the full directory.

5. **Polished Member Cards (`MemberCard`)**:
   - High-contrast visual hierarchy: Name → Role → Department → Bio → Social links.
   - Micro-interactions: Subtle lift (`hover:-translate-y-1`), border tint, and gentle avatar zoom.
   - Fallback avatar handling for zero broken images.
   - Keyboard accessible (`Enter` / `Space` triggers details modal).

6. **Member Detail Modal (`MemberModal`)**:
   - Full leadership profile drawer displaying extended bio, key chapter responsibilities, and featured research/engineering projects.
   - Direct communication channels (Email, LinkedIn, GitHub).
   - Accessible dialog: `aria-modal="true"`, focus management, backdrop click to close, and `Escape` key listener.

7. **Five Core Domains of Excellence (`WhatWeDo`)**:
   - Technical & Research (Process modeling, Aspen Plus, DWSIM, CFD).
   - Chem-E-Car (Reaction kinetics, iodine clock stopping mechanisms).
   - Events & Workshops (Conclaves, hackathons, guest lectures).
   - Design & Media (Scientific infographics, branding, digital platforms).
   - Outreach & Community (K-12 STEM camps, inter-NIT exchanges).

8. **Chapter Milestones & Initiatives (`Highlights`)**:
   - Structured cards highlighting real-world chapter activities (Chem-E-Car 4.0 prototype, K-12 STEM days, simulation bootcamps).

9. **Induction & Membership CTA (`CTA`)**:
   - Clean, non-intrusive action card inviting students to connect and apply for chapter inductions.

10. **Academic Chapter Footer (`Footer`)**:
    - Chapter description, quick links, NIT Rourkela campus address, verified social links, and copyright notices.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom light theme tokens & grid utilities)
* **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vector icons
* **Data Layer**: Pure local mock data architecture (Zero backend dependencies required)

---

## 📁 Project Structure

```
Achei induction task/
├── public/
│   ├── logo.png               # Official AIChE NIT Rourkela student chapter emblem
│   └── nitr_emblem.png        # NIT Rourkela institute emblem
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, scientific dot grid, custom scrollbars
│   │   ├── layout.tsx         # Page metadata, SEO tags, and font definitions
│   │   └── page.tsx           # Page assembler
│   ├── components/
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx # Pixel-perfect SVG brand icons (GitHub, LinkedIn, Instagram)
│   │   ├── CTA.tsx            # Induction & contact section
│   │   ├── Footer.tsx         # Light chapter footer with campus info
│   │   ├── Hero.tsx           # Hero with chemistry lattice background & emblem card
│   │   ├── Highlights.tsx     # Initiatives & project milestones
│   │   ├── MemberCard.tsx     # Clean interactive card with hover states
│   │   ├── MemberModal.tsx    # Accessible member detail modal with ESC support
│   │   ├── Navbar.tsx         # Responsive navbar with mobile menu
│   │   ├── Stats.tsx          # Chapter overview statistics
│   │   ├── TeamFilter.tsx     # Category filtering pills with counts
│   │   ├── TeamSection.tsx    # Executive & Core team directory container
│   │   └── WhatWeDo.tsx       # 5 operational domains
│   ├── data/
│   │   └── members.ts         # Centralized dataset (Members, Stats, What-we-do, Highlights)
│   └── types/
│       └── member.ts          # TypeScript interfaces (Member, Category, Stats, etc.)
├── next.config.ts             # Remote image configuration (Unsplash, Cloudinary)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and **npm** installed:
```bash
node -v
npm -v
```

### 1. Installation

Clone or open the project folder in your terminal and install dependencies:
```bash
npm install
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

### 3. Production Build & Validation

To test the production build for performance and TypeScript verification:
```bash
npm run build
npm run start
```

---

## ☁️ Deploying on Vercel

The application is configured to deploy effortlessly on **Vercel**:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Keep default build settings (`npm run build`) and click **"Deploy"**.
6. Your chapter website will be live in seconds with global edge CDN and automatic SSL.

---

## 📝 Customization Guide

### How to Replace Member Information
All member data is decoupled from the UI and lives inside `src/data/members.ts`.

To add or modify a member, edit the `MEMBERS` array:
```typescript
{
  id: 'unique-id',
  name: 'Student Name',
  role: 'President / Lead',
  department: 'Chemical Engineering',
  category: 'Executive', // 'Executive' | 'Technical' | 'Events' | 'Design & Media' | 'Outreach' | 'Chem-E-Car'
  year: 'Final Year B.Tech',
  bio: 'Short 1-2 sentence bio...',
  extendedBio: 'Detailed leadership background...',
  image: '/path-or-url-to-photo.jpg',
  email: 'student@nitrkl.ac.in',
  github: 'https://github.com/...',
  linkedin: 'https://linkedin.com/in/...',
  responsibilities: ['Responsibility 1', 'Responsibility 2'],
  projects: ['Project Name 1', 'Project Name 2']
}
```

### How to Replace Profile Images
* **Option A (Local)**: Save portrait images into the `public/members/` directory and reference them as `/members/filename.jpg`.
* **Option B (Remote / Cloudinary / Drive)**: Provide any valid HTTPS URL (already configured for Unsplash and Cloudinary in `next.config.ts`).

### How to Change Branding & Colors
* **Primary Accent**: Edit `--accent-teal: #0d9488` in `src/app/globals.css`.
* **Tailwind Utility Classes**: The components utilize `teal-700` (`#0f766e`) and `teal-600` (`#0d9488`). To switch to sage or muted green, replace `teal-*` with `emerald-*` or `stone-*`.
* **Logo**: Replace `public/logo.png` with any updated vector or raster logo.

---

## ⚠️ Mock Data Disclosure

* All student names, photos, emails, and LinkedIn links in this prototype are **realistic fictional representations** created for evaluation and demonstration purposes.
* All figures in the Chapter Statistics section are prototype values.
* The official chapter emblem and Instagram handle (`@aiche.nitrkl`) are authentic references from AIChE NIT Rourkela.

---

## 🏆 Bonus Features Implemented

* **Live Instant Search**: Filter directory entries by name, role, or team keyword on keystroke.
* **Live Counter Badges**: Category tabs display real-time member counts.
* **Dual Team Presentation**: Automatic split view between Executive Committee and Core Teams when viewing "All".
* **Focus Trap & ESC Dismissal**: Full keyboard accessibility compliance in detail modals.
* **Graceful Avatar Fallback**: Built-in SVG avatar placeholder prevents broken image icons if a photo URL fails.
* **Subtle Molecular Geometry**: Handcrafted SVG chemical ring lattice that compliments the chapter's scientific discipline.

---

© 2026 AIChE NIT Rourkela Student Chapter • Induction Task Submission
