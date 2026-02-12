import { motion } from 'framer-motion';

const techs = [
  "TypeScript", "Next.js", "Tailwind CSS", "Node.js", 
  "PostgreSQL", "AWS", "Framer Motion", "OpenAI API",
  "GraphQL", "Docker", "Vercel", "Supabase"
];

export const TechStack = () => {
  return (
    <section id="technologies" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-sm tracking-[0.5em] uppercase mb-4 opacity-50">The Stack</h2>
        <p className="text-4xl font-bold tracking-tighter max-w-xl">
          We use the most advanced technologies to build the future.
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {/* Infinite Marquee Effect */}
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-12 items-center"
          >
            {[...techs, ...techs].map((tech, i) => (
              <span key={i} className="text-6xl md:text-8xl font-black tracking-tighter text-foreground/5 hover:text-foreground transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
