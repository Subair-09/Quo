import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, Brain, Cpu, Database, Blocks } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
  onCtaClick: (id: string) => void;
}

export default function Hero({ isDarkMode, onCtaClick }: HeroProps) {
  const floatingBadges = [
    { 
      label: "AI Solutions", 
      icon: Brain, 
      color: isDarkMode 
        ? "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5" 
        : "text-[#0F766E] border-[#20B2AA]/40 bg-[#F0FDFA] font-semibold", 
      delay: 0 
    },
    { 
      label: "Full Stack", 
      icon: Blocks, 
      color: isDarkMode 
        ? "text-brand-electric border-brand-electric/30 bg-brand-electric/5" 
        : "text-[#1E40AF] border-[#1E40AF]/30 bg-[#EFF6FF] font-semibold", 
      delay: 1.5 
    },
    { 
      label: "SaaS Products", 
      icon: Database, 
      color: isDarkMode 
        ? "text-brand-purple border-brand-purple/30 bg-brand-purple/5" 
        : "text-[#5B21B6] border-[#5B21B6]/30 bg-[#F5F3FF] font-semibold", 
      delay: 3 
    },
    { 
      label: "Automation", 
      icon: Cpu, 
      color: isDarkMode 
        ? "text-rose-400 border-rose-500/30 bg-rose-500/5" 
        : "text-[#9F1239] border-[#9F1239]/30 bg-[#FFF1F2] font-semibold", 
      delay: 4.5 
    }
  ];

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      {/* Background Image with elegant overlay using custom blend modes for high craftsmanship and legibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://imgur.com/9hj6ukG.png"
          alt="Abstract futuristic systems topology blueprint"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-550 ${
            isDarkMode 
              ? "opacity-60 mix-blend-screen brightness-[1.05] contrast-[1.05]" 
              : "opacity-75 mix-blend-multiply brightness-[0.96] contrast-[1.1]"
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Soft edge fade overlays to keep typography readable */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#0B1020]/90 via-[#0B1020]/75 to-[#0B1020]/90"
              : "bg-gradient-to-br from-[#F8FAFC]/75 via-[#F8FAFC]/45 to-[#F8FAFC]/75"
          }`}
        />
        {/* Background radial ambient light spots from Sleek Interface design */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D4FF]/10 dark:bg-[#00D4FF]/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-[#7C3AED]/10 dark:bg-[#7C3AED]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-electric/10 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className={`h-[1px] w-8 ${isDarkMode ? "bg-[#00D4FF]" : "bg-[#2563EB]"}`}></span>
              <span className={`text-[10.5px] font-bold uppercase tracking-[0.2em] font-mono ${
                isDarkMode ? "text-[#00D4FF]" : "text-[#2563EB]"
              }`}>
                Building Intelligent Digital Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-5xl sm:text-6xl lg:text-[58px] font-extrabold leading-[1.05] tracking-tight mb-6 ${
                isDarkMode ? "text-white" : "text-[#0B1020]"
              }`}
            >
              Transforming <br />
              Businesses Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Software & AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg max-w-lg mb-10 leading-relaxed font-sans ${
                isDarkMode ? "text-slate-300" : "text-slate-700 font-medium"
              }`}
            >
              We design, develop, and deploy high-performance digital solutions that help businesses scale faster, automate operations, and stay ahead in the AI-driven economy.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => onCtaClick("contact")}
                className="group px-8 py-4 bg-[#2563EB] hover:bg-[#2563EB]/95 text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Start Your Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => onCtaClick("portfolio")}
                className={`group px-8 py-4 font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 border hover:scale-[1.01] active:scale-[0.99] text-sm ${
                  isDarkMode
                    ? "border-white/10 hover:border-white/20 text-white bg-white/5 hover:bg-white/10"
                    : "border-slate-200 bg-white hover:bg-slate-50 text-[#0B1020] shadow-sm hover:border-slate-300"
                }`}
              >
                <Play size={10} className="fill-current text-[#2563EB]" />
                View Portfolio
              </button>
            </motion.div>

            {/* Trusted By logo section from the Sleek Interface mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`mt-12 pt-6 border-t ${
                isDarkMode ? "border-white/10" : "border-slate-200"
              }`}
            >
              <p className={`text-[10px] uppercase font-bold tracking-widest mb-4 ${
                isDarkMode ? "text-slate-400" : "text-slate-700 font-bold"
              }`}>Enterprise Clients & Partnerships</p>
              <div className={`flex flex-wrap items-center gap-x-8 gap-y-3 select-none transition-all duration-300 ${
                isDarkMode ? "opacity-50 hover:opacity-90 grayscale hover:grayscale-0" : "opacity-100"
              }`}>
                <span className={`font-black text-xl italic tracking-wider ${isDarkMode ? "text-white" : "text-[#065F46] font-extrabold"}`}>Lanseed</span>
                <span className={`font-black text-xl italic uppercase tracking-tighter ${isDarkMode ? "text-[#00D4FF]" : "text-[#1E40AF]"}`}>Anioba</span>
                <span className={`font-bold text-xl tracking-tight ${isDarkMode ? "text-white" : "text-slate-900 font-extrabold"}`}>
                  Japamoves <span className={isDarkMode ? "text-brand-purple" : "text-indigo-700"}>AI</span>
                </span>
                <span className={`font-extrabold text-xl tracking-tight ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
                  Naijatongue <span className={isDarkMode ? "text-emerald-400" : "text-emerald-700"}>AI</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Awesome SVG/CSS Technical Workspace Diagram with Interactive Elements */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
            
            {/* Centerpiece Spinning Graphic Node (AI Core) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center rounded-full bg-gradient-to-tr from-brand-electric/5 to-brand-cyan/5 border border-brand-electric/10 shadow-2xl"
            >
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-purple/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-brand-cyan/20 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-brand-midnight to-brand-midnight/60 border border-white/10 shadow-inner flex flex-col items-center justify-center p-4">
                <Brain className="w-12 h-12 text-brand-cyan mb-2 animate-pulse" />
                <span className="font-display font-semibold text-xs text-white tracking-widest uppercase">Q-NEURAL CORE</span>
                <span className="font-mono text-[9px] text-brand-electric mt-1">v3.5 ONLINE</span>
              </div>

              {/* Glowing decorative rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-electric via-brand-purple to-brand-cyan opacity-20 blur-xl animate-pulse-ambient" />
            </motion.div>

            {/* floating technology widgets */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Dynamic Telemetry Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`absolute top-4 right-4 p-3 rounded-xl border glass-light shadow-xl ${
                  isDarkMode ? "glass-dark border-white/10 text-white" : "border-slate-200/80 text-brand-midnight"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <p className="text-[10px] font-mono tracking-widest uppercase">Cloud Compute</p>
                </div>
                <div className="mt-2 h-8 w-24 flex items-end gap-1 select-none">
                  {[40, 75, 45, 90, 60, 50, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="w-2.5 bg-gradient-to-t from-brand-electric to-brand-cyan rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Technology Badges aligned neatly around centerpiece */}
              {floatingBadges.map((badge, idx) => {
                const Icon = badge.icon;
                
                // Align badges around circular path - with safety margins for mobile viewports
                const offsets = [
                  "top-[20%] left-0 sm:left-[-5%]",
                  "top-[65%] left-[2%] sm:left-[-10%]",
                  "bottom-[12%] right-[2%] sm:right-[5%]",
                  "top-[50%] right-[1%] sm:right-[-12%]"
                ];

                return (
                  <motion.div
                    key={badge.label}
                    className={`absolute ${offsets[idx]} flex items-center space-x-2 px-3.5 py-2.5 rounded-xl border shadow-lg backdrop-blur-md ${badge.color}`}
                    animate={{
                      y: [0, idx % 2 === 0 ? -12 : 12, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: badge.delay
                    }}
                  >
                    <Icon size={14} className="animate-pulse" />
                    <span className="font-display font-medium text-[11px] tracking-wide whitespace-nowrap">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
