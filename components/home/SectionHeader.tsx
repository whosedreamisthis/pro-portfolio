import React from "react";

interface Props {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: Props) => {
  const parts = title.split(" ");
  return (
    <div className="flex flex-col  justify-center items-center mb-7 mt-10">
      <p className="text-3xl font-bold">
        {parts.slice(0, -1).join(" ")}{" "}
        <span className="text-secondary-300 dark:text-secondary-200">
          {parts[parts.length - 1]}
        </span>
      </p>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default SectionHeader;
