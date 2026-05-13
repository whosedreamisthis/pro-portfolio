import React from "react";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-brand-50/30  overflow-hidden scroll-mt-[14vh]"
    >
      <SectionHeader
        title="Featured Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="mb-10">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
