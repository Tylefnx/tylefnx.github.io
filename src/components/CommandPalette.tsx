import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Hash, Sparkles } from 'lucide-react';
import { SEARCH_TOPICS } from '../data/coursesData';
import { soundFx } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_TOPICS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.trackTitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#090e1c] border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 bg-[#060a14] border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Konu, kavram veya mimari ara (örn: Fiber, Security, Hooks, JPA)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 rounded text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              const isReact = item.track === 'reactjs';
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={() => {
                    soundFx.playLaunch();
                    onClose();
                  }}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-slate-800/70 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg mt-0.5 ${
                        isReact ? 'bg-cyan-500/10 text-cyan-400' : 'bg-emerald-500/10 text-emerald-400'
                      }`}
                    >
                      <Hash className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isReact
                              ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                              : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {item.trackTitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                </a>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-slate-600" />
              "{query}" için eşleşen konu bulunamadı.
            </div>
          )}
        </div>

        {/* Quick Nav Footer */}
        <div className="px-4 py-2.5 bg-[#060a14] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tıklandığında ilgili konunun interaktif dersine doğrudan gider.</span>
          <span className="font-mono">Tylefnx Academy Search</span>
        </div>
      </div>
    </div>
  );
};
