import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const socials = [
  { name: 'Email', icon: Mail, href: 'mailto:sneha@example.com', color: 'hsl(270, 70%, 65%)' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/snehamajumder', color: 'hsl(280, 75%, 60%)' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/snehamajumder', color: 'hsl(260, 70%, 65%)' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/snehamajumder', color: 'hsl(290, 70%, 65%)' },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Drop me a message — let's code, collaborate, or just talk space & ideas 🌠
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="mb-4 flex justify-center"
                  >
                    <social.icon 
                      className="w-8 h-8" 
                      style={{ color: social.color }}
                    />
                  </motion.div>
                  
                  <div className="text-sm font-medium text-foreground">{social.name}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground text-sm"
          >
            <p>© 2024 Sneha Majumder. Crafted with 💜 and cosmic vibes.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
