import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Globe, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    title: "Architectural Engineering",
    description: "We build robust, future-proof digital foundations. From complex SaaS platforms to high-traffic enterprise solutions, our code is poetry in motion.",
    icon: Code2,
    tags: ["Next.js", "Microservices", "Cloud Native"]
  },
  {
    title: "Experience Design",
    description: "Design is not just how it looks, but how it works. We create intuitive, high-conversion interfaces that resonate with the modern consumer's psyche.",
    icon: Palette,
    tags: ["UX Strategy", "Visual Identity", "Prototyping"]
  },
  {
    title: "Performance & Scale",
    description: "In a world of milliseconds, speed is the ultimate luxury. We optimize your digital assets for peak performance and global scalability.",
    icon: Zap,
    tags: ["Edge Computing", "Core Web Vitals", "CDN"]
  },
  {
    title: "AI Integration",
    description: "Leveraging Large Language Models and machine learning to automate workflows and create personalized user journeys that feel like magic.",
    icon: Cpu,
    tags: ["LLMs", "Automation", "Data Science"]
  },
  {
    title: "Digital Transformation",
    description: "Modernizing legacy systems without friction. We help established brands pivot to the digital-first era with strategic precision.",
    icon: Globe,
    tags: ["Legacy Migration", "API First", "Growth"]
  },
  {
    title: "Security & Integrity",
    description: "Protecting your brand's digital sovereignty. We implement military-grade security protocols to ensure your data and users remain safe.",
    icon: ShieldCheck,
    tags: ["Encryption", "Compliance", "Audit"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              OUR CAPABILITIES.
            </h2>
            <p className="text-background/60 text-lg leading-relaxed">
              We combine technical rigor with creative intuition to solve the most complex digital challenges. Our approach is holistic, our execution is flawless.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-sm tracking-[0.5em] uppercase opacity-40">01 / Expertise</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 border border-background/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-12 group transition-colors border-r border-b border-background/10"
            >
              <service.icon className="w-8 h-8 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest border border-background/20 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
