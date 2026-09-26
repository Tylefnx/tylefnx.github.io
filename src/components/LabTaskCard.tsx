import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Code2, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ExternalLink,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LabTask } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

interface LabTaskCardProps {
  task: LabTask;
  onOpenSolution: (task: LabTask) => void;
}

export const LabTaskCard: React.FC<LabTaskCardProps> = ({ task, onOpenSolution }) => {
  const { t } = useLanguage();
  const [showStarter, setShowStarter] = useState(false);
  const [completedReqs, setCompletedReqs] = useState<number[]>([]);

  const isReact = task.track === 'reactjs';
  const isCompleted = completedReqs.length === task.requirements.length;

  const toggleReq = (idx: number) => {
    soundFx.playClick();
    let next: number[];
    if (completedReqs.includes(idx)) {
      next = completedReqs.filter(i => i !== idx);
    } else {
      next = [...completedReqs, idx];
      // If newly completed all requirements, trigger celebratory confetti!
      if (next.length === task.requirements.length) {
        soundFx.playLaunch();
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.8 },
          colors: isReact ? ['#00d8ff', '#38bdf8', '#ffffff'] : ['#10b981', '#34d399', '#ffffff']
        });
      }
    }
    setCompletedReqs(next);
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Core':
        return { text: t.labs.difficultyCore, color: 'text-sky-400 bg-sky-950/70 border-sky-500/30' };
      case 'Advanced':
        return { text: t.labs.difficultyAdvanced, color: 'text-amber-400 bg-amber-950/70 border-amber-500/30' };
      case 'Enterprise':
        return { text: t.labs.difficultyEnterprise, color: 'text-rose-400 bg-rose-950/70 border-rose-500/30' };
      default:
        return { text: diff, color: 'text-slate-400 bg-slate-900 border-slate-800' };
    }
  };

  const badge = getDifficultyBadge(task.difficulty);

  return (
    <div
      className={`glass-card rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
        isCompleted
          ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10'
          : isReact
          ? 'border-slate-800/90 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10'
          : 'border-slate-800/90 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
      }`}
    >
      <div>
        {/* Top Header: Badge, Chapter, Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-lg border ${
                isReact
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                  : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
              }`}
            >
              {isReact ? 'React & Next.js' : 'Spring Boot & Java'}
            </span>

            <span className={`px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-lg border ${badge.color}`}>
              {badge.text}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {task.chaptersCovered}
          </span>
        </div>

        {/* Task Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {task.title}
        </h3>

        {/* Scenario Description */}
        <div className="p-3.5 rounded-2xl bg-[#060a14] border border-slate-800/80 mb-5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1">
            <Flame className="w-3 h-3 text-amber-400" />
            {t.labs.scenarioLabel}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {task.scenario}
          </p>
        </div>

        {/* Requirements Checklist */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>{t.labs.reqLabel}</span>
            <span className="font-mono text-[11px] text-cyan-400">
              {completedReqs.length}/{task.requirements.length} {t.labs.progressCompleted}
            </span>
          </div>

          <div className="space-y-2">
            {task.requirements.map((req, idx) => {
              const checked = completedReqs.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => toggleReq(idx)}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${
                    checked
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {checked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={checked ? 'line-through opacity-80' : ''}>{req}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expandable Starter Snippet */}
        <div className="mb-5">
          <button
            onClick={() => {
              soundFx.playClick();
              setShowStarter(!showStarter);
            }}
            className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 transition-all"
          >
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-slate-400" />
              {t.labs.btnStarter} ({task.starterSnippet.fileName})
            </span>
            {showStarter ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showStarter && (
            <div className="mt-2 p-3.5 rounded-xl bg-[#060a14] border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed animate-fade-in">
              <pre>
                <code>{task.starterSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/60">
        <button
          onClick={() => {
            soundFx.playClick();
            onOpenSolution(task);
          }}
          className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isReact
              ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.labs.btnSolution}</span>
        </button>

        <a
          href={task.docUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playLaunch()}
          className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 flex items-center justify-center gap-1.5 transition-all"
        >
          <span>{t.labs.btnDoc}</span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </a>
      </div>
    </div>
  );
};
