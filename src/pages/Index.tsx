
import { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  // Dynamically set page title from centralized personal info
  useEffect(() => {
    if (portfolioData.personalInfo?.name) {
      document.title = `${portfolioData.personalInfo.name} | Portfolio`;
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Custom Cursor Overlay */}
      <CustomCursor />
      <ThemeToggle />

      {/* Main Page Structure with Clean Flow */}

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

    </div>
  );
};

export default Index;
