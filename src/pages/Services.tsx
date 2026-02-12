import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Database, Smartphone, Layout, Zap, ShieldCheck, Activity, Fingerprint, CreditCard, Terminal, Cpu, Layers, Command } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// --- MASTERPIECE 01: PEEK CORE KERNEL (Engineering) ---
const EngineeringMasterpiece = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 w-full max-w-md p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-white/40 tracking-[0.2em]">PEEK_SYSTEM_KERNEL_V2.0</span>
          </div>
          <span className="text-[10px] text-white/20">UPTIME: 99.99%</span>
        </div>

        <div className="space-y-6">
          {[
            { label: "LOAD_BALANCER", value: 84, color: "bg-white/20" },
            { label: "DB_LATENCY", value: 12, suffix: "ms", color: "bg-white/40" },
            { label: "TRAFFIC_FLOW", value: 92, color: "bg-white/60" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[9px] tracking-widest text-white/60">
                <span>{stat.label}</span>
                <span>{stat.value}{stat.suffix || '%'}</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className={`h-full ${stat.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
              className="h-8 bg-white/5 border border-white/10 rounded-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MASTERPIECE 02: PEEK COMMERCE ENGINE (Commerce) ---
const CommerceMasterpiece = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full max-w-sm p-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-black text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 opacity-40" />
            </div>
          </div>

          <div className="mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Peek Checkout</div>
            <div className="text-4xl font-bold tracking-tighter">0.4s</div>
            <div className="text-[10px] opacity-40 mt-1">TRANSACTION SPEED</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-t border-white/10">
              <span className="text-xs opacity-60">Conversion Rate</span>
              <span className="text-emerald-400 font-mono">+12.4%</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-widest"
            >
              Optimize Store
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-1 bg-black/5 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MASTERPIECE 03: PEEK AUTONOMOUS LOGIC (Intelligence) ---
const IntelligenceMasterpiece = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const steps = [
    { id: 'INGEST', label: 'DATA_INGESTION', status: 'COMPLETED' },
    { id: 'ANALYZE', label: 'HEURISTIC_ANALYSIS', status: 'PROCESSING' },
    { id: 'DECIDE', label: 'LOGIC_GATE_DECISION', status: 'PENDING' },
    { id: 'EXECUTE', label: 'AUTONOMOUS_EXECUTION', status: 'PENDING' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      const newLog = `[${new Date().toLocaleTimeString()}] ${steps[activeStep].id}_SUCCESS: Vector space optimized.`;
      setLogs(prev => [newLog, ...prev].slice(0, 5));
    }, 2000);
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#080808] overflow-hidden font-mono p-12">
      <div className="w-full max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side: The Logic Pipeline */}
        <div className="space-y-4">
          <div className="text-[10px] text-white/20 tracking-[0.4em] mb-8 uppercase">Neural_Pipeline_v4</div>

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              animate={{
                opacity: activeStep === i ? 1 : 0.3,
                x: activeStep === i ? 10 : 0
              }}
              className={`p-4 border ${activeStep === i ? 'border-white/40 bg-white/5' : 'border-white/5'} rounded-lg transition-colors`}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-white/80">{step.label}</span>
                {activeStep === i && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border-t-2 border-white rounded-full"
                  />
                )}
              </div>
              <div className="mt-2 h-[1px] w-full bg-white/10 overflow-hidden">
                {activeStep === i && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: The Decision Matrix & Logs */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative z-10 h-full flex flex-col">
              <div className="text-[9px] text-white/40 mb-4 tracking-widest uppercase">Decision_Matrix</div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: activeStep === (i % 4) ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.02)',
                      scale: activeStep === (i % 4) ? 1.1 : 1
                    }}
                    className="aspect-square rounded-sm border border-white/5"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-32 bg-black border border-white/10 rounded-lg p-4 overflow-hidden">
            <div className="text-[8px] text-emerald-500/60 mb-2 tracking-widest uppercase">Live_System_Logs</div>
            <div className="space-y-1">
              {logs.map((log, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className="text-[8px] text-white/40 whitespace-nowrap"
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

// --- MASTERPIECE 04: PEEK MOBILE OS (Mobile) ---
const MobileMasterpiece = () => {
  const [time, setTime] = useState('09:41');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#f5f5f7] overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-[280px] h-[580px] bg-white border-[10px] border-black rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden relative"
      >
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-[1.2rem] z-50 flex items-center justify-center">
          <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>

        {/* App Content */}
        <div className="p-6 pt-14 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm font-bold">{time}</div>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-black/10 rounded-sm" />
              <div className="w-4 h-2 bg-black rounded-sm" />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P.</span>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-40">Welcome to</div>
              <div className="text-xl font-bold tracking-tight">Peek Mobile</div>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <div className="p-4 bg-black/[0.03] rounded-2xl border border-black/5">
              <div className="flex justify-between items-center mb-4">
                <Activity className="w-4 h-4 opacity-40" />
                <span className="text-[10px] font-bold opacity-40">LIVE_METRICS</span>
              </div>
              <div className="h-12 flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1 bg-black/10 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-black rounded-2xl p-4 flex flex-col justify-between text-white">
                <Fingerprint className="w-5 h-5 opacity-40" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
              </div>
              <div className="aspect-square bg-black/[0.03] border border-black/5 rounded-2xl p-4 flex flex-col justify-between">
                <Zap className="w-5 h-5 opacity-40" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Fast</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-1/3 bg-black/10 rounded-full mx-auto mb-2" />
        </div>
      </motion.div>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: any, index: number }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex flex-col lg:flex-row border-b border-foreground/10">
      <div className={`w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center ${!isEven ? 'lg:order-2 border-l border-foreground/10' : ''}`}>
        <div className="max-w-xl">
          <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em] mb-8 block">
            Vertical 0{index + 1} // {service.category}
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            {service.title}
          </h2>
          <p className="text-xl text-foreground/60 font-light leading-relaxed mb-12">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            {service.subServices.map((sub: any, i: number) => (
              <div key={i} className="group cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <sub.icon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold uppercase tracking-wider">{sub.name}</span>
                </div>
                <p className="text-xs text-foreground/40 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>

          <Link to={service.link}>
            <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              <span className="border-b border-foreground/20 pb-1 group-hover:border-foreground transition-colors">
                {t('servicesPage.exploreService')}
              </span>
              <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className={`w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen ${isEven ? 'border-l border-foreground/10' : ''}`}>
        {service.proofComponent}
      </div>
    </section>
  );
};

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      category: t('servicesPage.engineering.category'),
      title: t('servicesPage.engineering.title'),
      description: t('servicesPage.engineering.description'),
      subServices: [
        { name: t('servicesPage.engineering.subServices.0.name'), icon: Zap, desc: t('servicesPage.engineering.subServices.0.desc') },
        { name: t('servicesPage.engineering.subServices.1.name'), icon: Layout, desc: t('servicesPage.engineering.subServices.1.desc') },
        { name: t('servicesPage.engineering.subServices.2.name'), icon: Database, desc: t('servicesPage.engineering.subServices.2.desc') },
        { name: t('servicesPage.engineering.subServices.3.name'), icon: ShieldCheck, desc: t('servicesPage.engineering.subServices.3.desc') }
      ],
      proofComponent: <EngineeringMasterpiece />,
      link: "/services/engineering"
    },
    {
      category: t('servicesPage.commerce.category'),
      title: t('servicesPage.commerce.title'),
      description: t('servicesPage.commerce.description'),
      subServices: [
        { name: t('servicesPage.commerce.subServices.0.name'), icon: Zap, desc: t('servicesPage.commerce.subServices.0.desc') },
        { name: t('servicesPage.commerce.subServices.1.name'), icon: Globe, desc: t('servicesPage.commerce.subServices.1.desc') },
        { name: t('servicesPage.commerce.subServices.2.name'), icon: ShieldCheck, desc: t('servicesPage.commerce.subServices.2.desc') },
        { name: t('servicesPage.commerce.subServices.3.name'), icon: Zap, desc: t('servicesPage.commerce.subServices.3.desc') }
      ],
      proofComponent: <CommerceMasterpiece />,
      link: "/services/commerce"
    },
    {
      category: t('servicesPage.intelligence.category'),
      title: t('servicesPage.intelligence.title'),
      description: t('servicesPage.intelligence.description'),
      subServices: [
        { name: t('servicesPage.intelligence.subServices.0.name'), icon: Cpu, desc: t('servicesPage.intelligence.subServices.0.desc') },
        { name: t('servicesPage.intelligence.subServices.1.name'), icon: Command, desc: t('servicesPage.intelligence.subServices.1.desc') },
        { name: t('servicesPage.intelligence.subServices.2.name'), icon: Layers, desc: t('servicesPage.intelligence.subServices.2.desc') },
        { name: t('servicesPage.intelligence.subServices.3.name'), icon: Activity, desc: t('servicesPage.intelligence.subServices.3.desc') }
      ],
      proofComponent: <IntelligenceMasterpiece />,
      link: "/services/intelligence"
    },
    {
      category: t('servicesPage.mobile.category'),
      title: t('servicesPage.mobile.title'),
      description: t('servicesPage.mobile.description'),
      subServices: [
        { name: t('servicesPage.mobile.subServices.0.name'), icon: Smartphone, desc: t('servicesPage.mobile.subServices.0.desc') },
        { name: t('servicesPage.mobile.subServices.1.name'), icon: Smartphone, desc: t('servicesPage.mobile.subServices.1.desc') },
        { name: t('servicesPage.mobile.subServices.2.name'), icon: Layout, desc: t('servicesPage.mobile.subServices.2.desc') },
        { name: t('servicesPage.mobile.subServices.3.name'), icon: Zap, desc: t('servicesPage.mobile.subServices.3.desc') }
      ],
      proofComponent: <MobileMasterpiece />,
      link: "/services/mobile"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 mb-8 block"
          >
            {t('servicesPage.label')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12"
          >
            {t('servicesPage.title1')} <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>{t('servicesPage.title2')}</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="max-w-xl text-xl text-foreground/50 font-light">
              {t('servicesPage.description')}
            </p>
          </div>
        </div>
      </section>

      {/* The Catalog */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceSection key={index} service={service} index={index} />
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
            {t('servicesPage.ctaTitle1')} <br />
            <span className="italic font-light opacity-40">{t('servicesPage.ctaTitle2')}</span>
          </h2>
          <Link to="/contact">
            <button className="bg-foreground text-background px-16 py-8 text-lg font-bold tracking-widest uppercase hover:scale-105 transition-transform">
              {t('servicesPage.ctaButton')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
