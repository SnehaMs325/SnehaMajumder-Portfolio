
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState("");

  const { about } = portfolioData;

  const bio =
    "I'm a Computer Science student with a curious mind and a creative side, who loves uncovering stories hidden in data. From exploring Python and Machine Learning to building intuitive experiences with React and UI/UX, I enjoy bringing logic and creativity together.\n\nWhether it's finding patterns in datasets or designing something from scratch, I'm always excited to learn, experiment, and turn ideas into something meaningful.";

  useEffect(() => {
    if (!isInView) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;
      setDisplayText(bio.slice(0, index));

      if (index >= bio.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isInView, bio]);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-background text-foreground"
    >
      {/* Wider desktop container, mobile unchanged */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1500px] mx-auto"
        >
          {/* Editorial section label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-5"
          >
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">
              01 / Get to know me
            </span>

            
          </motion.div>

          {/* Heading with glow */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="about-heading-glow text-4xl md:text-6xl font-black tracking-tight mb-8"
          >
            Beyond the{" "}
            <span className="about-heading-accent text-primary italic">
              code.
            </span>
          </motion.h2>

          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              relative overflow-hidden
              rounded-2xl
              border border-border
              bg-card
              p-6 md:px-10 md:py-7 lg:px-12 lg:py-8
              shadow-sm
            "
          >
            {/* Small card header */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />

                <span className="text-sm font-semibold tracking-wide">
                  A little introduction
                </span>
              </div>

            </div>

            {/* Caveat handwritten introduction */}
            <p
              className="
                about-editorial-text
                whitespace-pre-line
                text-foreground/90
                min-h-[230px] md:min-h-[160px]
              "
            >
              {displayText}

              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                className="
                  inline-block
                  w-0.5 h-5
                  bg-primary
                  ml-1
                  align-middle
                "
              />
            </p>

            {/* Stats with Bricolage Grotesque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="
                mt-6 pt-5
                border-t border-border
                grid grid-cols-1 sm:grid-cols-3
                gap-4
              "
            >
              {about.stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    about-stats-font
                    rounded-xl
                    bg-secondary/60
                    border border-border/60
                    px-4 py-4
                    text-center
                    transition-colors duration-300
                    hover:border-primary/50
                  "
                >
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                    {item.value}
                  </div>

                  <div className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom editorial caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-between gap-4 mt-5"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground">
              Curious by nature. Creative by choice.
            </span>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
