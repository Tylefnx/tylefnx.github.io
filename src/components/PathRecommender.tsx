import React, { useState } from 'react';
import { Compass, Sparkles, Check, ArrowRight, Layout, Database, Layers } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { soundFx } from '../utils/audio';

export const PathRecommender: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<'frontend' | 'backend' | 'fullstack'>('frontend');

  const goals = [
    {
      id: 'frontend',
      title: 'Modern Web & UI Mimarisi',
      desc: 'Kullanıcı arayüzleri, State yönetimi, Virtual DOM, Next.js App Router ve SSR odaklı olmak istiyorum.',
      icon: Layout,
      recommendation: COURSES.reactjs,
      badge: 'React & Next.js Önerilir'
    },
    {
      id: 'backend',
      title: 'Kurumsal Backend & Güvenlik',
      desc: 'REST API mimarisi, Mikroservisler, Spring Security 6, JWT, JPA ve Veritabanı optimizasyonu istiyorum.',
      icon: Database,
      recommendation: COURSES.springboot,
      badge: 'Spring Boot 3.x Önerilir'
    },
    {
      id: 'fullstack',
      title: 'Uçtan Uca Full-Stack Mimar',
      desc: 'Hem React ile zengin istemci arayüzleri hem de Spring Boot ile güçlü ve güvenli kurumsal servisler geliştirmek istiyorum.',
      icon: Layers,
      recommendation: COURSES.reactjs,
      badge: 'Her İki Platform (React + Spring Boot)'
    }
  ];

  const current = goals.find(g => g.id === selectedGoal)!;

  return (
    <section id="recommender" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>KİŞİSELLEŞTİRİLMİŞ YOL HARİTASI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hangi Alandan Başlamalısınız?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Mevcut hedefinizi seçin, size en uygun öğrenme sırasını ve platformu önerelim.
          </p>
        </div>

        {/* Option Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {goals.map(goal => {
            const Icon = goal.icon;
            const isSelected = selectedGoal === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedGoal(goal.id as any);
                }}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'glass-card border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-base mb-1.5">{goal.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{goal.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommendation Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1020] to-[#0d162a] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono font-bold text-cyan-300 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                {current.badge}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedGoal === 'fullstack'
                  ? 'React JS Mastery Hub ile Başlayın, Ardından Spring Boot Hub ile Tamamlayın'
                  : `${current.recommendation.title} Sizin İçin İdeal Seçim`}
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {selectedGoal === 'fullstack'
                  ? 'Modern web ekosisteminde önce React ve Next.js ile arayüz mekaniğini ve API tüketimini öğrenin, ardından Spring Boot ile arka plan mikroservislerini ve JWT güvenliğini inşa edin.'
                  : current.recommendation.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
              {selectedGoal === 'fullstack' ? (
                <>
                  <a
                    href={COURSES.reactjs.primaryUrl}
                    onClick={() => soundFx.playLaunch()}
                    className="py-3 px-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>1. React Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={COURSES.springboot.primaryUrl}
                    onClick={() => soundFx.playLaunch()}
                    className="py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>2. Spring Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              ) : (
                <a
                  href={current.recommendation.primaryUrl}
                  onClick={() => soundFx.playLaunch()}
                  className={`py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    current.recommendation.id === 'reactjs'
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  }`}
                >
                  <span>Hemen Öğrenmeye Başla</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
