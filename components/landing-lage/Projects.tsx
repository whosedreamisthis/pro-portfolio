import React from "react";
import SectionHeader from "@/components/landing-lage/SectionHeader";
import ProjectCard from "@/components/landing-lage/ProjectCard";
import { projects } from "@/data/data";

const Projects = () => {
  return (
    <section className="relative bg-brand-50/30  overflow-hidden">
      <SectionHeader
        title="Featured Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="mb-20">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[0]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
