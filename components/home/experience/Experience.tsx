import React from "react";
import SectionHeader from "@/components/home/SectionHeader";
import { experiences } from "@/data/data";
import { Briefcase, GraduationCap } from "lucide-react";
import ExperienceEducationCard from "@/components/home/experience/ExperienceEducationCard";

const Experience = () => {
  return (
    <section className="relative bg-brand-50/30 overflow-hidden pb-30">
      <SectionHeader
        title="Experience & Education"
        description="My professional journey and academic background"
      />

      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Timeline Line: Left on mobile, Center on md+ */}
        <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px  dark:bg-white/50 bg-black/50 md:-translate-x-px"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative w-full min-h-37.5 flex items-start md:items-center"
            >
              {/* Icon: Centered on the line */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 border border-brand-400 dark:border-white/50 rounded-full h-8 w-8 flex justify-center items-center dark:bg-slate-700 dark:text-white bg-white text-black shadow-sm">
                {experience.type === "work" ? (
                  <Briefcase size={18} />
                ) : (
                  <GraduationCap size={18} />
                )}
              </div>

              {/* The Card */}
              <ExperienceEducationCard {...experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
