import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Shield, Zap, Globe, ArrowRight } from 'lucide-react';

const LOCATIONS = [
  { id: 'london', city: "London", country: "UK", coords: { lat: 51.5074, lng: -0.1278 }, role: "Headquarters" },
  { id: 'amsterdam', city: "Amsterdam", country: "NL", coords: { lat: 52.3676, lng: 4.9041 }, role: "Space Software" },
  { id: 'istanbul', city: "Istanbul", country: "TR", coords: { lat: 41.0082, lng: 28.9784 }, role: "R&D Center" },
  { id: 'newyork', city: "New York", country: "USA", coords: { lat: 40.7128, lng: -74.0060 }, role: "Operations" }
];

// Projeksiyon fonksiyonu: Lat/Long -> SVG Koordinatları
const project = (lat: number, lng: number, width: number, height: number) => {
  // Koordinat sınırlarını belirle (Dünya ölçeğinde değil, noktalarımızı merkeze alacak şekilde)
  const minLat = 35; const maxLat = 55;
  const minLng = -85; const maxLng = 40;

  const x = ((lng - minLng) / (maxLng - minLng)) * width;
  const y = height - ((lat - minLat) / (maxLat - minLat)) * height;
  return { x, y };
};

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const svgWidth = 1000;
  const svgHeight = 500;

  const projectedPoints = useMemo(() => 
    LOCATIONS.map(loc => ({
      ...loc,
      ...project(loc.coords.lat, loc.coords.lng, svgWidth, svgHeight)
    })), []);

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div style={{ opacity, scale }} className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {['London', 'Amsterdam', 'Istanbul', 'New York'].map((city, i) => (
              <span key={city} className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 flex items-center">
                {city} {i < 3 && <span className="ml-4 opacity-20">•</span>}
              </span>
            ))}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase mb-12"
          >
            Global <br />
            <span className="italic font-light opacity-20">Software House.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-black/60"
          >
            Londra'da Türk bilgisayar bilimcileri tarafından kurulan Peek; Hollanda'daki iştiraki <span className="text-black font-medium">Space Software</span> ile birlikte kıtalararası bir teknoloji köprüsü kuran, dijital dünyada "sessiz lüksü" kodlayan bir yazılım evidir.
          </motion.p>
        </motion.div>
      </section>

      {/* Abstract Network Visualization - "The Show" */}
      <section className="py-40 px-6 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4 space-y-12">
              <h2 className="text-5xl font-bold tracking-tighter uppercase leading-tight">
                Dört Ülke, <br />
                Tek Standart.
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
                <p>
                  Peek, bugün İngiltere, Hollanda, Türkiye ve Amerika Birleşik Devletleri'nde aktif operasyon yürüten küresel bir ağdır.
                </p>
                <p>
                  Haritaların ötesinde, sadece verinin ve kalitenin konuştuğu bir düzlemdeyiz. Her nokta, bir mühendislik kalesini temsil eder.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                {LOCATIONS.map((loc, i) => (
                  <div key={i} className="border-l border-white/10 pl-6 py-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest">{loc.city}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{loc.country}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 relative">
              <div className="relative aspect-[16/9] w-full bg-[#050505] rounded-3xl border border-white/5 overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,1)]">
                
                {/* Abstract Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" 
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                />

                <svg 
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                  className="absolute inset-0 w-full h-full p-20 overflow-visible"
                >
                  {/* Connecting Lines (Arcs) */}
                  <g className="opacity-20">
                    {projectedPoints.map((point, i) => 
                      projectedPoints.slice(i + 1).map((target, j) => (
                        <motion.path
                          key={`${i}-${j}`}
                          d={`M ${point.x} ${point.y} Q ${(point.x + target.x) / 2} ${(point.y + target.y) / 2 - 50} ${target.x} ${target.y}`}
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, delay: i * 0.2 }}
                        />
                      ))
                    )}
                  </g>

                  {/* Points and Labels */}
                  {projectedPoints.map((point, i) => (
                    <g key={point.id}>
                      {/* Glow Effect */}
                      <circle cx={point.x} cy={point.y} r="15" fill="white" className="opacity-[0.05] animate-pulse" />
                      
                      {/* Main Point */}
                      <motion.circle
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="white"
                        className="shadow-[0_0_15px_rgba(255,255,255,1)]"
                      />

                      {/* Label */}
                      <foreignObject 
                        x={point.x + 15} 
                        y={point.y - 20} 
                        width="150" 
                        height="50"
                        className="overflow-visible"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-left"
                        >
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white leading-none">
                            {point.city}
                          </div>
                          <div className="text-[8px] uppercase tracking-widest text-white/40 mt-1">
                            {point.role}
                          </div>
                        </motion.div>
                      </foreignObject>
                    </g>
                  ))}
                </svg>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 text-[10px] font-mono text-white/20 tracking-widest uppercase">
                  System Status: Global / Active
                </div>
                <div className="absolute bottom-8 left-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Real-time Node Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-white text-black px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/40 mb-12 block">Our Philosophy</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-16">
              The Invisible <br />
              <span className="italic font-light opacity-20">Interface.</span>
            </h2>
            <p className="text-2xl font-light text-black/60 leading-relaxed mb-20">
              En iyi teknoloji, varlığını hissettirmeyendir. Biz, kullanıcı ile sistem arasındaki tüm sürtünmeyi yok ederek, "görünmez" ama kusursuz çalışan deneyimler inşa ediyoruz. Buna "Dijital Sessiz Lüks" diyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Precision", desc: "Hata payına yer yok. Her satır kod, milimetrik bir hassasiyetle yazılır.", icon: Shield },
              { title: "Discretion", desc: "Gösterişten uzak, işlevselliğin en saf haliyle parladığı tasarımlar.", icon: Zap },
              { title: "Legacy", desc: "Bugünü değil, kurumunuzun gelecekteki 10 yılını taşıyacak altyapılar.", icon: Globe }
            ].map((item, i) => (
              <div key={i} className="group border-t border-black/5 pt-12">
                <item.icon className="w-6 h-6 mb-8 text-black/20 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-neutral-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
            Let's build your <br />
            <span className="italic font-light opacity-40">digital legacy.</span>
          </h2>
          <button className="group bg-black text-white px-16 py-8 text-sm font-bold tracking-[0.3em] uppercase hover:bg-neutral-800 transition-all flex items-center gap-4 mx-auto">
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
