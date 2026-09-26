import { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrackShowcase } from './components/TrackShowcase';
import { LabTasksSection } from './components/LabTasksSection';
import { InteractivePlaygroundTeaser } from './components/InteractivePlaygroundTeaser';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Footer } from './components/Footer';
import { CurriculumModal } from './components/CurriculumModal';
import { CommandPalette } from './components/CommandPalette';
import { CourseTrack } from './types';

function MainLayout() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<CourseTrack | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient Interactive Particle Mesh */}
      <BackgroundCanvas />

      {/* Grid Pattern Layer */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Layout Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        <main className="flex-grow">
          <Hero />
          <TrackShowcase onOpenCurriculum={(track) => setSelectedCurriculum(track)} />
          <LabTasksSection />
          <InteractivePlaygroundTeaser />
          <ComparisonMatrix />
        </main>

        <Footer />
      </div>

      {/* Modals & Command Palette */}
      <CurriculumModal
        track={selectedCurriculum}
        onClose={() => setSelectedCurriculum(null)}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
