import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Database, Cloud, ShieldCheck, ArrowLeft, Ruler, Box, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const ArchitecturalEngineering = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen selection:bg-black selection:text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-32 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 hover:opacity-100 transition-all group text-white"
          >
            <div className="w-8 h-[1px] bg-white origin-left group-hover:scale-x-150 transition-transform" />
            {t('archEng.backToOrigin')}
          </Link>
        </div>
      </div>

      {/* Hero - Structural Blueprint */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 flex justify-center gap-4"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">{t('archEng.precision')}</span>
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">/</span>
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">{t('archEng.scale')}</span>
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">/</span>
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">{t('archEng.resilience')}</span>
          </motion.div>

          <h1 className="text-[10vw] font-black tracking-tighter leading-[0.8] uppercase">
            ARCHI<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>TECTURAL</span><br />
            ENGINEERING.
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "circInOut" }}
            className="h-px bg-black w-full max-w-4xl mx-auto mt-12 origin-left"
          />
        </div>

        {/* Floating Technical Elements */}
        <motion.div style={{ y: y1 }} className="absolute top-1/4 right-10 opacity-10 hidden lg:block">
          <div className="font-mono text-[10px] space-y-2">
            <div>X: 40.7128° N</div>
            <div>Y: 74.0060° W</div>
            <div className="w-32 h-32 border border-black mt-4 flex items-center justify-center">
              <Box className="w-8 h-8" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Structural Philosophy */}
      <section className="py-60 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter uppercase mb-12">
                {t('archEng.skeletonTitle1')} <br />{t('archEng.skeletonTitle2')}
              </h2>
              <div className="space-y-8 text-xl text-white/50 leading-relaxed">
                <p>
                  {t('archEng.skeletonDesc1')}
                </p>
                <p>
                  {t('archEng.skeletonDesc2')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Layers />, label: "Microservices" },
                { icon: <Database />, label: "Event-Driven" },
                { icon: <Cloud />, label: "Cloud-Native" },
                { icon: <ShieldCheck />, label: "Zero-Trust" }
              ].map((item, i) => (
                <div key={i} className="aspect-square border border-white/10 flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-500 group">
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs - Blueprint Style */}
      <section className="py-60 max-w-7xl mx-auto px-6">
        <div className="border border-black/10 p-12 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <Ruler className="w-5 h-5 opacity-30" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold">{t('archEng.systemSpecs')}</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-8">{t('archEng.infraAsCode')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('archEng.infraDesc')}
              </p>
            </div>
            <div className="md:w-1/2 font-mono text-[12px] bg-muted p-8 rounded-sm">
              <div className="space-y-2 opacity-60">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span>Deployment_Speed</span>
                  <span className="font-bold">0.04s</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span>Auto_Scaling</span>
                  <span className="font-bold">Enabled</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span>Fault_Tolerance</span>
                  <span className="font-bold">99.999%</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span>Global_Latency</span>
                  <span className="font-bold">{"< 20ms"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
