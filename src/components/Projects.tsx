import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const learningJourney = [
  {
    title: 'Exploring React Components',
    description: 'Building small experimental components to understand props, state, and hooks through hands-on practice.',
    tags: ['React', 'JavaScript', 'CSS'],
    focus: 'Component Logic',
  },
  {
    title: 'Web Development Practice',
    description: 'Creating responsive layouts and interactive UIs using HTML, CSS, and vanilla JavaScript to strengthen fundamentals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    focus: 'Frontend Basics',
  },
  {
    title: 'Design & Prototyping',
    description: 'Learning UI/UX principles through Figma and Canva, translating design concepts into code implementations.',
    tags: ['Figma', 'Canva', 'UI/UX'],
    focus: 'Design Skills',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Learning <span className="text-gradient">Journey</span>
          </motion.h2>
          
          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Currently exploring through consistent vibe coding sessions — small experimental builds to understand concepts and improve hands-on logic.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningJourney.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  className="relative bg-card/95 backdrop-blur-md border border-border rounded-xl p-6 h-full flex flex-col group hover:border-primary/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                  
                  <div className="mb-2 relative z-10">
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                      {item.focus}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-space relative z-10 break-words">{item.title}</h3>
                  <p className="text-foreground/80 mb-4 flex-1 relative z-10 break-words">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
