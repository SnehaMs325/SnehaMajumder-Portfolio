import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Map string keys to actual React icon components
const iconMap: Record<string, React.ElementType> = {
  Mail,
  Linkedin,
  Github: FaGithub,
};

export const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { contact, personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {contact.title}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {contact.titleHighlight}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contact.subtitle}
          </motion.p>

          {/* Social Links Flex Container */}
          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {contact.socials.map((social, index) => {
              const IconComponent = iconMap[social.icon] || Mail;

              return (
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
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 min-w-[140px] hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: social.color }}
                    />

                    {/* Animated Pulsing Icon Wrapper */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="mb-3 flex justify-center"
                    >
                      <IconComponent
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: social.color }}
                      />
                    </motion.div>

                    <div className="text-sm font-semibold text-slate-200">
                      {social.name}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Footer Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-400 text-sm border-t border-slate-800/80 pt-8"
          >
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. Built with passion, code, and a sprinkle of stardust ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};