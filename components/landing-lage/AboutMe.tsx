import React from "react";
import Image from "next/image";
import { Briefcase, MapPin, Coffee, GraduationCap } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="my-15 mx-15">
      <div className="flex flex-col  justify-center items-center mb-7 ">
        <p className="text-xl font-bold">
          About <span className="text-brand-200 dark:text-brand-50">Me</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Get to know the developer behind the code.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image
          src="/images/user.jpg"
          alt="User Profile"
          width={300}
          height={300}
        />
        <div className="space-y-4 flex flex-col mx-10 mt-5">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 ">
            <div className="flex gap-2 items-center">
              <MapPin className="w-6 h-6 hidden sm:flex" />
              <p className="text-xs">Based in Vancouver,BC</p>
            </div>
            <div className="flex gap-2 items-center">
              <Briefcase className="w-6 h-6 hidden sm:flex" />
              <p className="text-xs">Open for freelance work</p>
            </div>
            <div className="flex gap-2 items-center">
              <GraduationCap className="w-6 h-6 hidden sm:flex" />
              <p className="text-xs">CS Graduate from UBC</p>
            </div>
            <div className="flex gap-2 items-center">
              <Coffee className="w-6 h-6 hidden sm:flex" />
              <p className="text-xs">Powered by coffee and curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
