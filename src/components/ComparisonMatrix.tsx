import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { getComparisonFeatures, getCoursesData } from '../data/coursesData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

export const ComparisonMatrix: React.FC = () => {
  const { language, t } = useLanguage();
  const features = getComparisonFeatures(language);
  const courses = getCoursesData(language);

  return (
    <section id="comparison" className="py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.matrix.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.matrix.title}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t.matrix.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.matrix.subtitle}
          </p>
        </div>

        {/* Matrix Table */}
        <div className="rounded-3xl bg-[#090e1c] border border-slate-800 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#060a14] border-b border-slate-800/80 p-4 sm:p-6 text-sm font-bold">
            <div className="text-slate-400 font-mono text-xs uppercase tracking-wider flex items-center">
              {t.matrix.colCategory}
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-2 text-cyan-400">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>{t.matrix.colReact}</span>
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-2 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>{t.matrix.colSpring}</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/60">
            {features.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-6 text-xs sm:text-sm hover:bg-slate-900/40 transition-colors gap-2 md:gap-4"
              >
                <div className="font-semibold text-slate-200 flex items-center">
                  {row.feature}
                </div>
                <div className="text-slate-300 font-medium">
                  {row.react}
                </div>
                <div className="text-slate-300 font-medium">
                  {row.spring}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer / Quick Action Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#060a14] border-t border-slate-800/80 p-4 sm:p-6 gap-4">
            <a
              href={courses.reactjs.primaryUrl}
              onClick={() => soundFx.playLaunch()}
              className="py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>{t.matrix.btnReact}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={courses.springboot.primaryUrl}
              onClick={() => soundFx.playLaunch()}
              className="py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>{t.matrix.btnSpring}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
