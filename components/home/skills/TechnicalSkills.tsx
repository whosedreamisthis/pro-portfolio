import React from "react";
import SectionHeader from "../SectionHeader";
import { skillCategories } from "@/data/data";
import CategorySkills from "./CategorySkills";

const TechnicalSkills = () => {
  return (
    <section className="relative bg-brand-50/30  overflow-hidden">
      <SectionHeader
        title="Technical Skills"
        description="echnologies I've been working with recently"
      />
      {skillCategories.map((category, index) => (
        <div key={index}>
          <CategorySkills category={category} />
        </div>
      ))}
    </section>
  );
};

export default TechnicalSkills;
