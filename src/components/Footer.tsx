import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <span className="text-4xl font-bold tracking-tighter mb-8 block">{t('footer.brand')}</span>
            <p className="text-background/60 max-w-sm text-lg leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">{t('footer.navigation')}</h4>
            <ul className="space-y-4">
              <li><a href="#disciplines" className="text-sm hover:italic transition-all">{t('footer.disciplines')}</a></li>
              <li><a href="#blueprint" className="text-sm hover:italic transition-all">{t('footer.blueprintLink')}</a></li>
              <li><a href="/work" className="text-sm hover:italic transition-all">{t('footer.selectedWorks')}</a></li>
              <li><a href="/ventures" className="text-sm hover:italic transition-all">{t('footer.ventures')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">{t('footer.connect')}</h4>
            <ul className="space-y-4">
              <li><a href="https://www.linkedin.com/company/peekdev/" target="_blank" rel="noopener noreferrer" className="text-sm hover:italic transition-all">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/peekdev/" target="_blank" rel="noopener noreferrer" className="text-sm hover:italic transition-all">Instagram</a></li>
              <li><a href="mailto:info@peekdev.com" className="text-sm hover:italic transition-all">info@peekdev.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest opacity-40 uppercase">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-widest opacity-40 uppercase hover:opacity-100 transition-opacity">{t('footer.privacy')}</a>
            <a href="#" className="text-[10px] tracking-widest opacity-40 uppercase hover:opacity-100 transition-opacity">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
