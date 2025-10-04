import { CustomCursor } from '@/components/CustomCursor';
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
      <CustomCursor />
      
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
  );
};

export default Index;
