import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Globe, ShieldCheck, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Code2, Palette, Zap, Cpu, Globe, ShieldCheck];

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      icon: icons[0],
      tags: t('services.items.0.tags', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      icon: icons[1],
      tags: t('services.items.1.tags', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      icon: icons[2],
      tags: t('services.items.2.tags', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      icon: icons[3],
      tags: t('services.items.3.tags', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.4.title'),
      description: t('services.items.4.description'),
      icon: icons[4],
      tags: t('services.items.4.tags', { returnObjects: true }) as string[]
    },
    {
      title: t('services.items.5.title'),
      description: t('services.items.5.description'),
      icon: icons[5],
      tags: t('services.items.5.tags', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              {t('services.title')}
            </h2>
            <p className="text-background/60 text-lg leading-relaxed">
              {t('services.description')}
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-sm tracking-[0.5em] uppercase opacity-40">{t('services.label')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 border border-background/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-12 group transition-colors border-r border-b border-background/10"
            >
              <service.icon className="w-8 h-8 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest border border-background/20 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
