import React from "react";
import SectionHeader from "@/components/home/SectionHeader";
import { experiences } from "@/data/data";
import { Briefcase, GraduationCap } from "lucide-react";
import ExperienceEducationCard from "@/components/home/experience/ExperienceEducationCard";

const Experience = () => {
  return (
    <section className="relative  bg-brand-50/30  overflow-hidden pb-20">
      <SectionHeader
        title="Experience & Education"
        description="My professional journey and academic background"
      />

      <div className="relative px-6 max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-50 to-brand-300 md:-translate-px"></div>
        <div className="flex flex-col justify-center items-center">
          {experiences.map((experience, index) => (
            <div key={index} className="relative w-full">
              <div className=" h-60 ">
                <div className="absolute left-1/2 -translate-x-1/2 top-0">
                  <div className="relative z-10 border border-brand-400 dark:border-white/50 rounded-full h-8 w-8 flex justify-center items-center dark:bg-slate-700 dark:text-white bg-white text-black">
                    {experience.type === "work" ? (
                      <Briefcase size={20} className="opacity-80" />
                    ) : (
                      <GraduationCap size={20} className="opacity-80" />
                    )}
                  </div>
                </div>
              </div>
              <ExperienceEducationCard {...experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
