import React from "react";
import HeroSection from "@/components/landing-lage/HeroSection";
import AboutMe from "@/components/landing-lage/AboutMe";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default Home;
