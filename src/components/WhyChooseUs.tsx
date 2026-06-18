import React from "react";
import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data/websiteData";
import { Sparkles, ShieldCheck, Brain, Users, Award } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  ShieldCheck,
  Brain,
  Users
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white my-0 border-t border-[#1a1a1a]/40"
    >
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00FF66]/4 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#00C853]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid and info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Section Header copy */}
          <div className="lg:col-span-4 text-left space-y-5">
            <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66] text-[10px] font-mono tracking-widest uppercase font-bold w-fit">
              <Award size={11} />
              <span>THE TRUST INDEX</span>
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-tight leading-tight text-white">
              Why Businesses <br />Trust Us
            </h2>
            
            <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#B5B5B5] max-w-md">
              We operate at the intersection of production-grade programming and modern cognitive model design, creating custom assets engineered to accelerate client operational capabilities.
            </p>

            <div className="p-4 rounded-xl border border-[#1A1A1A] bg-[#121212]/80 flex items-center space-x-4 max-w-sm">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00FF66]/10 text-[#00FF66] shrink-0 border border-[#00FF66]/20">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-white">Full IP Protection</p>
                <p className="text-[11px] text-[#707070] mt-0.5">We design proprietary networks entirely owned by you, our client, from day one.</p>
              </div>
            </div>
          </div>

          {/* Right: Feature cards grid (2x2) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {WHY_CHOOSE_US.map((feat, idx) => {
              const IconComponent = iconMap[feat.icon] || Sparkles;

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-[#1A1A1A] bg-[#121212] hover:bg-[#121212]/90 hover:border-[#00FF66]/30 transition-all duration-350 relative group"
                >
                  {/* Subtle color highlight corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-tr-2xl group-hover:from-white/[0.03] transition-colors" />

                  {/* Icon */}
                  <div className="p-3 rounded-xl w-fit mb-5 bg-[#1A1A1A] text-[#00FF66] border border-[#00FF66]/20 group-hover:bg-[#00FF66] group-hover:text-black transition-colors duration-250">
                    <IconComponent size={20} className="animate-pulse" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-sm text-white mb-2 tracking-wide group-hover:text-[#00FF66] transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs font-sans tracking-wide leading-relaxed text-[#B5B5B5]">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
