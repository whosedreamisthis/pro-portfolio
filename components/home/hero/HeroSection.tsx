"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FolderOpen, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-brand-radial flex items-center justify-center overflow-hidden mt-10">
      <div className="relative z-10 text-center">
        <div className="sm:mb-6 ">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary  bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
          Hi, I&apos;m{" "}
          <span className="text-secondary-100 dark:text-secondary-200">
            Dana Sharon
          </span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold sm:mb-6 h-12">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Tech Instructor",
              2000,
              "Open Source Contributor",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        <p className="text-sm mb-4 sm:mb-8 text-gray-800 dark:text-gray-200 mx-auto max-w-prose text-center p-10">
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications and teaching others.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Button className="cursor-pointer p-4 bg-slate-800 dark:bg-slate-200">
            <FolderOpen />
            View Projects
          </Button>
          <a
            href="/myCV.pdf" // Path to your file in the /public folder
            download="Dana_Sharon_CV.pdf" // The name the user will see when saving
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 lg:p-2 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-brand-200 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
