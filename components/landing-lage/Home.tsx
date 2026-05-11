import React from "react";
import HeroSection from "@/components/landing-lage/HeroSection";
import AboutMe from "@/components/landing-lage/AboutMe";
import TechnicalSkills from "@/components/landing-lage/TechnicalSkills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
    </div>
  );
};

export default Home;
