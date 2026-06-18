import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Award, Shield, ChevronRight, X } from "lucide-react";

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
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0D0D0D] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Custom Frame Showcase */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center min-h-[400px]">
            {/* Background luxury accent glow */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-10 -z-10 bg-[#00FF66]/10 animate-pulse-ambient" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A] bg-[#121212] p-2 hover:border-[#00FF66]/30 transition-all duration-300"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <img
                  src="https://imgur.com/UZ0WeFi.png"
                  alt="Quotients Who We Are Showcase"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#050505] opacity-20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-10" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy & Columns */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#00FF66] glow-emerald-text font-bold">
                WHO WE ARE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                About Quotients Digital Horizon Limited
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans leading-relaxed tracking-wide text-[#B5B5B5]">
              <p className="font-semibold text-white">
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
                className="group px-6 py-3 rounded-xl text-xs font-bold tracking-wider text-black bg-[#00FF66] hover:bg-[#00E65C] hover:shadow-xl hover:shadow-[#00FF66]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center gap-2 shadow font-display"
              >
                LEARN MORE
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onCtaClick("contact")}
                className="text-xs font-bold tracking-wider text-[#00FF66] hover:text-white transition-colors cursor-pointer uppercase py-2 font-display"
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[85vh] text-left border border-[#1A1A1A] bg-[#121212] text-white shadow-black/90"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-[#1A1A1A] hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details dialog"
              >
                <X size={16} />
              </button>

              <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase font-bold">CORPORATE DNA</span>
              <h3 className="font-display font-extrabold text-2xl mt-1 mb-4 text-white">Our Operational Vision & Ethics</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-bold text-sm text-[#00FF66]">1. Tailor-Made Blueprint Strategy</h4>
                  <p className="text-xs mt-1 leading-relaxed text-[#B5B5B5]">
                    We dismiss prefabricated templates. Every client system goes through strict asset assessments. We design components line-by-line using industry standards so you possess zero licensing or bloated overhead dependencies.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-[#00FF66]">2. Transparent Development Cycles</h4>
                  <p className="text-xs mt-1 leading-relaxed text-[#B5B5B5]">
                    Using agile tracking pipelines, clients watch tasks progress through active repos, from structural specs and wireframes to verified final testing grids.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-[#00FF66]">3. Secure AI Architecture</h4>
                  <p className="text-xs mt-1 leading-relaxed text-[#B5B5B5]">
                    Our custom LLM pipelines leverage strict server-side routing to guarantee your enterprise corporate data, user profiles, and operational logs are never leaked or fed to external models.
                  </p>
                </div>

                {/* Grid pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1A1A1A]">
                  {pillars.map((pil) => {
                    const Icon = pil.icon;
                    return (
                      <div key={pil.title} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Icon size={14} className="text-[#00FF66]" />
                          <p className="font-display font-bold text-xs text-white">{pil.title}</p>
                        </div>
                        <p className="text-[10px] leading-relaxed text-[#707070]">{pil.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#00FF66] hover:bg-[#00E65C] text-black text-xs font-bold tracking-wider cursor-pointer transition-colors shadow-md shadow-[#00FF66]/10 font-display"
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
