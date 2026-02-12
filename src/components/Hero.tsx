import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 border border-foreground/20 text-[10px] tracking-[0.3em] uppercase mb-8">
            {t('hero.badge')}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
            {t('hero.title1')} <br />
            <span className="italic font-light">{t('hero.title2')}</span> {t('hero.title3')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-between bg-foreground text-background px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all hover:pr-6">
              {t('hero.cta1')}
              <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="px-8 py-4 text-sm font-bold tracking-widest uppercase border border-foreground/20 hover:bg-muted transition-colors">
              {t('hero.cta2')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative aspect-[4/5] bg-muted overflow-hidden"
        >
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Premium Digital Craft"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 bg-background p-6 hidden md:block">
            <p className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-2">{t('hero.currentFocus')}</p>
            <p className="text-sm font-bold tracking-tight">{t('hero.currentFocusText')}</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -left-20 text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none tracking-tighter">
        {t('hero.watermark')}
      </div>
    </section>
  );
};
