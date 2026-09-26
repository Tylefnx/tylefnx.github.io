import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Boxes, 
  Clock, 
  Award,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CourseTrack } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

interface CourseCardProps {
  track: CourseTrack;
  onOpenCurriculum: (track: CourseTrack) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ track, onOpenCurriculum }) => {
  const { t } = useLanguage();
  const isReact = track.id === 'reactjs';

  const handleLaunch = () => {
    soundFx.playLaunch();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: isReact ? ['#00d8ff', '#38bdf8', '#818cf8', '#ffffff'] : ['#10b981', '#34d399', '#6db33f', '#ffffff']
    });
  };

  return (
    <div
      onMouseEnter={() => soundFx.playHover()}
      className={`relative group rounded-3xl p-1 transition-all duration-500 ${
        isReact
          ? 'hover:shadow-[0_0_50px_-10px_rgba(0,216,255,0.35)]'
          : 'hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.35)]'
      }`}
    >
      {/* Animated Gradient Border Frame */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
          isReact
            ? 'bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 opacity-30 group-hover:opacity-100'
            : 'bg-gradient-to-br from-emerald-500 via-teal-600 to-green-600 opacity-30 group-hover:opacity-100'
        }`}
      />

      {/* Inner Card Container */}
      <div className="relative h-full flex flex-col justify-between rounded-[22px] bg-[#090e1c] p-6 sm:p-8 overflow-hidden backdrop-blur-xl border border-slate-800/80">
        {/* Background Ambient Aura */}
        <div
          className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[90px] transition-all duration-700 pointer-events-none ${
            isReact
              ? 'bg-cyan-500/15 group-hover:bg-cyan-500/25'
              : 'bg-emerald-500/15 group-hover:bg-emerald-500/25'
          }`}
        />

        <div>
          {/* Top Row: Badge & Type */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase border ${
                isReact
                  ? 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300'
                  : 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {isReact ? t.cards.reactBadge : t.cards.springBadge}
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              {t.cards.levelDoc}
            </div>
          </div>

          {/* Logo & Main Title */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-2xl p-0.5 shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                isReact
                  ? 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-cyan-500/20'
                  : 'bg-gradient-to-br from-emerald-400 to-green-600 shadow-emerald-500/20'
              }`}
            >
              <div className="w-full h-full bg-[#070b15] rounded-[14px] flex items-center justify-center p-3">
                {isReact ? (
                  <svg className="w-10 h-10 text-cyan-400 animate-spin-slow" viewBox="-11.5 -10.23174 23 20.46348">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {track.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-semibold mt-0.5 ${
                  isReact ? 'text-cyan-400' : 'text-emerald-400'
                }`}
              >
                {track.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {track.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {track.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 py-3 px-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-white flex items-center justify-center gap-1">
                <Boxes className="w-4 h-4 text-slate-400" />
                {track.stats.modules}
              </div>
              <div className="text-[11px] text-slate-400">{t.cards.modules}</div>
            </div>

            <div className="text-center border-x border-slate-800">
              <div className="text-lg sm:text-xl font-bold font-mono text-white flex items-center justify-center gap-1">
                <Cpu className="w-4 h-4 text-slate-400" />
                {track.stats.interactiveSandboxes}
              </div>
              <div className="text-[11px] text-slate-400">{t.cards.sandboxes}</div>
            </div>

            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-white flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                {track.stats.durationEstimate}
              </div>
              <div className="text-[11px] text-slate-400">{t.cards.duration}</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5 mb-8">
            <div className="text-xs font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-slate-300" />
              {t.cards.highlightsTitle}
            </div>
            {track.highlights.slice(0, 4).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    isReact ? 'text-cyan-400' : 'text-emerald-400'
                  }`}
                />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="space-y-3 pt-2">
          {/* Main Primary Launch Button */}
          <a
            href={track.primaryUrl}
            onClick={handleLaunch}
            className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all duration-300 group/btn ${
              isReact
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01]'
                : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01]'
            }`}
          >
            <span>{isReact ? t.cards.launchReact : t.cards.launchSpring}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>

          {/* Secondary Controls: Table of Contents Modal & GitHub Link */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenCurriculum(track);
              }}
              className="py-2.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.cards.viewIndex}</span>
            </button>

            <a
              href={track.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="py-2.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>{t.cards.repo}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
