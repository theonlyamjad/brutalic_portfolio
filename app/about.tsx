"use client";

type TimelineItem = { 
  year: string; 
  title: string;
  company?: string;
  link?: string;
  duration?: string;
  details: string[];
};

const experience: TimelineItem[] = [
  {
    year: "2025",
    title: "Junior Fullstack Developer Internship",
    company: "Municipality of Agadir",
    link: "https://www.agadir.ma/",
    duration: "2 months",
    details: ["Learned React & Next.js"],
  },
  {
    year: "2023-2024",
    title: "Junior Backend Developer",
    company: "TecForge",
    link: "https://www.teforge.ma/",
    duration: "3 months (second year at EFET-school)",
    details: [
      "Learned the framework Laravel",
      "Did a final training project 'Contact management app'"
    ],
  },
  {
    year: "2023",
    title: "Junior Developer Internship",
    company: "Weblinking",
    link: "https://www.weblinking.net/",
    duration: "2 months and 15 days (first year at EFET-school)",
    details: [
      "Creation of Cpanel domains",
      "Domain migrations",
      "WordPress Installation and Theme Customization"
    ],
  },
];

const education: TimelineItem[] = [
  {
    year: "2025",
    title: "Full-Stack Web Developer Course ",
    company: "JobInTech",
    link: "https://jobintech.academy/",
    duration:"4 months",
    details :[
      "Learning Javascript",
      "Learning PostgreSQL & MongoDB",
      "working with Express.js for backend",
      "working with React.js for frontend",
    ] 
  },
  {
    year: "2022-2024",
    title: "Specialized Technician in Full-Stack Web Development",
    company: "School EFET",
    duration: "2 years",
    details: [],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-black text-white border-b-8 border-white">
      <div className="container mx-auto py-16 md:py-24 xl:py-32 px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-block bg-[#e9f294] text-black px-6 py-2 border-4 border-white font-black text-xs tracking-widest uppercase mb-6">
            [SECTION_02]
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
            About <span className="text-[#c3a1ff]">Me</span>
          </h2>
          <div className="max-w-4xl">
            <p className="font-sans text-xl md:text-2xl xl:text-3xl leading-relaxed text-white/90">
              I enjoy tackling both frontend and backend development challenges.
              My workflow includes clean code, scalable architecture, and continuous learning.
              Currently, I'm sharpening my full-stack skills by building real-world projects and experimenting with new technologies.
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
          
          {/* Experience Section */}
          <div>
            <div className="mb-8 pb-6 border-b-8 border-white">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
                <span className="text-[#e9f294]">//</span>
                Internships
              </h3>
            </div>
            
            <div className="space-y-0">
              {experience.map((item, i) => (
                <div 
                  key={i} 
                  className="border-b-8 border-white last:border-b-0 pb-8 mb-8 last:mb-0"
                >
                  {/* Year Badge */}
                  <div className="mb-4">
                    <div className="inline-block bg-[#a2f7a2] text-black px-6 py-2 font-black text-2xl border-4 border-white">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="font-black text-xl md:text-2xl uppercase tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    
                    {item.company && (
                      <div>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#c3a1ff] text-black px-6 py-3 font-black text-sm uppercase tracking-wider border-4 border-white hover:bg-[#e9f294] transition-colors group"
                          >
                            {item.company}
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3"
                              strokeLinecap="square"
                              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            >
                              <path d="M7 7h10v10M7 17L17 7" />
                            </svg>
                          </a>
                        ) : (
                          <span className="inline-block bg-[#c3a1ff] text-black px-6 py-3 font-black text-sm uppercase tracking-wider border-4 border-white">
                            {item.company}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {item.duration && (
                      <p className="font-mono text-sm text-white/60 uppercase tracking-wide">
                        [{item.duration}]
                      </p>
                    )}
                    
                    {item.details.length > 0 && (
                      <ul className="font-sans text-base leading-relaxed space-y-3 mt-4 pt-4 ">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="text-[#a2f7a2] font-black text-xl mt-0.5">▪</span>
                            <span className="text-white/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="mb-8 pb-6 border-b-8 border-white">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
                <span className="text-[#e9f294]">//</span>
                Education
              </h3>
            </div>
            
            <div className="space-y-0">
              {education.map((item, i) => (
                <div 
                  key={i} 
                  className="border-b-8 border-white last:border-b-0 pb-8 mb-8 last:mb-0"
                >
                  {/* Year Badge */}
                  <div className="mb-4">
                    <div className="inline-block bg-[#a2f7a2] text-black px-6 py-2 font-black text-2xl border-4 border-white">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="font-black text-xl md:text-2xl uppercase tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    
                    {item.company && (
                      <div>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#c3a1ff] text-black px-6 py-3 font-black text-sm uppercase tracking-wider border-4 border-white hover:bg-[#e9f294] transition-colors group"
                          >
                            {item.company}
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3"
                              strokeLinecap="square"
                              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            >
                              <path d="M7 7h10v10M7 17L17 7" />
                            </svg>
                          </a>
                        ) : (
                          <span className="inline-block bg-[#c3a1ff] text-black px-6 py-3 font-black text-sm uppercase tracking-wider border-4 border-white">
                            {item.company}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {item.duration && (
                      <p className="font-mono text-sm text-white/60 uppercase tracking-wide">
                        [{item.duration}]
                      </p>
                    )}
                    
                    {item.details.length > 0 && (
                      <ul className="font-sans text-base leading-relaxed space-y-3 mt-4 pt-4">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="text-[#a2f7a2] font-black text-xl mt-0.5">▪</span>
                            <span className="text-white/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}