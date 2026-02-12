import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Layers, Layout, Fingerprint, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export const MobileDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/services')}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Services
          </button>

          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] mb-8 block"
          >
            Discipline // 04 Mobile
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12"
          >
            Native <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Fluidity.</span>
          </motion.h1>
          <p className="text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
            Cihazın donanımıyla yazılımı arasındaki sınırı kaldıran, 120Hz akıcılığında ve parmak ucuyla yönetilen mobil dünyalar inşa ediyoruz.
          </p>
        </div>
      </section>

      {/* Mobile Capabilities */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              {[
                {
                  title: "Native iOS & Android",
                  desc: "Swift ve Kotlin ile platformun tüm gücünü kullanan, en yüksek performansa sahip uygulamalar.",
                  icon: Smartphone
                },
                {
                  title: "Cross-Platform Excellence",
                  desc: "React Native ve Flutter ile tek kod tabanından, native kalitesinde ve hızlı iterasyon sağlayan çözümler.",
                  icon: Layers
                },
                {
                  title: "Mobile-First UX/UI",
                  desc: "Küçük ekranların kısıtlarını avantaja çeviren, jest odaklı ve sezgisel arayüz tasarımları.",
                  icon: Layout
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Device Mockup Simulation */}
            <div className="relative flex justify-center">
              <div className="w-[300px] h-[600px] bg-white/5 border-[8px] border-white/10 rounded-[3rem] p-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />
                <div className="mt-12 space-y-6">
                  <div className="w-full h-40 bg-white/5 rounded-2xl animate-pulse" />
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-white/20 rounded-full" />
                      <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                      <Fingerprint className="w-8 h-8 opacity-20" />
                    </div>
                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                      <Activity className="w-8 h-8 opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -right-12 top-1/4 bg-white text-black p-6 rounded-xl shadow-2xl">
                <div className="text-xs font-bold uppercase tracking-widest mb-1">Frame Rate</div>
                <div className="text-3xl font-bold tracking-tighter">120 FPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Mobile Engineering Standards.</h2>
            <p className="text-black/40">Uygulamalarımızın her biri Peek kalite standartlarına göre test edilir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Offline-First", text: "İnternet bağlantısı koptuğunda bile çalışmaya devam eden, senkronizasyon yeteneği yüksek yapılar." },
              { label: "Biometric Security", text: "FaceID, TouchID ve en üst düzey şifreleme protokolleri ile verileriniz güvende." },
              { label: "Push Orchestration", text: "Kullanıcıyı rahatsız etmeyen, akıllı ve kişiselleştirilmiş bildirim stratejileri." }
            ].map((item, i) => (
              <div key={i} className="border-l border-black/10 pl-8">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">{item.label}</span>
                <p className="text-sm text-black/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">
          Go mobile <br />
          <span className="opacity-20 italic font-light">without limits.</span>
        </h2>
        <button className="bg-white text-black px-12 py-6 text-sm font-bold tracking-widest uppercase hover:invert transition-all">
          Start Mobile Project
        </button>
      </section>
    </div>
  );
};
