import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Sparkles, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import { getCoursesData } from '../data/coursesData';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

export const InteractivePlaygroundTeaser: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reactjs' | 'springboot'>('reactjs');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasSimulated, setHasSimulated] = useState(false);
  const { language, t } = useLanguage();

  const courses = getCoursesData(language);
  const activeCourse = courses[activeTab];
  const isReact = activeTab === 'reactjs';

  const handleTabChange = (tab: 'reactjs' | 'springboot') => {
    soundFx.playClick();
    setActiveTab(tab);
    setHasSimulated(false);
  };

  const handleRunSimulation = () => {
    soundFx.playLaunch();
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasSimulated(true);
    }, 600);
  };

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(activeCourse.codePreview.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.playground.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.playground.title}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t.playground.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.playground.subtitle}
          </p>
        </div>

        {/* Studio Window */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#090d18] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Bar / Tab Switcher */}
          <div className="px-4 sm:px-6 py-3 bg-[#060a14] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            {/* Window Controls & Tabs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Language Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => handleTabChange('reactjs')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                    isReact
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {t.playground.tabReact}
                </button>

                <button
                  onClick={() => handleTabChange('springboot')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                    !isReact
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {t.playground.tabSpring}
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 transition-all"
                title={t.playground.btnCopy}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t.playground.btnCopied : t.playground.btnCopy}</span>
              </button>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all ${
                  isReact
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                }`}
              >
                {isRunning ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>{isRunning ? t.playground.btnRunning : t.playground.btnSimulate}</span>
              </button>
            </div>
          </div>

          {/* Code Editor & Output Pane */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {/* Code View (7 cols) */}
            <div className="lg:col-span-7 p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-200">
              <div className="flex items-center justify-between text-slate-500 pb-3 mb-3 border-b border-slate-800/60 text-xs">
                <span>📁 src/{activeCourse.codePreview.fileName}</span>
                <span className="uppercase text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {activeCourse.codePreview.language}
                </span>
              </div>
              <pre className="text-slate-300 font-mono select-text">
                <code>{activeCourse.codePreview.code}</code>
              </pre>
            </div>

            {/* Output Diagnostics Pane (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-[#060a14] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className={`w-3.5 h-3.5 ${isReact ? 'text-cyan-400' : 'text-emerald-400'}`} />
                    <span>{t.playground.outputHeading}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Diagnostics</span>
                </div>

                <div className="space-y-4">
                  {/* Status Box */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-xs font-semibold text-slate-300 mb-1">
                      {activeCourse.codePreview.outputTitle}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 whitespace-pre-wrap leading-relaxed">
                      {hasSimulated
                        ? activeCourse.codePreview.outputContent
                        : t.playground.outputPlaceholder}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      {t.playground.featuresHeading}
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1.5">
                      {activeCourse.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isReact ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct Link to Hub */}
              <div className="pt-6">
                <a
                  href={activeCourse.primaryUrl}
                  onClick={() => soundFx.playLaunch()}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    isReact
                      ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  <span>{t.playground.openFullDocs} ({activeCourse.title})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
