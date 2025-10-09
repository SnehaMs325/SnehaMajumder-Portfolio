import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cosmicHero from '@/assets/cosmic-hero.jpg';

export const Hero = () => {
  const floatingStars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${cosmicHero})` }}
      />
      
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingStars.map(star => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-primary text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-space"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gradient">Sneha Majumder</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              B.Tech CSE Student • Developer • Innovator
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Currently in orbit around learning, code sprints, and hackathons 🚀
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/sneha-majumder-tech001" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                asChild
              >
                <a href="mailto:snehamsofficial@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
