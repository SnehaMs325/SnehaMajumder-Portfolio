
import { useCallback, useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import CreativePulseLoader from "@/components/CreativePulseLoader";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (portfolioData.personalInfo?.name) {
      document.title = `${portfolioData.personalInfo.name} | Portfolio`;
    }
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">

      {/* Creative Pulse Introduction */}
      {showLoader && (
        <CreativePulseLoader onComplete={handleLoaderComplete} />
      )}

      {/* Custom Cursor Overlay */}
      <CustomCursor />
      <ThemeToggle />

      {/* Existing portfolio sections — unchanged */}
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
