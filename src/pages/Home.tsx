import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { Disciplines } from '../components/Disciplines';
import { Blueprint } from '../components/Blueprint';
import { TechStack } from '../components/TechStack';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Disciplines />
      <Blueprint />
      <TechStack />
      <section className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-4xl font-bold tracking-tighter mb-4">{t('home.uptime')}</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">{t('home.uptimeDesc')}</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold tracking-tighter mb-4">{t('home.responseTime')}</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">{t('home.responseTimeDesc')}</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold tracking-tighter mb-4">{t('home.awards')}</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">{t('home.awardsDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
