import React from "react";
import HeroSection from "./hero/HeroSection";
import AboutMe from "./about/AboutMe";
import TechnicalSkills from "./skills/TechnicalSkills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Reviews from "@/components/home/reviews/Reviews";
import Contact from "@/components/home/contact/Contact";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
