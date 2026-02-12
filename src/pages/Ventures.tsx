import { motion } from 'framer-motion';
import { TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const internalProducts = [
  {
    title: "Apichain",
    descKey: "ventures.products.apichain",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Ignis AI",
    descKey: "ventures.products.ignisAi",
    isOpen: true,
    image: "https://images.unsplash.com/photo-1542350327-446d6ca1608e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Deskpet",
    descKey: "ventures.products.deskpet",
    isOpen: false,
    image: "https://images.unsplash.com/photo-1527433270417-66d3b3d4775d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Mailelm",
    descKey: "ventures.products.mailelm",
    isOpen: false,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Ventures = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-white/20 text-[10px] tracking-[0.3em] uppercase mb-8"
          >
            {t('ventures.label')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            {t('ventures.title1')}<br />{t('ventures.title2')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            {t('ventures.description')}
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
                    <span>{product.isOpen ? t('ventures.openForInvestment') : t('ventures.internalOnly')}</span>
                  </div>
                </div>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  {t(product.descKey)}
                </p>
                {product.isOpen && (
                  <button className="group flex items-center space-x-4 text-sm font-bold tracking-[0.2em] uppercase">
                    <span>{t('ventures.inquireInvestment')}</span>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">{t('ventures.innovationTitle')}</h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            {t('ventures.innovationDesc')}
          </p>
          <button className="px-12 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors">
            {t('ventures.getInTouch')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
