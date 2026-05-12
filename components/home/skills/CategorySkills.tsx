import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  category: {
    title: string;
    skills: {
      name: string;
      icon: LucideIcon;
    }[];
  };
}
const CategorySkills = ({ category }: Props) => {
  return (
    <div className="mx-10">
      <div className="flex gap-2 justify-start items-center">
        <div className="bg-brand-300 dark:bg-white w-1.5 h-1.5 rounded-full" />
        <p className="font-semibold">{category.title}</p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  justify-center gap-4 w-fit mx-auto">
        {category.skills.map(
          ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
            <div
              key={name}
              className="flex flex-col gap-1 justify-center items-center my-4 bg-white dark:bg-brand-100/30 rounded-md h-24 w-30 sm:w-40 px-4"
            >
              <div className="bg-linear-to-r from-purple-400 to-brand-200 p-3 rounded-lg">
                <Icon className="text-white" />
              </div>
              <p className="text-xs">
                <span>{name}</span>
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CategorySkills;
