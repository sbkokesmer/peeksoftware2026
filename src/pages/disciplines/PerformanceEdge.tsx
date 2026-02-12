import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import { Zap, Globe, Timer, BarChart3, ArrowLeft, Activity, Cpu, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export const PerformanceEdge = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Hız bazlı efektler için spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [-1, 1], [-5, 5]);
  const skewX = useTransform(smoothVelocity, [-1, 1], [-20, 20]);

  // Hero animasyonları
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-32 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 hover:opacity-100 transition-all group"
          >
            <div className="w-8 h-[1px] bg-white origin-left group-hover:scale-x-150 transition-transform" />
            Back to Origin
          </Link>
        </div>
      </div>

      {/* SECTION 1: The Warp Speed Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="text-[10px] tracking-[0.8em] uppercase opacity-40">Discipline 04 / Velocity</span>
          </motion.div>
          
          <h1 className="text-[15vw] font-black tracking-tighter leading-[0.8] uppercase italic">
            PERFOR<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>MANCE</span><br />
            EDGE.
          </h1>

          <div className="mt-12 flex justify-center gap-20">
            <div className="text-left">
              <div className="text-4xl font-mono font-light tracking-tighter">0.00ms</div>
              <div className="text-[8px] uppercase tracking-[0.3em] opacity-30">Target Latency</div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-mono font-light tracking-tighter">100/100</div>
              <div className="text-[8px] uppercase tracking-[0.3em] opacity-30">Core Web Vitals</div>
            </div>
          </div>
        </motion.div>

        {/* Background Velocity Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
                scaleX: useTransform(scrollYProgress, [0, 1], [0.2, 2]),
                x: useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 1000 : -1000])
              }}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: The Global Fabric (3D Grid Warp) */}
      <section className="relative py-60 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-none">
                Global <br />
                <span className="opacity-30">Fabric.</span>
              </h2>
              <p className="text-2xl text-white/50 leading-relaxed font-light max-w-xl mb-12">
                Veriyi sadece taşımıyoruz; onu dünyanın her noktasında, kullanıcıya en yakın "edge" düğümlerinde yeniden var ediyoruz.
              </p>
              
              <div className="space-y-12">
                {[
                  { label: "Edge Nodes", value: "250+", icon: <Globe className="w-4 h-4" /> },
                  { label: "Global Latency", value: "< 20ms", icon: <Activity className="w-4 h-4" /> },
                  { label: "Uptime", value: "99.99%", icon: <Gauge className="w-4 h-4" /> }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1">{stat.label}</div>
                      <div className="text-3xl font-mono">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square">
              {/* Animated Grid Warp */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  style={{ skewX, rotate: velocityFactor }}
                  className="grid grid-cols-8 grid-rows-8 gap-4 w-full h-full opacity-20"
                >
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-white/40 rounded-sm" />
                  ))}
                </motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
                <Cpu className="w-24 h-24 stroke-[0.5px] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Overclock Engine (Interactive Stress Test) */}
      <section className="py-60 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-32">
            <span className="text-[10px] font-mono mb-8 block opacity-40">SYSTEM STATUS: OPTIMIZED</span>
            <h3 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8]">
              OVER<br />CLOCKED.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "WASM Power", desc: "Tarayıcıda native uygulama hızı. JavaScript'in sınırlarını WebAssembly ile aşıyoruz.", icon: <Zap /> },
              { title: "Zero Hydration", desc: "Kullanıcı etkileşime geçene kadar sıfır yük. İlk yükleme anında interaktif deneyim.", icon: <Timer /> },
              { title: "Predictive Load", desc: "Kullanıcı daha tıklamadan bir sonraki adımı hazırlayan AI destekli ön yükleme.", icon: <BarChart3 /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                className="p-12 border border-black/5 transition-colors duration-500 group"
              >
                <div className="mb-12 opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: The Real-time Benchmark */}
      <section className="py-60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter uppercase mb-8">
                Engineering <br />the Edge.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Performans bizim için bir metrik değil, bir tasarım disiplinidir. Kodun her satırı, her asset ve her request, en yüksek verimlilik için optimize edilir.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { label: "Lighthouse Score", value: 100 },
                { label: "Time to Interactive", value: "0.4s" },
                { label: "Bundle Size", value: "< 12kb" }
              ].map((item, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">{item.label}</span>
                    <span className="text-2xl font-mono">{item.value}</span>
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="h-[1px] bg-white mt-4 origin-left"
                  />
                </div>
              ))}
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
          <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 mb-8 block">Push the limits</span>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase italic">
            Ready for <br />
            <span className="font-bold not-italic">the edge?</span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
};
