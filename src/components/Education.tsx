import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Your University',
    period: '2023 - 2027',
    description: 'Currently in 2nd year, focusing on Data Structures, Algorithms, Web Development, and AI/ML.',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Your School',
    period: '2021 - 2023',
    description: 'Science stream with focus on Mathematics and Computer Science.',
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Education</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-4 w-5 h-5 bg-primary rounded-full border-4 border-background"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  />

                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 font-space">{edu.degree}</h3>
                        <p className="text-primary text-sm mb-1">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                        <p className="text-foreground/80">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
