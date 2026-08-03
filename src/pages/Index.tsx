import { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { CustomCursor } from "@/components/CustomCursor";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const Index = () => {
  // Dynamically set page title from centralized personal info
  useEffect(() => {
    if (portfolioData.personalInfo?.name) {
      document.title = `${portfolioData.personalInfo.name} | Portfolio`;
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Fixed Cosmic Background Canvas & Custom Cursor Overlay */}
      <CosmicBackground />
      <CustomCursor />

      {/* Main Page Structure with Consistent Section Spacing */}
      <main className="relative z-10 flex flex-col gap-16 md:gap-28 lg:gap-36 pb-20">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Certifications certifications={portfolioData.certifications} />
        <Education education={portfolioData.education} />
        <Achievements achievements={portfolioData.achievements} />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
};

export default Index;