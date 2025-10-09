import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const CosmicBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate fixed stars
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);

    // Generate shooting stars with intervals
    const shootingStarInterval = setInterval(() => {
      setShootingStars(prev => [...prev, { id: Date.now(), delay: 0 }]);
      setTimeout(() => {
        setShootingStars(prev => prev.slice(1));
      }, 2000);
    }, 8000);

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(250,45%,10%)] to-background" />
      
      {/* Twinkling stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground/60"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 50}%`,
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: 300, y: 300, opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-primary to-transparent -rotate-45" />
        </motion.div>
      ))}

      {/* Floating nebula effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
