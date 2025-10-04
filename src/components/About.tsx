import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState('');
  
  const fullText = "I'm a second-year B.Tech Computer Science student with a passion for building meaningful technology. From hackathons to internships, I thrive on challenges that push me to grow. I believe in learning by doing, collaborating with others, and turning ideas into reality — one line of code at a time.";

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Constellation decoration */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
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

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-inter min-h-[200px]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
              />
            </p>

            <motion.div
              className="mt-8 pt-8 border-t border-border flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { label: 'Year', value: '2nd Year' },
                { label: 'Degree', value: 'B.Tech CSE' },
                { label: 'Location', value: 'India' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
