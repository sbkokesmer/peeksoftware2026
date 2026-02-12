import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-foreground min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 mb-8 block"
            >
              {t('contact.label')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-12"
            >
              {t('contact.title1')} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>{t('contact.title2')}</span>
            </motion.h1>

            <div className="space-y-12 mt-20">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">{t('contact.emailUs')}</h4>
                <a href="mailto:info@peekdev.com" className="text-2xl md:text-4xl font-light hover:italic transition-all">
                  info@peekdev.com
                </a>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">{t('contact.followUs')}</h4>
                <div className="flex gap-8">
                  <a href="https://www.linkedin.com/company/peekdev/" target="_blank" rel="noopener noreferrer" className="text-xl hover:italic transition-all">LinkedIn</a>
                  <a href="https://www.instagram.com/peekdev/" target="_blank" rel="noopener noreferrer" className="text-xl hover:italic transition-all">Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 p-8 md:p-12 rounded-3xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">{t('contact.formName')}</label>
                  <input type="text" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:outline-none focus:border-foreground transition-colors" placeholder={t('contact.formNamePlaceholder')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">{t('contact.formEmail')}</label>
                  <input type="email" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:outline-none focus:border-foreground transition-colors" placeholder={t('contact.formEmailPlaceholder')} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">{t('contact.formService')}</label>
                <select className="w-full bg-transparent border-b border-foreground/10 py-4 focus:outline-none focus:border-foreground transition-colors appearance-none">
                  <option className="bg-background">{t('contact.formServiceOptions.engineering')}</option>
                  <option className="bg-background">{t('contact.formServiceOptions.commerce')}</option>
                  <option className="bg-background">{t('contact.formServiceOptions.intelligence')}</option>
                  <option className="bg-background">{t('contact.formServiceOptions.mobile')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">{t('contact.formMessage')}</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-foreground/10 py-4 focus:outline-none focus:border-foreground transition-colors resize-none" placeholder={t('contact.formMessagePlaceholder')} />
              </div>

              <button className="w-full bg-foreground text-background py-6 text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 group">
                {t('contact.sendInquiry')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
