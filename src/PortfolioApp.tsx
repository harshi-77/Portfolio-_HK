import { useState } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ProjectsSection from './components/projects/ProjectsSection';
import JourneySection from './components/journey/JourneySection';
import CertificationsSection from './components/certifications/CertificationsSection';
import AchievementsSection from './components/achievements/AchievementsSection';
import GithubSection from './components/github/GithubSection';
import ContactSection from './components/contact/ContactSection';

import CeraOrb from './components/cera/CeraOrb';
import CeraPanel from './components/cera/CeraPanel';

type OrbState = 'idle' | 'thinking' | 'responding';

export default function App() {
  const scrollProgress = useScrollProgress();
  const [ceraOpen, setCeraOpen] = useState(false);
  const [orbState, setOrbState] = useState<OrbState>('idle');

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar onCeraOpen={() => setCeraOpen(true)} />

      <main>
        <HeroSection scrollProgress={scrollProgress} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificationsSection />
        <AchievementsSection />
        <GithubSection />
        <ContactSection />
      </main>

      <Footer />

      {/* CERA AI */}
      <CeraPanel
        isOpen={ceraOpen}
        onClose={() => setCeraOpen(false)}
        onOrbStateChange={setOrbState}
      />
      <CeraOrb
        onClick={() => setCeraOpen((prev) => !prev)}
        orbState={orbState}
        isOpen={ceraOpen}
      />
    </div>
  );
}
