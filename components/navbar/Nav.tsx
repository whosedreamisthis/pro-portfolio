"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/helper/Logo";
import ThemeToggle from "@/components/helper/ThemeToggle";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { Download, MenuIcon } from "lucide-react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} transition-all duration-200 h-[14vh] z-100 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] lg:w-[98%] xl:w-[80%] mx-auto">
        <Logo />
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200 "
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 lg:p-2 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-brand-200 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          <ThemeToggle />
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
