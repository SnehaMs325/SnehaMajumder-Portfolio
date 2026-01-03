import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, Code, Star } from 'lucide-react';

// TypeScript interface for achievements
interface Achievement {
  label: string;
  icon: React.ElementType;
  value?: number;      // optional numeric achievements
  subtitle?: string;   // optional text achievements
}

// Achievements array
const achievements: Achievement[] = [
  { label: 'Hackathons', value: 4, icon: Trophy },
  { label: 'Bit 2 Byte', subtitle: 'Community Member', icon: Code },
  { label: 'Certifications', subtitle: 'Completed virtual internships on Forage & AICTE approved', icon: Star },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Shooting stars animation */}
        {isInView && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-1 h-1 bg-primary rounded-full"
              initial={{ x: -100, y: -100, opacity: 1 }}
              animate={{ x: 300, y: 300, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full"
              initial={{ x: 100, y: -100, opacity: 1 }}
              animate={{ x: -300, y: 300, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </>
        )}

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
            Achievements & <span className="text-gradient">Community</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building connections as much as building skill — participated in multiple hackathons including the ISRO Hackathon experience.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  type: 'spring',
                }}
                className="text-center"
              >
                {/* Card Container */}
                <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                relative overflow-hidden group break-words flex flex-col h-full">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Icon */}
                  <motion.div
                    className="mb-4 flex justify-center relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {typeof achievement.value === 'number' ? (
                      <motion.div
                        className="text-4xl font-bold text-primary mb-2 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={hasAnimated ? { opacity: 1 } : {}}
                      >
                        <Counter
                          from={0}
                          to={achievement.value}
                          duration={2}
                          delay={0.5 + index * 0.1}
                          isInView={hasAnimated}
                        />
                      </motion.div>
                    ) : (
                      <div className="text-sm md:text-base font-semibold text-primary mb-2 relative z-10 text-center">
                        {achievement.subtitle}
                      </div>
                    )}

                    <div className="text-sm text-muted-foreground relative z-10 text-center">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Counter Component
const Counter = ({
  from,
  to,
  duration,
  delay,
  isInView,
}: {
  from: number;
  to: number;
  duration: number;
  delay: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [from, to, duration, delay, isInView]);

  return <>{count}</>;
};
