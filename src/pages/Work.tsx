import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: "Dental Vitrin",
    categoryKey: "work.categories.ecommerceHealth",
    url: "https://dentalvitrin.com.tr",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ST Moto ATV",
    categoryKey: "work.categories.automotiveRetail",
    url: "https://stmotoatv.com",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Naz Cetin Beauty",
    categoryKey: "work.categories.beautyWellness",
    url: "https://nazcetinbeauty.com",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Poskobi",
    categoryKey: "work.categories.saasFintech",
    url: "https://poskobi.com",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Space Automotive",
    categoryKey: "work.categories.automotiveServices",
    url: "https://spaceautomotive.nl",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Space Elektrotechniek",
    categoryKey: "work.categories.engineeringTech",
    url: "https://spaceelektrotechniek.nl",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Biohuman",
    categoryKey: "work.categories.healthScience",
    url: "https://biohuman.com",
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Vitahuman",
    categoryKey: "work.categories.wellnessLifestyle",
    url: "https://vitahuman.com",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  }
];

export const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            {t('work.title1')}<br />{t('work.title2')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black/60 max-w-2xl font-light leading-relaxed"
          >
            {t('work.subtitle')}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white p-3 rounded-full">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1 uppercase">{project.title}</h3>
                  <p className="text-sm text-black/40 uppercase tracking-widest font-medium">{t(project.categoryKey)}</p>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('work.viewProject')}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center border-t border-black/5 pt-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">{t('work.andMore')}</h2>
          <p className="text-black/60 mb-10 max-w-lg mx-auto">
            {t('work.moreDesc')}
          </p>
          <button className="px-12 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-black/90 transition-colors">
            {t('work.contactMore')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
