import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const slugs = [
  "architectural-engineering",
  "experience-design",
  "intelligence-systems",
  "performance-edge"
];

const ids = ["01", "02", "03", "04"];

export const Disciplines = () => {
  const { t } = useTranslation();

  const disciplines = [
    {
      id: ids[0],
      slug: slugs[0],
      title: t('disciplines.items.0.title'),
      focus: t('disciplines.items.0.focus'),
      description: t('disciplines.items.0.description'),
      tech: t('disciplines.items.0.tech', { returnObjects: true }) as string[]
    },
    {
      id: ids[1],
      slug: slugs[1],
      title: t('disciplines.items.1.title'),
      focus: t('disciplines.items.1.focus'),
      description: t('disciplines.items.1.description'),
      tech: t('disciplines.items.1.tech', { returnObjects: true }) as string[]
    },
    {
      id: ids[2],
      slug: slugs[2],
      title: t('disciplines.items.2.title'),
      focus: t('disciplines.items.2.focus'),
      description: t('disciplines.items.2.description'),
      tech: t('disciplines.items.2.tech', { returnObjects: true }) as string[]
    },
    {
      id: ids[3],
      slug: slugs[3],
      title: t('disciplines.items.3.title'),
      focus: t('disciplines.items.3.focus'),
      description: t('disciplines.items.3.description'),
      tech: t('disciplines.items.3.tech', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="disciplines" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.5em] uppercase opacity-40 mb-6 block">{t('disciplines.label')}</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              {t('disciplines.title1')} <br />{t('disciplines.title2')}
            </h2>
          </div>
          <div className="md:max-w-xs pt-4">
            <p className="text-background/60 text-sm leading-relaxed border-l border-background/20 pl-6">
              {t('disciplines.description')}
            </p>
          </div>
        </div>

        <div className="border-t border-background/10">
          {disciplines.map((item, index) => (
            <Link
              key={index}
              to={`/disciplines/${item.slug}`}
              className="group block relative border-b border-background/10 py-12 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-xs font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:italic transition-all duration-500">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-2 block">
                      {t('disciplines.focusLabel')}: {item.focus}
                    </span>
                  </div>
                </div>

                <div className="max-w-md md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-background/60 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(techItem => (
                      <span key={techItem} className="text-[9px] uppercase tracking-widest border border-background/20 px-2 py-1">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
