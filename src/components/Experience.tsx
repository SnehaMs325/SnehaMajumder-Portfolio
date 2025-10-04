import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Users, Award, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Bit 2 Byte Club Member',
    organization: 'College Tech Club',
    location: 'College Campus',
    period: '2023 - Present',
    description: 'Active member contributing to technical events and workshops.',
    details: 'Organized coding workshops, mentored juniors, and led team projects focused on web development and AI.',
    icon: Users,
  },
  {
    title: 'Internshala Student Partner',
    organization: 'Internshala',
    location: 'Pan India - Remote',
    period: '2024',
    description: 'Campus ambassador promoting internships and learning opportunities.',
    details: 'Connected students with opportunities, organized webinars, and achieved top performer status in outreach activities.',
    icon: Briefcase,
  },
  {
    title: 'Hackathon Enthusiast',
    organization: 'Multiple Platforms',
    location: 'Online & Offline',
    period: '2023 - Present',
    description: 'Regular participant in national and online hackathons.',
    details: 'Hackathons are my playground — long nights, too much coffee, and unexpected breakthroughs.',
    icon: Award,
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 relative">
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
            Experience & <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="perspective-1000"
              >
                <motion.div
                  className="relative h-64 cursor-pointer"
                  onHoverStart={() => setFlipped(index)}
                  onHoverEnd={() => setFlipped(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 backface-hidden"
                    animate={{ rotateY: flipped === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full flex flex-col shadow-lg">
                      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-space">{exp.title}</h3>
                      <p className="text-primary text-sm mb-1">{exp.organization}</p>
                      <div className="flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                        <p className="text-muted-foreground text-xs">{exp.location}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                      <p className="text-foreground flex-1 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 backface-hidden"
                    animate={{ rotateY: flipped === index ? 0 : -180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d', rotateY: 180 }}
                  >
                    <div className="bg-card border border-primary/50 rounded-xl p-6 h-full flex items-center justify-center shadow-lg">
                      <p className="text-foreground text-base leading-relaxed">{exp.details}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
