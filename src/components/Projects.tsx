
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="section-padding relative z-10 bg-background text-foreground"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            04 / Selected work
          </p>

          <h2 className="about-heading-glow mb-4 text-4xl font-black tracking-tight md:text-6xl">
            Featured{" "}
            <span className="about-heading-accent text-primary italic">
              Projects.
            </span>
          </h2>

          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            A blend of data analytics, exploratory data analysis,
            and frontend interactive platforms.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => {
            const isComingSoon = project.isComingSoon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                  relative flex flex-col justify-between
                  rounded-2xl
                  border border-border
                  bg-card
                  p-6 md:p-8
                  shadow-sm
                  transition-colors duration-300
                  hover:border-primary/50
                "
              >
                <div>
                  {/* Project title */}
                  <h3 className="about-stats-font mb-4 text-xl font-bold text-foreground md:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-7 text-sm leading-7 text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-md
                          border border-border
                          bg-secondary/60
                          px-3 py-1.5
                          font-mono text-xs
                          text-foreground
                          transition-colors duration-300
                          hover:border-primary/40
                          hover:text-primary
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap items-center gap-5 border-t border-border pt-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-sm font-semibold
                          text-foreground
                          transition-colors
                          hover:text-primary
                        "
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}

                    {!isComingSoon && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-sm font-semibold
                          text-primary
                          transition-opacity
                          hover:opacity-70
                        "
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
