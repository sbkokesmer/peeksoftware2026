import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Brain, Cpu, Network, Terminal, ArrowLeft, Sparkles, Zap, Database, Fingerprint, Eye, Search, Activity, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NeuralPath = ({ delay = 0 }) => (
  <motion.path
    d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
    fill="none"
    stroke="white"
    strokeWidth="0.05"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const CapabilityNode = ({ title, desc, icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group py-24 border-b border-white/5 last:border-0"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="text-[10vw] font-black tracking-tighter leading-none opacity-5 group-hover:opacity-20 transition-opacity duration-700">
          0{index + 1}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/5 rounded-full">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-4xl font-bold tracking-tighter uppercase">{title}</h3>
          </div>
          <p className="text-xl text-white/40 max-w-2xl font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
            {desc}
          </p>
        </div>
        <div className="hidden lg:block overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10 backdrop-blur-3xl flex items-center justify-center group-hover:border-white/40 transition-all duration-700"
          >
            <Icon className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const IntelligenceSystems = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-[#020202] text-white min-h-screen selection:bg-white selection:text-black overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-32 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 hover:opacity-100 transition-all group"
          >
            <div className="w-8 h-[1px] bg-white origin-left group-hover:scale-x-150 transition-transform" />
            {t('intSystems.backToOrigin')}
          </Link>
        </div>
      </div>

      {/* SECTION 1: The Neural Core Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="px-6 py-2 border border-white/10 rounded-full text-[10px] tracking-[0.5em] uppercase bg-white/5 backdrop-blur-2xl">
              {t('intSystems.cognitiveArch')}
            </span>
          </motion.div>

          <h1 className="text-[14vw] font-black tracking-tighter leading-[0.75] uppercase">
            INTELLI<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>GENCE</span><br />
            SYSTEMS.
          </h1>

          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            {[
              { label: t('intSystems.neuralDensity'), val: "99.2%" },
              { label: t('intSystems.synapticSpeed'), val: "14ms" },
              { label: t('intSystems.logicLayers'), val: "1,024" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[8px] uppercase tracking-[0.4em] opacity-30 mb-2">{stat.label}</div>
                <div className="text-2xl font-light tracking-tighter">{stat.val}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Background Neural Mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
            {[...Array(40)].map((_, i) => (
              <NeuralPath key={i} delay={i * 0.1} />
            ))}
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202]" />
        </div>
      </section>

      {/* SECTION 2: The Machine Mind (Interactive Logic) */}
      <section className="relative py-60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <h2 className="text-7xl font-bold tracking-tighter uppercase leading-none">
                  {t('intSystems.beyondTitle1')} <br />
                  <span className="italic font-light opacity-40">{t('intSystems.beyondTitle2')}</span>
                </h2>
                <p className="text-2xl text-white/40 leading-relaxed font-light max-w-xl">
                  {t('intSystems.beyondDesc')}
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
                    <Database className="w-6 h-6 mb-6 opacity-40" />
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{t('intSystems.ragPipeline')}</h4>
                    <p className="text-xs text-white/30 leading-relaxed">{t('intSystems.ragDesc')}</p>
                  </div>
                  <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
                    <Fingerprint className="w-6 h-6 mb-6 opacity-40" />
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{t('intSystems.agenticAi')}</h4>
                    <p className="text-xs text-white/30 leading-relaxed">{t('intSystems.agenticDesc')}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full border border-white/10 rounded-3xl overflow-hidden backdrop-blur-3xl bg-white/[0.01]">
                <div className="p-8 font-mono text-[10px] space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/40" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                      <div className="w-2 h-2 rounded-full bg-green-500/40" />
                    </div>
                    <span className="opacity-20 uppercase tracking-widest">Neural_Process_Monitor</span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    <p className="text-blue-400">{`[SYSTEM] Initializing Cognitive Layer...`}</p>
                    <p className="text-white/40">{`[DATA] Vectorizing 1.4M nodes...`}</p>
                    <p className="text-white/40">{`[LOGIC] Applying semantic constraints...`}</p>
                    <div className="py-4">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "74%" }}
                          transition={{ duration: 2, ease: "circOut" }}
                          className="h-full bg-white/40"
                        />
                      </div>
                    </div>
                    <p className="text-green-400">{`[SUCCESS] Neural weights optimized.`}</p>
                    <p className="text-white/20 italic mt-8">{`// Waiting for next inference cycle...`}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Logic Engine (Extreme Redesign) */}
      <section className="relative py-60 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32">
            <span className="text-[10px] font-mono mb-8 block opacity-40 tracking-[0.5em]">{t('intSystems.capabilitiesMatrix')}</span>
            <h3 className="text-[12vw] font-black tracking-tighter uppercase leading-[0.8]">
              {t('intSystems.logicEngineTitle')}
            </h3>
          </div>

          <div className="relative">
            {[
              { title: t('intSystems.capabilities.0.title'), desc: t('intSystems.capabilities.0.desc'), icon: Cpu },
              { title: t('intSystems.capabilities.1.title'), desc: t('intSystems.capabilities.1.desc'), icon: Network },
              { title: t('intSystems.capabilities.2.title'), desc: t('intSystems.capabilities.2.desc'), icon: Activity },
              { title: t('intSystems.capabilities.3.title'), desc: t('intSystems.capabilities.3.desc'), icon: Search }
            ].map((item, i) => (
              <CapabilityNode key={i} index={i} {...item} />
            ))}
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.02] select-none">
          <div className="text-[40vw] font-black leading-none uppercase">LOGIC</div>
        </div>
      </section>

      {/* SECTION 4: The Deep Vision (Visual Cortex Simulation) */}
      <section className="py-60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Visual Cortex Simulation */}
            <div className="order-2 lg:order-1 relative h-[600px] group">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Scanning Lines */}
                <motion.div
                  animate={{ y: [-200, 200] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
                />

                {/* Layer Stack */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      y: useTransform(scrollYProgress, [0.6, 1], [i * 80, i * -40]),
                      rotateX: 45,
                      rotateZ: -10,
                      scale: 1 - (i * 0.1),
                      opacity: 1 - (i * 0.15)
                    }}
                    className="absolute w-[400px] h-[400px] border border-white/10 rounded-xl bg-white/[0.02] backdrop-blur-sm flex items-center justify-center overflow-hidden"
                  >
                    {/* Simulated Data Points */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
                      {[...Array(64)].map((_, j) => (
                        <div key={j} className="border-[0.5px] border-white/10 flex items-center justify-center">
                          {Math.random() > 0.9 && <div className="w-1 h-1 bg-white rounded-full animate-pulse" />}
                        </div>
                      ))}
                    </div>

                    {/* Layer Specific Content */}
                    {i === 0 && <Eye className="w-24 h-24 stroke-[0.5px] opacity-40" />}
                    {i === 1 && <Target className="w-32 h-32 stroke-[0.5px] opacity-20 text-blue-400" />}
                    {i === 2 && <Layers className="w-40 h-40 stroke-[0.5px] opacity-10" />}

                    <div className="absolute top-4 left-4 text-[8px] font-mono opacity-40 tracking-widest">
                      V_CORTEX_L0{i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-8xl font-bold tracking-tighter uppercase mb-12 leading-none">
                {t('intSystems.deepTitle1')} <br />
                <span className="opacity-30 italic font-light">{t('intSystems.deepTitle2')}</span>
              </h2>
              <p className="text-2xl text-white/50 leading-relaxed font-light mb-12">
                {t('intSystems.deepDesc')}
              </p>
              <div className="space-y-8">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all">{t(`intSystems.deepTechs.${i}.label`)}</span>
                      <span className="text-[10px] font-mono opacity-20">{t(`intSystems.deepTechs.${i}.val`)}</span>
                    </div>
                    <div className="h-px w-full bg-white/5 group-hover:bg-white/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 text-center border-t border-white/5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 mb-8 block">{t('intSystems.ctaLabel')}</span>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase italic">
            {t('intSystems.ctaTitle1')} <br />
            <span className="font-bold not-italic">{t('intSystems.ctaTitle2')}</span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
};
