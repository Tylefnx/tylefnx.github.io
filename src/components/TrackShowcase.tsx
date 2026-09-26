import React from 'react';
import { CourseCard } from './CourseCard';
import { CourseTrack } from '../types';
import { COURSES } from '../data/coursesData';
import { Sparkles, Terminal } from 'lucide-react';

interface TrackShowcaseProps {
  onOpenCurriculum: (track: CourseTrack) => void;
}

export const TrackShowcase: React.FC<TrackShowcaseProps> = ({ onOpenCurriculum }) => {
  return (
    <section id="tracks" className="relative py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE LEARNING TRACKS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Uzmanlaşmak İstediğiniz{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Rotayı Seçin
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Her iki platform da canlı simülatörler, mimari analizler ve adım adım Türkçe derslerle donatılmıştır.
          </p>
        </div>

        {/* Dual Track Cards Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* React Card */}
          <CourseCard track={COURSES.reactjs} onOpenCurriculum={onOpenCurriculum} />

          {/* Spring Boot Card */}
          <CourseCard track={COURSES.springboot} onOpenCurriculum={onOpenCurriculum} />
        </div>

        {/* Pro Tip Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Full-Stack Mimar Olmak mı İstiyorsunuz?</p>
              <p className="text-xs text-slate-400">
                Önce React JS ile modern frontend mimarisini, ardından Spring Boot ile kurumsal backend ve güvenlik katmanını bitirerek uçtan uca uzmanlaşabilirsiniz.
              </p>
            </div>
          </div>
          <a
            href="#recommender"
            className="flex-shrink-0 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-all"
          >
            Yol Haritasını Görüntüle
          </a>
        </div>
      </div>
    </section>
  );
};
