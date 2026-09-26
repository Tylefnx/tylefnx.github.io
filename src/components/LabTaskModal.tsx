import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, ExternalLink,  Code2 } from 'lucide-react';
import { LabTask } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

interface LabTaskModalProps {
  task: LabTask | null;
  onClose: () => void;
}

export const LabTaskModal: React.FC<LabTaskModalProps> = ({ task, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!task) return null;

  const isReact = task.track === 'reactjs';

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(task.solutionBlueprint.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
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
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{task.title}</h3>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                    isReact
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {task.difficulty}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{task.chaptersCovered}</p>
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
          {/* Architecture Rationale Box */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.labs.modalWhy}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {task.solutionBlueprint.explanation}
            </p>
          </div>

          {/* Solution Code Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400">
                {t.labs.modalTitle}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t.playground.btnCopied : t.playground.btnCopy}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#060a14] border border-slate-800 font-mono text-xs sm:text-[13px] text-slate-200 overflow-x-auto leading-relaxed max-h-80 select-text">
              <pre>
                <code>{task.solutionBlueprint.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 bg-[#060a14] border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href={task.docUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playLaunch()}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <span>{t.labs.btnDoc}</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
