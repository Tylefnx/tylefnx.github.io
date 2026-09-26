import React from 'react';
import { Cpu, Terminal, Zap, Shield, Sparkles, BookCheck, Code2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const PlatformFeatures: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Derinlemesine Mimari Görselleştiriciler',
      description:
        'Sadece kod yazmayın; React Fiber ağacının render adımlarını veya Spring Security filtre zincirinin istekleri nasıl işlediğini interaktif diyagramlarla görün.',
      color: 'cyan'
    },
    {
      icon: Terminal,
      title: 'Canlı İnteraktif Kod Sandboxes',
      description:
        'Her konunun yanında çalışan, anlık state değişimlerini ve konsol çıktılarını gösteren gerçek zamanlı deneme alanları.',
      color: 'emerald'
    },
    {
      icon: BookCheck,
      title: '%100 Türkçe & Modern Standartlar',
      description:
        'React 19, Next.js 15+, Java 21 LTS ve Spring Boot 3.3+ gibi en güncel endüstri standartlarını yalın ve anlaşılır Türkçe ile öğrenin.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Kurumsal Güvenlik ve Mimari Kalıplar',
      description:
        'JWT doğrulama, CORS, CSRF, JPA N+1 optimizasyonları ve React Server Components gibi ileri düzey kurumsal desenler.',
      color: 'sky'
    },
    {
      icon: Zap,
      title: 'Hızlı ve Sunucusuz (GitHub Pages)',
      description:
        'Tüm platform istemci tarafında optimize edilmiş modern web teknolojileriyle sıfır bekleme süresiyle anında açılır.',
      color: 'amber'
    },
    {
      icon: Code2,
      title: 'Açık Kaynak & Geliştirici Dostu',
      description:
        'GitHub üzerinden tüm kaynak kodlara erişebilir, projeyi fork edebilir veya kendi çalışma ortamınıza klonlayabilirsiniz.',
      color: 'pink'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono font-semibold text-slate-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMY ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Neden Bu Eğitim Platformu?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Geleneksel slayt anlatımlarının ötesine geçerek interaktif simülatörler ve mimari derinlik sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
