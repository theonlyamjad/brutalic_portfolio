"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mvgdgybk");

  return (
    <section id="contact" className="bg-black text-white ">
      <div className="container mx-auto py-16 md:py-24 xl:py-32 px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-block bg-[#c3a1ff] text-black px-6 py-2 border-4 border-white font-black text-xs tracking-widest uppercase mb-6">
            [SECTION_04]
          </div>
          <h2 className="text-5xl md:text-7xl xl:text-9xl font-black uppercase tracking-tighter leading-none">
            Get In <span className="text-[#e9f294]">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 xl:gap-24 border-t-8 border-white pt-12 md:pt-16">
          
          {/* Left Side - Message */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
                <span className="text-[#a2f7a2]">//</span> Let's Work Together
              </h3>
              
              <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 mb-8">
                Have a project in mind? <br /> Looking for a developer to join your team? <br /> Or just want to say hi? <br />
                Drop me a message and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 pt-8 border-t-4 border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-4 border-white bg-black flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9f294" strokeWidth="2.5" strokeLinecap="square">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black uppercase text-sm text-white/60 mb-1">Email</p>
                    <p className="font-mono text-lg">benamaraamjad766@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-4 border-white bg-black flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a2f7a2" strokeWidth="2.5" strokeLinecap="square">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black uppercase text-sm text-white/60 mb-1">Location</p>
                    <p className="font-mono text-lg">Agadir, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            {state.succeeded ? (
              <div className="border-8 border-[#a2f7a2] bg-black p-12 text-center">
                <div className="mb-6">
                  <svg 
                    width="80" 
                    height="80" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#a2f7a2" 
                    strokeWidth="3"
                    strokeLinecap="square"
                    className="mx-auto"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-4xl font-black uppercase mb-4 text-[#a2f7a2]">
                  [Message_Sent]
                </h3>
                <p className="font-mono text-lg text-white/80">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block font-black uppercase text-sm tracking-wider mb-3 text-white/80">
                      [First_Name]
                    </label>
                    <input
                      id="fname"
                      type="text"
                      name="fname"
                      className="w-full px-6 py-4 bg-black text-white border-4 border-white font-mono text-base focus:outline-none focus:border-[#e9f294] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lname" className="block font-black uppercase text-sm tracking-wider mb-3 text-white/80">
                      [Last_Name]
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="lname"
                      className="w-full px-6 py-4 bg-black text-white border-4 border-white font-mono text-base focus:outline-none focus:border-[#e9f294] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-black uppercase text-sm tracking-wider mb-3 text-white/80">
                    [Email]
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 bg-black text-white border-4 border-white font-mono text-base focus:outline-none focus:border-[#e9f294] transition-colors"
                    placeholder="john.doe@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-red-400 font-mono text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-black uppercase text-sm tracking-wider mb-3 text-white/80">
                    [Message]
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-black text-white border-4 border-white font-mono text-base resize-none focus:outline-none focus:border-[#e9f294] transition-colors"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-red-400 font-mono text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="relative z-10 inline-block group/btn">
                  <div className="absolute bg-[#e9f294] inset-0 translate-x-2 translate-y-2 group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 transition-transform duration-200"></div>
                  <div className="absolute inset-0 bg-[#c3a1ff] translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform duration-200"></div>
                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="relative hover:bg-[#a2f7a2] bg-black border-4 border-white px-10 py-5 font-black text-lg uppercase tracking-wider flex items-center gap-4 group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{state.submitting ? '[SENDING...]' : '[SEND_MESSAGE]'}</span>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      strokeLinecap="square"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}