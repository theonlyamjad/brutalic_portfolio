"use client";

const skills = [
  {
    category: "Front-end Development",
    items: ["HTML", "CSS", "JavaScript","TypeScript", "React", "Next.js", "TailwindCSS", "shadcn UI","GSAP","Three.js"],
    color: "bg-[#e9f294]",
    strokeColor: "stroke-[#e9f294]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    )
  },
  {
    category: "Back-end Development",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "PHP", "Laravel", "Java (OOP)", "C#", "C++"],
    color: "bg-[#c3a1ff]",
    strokeColor: "stroke-[#c3a1ff]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square">
        <rect x="2" y="2" width="20" height="8" rx="0" />
        <rect x="2" y="14" width="20" height="8" rx="0" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
      </svg>
    )
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Github", "PHPMyAdmin", "cPanel", "WordPress","Blender","Figma"],
    color: "bg-[#a2f7a2]",
    strokeColor: "stroke-[#a2f7a2]",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    category: "Languages",
    items: ["Arabic (native)", "French (B1~B2)", "English (C1)", "German (B2)"],
    color: "bg-white",
    strokeColor: "stroke-white",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white border-b-8 border-white">
      <div className="container mx-auto py-16 md:py-24 xl:py-32 px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-block bg-[#a2f7a2] text-black px-6 py-2 border-4 border-white font-black text-xs tracking-widest uppercase mb-6">
            [SECTION_03]
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-9xl font-black uppercase tracking-tighter leading-none">
            Technical <span className="text-[#e9f294]">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-t-8 border-white">
          {skills.map((skill, i) => {
            const colorClasses = {
              'bg-[#e9f294]': { 
                bg: 'bg-[#e9f294]', 
                text: 'text-[#e9f294]',
                hoverBg: 'hover:bg-[#e9f294]',
                groupHover: 'group-hover:text-[#e9f294]'
              },
              'bg-[#c3a1ff]': { 
                bg: 'bg-[#c3a1ff]', 
                text: 'text-[#c3a1ff]',
                hoverBg: 'hover:bg-[#c3a1ff]',
                groupHover: 'group-hover:text-[#c3a1ff]'
              },
              'bg-[#a2f7a2]': { 
                bg: 'bg-[#a2f7a2]', 
                text: 'text-[#a2f7a2]',
                hoverBg: 'hover:bg-[#a2f7a2]',
                groupHover: 'group-hover:text-[#a2f7a2]'
              },
              'bg-white': { 
                bg: 'bg-white', 
                text: 'text-white',
                hoverBg: 'hover:bg-white',
                groupHover: 'group-hover:text-white'
              },
            };
            
            const colors = colorClasses[skill.color as keyof typeof colorClasses];
            
            return (
              <div
                key={i}
                className={`p-8 md:p-10 xl:p-12 border-white border-b-8 ${
                  i % 2 === 0 ? 'md:border-r-8' : ''
                } transition-colors group`}
              >
                {/* Icon */}
                <div className="relative inline-block mb-8">
                  <div className={`absolute inset-0 ${skill.color} translate-x-2 translate-y-2`}></div>
                  <div className="relative w-20 h-20 xl:w-24 xl:h-24 border-4 border-white bg-black flex items-center justify-center">
                    <div className={skill.strokeColor}>
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* Category */}
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-black uppercase tracking-tighter leading-tight mb-6 text-white">
                  <span className={colors.text}>//</span> {skill.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`inline-block bg-black text-white px-4 py-2 border-2 border-white font-mono text-sm uppercase tracking-wide ${colors.hoverBg} hover:text-black transition-colors cursor-default`}
                    >
                      [{item}]
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}