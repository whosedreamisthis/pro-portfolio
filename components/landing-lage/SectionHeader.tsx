import React from "react";

interface Props {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: Props) => {
  const parts = title.split(" ");
  return (
    <div className="flex flex-col  justify-center items-center mb-7 mt-10">
      <p className="text-xl font-bold">
        {parts[0]}{" "}
        <span className="text-secondary-300 dark:text-secondary-200">
          {parts[1]}
        </span>
      </p>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default SectionHeader;
