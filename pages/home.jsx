
import { useState, useEffect } from "react";
import { LoadingScreen, Navigation, Footer } from "@/components/layout";
import Landing from "../components/Landing";
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ContactSection 
} from "./portfolio-section";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding && (
        <Landing onFinish={() => setShowLanding(false)} />
      )}
      {!showLanding && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}


