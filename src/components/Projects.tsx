import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent web application that helps students organize study materials and get personalized learning recommendations.',
    tags: ['React', 'Python', 'TensorFlow', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Campus Event Manager',
    description: 'A comprehensive platform for managing college events, registrations, and attendee engagement with real-time updates.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Eco-Tracker App',
    description: 'Mobile-first web app for tracking carbon footprint and suggesting eco-friendly alternatives for daily activities.',
    tags: ['React Native', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center font-space"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  className="bg-card border border-border rounded-xl p-6 h-full flex flex-col group hover:border-primary/50 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <h3 className="text-xl font-bold mb-3 font-space relative z-10">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 flex-1 relative z-10">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
