"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-pulse ">
      {isVisible && (
        <Button
          className="bg-secondary-300 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          onClick={scrollToTop}
        >
          <ArrowUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
