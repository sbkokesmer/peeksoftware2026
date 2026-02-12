import { motion } from 'framer-motion';
import { TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const internalProducts = [
  {
    title: "Apichain",
    description: "A sophisticated data cleaning and extraction engine. Provide a source, define your needs, and receive structured, high-fidelity data. We handle the scraping and normalization so you don't have to.",
    status: "Open for Investment",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Ignis AI",
    description: "Advanced wildfire intelligence. Predicts fire risks up to 7 days in advance with high precision. Post-event, it analyzes damage and determines if the cause was natural or artificial.",
    status: "Open for Investment",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1542350327-446d6ca1608e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Deskpet",
    description: "The next generation of macOS companionship. A desktop pet that grows with you, forming emotional bonds while serving as a highly capable productivity assistant and calendar manager.",
    status: "Internal Only",
    isOpen: false,
    image: "https://images.unsplash.com/photo-1527433270417-66d3b3d4775d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Mailelm",
    description: "A high-performance email marketing ecosystem. Designed for scale, Mailelm allows for complex campaign management and bulk delivery with industry-leading deliverability rates.",
    status: "Internal Only",
    isOpen: false,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Ventures = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-white/20 text-[10px] tracking-[0.3em] uppercase mb-8"
          >
            Proprietary Projects
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            PEEK<br />VENTURES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Our internal laboratory where we build the future. From AI-driven environmental analysis to productivity tools, these are the products we believe in.
          </motion.p>
        </header>

        <div className="space-y-32">
          {internalProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={cn("relative aspect-video overflow-hidden bg-white/5", index % 2 === 1 && "lg:order-last")}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">{product.title}</h2>
                  <div className={cn(
                    "px-3 py-1 text-[10px] font-bold tracking-widest uppercase flex items-center space-x-2",
                    product.isOpen ? "bg-white text-black" : "border border-white/20 text-white/40"
                  )}>
                    {product.isOpen ? <TrendingUp className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    <span>{product.status}</span>
                  </div>
                </div>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  {product.description}
                </p>
                {product.isOpen && (
                  <button className="group flex items-center space-x-4 text-sm font-bold tracking-[0.2em] uppercase">
                    <span>Inquire for Investment</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center border-t border-white/10 pt-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">Innovation never sleeps</h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            Interested in our venture portfolio or looking to collaborate on a new idea?
          </p>
          <button className="px-12 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};
