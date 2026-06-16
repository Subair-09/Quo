import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Award, Shield, FileText, ChevronRight, X, Sparkles, HelpCircle } from "lucide-react";

interface AboutUsProps {
  isDarkMode: boolean;
  onCtaClick: (id: string) => void;
}

export default function AboutUs({ isDarkMode, onCtaClick }: AboutUsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    { title: "Precision Design", desc: "No templates, no cookie-cutter solutions. Every outline represents intentional digital architecture.", icon: Award },
    { title: "Robust Security", desc: "Protecting business intellectual property under strong encryption and industry safety standards.", icon: Shield },
    { title: "Verifiable Outcomes", desc: "Reducing task loads, tracking uptime logs, generating custom automation values.", icon: CheckCircle2 }
  ];

  return (
    <section
      id="about"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-white text-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
            {/* Left Side: Custom Frame Showcase */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center min-h-[400px]">
            {/* Background luxury accent glow */}
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 -z-10 ${isDarkMode ? "bg-brand-electric/30" : "bg-brand-electric/15"}`} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border p-2 transition-colors duration-300 ${
                isDarkMode ? "bg-[#111827]/80 border-white/10" : "bg-slate-50/90 border-slate-200"
              }`}
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <img
                  src="https://imgur.com/UZ0WeFi.png"
                  alt="Quotients Who We Are Showcase"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${
                  isDarkMode ? "from-[#0F172A] to-transparent" : "from-black to-transparent"
                }`} />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy & Columns */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-electric dark:text-brand-cyan">
                WHO WE ARE
              </span>
              <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                About Quotients Digital Horizon Limited
              </h2>
            </div>

            <div className={`space-y-4 text-xs sm:text-sm font-sans leading-relaxed tracking-wide ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              <p className="font-semibold">
                At Quotients Digital Horizon Limited, we help businesses turn ideas into powerful digital products.
              </p>
              <p>
                Our expertise spans custom software development, AI-powered applications, enterprise web solutions, and digital transformation consulting.
              </p>
              <p>
                We combine technology, strategy, and innovation to create scalable systems that improve efficiency, increase profitability, and unlock new growth opportunities.
              </p>
              <p>
                Whether you're a startup, SME, corporate organization, or government institution, we build technology that delivers measurable results.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-6 py-3 rounded-xl text-xs font-bold tracking-wider text-white bg-brand-midnight dark:bg-brand-electric hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center gap-2 shadow"
              >
                LEARN MORE
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onCtaClick("contact")}
                className={`text-xs font-bold tracking-wider hover:underline ${
                  isDarkMode ? "text-brand-cyan" : "text-brand-electric"
                }`}
              >
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Learn More Detailed Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-midnight/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-2xl w-full rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[85vh] text-left border ${
                isDarkMode ? "bg-[#0B1020] text-white border-white/10 shadow-2xl shadow-black/80" : "bg-white text-[#0F172A] border-slate-200"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className={`absolute top-4 right-4 p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isDarkMode ? "border-white/10 hover:bg-white/5 text-slate-400" : "border-slate-200 hover:bg-slate-100 text-slate-500"
                }`}
                aria-label="Close details dialog"
              >
                <X size={16} />
              </button>

              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">CORPORATE DNA</span>
              <h3 className="font-display font-extrabold text-2xl mt-1 mb-4">Our Operational Vision & Ethics</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-electric dark:text-brand-cyan">1. Tailor-Made Blueprint Strategy</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    We dismiss prefabricated templates. Every client system goes through strict asset assessments. We design components line-by-line using industry standards so you possess zero licensing or bloated overhead dependencies.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-brand-electric dark:text-brand-cyan">2. Transparent Development Cycles</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Using agile tracking pipelines, clients watch tasks progress through active repos, from structural specs and wireframes to verified final testing grids.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-brand-electric dark:text-brand-cyan">3. Secure AI Architecture</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Our custom LLM pipelines leverage strict server-side routing to guarantee your enterprise corporate data, user profiles, and operational logs are never leaked or fed to external models.
                  </p>
                </div>

                {/* Grid pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/10">
                  {pillars.map((pil) => {
                    const Icon = pil.icon;
                    return (
                      <div key={pil.title} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Icon size={14} className="text-brand-purple" />
                          <p className="font-display font-semibold text-xs">{pil.title}</p>
                        </div>
                        <p className={`text-[10px] leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{pil.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-brand-electric hover:bg-brand-electric/80 text-white text-xs font-bold tracking-wider cursor-pointer"
                >
                  ACKNOWLEDGE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
