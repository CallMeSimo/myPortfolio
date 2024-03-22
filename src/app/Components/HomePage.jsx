// HomePage.js
import React from "react";
import HeroSection from "./HeroSection";
import { AchivementSection } from "./AchivementSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import EmailSection from "./EmailSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AchivementSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
    </>
  );
}

export default HomePage;
