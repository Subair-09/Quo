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
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      {/* Background aesthetics */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#00D4FF]/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#7C3AED]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border text-[10px] font-mono tracking-widest uppercase ${
              isDarkMode
                ? "border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF]"
                : "border-[#2563EB]/20 bg-[#2563EB]/5 text-[#2563EB]"
            }`}
          >
            <Sparkles size={11} />
            <span>SOLUTIONS SUITE</span>
          </motion.div>
          
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-[#0B1020]"}`}>
            Our Core Services
          </h2>
          <p className={`text-sm sm:text-base font-sans leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
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
                className={`relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 shadow-xl"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:bg-slate-50/50 shadow-sm"
                } group`}
              >
                {/* Visual Top Highlight bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${srv.gradient} opacity-80`} />

                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${srv.gradient} text-white shadow-md relative`}>
                      <IconComponent size={20} />
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <span className={`text-[10px] font-mono tracking-wider ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                      [0{idx + 1}]
                    </span>
                  </div>

                  {/* Service Card Body */}
                  <h3 className={`font-display font-extrabold text-base mb-2.5 transition-colors group-hover:text-brand-electric dark:group-hover:text-brand-cyan ${
                    isDarkMode ? "text-white" : "text-brand-midnight"
                  }`}>
                    {srv.title}
                  </h3>
                  
                  <p className={`text-xs font-sans tracking-wide leading-relaxed mb-6 ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}>
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
                      className="overflow-hidden mb-6 border-t border-slate-200/10 pt-4"
                    >
                      <p className={`text-[11px] font-mono tracking-widest text-brand-purple mb-3 uppercase`}>
                        Key Deliverables:
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2 text-[11px] md:text-xs">
                            <Check size={12} className="text-brand-cyan mt-1 flex-shrink-0" />
                            <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Featured capsules */}
                      <div className="flex flex-wrap gap-1.5">
                        {srv.features.map((feat) => (
                          <span
                            key={feat}
                            className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${
                              isDarkMode ? "bg-white/5 border border-white/10 text-slate-300" : "bg-slate-100 border border-slate-200 text-slate-600"
                            }`}
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between border-t border-slate-200/10 pt-4 mt-auto">
                  <button
                    onClick={() => toggleExpand(srv.id)}
                    className={`flex items-center text-[11px] font-semibold tracking-wide cursor-pointer focus:outline-none hover:underline ${
                      isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-brand-midnight"
                    }`}
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
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-brand-electric hover:text-white dark:hover:bg-brand-electric hover:-translate-y-0.5 active:translate-y-0 text-slate-500 dark:text-slate-300 transition-all duration-200 cursor-pointer"
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
