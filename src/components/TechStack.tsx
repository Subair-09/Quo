import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TECH_STACK } from "../data/websiteData";
import { Laptop, Server, Brain, Database, Cloud, Blocks, Sparkles } from "lucide-react";

interface TechStackProps {
  isDarkMode: boolean;
}

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
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0D0D0D] text-white border-t border-[#1a1a1a]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[10px] font-mono tracking-widest text-[#00FF66] uppercase w-fit font-bold">
            <Sparkles size={11} />
            <span>ENGINEERING ECOSYSTEM</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Technologies We Use
          </h2>
          
          <p className="text-sm font-sans leading-relaxed text-[#B5B5B5]">
            Our technology matrix is strategically aligned to serve high-availability products, low-latency AI pipelines, and responsive client layouts.
          </p>
        </div>

        {/* Category toggler navigation */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-10 select-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#00FF66] border-[#00FF66] text-black font-bold shadow-lg shadow-[#00FF66]/10"
                  : "border-[#1A1A1A] bg-[#121212] hover:bg-[#1A1A1A] text-[#B5B5B5] hover:border-[#00FF66]/30"
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

              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-2xl border border-[#1A1A1A] bg-[#121212] transition-all duration-350 flex items-start space-x-3.5 relative overflow-hidden hover:border-[#00FF66]/30 hover:scale-[1.01] group"
                >
                  {/* Category icon */}
                  <div className="p-2 rounded-xl shrink-0 border border-[#00FF66]/20 bg-[#1A1A1A] text-[#00FF66] group-hover:bg-[#00FF66] group-hover:text-black transition-colors duration-250">
                    <DynamicIcon size={16} />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs text-white">{tech.name}</h4>
                    <p className="text-[10px] font-mono leading-none tracking-wide text-[#00FF66] font-bold">
                      {tech.experienceLevel}
                    </p>
                    <p className="text-[10.5px] font-sans leading-relaxed pt-1.5 text-[#B5B5B5]">
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
