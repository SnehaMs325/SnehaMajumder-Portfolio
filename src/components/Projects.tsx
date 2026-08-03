import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            A blend of data analytics, exploratory data analysis, and frontend interactive platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isComingSoon = project.isComingSoon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div>
                  {/* Top Header: Title & Badges */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    {/* Coming Soon Badge */}
                    {isComingSoon && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 shrink-0">
                        <Clock className="w-3 h-3" />
                        In Development
                      </span>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-purple-300 border border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>

                    {/* Conditional Live Demo Button */}
                    {isComingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 opacity-50" />
                        Coming Soon
                      </span>
                    ) : (
                      project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )
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