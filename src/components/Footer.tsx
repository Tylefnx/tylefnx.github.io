import React from 'react';
import { Terminal, ExternalLink, ArrowUp } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04070f] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070d1d] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                TYLEFNX ACADEMY
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Modern frontend ve kurumsal backend ekosisteminde derinlemesine uzmanlaşmak isteyen yazılım mühendisleri için hazırlanmış, interaktif simülatörler içeren yeni nesil Türkçe öğrenme platformları.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Tylefnx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
              >
                <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub @Tylefnx</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Col 2: React JS Track */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              React & Next.js Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={COURSES.reactjs.primaryUrl}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Canlı Platforma Git</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Tylefnx/learnreactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  GitHub Kaynak Kodu
                </a>
              </li>
              <li>
                <span className="text-slate-500">React 19 & Next.js 15+</span>
              </li>
              <li>
                <span className="text-slate-500">Virtual DOM & Fiber Simülatörü</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Spring Boot Track */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Java & Spring Boot Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={COURSES.springboot.primaryUrl}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <span>Canlı Platforma Git</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Tylefnx/learnspringboot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  GitHub Kaynak Kodu
                </a>
              </li>
              <li>
                <span className="text-slate-500">Java 21 LTS & Spring Boot 3.3+</span>
              </li>
              <li>
                <span className="text-slate-500">Spring Security 6 Filtre Zinciri</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tylefnx Academy. Tüm hakları saklıdır.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Geliştirici Odaklı & Modern Web Teknolojileriyle Hazırlandı
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all"
              title="Yukarı Çık"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
