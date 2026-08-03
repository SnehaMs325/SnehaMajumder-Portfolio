import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Brain, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map string keys to actual React icon components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Brain,
  Zap,
  Github: FaGithub,
};

export const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            {skills.title}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {skills.titleHighlight}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.subtitle}
          </motion.p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.items.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group"
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:border-purple-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    {/* Hover Glow Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <motion.div
                      className="mb-4 relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Ambient Halo Glow */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      <IconComponent
                        className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </motion.div>

                    <h3 className="font-semibold text-slate-200 text-base md:text-lg">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};