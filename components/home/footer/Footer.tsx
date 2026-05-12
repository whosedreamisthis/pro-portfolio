import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-brand-50/30 pt-10 pb-5">
      <hr className="border-brand-50/30" />
      <div className="my-5 flex flex-col justify-center items-center gap-3">
        <p>Follow me</p>
        <div className="flex flex-row justify-center items-center gap-2">
          <a
            href="https://github.com/whosedreamisthis?tab=repositories"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/whosedreamisthis/" target="_blank">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/danash/" target="_blank">
            <CiLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
