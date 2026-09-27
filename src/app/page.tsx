import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { TeamSection } from '@/components/TeamSection';
import { WhatWeDo } from '@/components/WhatWeDo';
import { Highlights } from '@/components/Highlights';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Chapter Statistics */}
      <Stats />

      {/* Executive Committee & Core Team with Category Filter & Modal */}
      <TeamSection />

      {/* What We Do - 5 Operational Pillars */}
      <WhatWeDo />

      {/* Chapter Highlights & Initiatives */}
      <Highlights />

      {/* Induction / Join CTA */}
      <CTA />

      {/* Minimal Academic Footer */}
      <Footer />
    </main>
  );
}
