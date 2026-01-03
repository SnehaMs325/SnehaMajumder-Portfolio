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
    size: Math.random() * 3 + 1, // star size between 1-4
    delay: Math.random() * 2, // animation delay
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
          animate={{ y: ["0%", "10%", "0%"] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My Cosmic Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Currently in orbit around learning, code sprints, and hackathons 🚀
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild>
            <a href="#projects" className="flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
          </Button>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://github.com/SnehaMs325" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sneha-majumder-tech001" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:snehamsofficial@gmail.com" >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
