import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import FooterCard from "@/components/home/footer/FooterCard";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-slate-900 pb-2">
      {/*<hr className="border-brand-50/30" />*/}

      <div className="my-5 flex justify-between items-center gap-3 mx-10">
        <div>
          <h1 className="text-lg hidden sm:block md text-brand-200 dark:text-white/70 font-bold">
            {"<Dev />"}
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <FooterCard
            href="https://github.com/whosedreamisthis?tab=repositories"
            icon={FaGithub}
            size={18}
          />
          <FooterCard
            href="https://www.instagram.com/whosedreamisthis/"
            icon={FaInstagram}
            size={20}
          />
          <FooterCard
            href="https://www.linkedin.com/in/danash/"
            icon={CiLinkedin}
            size={22}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by Dana Sharon
        </p>
      </div>
      <hr className="border-brand-50/30" />

      <div className="text-center flex gap-1 justify-center items-center mt-2 pb-2">
        <p className="text-muted-foreground text-xs">🟣</p>
        <p className="text-muted-foreground text-xs">
          {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
