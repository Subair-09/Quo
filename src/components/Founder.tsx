import React from "react";
import { motion } from "motion/react";
import { Quote, Eye, Target, Sparkles, Award, ShieldCheck, Linkedin } from "lucide-react";

interface FounderProps {
  isDarkMode: boolean;
}

export default function Founder({ isDarkMode }: FounderProps) {
  return (
    <section
      id="founder"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white border-t border-[#121212]"
    >
      {/* Premium ambient decorative lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00FF66]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-[#00FF66]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-3 mb-16 max-w-3xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#00FF66] glow-emerald-text font-bold flex items-center justify-center md:justify-start gap-2">
            <Sparkles size={13} className="animate-pulse" />
            LEADERSHIP & VALUES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Meet Our Founder & Guiding Core Guarantees
          </h2>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#B5B5B5] leading-relaxed">
            The foundation of Quotients Digital Horizon Ltd is built upon premium software engineering craftsmanship, absolute operational transparency, and verifiable result delivery.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-stretch">
          
          {/* Card 1: Founder Deep-dive Portfolio (45% space) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 rounded-2xl border border-[#1A1A1A] bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-between hover:border-[#00FF66]/20 transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                {/* Image Showcase Frame with Custom Border Decorators */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto xl:mx-0 rounded-2xl overflow-hidden border border-[#262626] p-1.5 bg-[#121212]/50 group-hover:border-[#00FF66]/40 transition-colors duration-300">
                  <img
                    src="https://imgur.com/Kuisu9H.png"
                    alt="Subair Nurudeen Adewale - Founder of Quotients Digital Horizon Ltd"
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Digital glow indicator */}
                  <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-[#00FF66] border-2 border-[#0c0c0c] animate-pulse" />
                </div>

                {/* Founder Details */}
                <div className="text-center xl:text-left space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Subair Nurudeen Adewale
                  </h3>
                  <p className="text-xs font-mono tracking-wider text-[#00FF66] uppercase font-bold">
                    Founder & Managing Director
                  </p>
                  <p className="text-[11px] font-mono tracking-widest text-[#707070] uppercase">
                    Quotients Digital Horizon Ltd
                  </p>
                  <div className="pt-2 flex justify-center xl:justify-start">
                    <a
                      href="https://www.linkedin.com/in/subair-nurudeen-adewale-1b46aa28b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#202020] hover:border-[#00FF66]/30 bg-white/[0.02] hover:bg-white/[0.06] text-[10px] font-mono font-bold tracking-wider text-[#D2D2D2] hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      <Linkedin size={11} className="text-[#00FF66]" />
                      <span>CONNECT ON LINKEDIN</span>
                    </a>
                  </div>
                </div>

                {/* Short message quote */}
                <div className="relative pt-4 border-t border-[#161616]">
                  <Quote size={28} className="text-[#00FF66]/10 absolute -top-1 -left-2 rotate-180" />
                  <p className="text-xs sm:text-xs font-sans italic leading-relaxed text-[#D2D2D2] pl-4 relative z-10">
                    "At Quotients Digital Horizon, we reject the notion of off-the-shelf templates. Real digital transformation begins when engineers approach system architecture as bespoke, secure art, built directly around an organization's specific business mechanics. We deliver digital solutions backed by verifiable math and complete system ownership."
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-8 pt-4 border-t border-[#161616] flex items-center justify-center xl:justify-start gap-2.5">
                <ShieldCheck size={16} className="text-[#00FF66]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5B5B5]">
                  Active Executive Leadership Guarantee
                </span>
              </div>
            </motion.div>
          </div>

          {/* Card 2 & 3 Side layout: Vision & Mission (55% space) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 lg:gap-8">
            
            {/* Vision Segment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-[#1A1A1A] bg-[#0c0c0c] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-[#00FF66]/20 transition-all duration-300 relative group"
            >
              <div className="p-3.5 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 shrink-0 text-[#00FF66] group-hover:bg-[#00FF66]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                <Eye size={22} className="stroke-[2.5]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#707070] uppercase font-bold">corporate blueprint</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase font-bold">long term goal</span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#00FF66] transition-colors duration-200">
                  Our Corporate Vision
                </h4>
                <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#B5B5B5]">
                  To stand as Africa's paramount engineering center for next-generation intelligence, setting the global benchmark for secure, bespoke enterprise systems. We aim to define the boundary where modern technological capability meets clean, robust product craftsmanship, freeing industries from bloated software dependency.
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-mono uppercase text-[#707070] tracking-wider font-bold">Key Focus Area:</p>
                  <p className="text-[11px] text-[#D2D2D2] font-semibold mt-0.5">Automated Intelligence, Scalable System Frameworks, & High-Security Data Protection</p>
                </div>
              </div>
            </motion.div>

            {/* Mission Segment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-[#1A1A1A] bg-[#0c0c0c] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-[#00FF66]/20 transition-all duration-300 relative group"
            >
              <div className="p-3.5 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/20 shrink-0 text-[#00FF66] group-hover:bg-[#00FF66]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                <Target size={22} className="stroke-[2.5]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#707070] uppercase font-bold">our engine code</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase font-bold">daily action</span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#00FF66] transition-colors duration-200">
                  Our Corporate Mission
                </h4>
                <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#B5B5B5]">
                  To engineer secure, custom digital engines that directly solve corporate operational bottlenecks. We safeguard organizational intellectual property under absolute security guidelines while stripping out redundant runtime frameworks. Every system we launch matches the precise scope requested, delivering durable speed and maximum usability.
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-mono uppercase text-[#707070] tracking-wider font-bold">Client Guarantees:</p>
                  <p className="text-[11px] text-[#D2D2D2] font-semibold mt-0.5">Zero Prefabricated Layouts, Server-Side Data Protection, & Complete Source Control</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
