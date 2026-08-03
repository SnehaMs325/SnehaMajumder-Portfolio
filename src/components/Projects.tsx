import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  focus: string;
  link?: string;
}

const projectsData: ProjectItem[] = [
  {
    title: 'Exploring React Components',
    description: 'Built small experimental components to understand props, state, and hooks through hands-on practice.',
    tags: ['React', 'JavaScript', 'CSS'],
    focus: 'Component Logic',
  },
  {
    title: 'Web Development Practice',
    description: 'Created responsive layouts and interactive UIs using HTML, CSS, and JavaScript to strengthen fundamentals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    focus: 'Frontend Basics',
  },
  {
    title: 'Design & Prototyping',
    description: 'Learned UI/UX principles through Figma and Canva, translating design concepts into code implementations.',
    tags: ['Figma', 'Canva', 'UI/UX'],
    focus: 'Design Skills',
  },
  {
    title: 'Promodoro-Buddy',
    description: 'A simple web project for practicing React and Git. Helps users manage work sessions using the Pomodoro technique.',
    link: 'https://github.com/SnehaMs325/cozy-promodoro-buddy',
    tags: ['React', 'JavaScript', 'Git', 'GitHub'],
    focus: 'React & Git',
  },
  {
    title: 'Your Notes Noted',
    description: 'A simple web project for practicing React and Git. Helps users manage their notes cleanly.',
    link: 'https://yournotesnoted.netlify.app/',
    tags: ['React', 'JavaScript', 'Git', 'GitHub'],
    focus: 'React & Git',
  },
  {
    title: 'Fate Switch',
    description: 'A story-based interactive web game designed to test branching state management.',
    link: 'https://fateswitch.netlify.app/',
    tags: ['React', 'JavaScript', 'Git', 'GitHub'],
    focus: 'Advanced React',
  },
];

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-center font-space"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Learning <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Currently exploring through consistent vibe coding sessions — small experimental builds to understand concepts and improve hands-on logic.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col group hover:border-primary/50 transition-colors shadow-lg"
              >
                {/* Focus Badge */}
                <div className="mb-3">
                  <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-medium border border-primary/20">
                    {item.focus}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 font-space break-words text-card-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 flex-1 break-words leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Link */}
                {item.link && (
                  <div className="pt-2 border-t border-border/50">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline"
                    >
                      View App <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};