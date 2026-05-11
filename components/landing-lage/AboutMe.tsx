import React from "react";
import Image from "next/image";
import { highlights } from "@/data/data";
import Stats from "@/components/landing-lage/Stats";
import SectionHeader from "@/components/landing-lage/SectionHeader";

const AboutMe = () => {
  return (
    <section className="relative  bg-brand-50/30  overflow-hidden ">
      <SectionHeader
        title="About Me"
        description="Get to know the developer behind the code"
      />
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 mx-5">
        <Image
          src="/images/user.jpg"
          alt="User Profile"
          width={300}
          height={300}
        />
        <div className="space-y-4 flex flex-col mt-5">
          <h1 className="text-lg font-semibold text-center">
            A passionate developer who loves to create
          </h1>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam aliquid animi aperiam at, autem deleniti dolores error
              laborum magni maxime minima modi non pariatur provident quidem rem
              tempora ullam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam aliquid animi aperiam at, autem deleniti dolores error
              laborum magni
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 ">
            {highlights.map((highlight) => (
              <div
                key={highlight.text}
                className="flex gap-2 items-center justify-start"
              >
                <highlight.icon className="w-6 h-6 hidden sm:flex" />

                <p className="text-xs">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default AboutMe;
