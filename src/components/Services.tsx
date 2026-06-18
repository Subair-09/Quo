import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data/websiteData";
import {
  Layout,
  Layers,
  Brain,
  Cpu,
  FileCode2,
  BookOpen,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles
} from "lucide-react";

interface ServicesProps {
  isDarkMode: boolean;
  onCtaClick: (id: string, detail?: string) => void;
}

// Dynamically map icons based on string ID
const iconMap: Record<string, React.ComponentType<any>> = {
  Layout,
  Layers,
  Brain,
  Cpu,
  FileCode2,
  BookOpen
};

export default function Services({ isDarkMode, onCtaClick }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Background aesthetics - subtle neon green glows */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#00FF66]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#00C853]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66] text-[10px] font-mono tracking-widest uppercase font-bold"
          >
            <Sparkles size={11} />
            <span>SOLUTIONS SUITE</span>
          </motion.div>
          
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Our Core Services
          </h2>
          <p className="text-sm font-sans leading-relaxed text-[#B5B5B5] max-w-xl mx-auto">
            Comprehensive digital solutions designed for modern businesses. We combine technical rigor with deep AI expertise.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || Layout;
            const isExpanded = expandedId === srv.id;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl border border-[#1A1A1A] p-6 bg-[#121212] overflow-hidden transition-all duration-350 flex flex-col justify-between hover:border-[#00FF66]/30 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#00FF66]/5 group"
              >
                {/* Visual Top Highlight bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FF66] to-[#00C853] opacity-60" />

                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#1A1A1A] text-[#00FF66] border border-[#00FF66]/20 shadow-md relative transition-colors group-hover:bg-[#00FF66] group-hover:text-black">
                      <IconComponent size={20} />
                    </div>
                    
                    <span className="text-[10px] font-mono tracking-wider text-[#707070]">
                      [0{idx + 1}]
                    </span>
                  </div>

                  {/* Service Card Body */}
                  <h3 className="font-display font-bold text-lg mb-2.5 transition-colors text-white group-hover:text-[#00FF66]">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs font-sans tracking-wide leading-relaxed mb-6 text-[#B5B5B5]">
                    {srv.description}
                  </p>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-6 border-t border-[#1A1A1A] pt-4"
                    >
                      <p className="text-[10px] font-mono tracking-widest text-[#00FF66] mb-3 uppercase font-bold">
                        Key Deliverables:
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2 text-[11px] md:text-xs">
                            <Check size={12} className="text-[#00FF66] mt-0.5 flex-shrink-0" />
                            <span className="text-[#B5B5B5]">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Featured capsules */}
                      <div className="flex flex-wrap gap-1.5">
                        {srv.features.map((feat) => (
                          <span
                            key={feat}
                            className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/60 border border-[#1A1A1A] text-[#B5B5B5] hover:border-[#00FF66]/25 transition-colors"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between border-t border-[#1A1A1A] pt-4 mt-auto">
                  <button
                    onClick={() => toggleExpand(srv.id)}
                    className="flex items-center text-[11px] font-semibold tracking-wide cursor-pointer focus:outline-none text-[#707070] hover:text-[#00FF66] transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Collapse Details <ChevronUp size={12} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Explore Deliverables <ChevronDown size={12} className="ml-1" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onCtaClick("contact", srv.title)}
                    className="p-2 ml-2 rounded-xl bg-[#1A1A1A] border border-[#1A1A1A] text-[#B5B5B5] group-hover:border-[#00FF66]/35 group-hover:text-[#00FF66] hover:bg-[#00FF66]/10 active:scale-95 transition-all duration-200 cursor-pointer"
                    aria-label={`Get started with ${srv.title}`}
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
