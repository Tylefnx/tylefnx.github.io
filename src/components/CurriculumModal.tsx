import React from 'react';
import { X, CheckCircle2, ArrowRight, BookOpen, Clock, Boxes, Cpu, Sparkles, ExternalLink } from 'lucide-react';
import { CourseTrack } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

interface CurriculumModalProps {
  track: CourseTrack | null;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ track, onClose }) => {
  const { t } = useLanguage();
  if (!track) return null;

  const isReact = track.id === 'reactjs';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#090e1c] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#060a14] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl ${
                isReact ? 'bg-cyan-500/20 text-cyan-400' : 'bg-emerald-500/20 text-emerald-400'
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {track.title}
                <span className="text-xs px-2 py-0.5 rounded font-mono bg-slate-800 text-slate-300 font-normal">
                  {t.modal.indexTitle}
                </span>
              </h3>
              <p className="text-xs text-slate-400">{track.subtitle}</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
            <div>
              <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                <Boxes className="w-4 h-4 text-slate-400" />
                {track.stats.modules} {t.cards.modules}
              </div>
              <div className="text-[11px] text-slate-400">{track.stats.lessons} Detaylı Konu</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                <Cpu className="w-4 h-4 text-slate-400" />
                {track.stats.interactiveSandboxes} Sandbox
              </div>
              <div className="text-[11px] text-slate-400">Canlı Simülatör</div>
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                {track.stats.durationEstimate}
              </div>
              <div className="text-[11px] text-slate-400">{track.stats.level}</div>
            </div>
          </div>

          {/* Curriculum Sections */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {t.modal.sectionsTitle}
            </h4>

            {track.curriculum.map((section, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${isReact ? 'bg-cyan-400' : 'bg-emerald-400'}`}
                  />
                  {section.category}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          isReact ? 'text-cyan-400' : 'text-emerald-400'
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Platform Highlights */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {t.modal.whyTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {track.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#060a14] border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href={track.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={track.primaryUrl}
            onClick={() => soundFx.playLaunch()}
            className={`py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all ${
              isReact
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25'
            }`}
          >
            <span>{t.modal.btnLaunch}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
