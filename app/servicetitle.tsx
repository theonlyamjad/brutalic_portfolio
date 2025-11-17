"use client";

export default function ServiceTitle() {
  return (
    <header className="bg-black text-white ">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="inline-block bg-[#a2f7a2] text-black px-6 py-2 border-4 border-white font-black text-xs tracking-widest uppercase mb-6">
          [SECTION_01]
        </div>
        <h5 className="text-lg md:text-xl font-sans uppercase tracking-wider mb-4 text-white/60">
          Passion led us here
        </h5>
        <h2 className="text-5xl md:text-6xl xl:text-8xl font-black uppercase tracking-tighter leading-none">
          What can I <span className="text-[#e9f294]">do for you</span>
        </h2>
      </div>
    </header>
  );
}