import { motion } from 'framer-motion';
import { ArrowLeft, Database, ShieldCheck, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EngineeringDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] mb-8 block"
              >
                Discipline // 01 Engineering
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-12"
              >
                Architecting <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Resilience.</span>
              </motion.h1>
            </div>
            <div className="pb-4">
              <p className="text-xl text-white/40 font-light leading-relaxed max-w-md">
                High-performance system architectures built from scratch, pushing the boundaries of off-the-shelf packages to fit your business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Blueprint Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Bespoke Backend Systems",
                desc: "Core systems with microservice architecture based on Go or Node.js, capable of managing millions of concurrent requests.",
                icon: Code2,
                specs: ["Event-Driven Architecture", "High-Concurrency", "Auto-Scaling"]
              },
              {
                title: "Data Infrastructure",
                desc: "Hybrid SQL/NoSQL data architectures where data is not just stored but processed in milliseconds.",
                icon: Database,
                specs: ["Real-time Processing", "Data Sharding", "ACID Compliance"]
              },
              {
                title: "System Security",
                desc: "Leak-proof infrastructures where security is not just a layer but a standard in every line of code.",
                icon: ShieldCheck,
                specs: ["Zero Trust Model", "End-to-End Encryption", "Audit Logging"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] p-12 group hover:bg-white transition-colors duration-700">
                <item.icon className="w-8 h-8 mb-12 text-white group-hover:text-black transition-colors" />
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 mb-12 text-sm leading-relaxed transition-colors">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {item.specs.map((spec, j) => (
                    <li key={j} className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-black/40 flex items-center gap-2 transition-colors">
                      <div className="w-1 h-1 bg-current" /> {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Showcase */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">Our Engineering <br />Philosophy.</h2>
              <p className="text-black/60 leading-relaxed">
                We don't just write code; we design for the system's load, security requirements, and maintenance costs five years from now.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: "Performance First", text: "Every millisecond is a loss. We optimize our systems to run with the lowest possible latency." },
                { label: "Scalability by Design", text: "We build horizontally scalable structures so your system doesn't crash when your traffic increases 100-fold." },
                { label: "Clean Code Standards", text: "We produce industry-standard, documented, and tested code for sustainable software." },
                { label: "Cloud Agnostic", text: "AWS, Azure, or Google Cloud; we architect your infrastructure on the most suitable platform without creating vendor lock-in." }
              ].map((item, i) => (
                <div key={i} className="border-t border-black/10 pt-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">{item.label}</span>
                  <p className="text-sm text-black/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
          Need a technical <br />
          <span className="opacity-20 italic font-light">powerhouse?</span>
        </h2>
        <button className="bg-white text-black px-12 py-6 text-sm font-bold tracking-widest uppercase hover:invert transition-all">
          Consult our Engineers
        </button>
      </section>
    </div>
  );
};
