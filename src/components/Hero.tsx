import React from 'react';
import { Sparkles, Layers, ShieldCheck, Zap, Compass, Code2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-emerald-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Glowing Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-emerald-950/80 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-8 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent">
            Next-Gen Interactive Developer Hub
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500" />
          <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
            React 19 & Spring Boot 3.3+
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Geleceğin Yazılım Mimarisini{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent text-glow-cyan">
            React
          </span>{' '}
          ve{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-clip-text text-transparent text-glow-emerald">
            Spring Boot
          </span>{' '}
          ile İnşa Edin
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Sıfırdan ileri seviyeye derinlemesine hazırlanmış iki uzmanlık platformu.{' '}
          <strong className="text-cyan-300 font-medium">Virtual DOM Fiber Reconciler</strong> ve{' '}
          <strong className="text-emerald-300 font-medium">Spring Security 6 Filtre Zinciri</strong>{' '}
          gibi karmaşık mimarileri interaktif simülasyonlar ve Türkçe kapsamlı rehberlerle kavrayın.
        </p>

        {/* Quick CTA Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tracks"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Compass className="w-5 h-5" />
            Eğitim Platformunu Seç
          </a>
          <a
            href="#playground"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-white font-semibold text-sm sm:text-base shadow-md hover:border-slate-600 transition-all"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            Canlı Kod Simülatörünü İncele
          </a>
        </div>

        {/* Metrics Pill Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">30+</div>
              <div className="text-xs text-slate-400 font-medium">Kapsamlı Modül</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">26+</div>
              <div className="text-xs text-slate-400 font-medium">İnteraktif Sandbox</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">100+</div>
              <div className="text-xs text-slate-400 font-medium">Ders & Alıştırma</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-medium">Ücretsiz & Açık Kaynak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
