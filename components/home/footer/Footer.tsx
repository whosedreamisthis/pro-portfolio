import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import FooterCard from "@/components/home/footer/FooterCard";

const Footer = () => {
  return (
    <div className="bg-brand-50/30 pt-10 pb-5">
      <hr className="border-brand-50/30" />
      <div className="my-5 flex justify-between items-center gap-3 mx-10">
        <div>
          {" "}
          <h1 className="sm:text-xl hidden sm:block md:text-2xl text-brand-200 dark:text-brand-50 font-bold">
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
    </div>
  );
};

export default Footer;
