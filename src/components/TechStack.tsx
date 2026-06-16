import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TECH_STACK } from "../data/websiteData";
import { Laptop, Server, Brain, Database, Cloud, Blocks, Sparkles } from "lucide-react";

interface TechStackProps {
  isDarkMode: boolean;
}

const iconColors: Record<string, string> = {
  frontend: "text-brand-electric bg-brand-electric/10 border-brand-electric/25",
  backend: "text-brand-purple bg-brand-purple/10 border-brand-purple/25",
  ai: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/25",
  database: "text-rose-500 bg-rose-500/10 border-rose-500/25",
  cloud: "text-teal-500 bg-teal-500/10 border-teal-500/25"
};

const iconMap: Record<string, React.ComponentType<any>> = {
  Laptop,
  Server,
  Brain,
  Database,
  Cloud,
  Layers: Blocks,
  FileCode2: Blocks,
  Terminal: Server,
  Sparkles,
  ShieldCheck: Blocks
};

export default function TechStack({ isDarkMode }: TechStackProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "ai" | "database" | "cloud">("all");

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "Artificial Intel" },
    { id: "database", label: "Databases" },
    { id: "cloud", label: "Cloud Platforms" }
  ];

  const filteredTech = TECH_STACK.filter((t) => {
    if (activeCategory === "all") return true;
    return t.category === activeCategory;
  });

  return (
    <section
      id="tech"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0b1020] text-white" : "bg-white text-brand-text shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-[10px] font-mono tracking-widest text-brand-cyan uppercase w-fit">
            <Sparkles size={11} />
            <span>ENGINEERING ECOSYSTEM</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            Technologies We Use
          </h2>
          
          <p className={`text-sm font-sans leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
            Our technology matrix is strategically aligned to serve high-availability products, low-latency AI pipelines, and responsive client layouts.
          </p>
        </div>

        {/* Category toggler navigation */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-10 select-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-brand-electric border-brand-electric text-white shadow-lg shadow-brand-electric/15"
                  : isDarkMode
                  ? "border-white/5 bg-white/5 hover:bg-white/10 text-slate-300"
                  : "border-slate-100 bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Items list */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const DynamicIcon = iconMap[tech.icon] || Blocks;
              const colSyle = iconColors[tech.category] || "";

              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-3.5 relative overflow-hidden group ${
                    isDarkMode
                      ? "bg-[#0c1226]/60 border-white/5 hover:border-white/10 hover:bg-[#0c1226]/90"
                      : "bg-slate-50/50 border-slate-200/60 hover:border-slate-300/80 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {/* Category icon */}
                  <div className={`p-2 rounded-xl shrink-0 border ${colSyle}`}>
                    <DynamicIcon size={16} />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-black text-xs">{tech.name}</h4>
                    <p className={`text-[10px] font-mono leading-none tracking-wide text-brand-purple`}>
                      {tech.experienceLevel}
                    </p>
                    <p className={`text-[10.5px] font-sans leading-relaxed pt-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {tech.useCase}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
