import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Zap, Brain, Globe } from 'lucide-react';

const skills = [
  { name: 'Frontend Dev', Icon: Code2, color: 'hsl(270, 70%, 65%)' },
  { name: 'Backend Dev', Icon: Database, color: 'hsl(280, 75%, 60%)' },
  { name: 'UI/UX Design', Icon: Palette, color: 'hsl(260, 70%, 65%)' },
  { name: 'Problem Solving', Icon: Zap, color: 'hsl(290, 70%, 65%)' },
  { name: 'Machine Learning', Icon: Brain, color: 'hsl(250, 70%, 65%)' },
  { name: 'Web Technologies', Icon: Globe, color: 'hsl(275, 75%, 65%)' },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 relative">
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
            My <span className="text-gradient">Superpowers</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These are my current superpowers (still leveling up 💡)
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full flex flex-col items-center justify-center relative overflow-hidden transition-all hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                      style={{ backgroundColor: skill.color }}
                    />
                    <skill.Icon 
                      className="w-12 h-12 relative z-10" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
