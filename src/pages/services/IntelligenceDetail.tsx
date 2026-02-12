import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Command, Layers, Activity, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const IntelligenceDetail = () => {
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
            Back to Services
          </button>

          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.5em] mb-8 block"
          >
            Discipline // 03 Intelligence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-12"
          >
            Neural <br />
            <span className="text-emerald-500">Logic.</span>
          </motion.h1>
          <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed font-sans">
            We don't just store data; we transform it into a living intelligence layer that makes decisions and automates your business processes.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              title: "Custom AI Integration",
              desc: "We build systems that talk to your data and take action by merging your company memory with LLM (Large Language Model) structures.",
              icon: Cpu,
              code: "INIT_LLM_PIPELINE --vector-db=active"
            },
            {
              title: "Workflow Automation",
              desc: "We hand over repetitive manual processes to autonomous agents with zero margin for error. We reclaim time through code.",
              icon: Command,
              code: "EXEC_AUTONOMOUS_AGENT --mode=optimize"
            },
            {
              title: "Predictive Analytics",
              desc: "We read the future from past data. We base your decisions on data through demand forecasting and risk analysis.",
              icon: Activity,
              code: "RUN_HEURISTIC_ANALYSIS --depth=max"
            },
            {
              title: "Data Engineering",
              desc: "We build pipelines that strip raw data of noise and transform it into clean, actionable strategic information.",
              icon: Layers,
              code: "START_ETL_PROCESS --clean=true"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 group hover:border-emerald-500/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <item.icon className="w-8 h-8 text-emerald-500" />
                <span className="text-[10px] opacity-20">0{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{item.title}</h3>
              <p className="text-white/40 font-sans leading-relaxed mb-12 text-sm">
                {item.desc}
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
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">Intelligence as a Service.</h2>
              <p className="text-white/60 leading-relaxed mb-12">
                AI is not a trend for us; it's a productivity tool. We analyze where your business needs intelligence and produce custom solutions for you.
              </p>
              <div className="space-y-8">
                {[
                  { label: "Custom Model Training", label2: "Models trained specifically on your data." },
                  { label: "Semantic Search", label2: "Instant access to information with semantic search." },
                  { label: "Anomaly Detection", label2: "Structures that detect system errors before they occur." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 bg-emerald-500 mt-2" />
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest block mb-1">{item.label}</span>
                      <span className="text-xs text-white/40">{item.label2}</span>
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
          Ready to <br />
          <span className="text-emerald-500 italic font-light">automate?</span>
        </h2>
        <button className="bg-emerald-500 text-black px-12 py-6 text-sm font-bold tracking-widest uppercase hover:bg-white transition-all">
          Request Intelligence Audit
        </button>
      </section>
    </div>
  );
};
