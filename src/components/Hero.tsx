import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cosmicHero from '@/assets/cosmic-hero.jpg';

export const Hero: React.FC = () => {
  // Generate random floating stars
  const floatingStars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={cosmicHero}
        alt="Cosmic Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Floating Stars */}
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
          animate={{ y: ['0%', '10%', '0%'] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: star.delay,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>

        {/* Profile intro */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Floating GitHub profile image */}
          <motion.div
            className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-[3px]
                       bg-gradient-to-r from-primary via-purple-500 to-primary"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{
              scale: 1.12,
              boxShadow: '0 0 35px rgba(139,92,246,0.9)',
            }}
          >
            <motion.img
              src="https://github.com/SnehaMs325.png?size=200"
              alt="Sneha Majumder"
              className="w-full h-full rounded-full object-cover bg-background"
            />
          </motion.div>

          {/* Text beside image */}
          <div className="text-left">
            <p className="text-base text-gray-400">Hello, I’m</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              <span className="text-gradient">Sneha Majumder</span>
            </h3>
          </div>
        </motion.div>

        {/* Tagline */}
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Currently in orbit around learning, code sprints, and hackathons 🚀
        </p>

        {/* Buttons & Socials */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild>
            <a href="#projects" className="flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
          </Button>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://github.com/SnehaMs325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-majumder-tech001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:snehamsofficial@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
