import { CustomCursor } from '@/components/CustomCursor';
import { CosmicBackground } from '@/components/CosmicBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <CustomCursor />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
