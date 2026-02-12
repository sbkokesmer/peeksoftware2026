import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'EN', flag: 'English' },
  { code: 'tr', label: 'TR', flag: 'T\u00FCrk\u00E7e' },
  { code: 'de', label: 'DE', flag: 'Deutsch' },
  { code: 'nl', label: 'NL', flag: 'Nederlands' }
];

export const LanguageSwitcher = ({ isDark = false }: { isDark?: boolean }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-2 border transition-all",
          isDark
            ? "border-white/20 hover:border-white/40"
            : "border-black/20 hover:border-black/40"
        )}
      >
        {currentLang.label}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute top-full right-0 mt-2 min-w-[140px] border shadow-lg z-50",
              isDark ? "bg-black border-white/10" : "bg-white border-black/10"
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={cn(
                  "w-full text-left px-4 py-3 text-[11px] font-medium tracking-wider flex items-center justify-between transition-colors",
                  isDark
                    ? "hover:bg-white/5"
                    : "hover:bg-black/5",
                  lang.code === i18n.language && (isDark ? "text-white" : "text-black"),
                  lang.code !== i18n.language && (isDark ? "text-white/40" : "text-black/40")
                )}
              >
                <span>{lang.flag}</span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-60">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
