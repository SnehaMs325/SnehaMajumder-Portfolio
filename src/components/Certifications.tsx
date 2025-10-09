import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield } from 'lucide-react';

const certifications = [
  {
    title: 'Tata GenAI Certification',
    issuer: 'Tata',
    icon: Award,
    date: '2024',
  },
  {
    title: 'Deloitte Cyber Security',
    issuer: 'Deloitte',
    icon: Shield,
    date: '2024',
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certifications" className="py-20 relative">
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
            <span className="text-gradient">Certifications</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Collecting badges of curiosity 🪐
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-6 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-500"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 hsl(270 70% 65% / 0)',
                        '0 0 20px 2px hsl(270 70% 65% / 0.3)',
                        '0 0 0 0 hsl(270 70% 65% / 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 font-space">{cert.title}</h3>
                      <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.date}</p>
                    </div>
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
