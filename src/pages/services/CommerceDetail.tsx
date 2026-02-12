import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Globe, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from 'react-i18next';

export const CommerceDetail = () => {
  const { t } = useTranslation();
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
            {t('comDetail.backToServices')}
          </button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-black/40 uppercase tracking-[0.5em] mb-8 block"
          >
            {t('comDetail.label')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[12vw] font-bold tracking-tighter uppercase leading-[0.75] mb-20"
          >
            {t('comDetail.title1')} <br />
            <span className="italic font-light">{t('comDetail.title2')}</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-black/10 pt-12">
            <p className="text-2xl font-light max-w-2xl leading-tight">
              {t('comDetail.description')}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{t('comDetail.conversionFocused')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t('comDetail.brandDriven')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {[ShoppingBag, Globe, BarChart3, Zap].map((Icon, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono opacity-20">0{i + 1}</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase mb-6">{t(`comDetail.cards.${i}.title`)}</h3>
              <p className="text-black/60 leading-relaxed mb-8 max-w-md">
                {t(`comDetail.cards.${i}.desc`)}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {t('comDetail.learnMore')} <ArrowRight className="w-3 h-3" />
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
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t('comDetail.uptimeForSales')}</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">{t('comDetail.modernShopperTitle')}</h2>
              <p className="text-xl text-black/60 font-light leading-relaxed mb-12">
                {t('comDetail.modernShopperDesc')}
              </p>
              <div className="space-y-6">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    <div className="w-2 h-2 bg-black" />
                    <span className="text-sm font-bold uppercase tracking-widest">{t(`comDetail.features.${i}`)}</span>
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
          {t('comDetail.ctaTitle1')} <br />
          <span className="opacity-20 italic font-light">{t('comDetail.ctaTitle2')}</span>
        </h2>
        <a href="mailto:info@peekdev.com">
          <button className="bg-black text-white px-12 py-6 text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform">
            {t('comDetail.ctaButton')}
          </button>
        </a>
      </section>
    </div>
  );
};
