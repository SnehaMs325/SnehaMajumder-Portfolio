import { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { CustomCursor } from "@/components/CustomCursor";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Qualifications } from "@/components/Qualifications";
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

      {/* Main Page Structure with Clean Flow */}
      <main className="relative z-10">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Qualifications
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          achievements={portfolioData.achievements}
        />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
};

export default Index;