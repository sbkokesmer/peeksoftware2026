import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Command, Layers, Activity, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const IntelligenceDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-white min-h-screen font-mono selection:bg-emerald-500 selection:text-black">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/services')}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500/40 hover:text-emerald-500 transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            {t('intDetail.backToServices')}
          </button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.5em] mb-8 block"
          >
            {t('intDetail.label')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-12"
          >
            {t('intDetail.title1')} <br />
            <span className="text-emerald-500">{t('intDetail.title2')}</span>
          </motion.h1>
          <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed font-sans">
            {t('intDetail.description')}
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              icon: Cpu,
              code: "INIT_LLM_PIPELINE --vector-db=active"
            },
            {
              icon: Command,
              code: "EXEC_AUTONOMOUS_AGENT --mode=optimize"
            },
            {
              icon: Activity,
              code: "RUN_HEURISTIC_ANALYSIS --depth=max"
            },
            {
              icon: Layers,
              code: "START_ETL_PROCESS --clean=true"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 group hover:border-emerald-500/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <item.icon className="w-8 h-8 text-emerald-500" />
                <span className="text-[10px] opacity-20">0{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{t(`intDetail.cards.${i}.title`)}</h3>
              <p className="text-white/40 font-sans leading-relaxed mb-12 text-sm">
                {t(`intDetail.cards.${i}.desc`)}
              </p>
              <div className="bg-black p-4 rounded font-mono text-[10px] text-emerald-500/60">
                <span className="text-emerald-500">$</span> {item.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The "How We Automate" Section */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="font-sans">
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">{t('intDetail.iaaS')}</h2>
              <p className="text-white/60 leading-relaxed mb-12">
                {t('intDetail.iaaSDesc')}
              </p>
              <div className="space-y-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 bg-emerald-500 mt-2" />
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest block mb-1">{t(`intDetail.iaaSItems.${i}.label`)}</span>
                      <span className="text-xs text-white/40">{t(`intDetail.iaaSItems.${i}.desc`)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-12 rounded-2xl">
              <Terminal className="w-12 h-12 text-emerald-500 mb-8" />
              <div className="space-y-4 text-[12px] text-emerald-500/80">
                <p className="animate-pulse">{">"} Analyzing business workflows...</p>
                <p className="delay-75">{">"} Identifying bottlenecks: 14 found.</p>
                <p className="delay-150">{">"} Deploying autonomous agents...</p>
                <p className="text-white font-bold">{">"} Efficiency gain projected: +42%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
          {t('intDetail.ctaTitle1')} <br />
          <span className="text-emerald-500 italic font-light">{t('intDetail.ctaTitle2')}</span>
        </h2>
        <button className="bg-emerald-500 text-black px-12 py-6 text-sm font-bold tracking-widest uppercase hover:bg-white transition-all">
          {t('intDetail.ctaButton')}
        </button>
      </section>
    </div>
  );
};
