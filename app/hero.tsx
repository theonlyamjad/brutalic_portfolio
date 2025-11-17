"use client";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

export default function Hero() {
  return (
    <section className="bg-black text-white border-b-8 border-white">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 xl:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-center">
          {/* Text Section */}
          <div className="flex flex-col">
            <div className="inline-block bg-[#e9f294] text-black px-6 py-2 border-4 border-white font-black text-xs tracking-widest uppercase mb-8 w-fit">
              [WEB_DEVELOPER]
            </div>

            <p className="font-sans text-lg md:text-xl uppercase tracking-wider mb-4 text-white/60">
              Hi, my name is{" "}
              <RoughNotation type="highlight" show={true} color="#c3a1ff" >
                <span className="text-black font-bold">Amjad</span>
              </RoughNotation>
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              I Turn Ideas Into{" "}
              <span className="inline-block text-black bg-[#e9f294] border-4 border-white px-4 py-2 -rotate-2 mt-4">
                Realities
              </span>
            </h1>

            <p className="font-sans text-base md:text-lg leading-relaxed mb-12 max-w-xl text-white/80">
              I'm a <span className="text-[#c3a1ff] font-bold">full-stack web developer</span> from Agadir, Morocco.
              I build responsive, modern applications with React, Next.js, and Laravel.
              I enjoy crafting complete solutions from front to back and constantly sharpening my skills through real-world projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/theonlyamjad?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group/btn"
              >
                <div className="absolute inset-0 bg-[#c3a1ff] translate-x-2 translate-y-2 group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 transition-transform duration-200"></div>
                <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform duration-200"></div>
                <div className="relative bg-black border-4 border-white px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase tracking-wider flex items-center gap-3 md:gap-4 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200">
                  <span>[VIEW_REPO]</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path d="M7 7h10v10M7 17L17 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center md:justify-end">
            {/* Corner Marks */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-8 border-l-8 border-[#a2f7a2] z-10"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-8 border-r-8 border-[#a2f7a2] z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-8 border-l-8 border-[#a2f7a2] z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-8 border-r-8 border-[#a2f7a2] z-10"></div>

            <div className="relative w-full max-w-md aspect-square border-8 border-white bg-[#e9f294] overflow-hidden">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(black 2px, transparent 2px),
                    linear-gradient(90deg, #e9f294 2px, transparent 2px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />
              {/* The image */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/bg-remouved.png"
                  alt="Portrait or visual content"
                  fill
                  sizes="(min-width: 768px) 400px, 80vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Label strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#a2f7a2] text-black border-t-8 border-white py-3 px-4 font-black text-sm uppercase tracking-widest text-center z-20">
                [Available for Freelance]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
