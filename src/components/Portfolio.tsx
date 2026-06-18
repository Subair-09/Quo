import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data/websiteData";
import { Project } from "../types";
import { X, Sparkles, Code2, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";

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
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0D0D0D] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Sparkles size={11} />
            <span>PORTFOLIO EXHIBIT</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          
          <p className="text-sm font-sans leading-relaxed text-[#B5B5B5]">
            Discover how Quotients Digital Horizon Limited couples system engineering with tactical prompt architectures to deploy valuable business tools.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer border ${
                filter === cat.id
                  ? "bg-[#00FF66] text-black border-[#00FF66] font-bold shadow-lg shadow-[#00FF66]/10"
                  : "bg-[#121212] hover:bg-[#1A1A1A] text-[#B5B5B5] border-[#1A1A1A] hover:border-[#00FF66]/30"
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
                className="relative rounded-3xl overflow-hidden border border-[#1A1A1A] flex flex-col group h-full bg-[#121212] hover:border-[#00FF66]/30 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#00FF66]/5 transition-all duration-350"
              >
                {/* Image panel with hover zoom */}
                <div className="h-56 sm:h-64 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/20 to-transparent" />
                  
                  {/* Category Badge on screen */}
                  <span className="absolute top-4 left-4 text-[9px] font-mono tracking-widest bg-black/90 text-[#00FF66] px-2.5 py-1 rounded-md border border-[#00FF66]/20 uppercase font-bold">
                    {categories.find((c) => c.id === proj.category)?.label}
                  </span>

                  {/* Title overlay in image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-[#00FF66] text-[10px] font-mono leading-none tracking-widest uppercase font-bold">
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
                    <p className="font-display font-bold text-xs text-[#00FF66] tracking-wider uppercase">
                      {proj.subtitle}
                    </p>
                    
                    <p className="text-xs font-sans tracking-wide leading-relaxed text-[#B5B5B5]">
                      {proj.description}
                    </p>

                    {/* Tech stack items list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9.5px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/55 text-[#B5B5B5] border border-[#1A1A1A] hover:border-[#00FF66]/25"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className="text-[9.5px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/55 text-[#B5B5B5] border border-[#1A1A1A]">
                          +{proj.technologies.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Details Button */}
                  <div className="pt-6 border-t border-[#1A1A1A] mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="group inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-black bg-[#00FF66] hover:bg-[#00E65C] transition-all duration-200 cursor-pointer font-display"
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] text-left border border-[#1A1A1A] bg-[#121212] text-white shadow-black/95"
            >
              {/* Close Button on top right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-[#1A1A1A] z-10 cursor-pointer bg-black/40 hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase bg-black/80 border border-[#00FF66]/20 px-2.5 py-1 rounded">
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-[#1A1A1A]">
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="font-display font-bold text-sm tracking-wide text-[#00FF66]">Operational Story</h4>
                    <p className="text-xs leading-relaxed text-[#B5B5B5]">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div className="md:col-span-4 p-4 rounded-xl bg-black/40 border border-[#1A1A1A] space-y-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#707070]">Client / Partner</p>
                      <p className="text-xs font-semibold mt-0.5 text-white">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#707070]">Core Deployment Category</p>
                      <p className="text-xs font-semibold mt-0.5 text-[#00FF66] uppercase">
                        {categories.find((c) => c.id === selectedProject.category)?.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech specifications of project */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Code2 size={16} className="text-[#00FF66]" />
                    <h4 className="font-display font-bold text-sm text-white">System Framework Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-3 py-1 rounded-xl border border-[#1A1A1A] bg-black/50 text-[#B5B5B5] hover:border-[#00FF66]/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project outcomes / statistics */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-[#00FF66]" />
                    <h4 className="font-display font-bold text-sm text-white">Measurable Performance Outcomes</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.outcomes.map((out, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-[#00FF66]/10 bg-[#00FF66]/5 hover:border-[#00FF66]/35 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-1.5">
                          <CheckCircle size={14} className="text-[#00FF66] flex-shrink-0" />
                          <p className="text-[10px] font-mono font-medium tracking-wider text-[#00FF66] uppercase">Result [0{idx+1}]</p>
                        </div>
                        <p className="text-xs font-sans mt-2 tracking-wide leading-relaxed text-[#B5B5B5]">
                          {out}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer and exit buttons */}
              <div className="p-6 border-t border-[#1A1A1A] flex flex-wrap justify-end gap-3 mt-auto bg-black/20">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white border border-[#2A2A2A] hover:border-[#00FF66]/40 hover:bg-white/5 cursor-pointer transition-all duration-200 inline-flex items-center gap-1.5 font-display"
                  >
                    <span>VISIT LIVE SITE</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider cursor-pointer border border-[#1A1A1A] hover:bg-white/5 text-slate-300 transition-colors"
                >
                  DISMISS
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-black bg-[#00FF66] hover:bg-[#00E65C] cursor-pointer transition-colors shadow-md shadow-[#00FF66]/15 font-display"
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
