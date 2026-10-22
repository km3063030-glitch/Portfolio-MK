import React, { useState } from 'react';
import { BackgroundNetwork } from './components/common/BackgroundNetwork';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Education } from './components/education/Education';
import { Certifications } from './components/certifications/Certifications';
import { Leadership } from './components/leadership/Leadership';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/resume/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic AI Background Particle Network */}
      <BackgroundNetwork />

      {/* Main Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
