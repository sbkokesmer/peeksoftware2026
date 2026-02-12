import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const darkPages = ['/services/engineering', '/services/mobile', '/services/intelligence', '/ventures'];
  const isDarkPage = darkPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.work'), href: '/work' },
    { name: t('nav.ventures'), href: '/ventures' },
    { name: t('nav.about'), href: '/about' }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 h-20 flex items-center",
        scrolled ? "backdrop-blur-md border-b" : "bg-transparent",
        isDarkPage
          ? (scrolled ? "bg-black/80 border-white/10 text-white" : "text-white")
          : (scrolled ? "bg-white/80 border-black/5 text-black" : "text-black")
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity cursor-pointer"
          >
            PEEK<span className="text-[10px] align-top ml-1">&reg;</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "hover:opacity-50 transition-opacity",
                location.pathname === item.href ? "opacity-100" : "opacity-50"
              )}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher isDark={isDarkPage} />
          <a href="mailto:info@peekdev.com">
            <Button
              variant="default"
              className={cn(
                "rounded-none px-8 transition-colors",
                isDarkPage
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
            >
              {t('nav.startProject')}
            </Button>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "absolute top-20 left-0 w-full border-b p-6 flex flex-col space-y-6 md:hidden",
            isDarkPage ? "bg-black border-white/10" : "bg-white border-black/10"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-2xl font-bold tracking-tighter uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <LanguageSwitcher isDark={isDarkPage} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};
