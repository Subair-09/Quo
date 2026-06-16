import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data/websiteData";
import { Project } from "../types";
import { X, Search, Sparkles, Code2, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";

interface PortfolioProps {
  isDarkMode: boolean;
}

export default function Portfolio({ isDarkMode }: PortfolioProps) {
  const [filter, setFilter] = useState<"all" | "ai-automation" | "enterprise-saas" | "web-dev">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "enterprise-saas", label: "Enterprise SaaS" },
    { id: "web-dev", label: "Web Development" }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="portfolio"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-electric/25 bg-brand-electric/10 text-[10px] font-mono tracking-widest text-brand-electric dark:text-brand-cyan uppercase">
            <Sparkles size={11} />
            <span>PORTFOLIO EXHIBIT</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            Featured Projects
          </h2>
          
          <p className={`text-sm font-sans leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
            Discover how Quotients Digital Horizon Limited couples system engineering with tactical prompt architectures to deploy valuable business tools.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-brand-electric text-white shadow-lg shadow-brand-electric/20"
                  : isDarkMode
                  ? "bg-white/5 hover:bg-white/10 text-slate-300"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Entries */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl overflow-hidden border flex flex-col group h-full transition-all duration-300 ${
                  isDarkMode ? "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20" : "bg-white border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Image panel with hover zoom */}
                <div className="h-56 sm:h-64 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge on screen */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest bg-brand-midnight/90 text-brand-cyan px-2.5 py-1 rounded-md border border-white/10 uppercase">
                    {categories.find((c) => c.id === proj.category)?.label}
                  </span>

                  {/* Title overlay in image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-white/70 text-[10px] font-mono leading-none tracking-widest uppercase">
                      COLLABORATIVE DEPLOYMENT
                    </p>
                    <h3 className="font-display font-extrabold text-lg text-white mt-1 leading-tight">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="font-display font-semibold text-xs text-brand-electric dark:text-brand-cyan tracking-wider uppercase">
                      {proj.subtitle}
                    </p>
                    
                    <p className={`text-xs font-sans tracking-wide leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {proj.description}
                    </p>

                    {/* Tech stack items list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[9.5px] font-mono font-medium px-2 py-0.5 rounded-md ${
                            isDarkMode ? "bg-white/5 text-slate-400 border border-white/5" : "bg-slate-200/50 text-slate-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className={`text-[9.5px] font-mono font-medium px-2 py-0.5 rounded-md ${isDarkMode ? "bg-white/5 text-slate-400" : "bg-slate-200/50 text-slate-600"}`}>
                          +{proj.technologies.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Details Button */}
                  <div className="pt-6 border-t border-slate-200/10 mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="group inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white bg-brand-electric shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                    >
                      <span>VIEW DETAILS</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study dialog overlay popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-midnight/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-3xl w-full rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] text-left border ${
                isDarkMode ? "bg-brand-midnight text-white border-white/10" : "bg-white text-brand-text border-slate-200"
              }`}
            >
              {/* Close Button on top right */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 p-1.5 rounded-lg border z-10 cursor-pointer transition-colors ${
                  isDarkMode ? "border-white/10 hover:bg-white/5 text-slate-400" : "border-slate-200 hover:bg-slate-100 text-slate-500"
                }`}
                aria-label="Close project modal"
              >
                <X size={16} />
              </button>

              {/* Case Study Header Banner */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase bg-brand-midnight/80 border border-white/5 px-2 py-0.5 rounded">
                    CASE STUDY BREAKDOWN
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case Study Content body */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Background info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-200/10">
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="font-display font-bold text-sm tracking-wide text-brand-electric dark:text-brand-cyan">Operational Story</h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div className="md:col-span-4 p-4 rounded-xl bg-slate-100 dark:bg-white/5 space-y-3">
                    <div>
                      <p className={`text-[10px] font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Client / Partner</p>
                      <p className="text-xs font-semibold mt-0.5">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className={`text-[10px] font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Core Deployment Category</p>
                      <p className="text-xs font-semibold mt-0.5 cursor-pointer hover:underline text-brand-electric dark:text-brand-cyan uppercase">
                        {categories.find((c) => c.id === selectedProject.category)?.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech specifications of project */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Code2 size={16} className="text-brand-purple" />
                    <h4 className="font-display font-bold text-sm">System Framework Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] font-mono px-3 py-1 rounded-xl border ${
                          isDarkMode ? "bg-white/5 border-white/5 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project outcomes / statistics */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-brand-cyan" />
                    <h4 className="font-display font-bold text-sm">Measurable Performance Outcomes</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.outcomes.map((out, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/25 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-1.5">
                          <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                          <p className={`text-[10px] font-mono font-medium tracking-wider text-emerald-500 uppercase`}>Result [0{idx+1}]</p>
                        </div>
                        <p className={`text-xs font-sans mt-2 tracking-wide leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                          {out}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer and exit buttons */}
              <div className="p-6 border-t border-slate-200/10 flex justify-end gap-3 mt-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider cursor-pointer border ${
                    isDarkMode ? "border-white/10 hover:bg-white/5 text-white" : "border-slate-200 hover:bg-slate-50 text-brand-midnight"
                  }`}
                >
                  DISMISS
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white bg-brand-electric hover:bg-brand-electric/80 cursor-pointer shadow-lg shadow-brand-electric/15"
                >
                  DISCUSS SIMILAR PROJECTS
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
