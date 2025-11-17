"use client";

import projectsdata from "./data/projectsdata.json";

const colors = ["bg-[#e9f294]", "bg-[#c3a1ff]", "bg-[#a2f7a2]"];

export default function Projects() {
  return (
    <section
      id="project"
      className="bg-black text-white border-b-8 border-white"
    >
      {projectsdata.projects.map((p, i) => {
        const color = colors[i % colors.length];
        const number = String(p.id).padStart(2, '0');
        
        return (
          <article
            key={p.id}
            className="relative border-t-8 border-white first:border-t-0 group cursor-pointer"
          >
            <div className="grid md:grid-cols-2">
              {/* Content Side - Always First */}
              <div className={`relative z-20 bg-black p-8 md:p-16 xl:p-24 border-white ${i % 2 === 0 ? "md:border-r-8" : "md:order-2 md:border-l-8"} max-md:border-b-8`}>
                {/* Massive Number */}
                <div className={`absolute -top-4 ${i % 2 === 0 ? "-right-4" : "-left-4"} text-[200px] md:text-[280px] xl:text-[350px] font-black leading-none ${color} opacity-20 select-none pointer-events-none`}>
                  {number}
                </div>

                {/* Tags - Stacked Brutally */}
                <div className="relative z-10 mb-12 inline-block">
                  {p.tags.map((tag, t) => (
                    <div
                      key={t}
                      className={`${color} text-black font-black text-xs md:text-sm px-6 py-3 border-4 border-black uppercase tracking-widest ${t > 0 ? "-mt-1" : ""}`}
                    >
                      [{tag}]
                    </div>
                  ))}
                </div>

                {/* Title - Raw and Aggressive */}
                <h3 className="relative z-10 text-4xl md:text-5xl xl:text-7xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 font-mono text-sm md:text-base leading-loose mb-12 max-w-md opacity-80">
                  {p.description}
                </p>

                {/* Brutal CTAs */}
                <div className="relative z-10 flex flex-wrap gap-4">
                  {p.code && (
                    <a 
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group/btn"
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 ${color} translate-x-2 translate-y-2 group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 transition-transform duration-200`}></div>
                        <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform duration-200"></div>
                        <div className="relative bg-black border-4 border-white px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase tracking-wider flex items-center gap-3 md:gap-4 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200">
                          <span>[VIEW_CODE]</span>
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
                      </div>
                    </a>
                  )}
                  
                  {p.demo && (
                    <a 
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group/btn"
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 ${color} translate-x-2 translate-y-2 group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 transition-transform duration-200`}></div>
                        <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform duration-200"></div>
                        <div className="relative bg-black border-4 border-white px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase tracking-wider flex items-center gap-3 md:gap-4 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200">
                          <span>[LIVE_DEMO]</span>
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
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Image Side - Harsh Treatment */}
              <div className={`relative overflow-hidden min-h-[400px] md:min-h-[600px] xl:min-h-[700px] bg-black ${i % 2 === 0 ? "" : "md:order-1"}`}>
                {/* Color Blast Overlay */}
                <div className={`absolute inset-0 ${color} mix-blend-multiply opacity-60 z-10`}></div>
                
                {/* Scanlines Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-10" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)'}}></div>
                
                {/* Heavy Grain */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'}}></div>
                
                {/* Image Container with Centering */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 xl:p-16">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="relative z-30 w-full h-full object-contain contrast-125"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className={`${color} text-black border-t-8 border-black py-4 px-8 md:px-16 flex justify-between items-center font-black text-xs md:text-sm uppercase tracking-widest`}>
              <span>[PROJECT_{number}]</span>
              <span className="hidden md:block">───────</span>
              <span>[{p.tags[0]}]</span>
              <span className="hidden md:block">───────</span>
              <span>[{new Date().getFullYear()}]</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}