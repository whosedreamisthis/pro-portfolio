import React from "react";
import HeroSection from "./hero/HeroSection";
import AboutMe from "./about/AboutMe";
import TechnicalSkills from "./skills/TechnicalSkills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
