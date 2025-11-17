"use client";

import IconDecor from "@/components/Icondecor";

export default function ProjectsTitle() {
  return (
    <header className="bg-black text-white border-b-8 border-white">
      <div className="flex items-center justify-center gap-8 md:gap-16 py-8 md:py-12">
        <IconDecor />
        <h2 className="text-4xl md:text-6xl xl:text-7xl font-black uppercase tracking-tighter">
          Featured <span className="text-[#c3a1ff]">Projects</span>
        </h2>
        <IconDecor />
      </div>
    </header>
  );
}