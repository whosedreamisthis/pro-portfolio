import React from "react";
import { stats } from "@/data/data";

const Stats = () => {
  return (
    <div className="mx-10 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 md:justify-between items-center gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center items-center bg-white/70 dark:bg-brand-100/70 dark:text-white py-6 rounded-md"
          >
            <p className=" text-4xl font-bold text-brand-200 dark:text-white">
              {stat.value}
            </p>
            <p className="text-md">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
