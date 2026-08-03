import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Award, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map string keys to actual React icon components
const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  Award,
};

export const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [flipped, setFlipped] = useState<number | null>(null);

  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {experience.title}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {experience.titleHighlight}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experience.subtitle}
          </motion.p>

          {/* Flip Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {experience.items.map((exp, index) => {
              const IconComponent = iconMap[exp.icon] || Briefcase;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="w-full"
                >
                  <motion.div
                    className="relative h-80 w-full cursor-pointer"
                    onHoverStart={() => setFlipped(index)}
                    onHoverEnd={() => setFlipped(null)}
                    style={{ perspective: 1000 }}
                  >
                    {/* Front Side */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-slate-900/60 backdrop-blur-md border border-purple-500/20 p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                      animate={{ rotateY: flipped === index ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <div>
                        <div className="mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg w-fit">
                          <IconComponent className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 text-sm font-medium mb-2">
                          {exp.organization}
                        </p>
                        <div className="flex items-center gap-1.5 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <p className="text-slate-400 text-xs">{exp.location}</p>
                        </div>
                        <p className="text-slate-500 text-xs font-mono">{exp.period}</p>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-4 mt-auto">
                        {exp.description}
                      </p>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-900/90 to-purple-950/80 backdrop-blur-md border border-purple-500/40 p-6 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                      animate={{ rotateY: flipped === index ? 0 : -180 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <h4 className="text-purple-300 text-sm font-semibold mb-2 uppercase tracking-wider">
                        Key Details & Impact
                      </h4>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                        {exp.details}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};