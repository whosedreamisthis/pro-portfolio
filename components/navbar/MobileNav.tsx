import React from "react";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { XIcon } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const sidebarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`${sidebarOpenClose} fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-50 w-full h-screen`}
      ></div>
      <div
        className={`${sidebarOpenClose} text-white fixed justify-center flex flex-col h-full transform  transition-all duration-500  w-[80%] sm:w-[60%] bg-brand-100 space-y-6 z-1050`}
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={closeNav}
            className="text-lg font-medium hover:text-gray-300"
          >
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        <XIcon
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
