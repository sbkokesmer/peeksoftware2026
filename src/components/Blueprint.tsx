import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    no: "01",
    title: "Digital Forensic",
    description: "We examine your existing systems and market dynamics at a microscopic level. We don't just identify what you want; we prove what your business needs through data.",
    output: "Risk Assessment & Opportunity Map"
  },
  {
    no: "02",
    title: "Strategic Architecture",
    description: "We design the ecosystem before writing a single line of code. We create a technical constitution that is scalable, secure, and ready for future integrations.",
    output: "Technical Ecosystem Blueprint"
  },
  {
    no: "03",
    title: "High-Fidelity Craft",
    description: "For us, design is not just visual; it is a language of interaction. We build digital experiences centered on user psychology that carry your brand's soul.",
    output: "Interactive Experience Design"
  },
  {
    no: "04",
    title: "Architectural Build",
    description: "Our engineering team builds a living organism using clean code principles. We optimize every millisecond of performance to produce at the highest standards.",
    output: "Production-Ready Infrastructure"
  },
  {
    no: "05",
    title: "Stress Testing",
    description: "We push the system to its limits. From security vulnerabilities to load capacity, we audit every detail with 'Digital Forensic' precision.",
    output: "Quality & Security Audit"
  },
  {
    no: "06",
    title: "Global Deployment",
    description: "Launch is not an end, but a beginning. We ensure the system runs flawlessly on a global scale and track growth data in real-time.",
    output: "Live System & Growth Monitoring"
  }
];

export const Blueprint = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="blueprint" ref={containerRef} className="relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-20 lg:py-0">
            <span className="text-xs tracking-[0.5em] uppercase opacity-40 mb-6 block">02 / Methodology</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
              THE <br />BLUEPRINT.
            </h2>
            <p className="text-xl text-muted-foreground max-w-sm leading-relaxed">
              We don't just develop software; we reconstruct your digital assets with engineering discipline.
            </p>
            
            {/* Progress Indicator */}
            <div className="mt-12 hidden lg:block">
              <div className="h-[1px] w-32 bg-border relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-foreground"
                  style={{ 
                    width: "100%",
                    scaleX: useTransform(useScroll({ target: containerRef }).scrollYProgress, [0, 1], [0, 1]),
                    transformOrigin: "left"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Scrolling Content */}
          <div className="lg:w-1/2 py-20 lg:py-32">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-40 lg:mb-64 last:mb-0 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs opacity-40">[{phase.no}]</span>
                  <div className="h-px flex-1 bg-border group-hover:bg-foreground/20 transition-colors" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase italic mb-8">
                  {phase.title}
                </h3>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                  {phase.description}
                </p>
                
                <div className="inline-flex flex-col border-l-2 border-foreground pl-6 py-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block">Key Output</span>
                  <span className="text-sm font-bold uppercase tracking-wider">{phase.output}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm uppercase tracking-widest opacity-60">Complexity transformed into simplicity.</p>
          <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold">
            <span>Technical Documentation</span>
            <div className="w-8 h-px bg-foreground group-hover:w-12 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};
