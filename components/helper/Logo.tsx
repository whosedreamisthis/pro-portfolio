import React from "react";
import { CodeSquareIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-brand-200 dark:bg-brand-100 w-10 h-10 rounded-lg flex items-center justify-center flex-col">
        <CodeSquareIcon className="text-white w-6 h-6" />
      </div>
      <h1 className="sm:text-xl hidden sm:block md:text-2xl text-brand-200 dark:text-brand-50 font-bold">
        {"<Dev />"}
      </h1>
    </div>
  );
};

export default Logo;
