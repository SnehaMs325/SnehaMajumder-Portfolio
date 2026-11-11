
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, Brain, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

// Map string keys to React icon components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Brain,
  Zap,
  Github: FaGithub,
};

export const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-background text-foreground"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial section label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-5"
          >
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">
              02 / What I bring to the table
            </span>

            
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="about-heading-glow text-4xl md:text-6xl font-black tracking-tight mb-4"
          >
            My creative{" "}
            <span className="about-heading-accent text-primary italic">
              toolkit.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl"
          >
            {skills.subtitle}
          </motion.p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {skills.items.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  className="group"
                >
                  <div
                    className="
                      relative h-full min-h-[180px]
                      flex flex-col items-center justify-center
                      overflow-hidden rounded-2xl
                      border border-border
                      bg-card
                      p-5 md:p-8
                      text-center
                      shadow-sm
                      transition-all duration-300
                      hover:border-primary/60
                      hover:shadow-[0_12px_35px_rgba(229,50,41,0.12)]
                    "
                  >
                    {/* Subtle red hover background */}
                    <div
                      className="
                        absolute inset-0
                        bg-primary/5
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        pointer-events-none
                      "
                    />

                    
                    {/* Skill icon */}
                    <motion.div
                      className="mb-4 relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="
                          absolute inset-0 rounded-full
                          bg-primary/15 blur-xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity duration-300
                        "
                      />

                      <IconComponent
                        className="
                          w-11 h-11 md:w-12 md:h-12
                          relative z-10
                          text-primary
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      />
                    </motion.div>

                    {/* Skill name */}
                    <h3
                      className="
                        about-stats-font
                        relative z-10
                        text-base md:text-xl
                        font-bold
                        text-foreground
                      "
                    >
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom editorial caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-between gap-4 mt-7"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground">
              A little bit of logic. A lot of curiosity.
            </span>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
