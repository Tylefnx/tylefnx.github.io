import React, { useState } from 'react';
import { Terminal, Search,  Layers } from 'lucide-react';
import { getLabTasks } from '../data/labTasksData';
import { LabTask } from '../types';
import { LabTaskCard } from './LabTaskCard';
import { LabTaskModal } from './LabTaskModal';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../i18n/LanguageContext';

export const LabTasksSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTrack, setActiveTrack] = useState<'all' | 'reactjs' | 'springboot'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSolutionTask, setSelectedSolutionTask] = useState<LabTask | null>(null);

  const allTasks = getLabTasks(language);

  const filteredTasks = allTasks.filter((task) => {
    const matchesTrack = activeTrack === 'all' || task.track === activeTrack;
    const matchesQuery =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.chaptersCovered.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesQuery;
  });

  const handleTrackChange = (track: 'all' | 'reactjs' | 'springboot') => {
    soundFx.playClick();
    setActiveTrack(track);
  };

  return (
    <section id="labs" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.labs.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.labs.title}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              {t.labs.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.labs.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Track Filter Tabs */}
          <div className="flex items-center gap-1 bg-[#070b15] p-1 rounded-2xl border border-slate-800/90 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => handleTrackChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTrack === 'all'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.labs.filterAll} ({allTasks.length})</span>
            </button>

            <button
              onClick={() => handleTrackChange('reactjs')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTrack === 'reactjs'
                  ? 'bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{t.labs.filterReact}</span>
            </button>

            <button
              onClick={() => handleTrackChange('springboot')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTrack === 'springboot'
                  ? 'bg-emerald-500/20 text-emerald-300 shadow-sm border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.labs.filterSpring}</span>
            </button>
          </div>

          {/* Search Box within Labs */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.labs.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <LabTaskCard
              key={task.id}
              task={task}
              onOpenSolution={(t) => setSelectedSolutionTask(t)}
            />
          ))}
        </div>
      </div>

      {/* Solution Blueprint Modal */}
      <LabTaskModal
        task={selectedSolutionTask}
        onClose={() => setSelectedSolutionTask(null)}
      />
    </section>
  );
};
