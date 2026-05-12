"use client";

import React, { useEffect } from "react";
import HeroSection from "./hero/HeroSection";
import AboutMe from "./about/AboutMe";
import TechnicalSkills from "./skills/TechnicalSkills";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Reviews from "@/components/home/reviews/Reviews";
import Contact from "@/components/home/contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    // We only want to run this once on the client
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });

    // It's often helpful to refresh AOS after initialization
    // to ensure it catches all elements
    AOS.refresh();
  }, []);

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
