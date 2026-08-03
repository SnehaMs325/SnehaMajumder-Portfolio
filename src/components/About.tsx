import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState('');
  
  const { about } = portfolioData;

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(about.bio.slice(0, index));
        index++;
        if (index > about.bio.length) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView, about.bio]);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Constellation SVG decoration */}
          <div className="absolute -top-10 -left-6 w-32 h-32 opacity-30 pointer-events-none">
            <svg viewBox="0 0 100 100" className="text-primary">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="40" cy="30" r="2" fill="currentColor" />
              <circle cx="70" cy="20" r="2" fill="currentColor" />
              <circle cx="50" cy="60" r="2" fill="currentColor" />
              <line x1="10" y1="10" x2="40" y2="30" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="30" x2="70" y2="20" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          {/* Section Heading */}
          <motion.h2
            className="section-heading text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {about.title}{' '}
            <span className="text-gradient">
              {about.titleHighlight}
            </span>
          </motion.h2>

          {/* About Card with Glassmorphism */}
          <motion.div
            className="bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Ambient Background Glow Inside Card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            {/* Typewriter Text Box */}
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 min-h-[160px] md:min-h-[120px]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
              />
            </p>

            {/* Key Stats Section */}
            <motion.div
              className="mt-8 pt-8 border-t border-border/50 flex flex-wrap gap-8 md:gap-12 justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {about.stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};