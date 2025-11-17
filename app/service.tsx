"use client";

export default function Service() {
  return (
    <section id="service" aria-label="Services" className="bg-black border-y-8 border-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group p-8 md:p-10 xl:p-12 border-white md:border-r-8  transition-colors">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#c3a1ff] translate-x-2 translate-y-2"></div>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24 border-4 border-white bg-black flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c3a1ff" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                  <rect x="3" y="4" width="18" height="14" rx="0" />
                  <path d="M3 8h18" />
                  <path d="M8 12h8" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl xl:text-4xl font-black uppercase tracking-tighter mb-4 text-white leading-tight">
              Web<br/>Development
            </h3>
            
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Responsive, fast, production-ready sites with React, Next.js, and Tailwind. Clean code, clear structure, easy to scale.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 md:p-10 xl:p-12 border-white  xl:border-r-8  transition-colors ">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#e9f294] translate-x-2 translate-y-2"></div>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24 border-4 border-white bg-black flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e9f294" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl xl:text-4xl font-black uppercase tracking-tighter mb-4 text-white leading-tight">
              UI/UX<br/>Design
            </h3>
            
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Clear flows, accessible components, and strong visual hierarchy. Prototypes that translate smoothly to code.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 md:p-10 xl:p-12 border-white  transition-colors">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#a2f7a2] translate-x-2 translate-y-2"></div>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24 border-4 border-white bg-black flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a2f7a2" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M3 20h18" />
                  <path d="M7 20V10" />
                  <path d="M12 20V4" />
                  <path d="M17 20v-6" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl xl:text-4xl font-black uppercase tracking-tighter mb-4 text-white leading-tight">
              Performance<br/>& SEO
            </h3>
            
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Core Web Vitals, image/asset optimization, SSR/ISR with Next.js, semantic markup, and clean metadata.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}