"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button
      className={cn(
        "fixed bottom-0 right-0 bg-primary rounded-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2 cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out",
        isVisible && "opacity-100"
      )}
      onClick={scrollToTop}
    >
      BACK TO TOP
      <ArrowUp className="inline-block h-4 w-4" />
    </Button>
  );
};

export default ScrollToTop;
