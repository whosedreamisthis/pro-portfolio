import React from "react";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/data";

const Projects = () => {
  return (
    <section className="relative bg-brand-50/30  overflow-hidden">
      <SectionHeader
        title="Featured Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="mb-20">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
