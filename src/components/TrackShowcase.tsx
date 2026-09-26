import React from 'react';
import { CourseCard } from './CourseCard';
import { CourseTrack } from '../types';
import { getCoursesData } from '../data/coursesData';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface TrackShowcaseProps {
  onOpenCurriculum: (track: CourseTrack) => void;
}

export const TrackShowcase: React.FC<TrackShowcaseProps> = ({ onOpenCurriculum }) => {
  const { language } = useLanguage();
  const courses = getCoursesData(language);

  return (
    <section id="tracks" className="relative py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE DOCUMENTATION TRACKS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'tr' ? (
              <>
                İncelemek İstediğiniz{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                  Dokümantasyonu Seçin
                </span>
              </>
            ) : (
              <>
                Select Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                  Documentation Hub
                </span>
              </>
            )}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {language === 'tr'
              ? 'Her iki platform da canlı mimari simülasyonları, interaktif sandboxlar ve derinlemesine referanslarla donatılmıştır.'
              : 'Both hubs are equipped with live architectural simulations, interactive sandboxes, and deep dive references.'}
          </p>
        </div>

        {/* Dual Track Cards Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <CourseCard track={courses.reactjs} onOpenCurriculum={onOpenCurriculum} />
          <CourseCard track={courses.springboot} onOpenCurriculum={onOpenCurriculum} />
        </div>
      </div>
    </section>
  );
};
