import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Globe, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export const CommerceDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Services
          </button>

          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-black/40 uppercase tracking-[0.5em] mb-8 block"
          >
            Discipline // 02 Commerce
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-bold tracking-tighter uppercase leading-[0.75] mb-20"
          >
            Digital <br />
            <span className="italic font-light">Revenue.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-black/10 pt-12">
            <p className="text-2xl font-light max-w-2xl leading-tight">
              Not just a website; we design high-performance commerce experiences that increase your brand value and turn users into loyal customers.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Conversion Focused</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Brand Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Headless Commerce Solutions",
              desc: "Ultra-fast shopping experiences integrated with Shopify, BigCommerce, or custom infrastructures, with a completely custom-designed frontend.",
              icon: ShoppingBag
            },
            {
              title: "Corporate Brand Identity",
              desc: "We architect your digital presence, from typography to color palette, to reflect the soul of your brand.",
              icon: Globe
            },
            {
              title: "Conversion Rate Optimization",
              desc: "We reduce cart abandonment rates and increase your sales through scientific methods using data analytics and user testing.",
              icon: BarChart3
            },
            {
              title: "Global SEO Strategy",
              desc: "We make your brand visible in the global market through content and authority strategies, not just technical SEO.",
              icon: Zap
            }
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono opacity-20">0{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{item.title}</h3>
              <p className="text-black/60 leading-relaxed mb-8 max-w-md">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Proof */}
      <section className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-black/5 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
                  alt="Premium Commerce"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-black text-white p-12 hidden lg:block">
                <div className="text-6xl font-bold tracking-tighter mb-2">99.9%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Uptime for Sales</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">We build for <br />the modern shopper.</h2>
              <p className="text-xl text-black/60 font-light leading-relaxed mb-12">
                We offer your customers a seamless journey with mobile-first, one-click checkout support and pages that load in seconds.
              </p>
              <div className="space-y-6">
                {["Custom Checkout Flows", "Multi-currency & Language", "Omnichannel Integration"].map((f, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    <div className="w-2 h-2 bg-black" />
                    <span className="text-sm font-bold uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center border-t border-black/10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
          Ready to scale <br />
          <span className="opacity-20 italic font-light">your revenue?</span>
        </h2>
        <button className="bg-black text-white px-12 py-6 text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform">
          Start Commerce Project
        </button>
      </section>
    </div>
  );
};
