import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MousePointer2, Wind, Sparkles, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export const ExperienceDesign = () => {
  const containerRef = useRef(null);
  const sensoryRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: sensoryProgress } = useScroll({
    target: sensoryRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Kinetic Feedback animations
  const skewX = useTransform(sensoryProgress, [0.6, 0.9], [0, 20]);
  const springSkew = useSpring(skewX, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div ref={containerRef} className="bg-[#fdfdfd] text-black min-h-screen selection:bg-black selection:text-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-32 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 hover:opacity-100 transition-all group text-black"
          >
            <div className="w-8 h-[1px] bg-black origin-left group-hover:scale-x-150 transition-transform" />
            Back to Origin
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase opacity-40">The Invisible Interface</span>
          </motion.div>
          
          <h1 className="text-[12vw] font-black tracking-tighter leading-[0.75] uppercase">
            EXPERI<br />
            <span className="italic font-light text-transparent" style={{ WebkitTextStroke: '1px black' }}>ENCE</span><br />
            DESIGN.
          </h1>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[80vw] h-[80vw] bg-gradient-to-tr from-black/[0.02] to-transparent blur-3xl"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-60 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="flex items-center gap-4 mb-12 opacity-40">
                <Fingerprint className="w-5 h-5" />
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Human-Centricity</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-none">
                Design is <br />
                <span className="text-white/30">how it feels.</span>
              </h2>
              <p className="text-2xl text-white/50 leading-relaxed font-light max-w-xl">
                Tasarım sadece piksellerden ibaret değildir; bir kullanıcının markanızla kurduğu ilk temasın yarattığı o sessiz histir.
              </p>
            </div>
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="text-center">
                <div className="text-8xl font-black tracking-tighter mb-2">94%</div>
                <div className="text-[10px] tracking-[0.4em] uppercase opacity-40">Emotional Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SHOW: Sensory Architecture Section */}
      <section ref={sensoryRef} className="relative bg-white">
        
        {/* 01. Cognitive Flow - The Infinite Stream */}
        <div className="min-h-screen flex items-center relative overflow-hidden border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <span className="text-[10px] font-mono mb-8 block opacity-30">01 / FLOW</span>
              <h3 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
                Cognitive<br />Flow.
              </h3>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Kullanıcının zihnini yormayan, bir sonraki adımı düşünmesine gerek kalmadan su gibi akan sezgisel yolculuklar inşa ediyoruz.
              </p>
            </div>
            <div className="relative h-[60vh] flex items-center justify-center">
              <motion.div 
                style={{ 
                  pathLength: sensoryProgress,
                  rotate: useTransform(sensoryProgress, [0, 0.4], [0, 180])
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
                  <motion.path
                    d="M 20,100 C 20,20 180,20 180,100 C 180,180 20,180 20,100"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wind className="w-20 h-20 stroke-[0.5px] animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 02. Micro-Delight - The Interactive Void */}
        <div 
          className="min-h-screen flex items-center relative bg-black text-white overflow-hidden cursor-none"
          onMouseMove={handleMouseMove}
        >
          {/* Custom Spotlight Cursor */}
          <motion.div 
            className="fixed pointer-events-none z-50 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"
            animate={{
              x: mousePos.x - 200,
              y: mousePos.y - 200,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
          />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-mono mb-8 block opacity-30">02 / DELIGHT</span>
              <h3 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                Micro<br />Delight.
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                {['Surprise', 'Quality', 'Emotion'].map((word) => (
                  <motion.div 
                    key={word}
                    whileHover={{ y: -10, color: "#fff" }}
                    className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-40 border border-white/20 py-4 px-8 rounded-full"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
              <p className="text-xl text-white/40 max-w-2xl mt-20 leading-relaxed">
                Her etkileşimde kaliteyi hissettiren, beklenmedik küçük mutluluk anları. Görünmez olanın içindeki mükemmellik.
              </p>
            </div>
          </div>
        </div>

        {/* 03. Kinetic Feedback - The Physical Digital */}
        <div className="min-h-screen flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <motion.div 
                  style={{ skewX: springSkew }}
                  className="space-y-4"
                >
                  <div className="h-20 bg-black w-full" />
                  <div className="h-20 bg-black/10 w-[80%]" />
                  <div className="h-20 bg-black w-[90%]" />
                </motion.div>
              </div>
              <div className="order-1 lg:order-2 text-right">
                <span className="text-[10px] font-mono mb-8 block opacity-30">03 / KINETIC</span>
                <h3 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
                  Kinetic<br />Feedback.
                </h3>
                <p className="text-xl text-muted-foreground max-w-md ml-auto leading-relaxed">
                  Dijital dünyada fiziksel bir dokunuş hissi yaratan tepkisel arayüzler. Her hareketin bir ağırlığı ve yankısı vardır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-60 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              The Craft <br />of Empathy.
            </h2>
            <div className="max-w-md text-right">
              <p className="text-muted-foreground leading-relaxed">
                Veriyi empatiyle harmanlıyoruz. Her butonun yerleşimi, her animasyonun hızı, kullanıcının o anki psikolojik durumu düşünülerek optimize edilir.
              </p>
            </div>
          </div>

          <div className="space-y-32">
            {[
              { step: "Discovery", title: "Duygusal Haritalama", desc: "Kullanıcının acı noktalarını ve motivasyonlarını derinlemesine analiz ediyoruz." },
              { step: "Prototyping", title: "Yaşayan İskeletler", desc: "Statik tasarımlar yerine, etkileşimin ruhunu gösteren dinamik prototipler." },
              { step: "Refinement", title: "Piksel Mükemmeliyeti", desc: "Görsel hiyerarşinin ve tipografinin en saf halini inşa ediyoruz." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 md:items-center border-b border-black/5 pb-12 group">
                <div className="md:w-1/4">
                  <span className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-20 group-opacity-100 transition-opacity">
                    {item.step}
                  </span>
                </div>
                <div className="md:w-2/4">
                  <h4 className="text-4xl font-bold tracking-tighter uppercase">{item.title}</h4>
                </div>
                <div className="md:w-1/4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 mb-8 block">Start the Journey</span>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase italic">
            Let's build <br />
            <span className="font-bold not-italic">the future.</span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
};
