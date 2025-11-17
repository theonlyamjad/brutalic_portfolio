"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 md:w-14 md:h-14
        bg-[#c3a1ff] text-black border-4 border-white
        shadow-[4px_4px_0_rgba(0,0,0,1)]
        active:shadow-none cursor-pointer
        transition-all duration-150
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-7 md:h-7"
      >
        <path
          d="M256 128L96 288h96v96h128v-96h96L256 128z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
