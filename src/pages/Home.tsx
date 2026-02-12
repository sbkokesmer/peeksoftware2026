import { Hero } from '../components/Hero';
import { Disciplines } from '../components/Disciplines';
import { Blueprint } from '../components/Blueprint';
import { TechStack } from '../components/TechStack';

export const Home = () => {
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
              <h4 className="text-4xl font-bold tracking-tighter mb-4">99.9%</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Uptime for all managed systems</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold tracking-tighter mb-4">250ms</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Average global response time</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold tracking-tighter mb-4">15+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Global industry awards</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
