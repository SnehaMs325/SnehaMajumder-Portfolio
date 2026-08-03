import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cosmicHeroImg from '../assets/cosmic-hero.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center justify-center px-4">
      {/* Full Cosmic Clouds Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${cosmicHeroImg})` }}
      />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          Welcome to My Portfolio
        </h1>

        {/* Profile Intro */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Floating GitHub Profile Picture */}
          <motion.div
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 25px rgba(139,92,246,0.8)',
            }}
          >
            <img
              src="https://github.com/SnehaMs325.png?size=200"
              alt="Sneha Majumder"
              className="w-full h-full rounded-full object-cover bg-black"
            />
          </motion.div>

         {/* Intro Text */}
          <div className="text-left">
            <p className="text-sm md:text-base text-gray-400">Hello, I’m</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
              Sneha Majumder
            </h2>
          </div>
        </motion.div>
        

        {/* Tagline */}
        <p className="text-base md:text-lg mb-8 text-gray-300 max-w-lg mx-auto">
          Currently in orbit around learning, code sprints, and hackathons 🚀
        </p>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white rounded-lg px-6 py-2">
            <a href="#projects" className="flex items-center justify-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
          </Button>

          <div className="flex gap-5 mt-3 sm:mt-0">
            <a
              href="https://github.com/SnehaMs325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-majumder-tech001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:snehamsofficial@gmail.com"
              aria-label="Email Me"
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};