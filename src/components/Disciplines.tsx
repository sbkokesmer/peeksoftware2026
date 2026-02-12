import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const disciplines = [
  {
    id: "01",
    slug: "architectural-engineering",
    title: "Architectural Engineering",
    focus: "Scalable Foundations",
    description: "We transform complex business logic into modular and sustainable system architectures that remain resilient under high traffic.",
    tech: ["Microservices", "Event-Driven", "Cloud-Native"]
  },
  {
    id: "02",
    slug: "experience-design",
    title: "Experience Design",
    focus: "Cognitive Interfaces",
    description: "We treat design not just as aesthetics, but as interaction engineering driven by user psychology and data-driven insights.",
    tech: ["UX Research", "Design Systems", "Interaction"]
  },
  {
    id: "03",
    slug: "intelligence-systems",
    title: "Intelligence Systems",
    focus: "LLM & Automation",
    description: "We integrate AI not as an 'add-on', but as a core capability that automates your business processes and decision-making.",
    tech: ["Custom LLMs", "RAG", "Workflow Automation"]
  },
  {
    id: "04",
    slug: "performance-edge",
    title: "Performance & Edge",
    focus: "Zero Latency",
    description: "In a world where milliseconds turn into revenue, we optimize your systems to run at peak speed across the global edge.",
    tech: ["Edge Computing", "WASM", "Core Web Vitals"]
  }
];

export const Disciplines = () => {
  return (
    <section id="disciplines" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.5em] uppercase opacity-40 mb-6 block">01 / Expertise</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              THE <br />DISCIPLINES.
            </h2>
          </div>
          <div className="md:max-w-xs pt-4">
            <p className="text-background/60 text-sm leading-relaxed border-l border-background/20 pl-6">
              Peek is a specialized technology house that approaches your digital products with rigorous engineering discipline, moving beyond the standard agency model.
            </p>
          </div>
        </div>

        <div className="border-t border-background/10">
          {disciplines.map((item, index) => (
            <Link
              key={index}
              to={`/disciplines/${item.slug}`}
              className="group block relative border-b border-background/10 py-12 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:italic transition-all duration-500">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-2 block">
                      Focus: {item.focus}
                    </span>
                  </div>
                </div>

                <div className="max-w-md md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-background/60 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-widest border border-background/20 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
