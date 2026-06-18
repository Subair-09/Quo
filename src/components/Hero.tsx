import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Brain, Cpu, Database, Blocks } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
  onCtaClick: (id: string) => void;
}

export default function Hero({ isDarkMode, onCtaClick }: HeroProps) {
  const floatingBadges = [
    { 
      label: "AI Solutions", 
      icon: Brain, 
      color: "text-[#00FF66] border-[#1A1A1A] hover:border-[#00FF66]/30 bg-[#0D0D0D]/80 glow-emerald-sm", 
      delay: 0 
    },
    { 
      label: "Full Stack", 
      icon: Blocks, 
      color: "text-[#00FF66] border-[#1A1A1A] hover:border-[#00FF66]/30 bg-[#0D0D0D]/80 glow-emerald-sm", 
      delay: 1.5 
    },
    { 
      label: "SaaS Products", 
      icon: Database, 
      color: "text-[#00FF66] border-[#1A1A1A] hover:border-[#00FF66]/30 bg-[#0D0D0D]/80 glow-emerald-sm", 
      delay: 3 
    },
    { 
      label: "Automation", 
      icon: Cpu, 
      color: "text-[#00FF66] border-[#1A1A1A] hover:border-[#00FF66]/30 bg-[#0D0D0D]/80 glow-emerald-sm", 
      delay: 4.5 
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Image with elegant overlay using custom blend modes for high craftsmanship and legibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://imgur.com/9hj6ukG.png"
          alt="Abstract futuristic systems topology blueprint"
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-550 opacity-60 mix-blend-screen brightness-[0.6] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge fade overlays to keep typography readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/75 via-[#050505]/35 to-[#050505]/75" />
        
        {/* Background radial ambient light spots in neon green */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00FF66]/5 rounded-full blur-[90px] animate-pulse-ambient" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-[#00C853]/5 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#00FF66]/4 rounded-full blur-[100px]" />
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
              <span className="h-[1px] w-8 bg-[#00FF66]"></span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] font-mono text-[#00FF66] glow-emerald-text">
                Building Intelligent Digital Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-[58px] font-extrabold leading-[1.05] tracking-tight mb-6 text-white"
            >
              Transforming <br />
              Businesses Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#00C853] glow-emerald-text font-black">
                Software & AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg max-w-lg mb-10 leading-relaxed font-sans text-[#B5B5B5]"
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
                className="group px-8 py-4 bg-[#00FF66] hover:bg-[#00E65C] text-black rounded-xl font-bold flex items-center gap-2 shadow-xl hover:shadow-[#00FF66]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer text-sm font-display glow-emerald-sm"
              >
                <span>Start Your Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => onCtaClick("portfolio")}
                className="group px-8 py-4 font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 border border-[#1A1A1A] hover:border-[#00FF66] text-[#00FF66] bg-black/40 hover:bg-[#00FF66]/10 hover:shadow-lg text-sm font-display active:scale-[0.99]"
              >
                <Play size={10} className="fill-current text-[#00FF66]" />
                View Portfolio
              </button>
            </motion.div>

            {/* Trusted By logo section from the Sleek Interface mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-6 border-t border-[#1A1A1A]"
            >
              <p className="text-[10px] uppercase font-bold tracking-widest mb-4 text-white">Enterprise Clients & Partnerships</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 select-none transition-all duration-300 opacity-60 hover:opacity-100">
                <span className="font-black text-xl italic tracking-wider text-white hover:text-[#00FF66] transition-colors">Lanseed</span>
                <span className="font-black text-xl italic uppercase tracking-tighter text-[#00E65C]">Anioba</span>
                <span className="font-bold text-xl tracking-tight text-white">
                  Japamoves <span className="text-[#00FF66] font-extrabold">AI</span>
                </span>
                <span className="font-extrabold text-xl tracking-tight text-[#B5B5B5]">
                  Naijatongue <span className="text-[#00FF66] font-bold">AI</span>
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
              className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center rounded-all bg-gradient-to-tr from-[#00FF66]/5 to-[#00C853]/5 border border-[#1A1A1A]/80 shadow-2xl"
            >
              <div className="absolute inset-4 rounded-all border border-dashed border-[#00FF66]/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-10 rounded-all border border-[#00FF66]/20 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-all bg-gradient-to-tr from-[#050505] to-[#121212] border border-[#1A1A1A] shadow-inner flex flex-col items-center justify-center p-4">
                <Brain className="w-12 h-12 text-[#00FF66] mb-2 animate-pulse" />
                <span className="font-display font-semibold text-xs text-white tracking-widest uppercase">Q-NEURAL CORE</span>
                <span className="font-mono text-[9px] text-[#00FF66] mt-1 tracking-wider">v3.5 EMERALD ONLINE</span>
              </div>

              {/* Glowing decorative rings */}
              <div className="absolute -inset-1 rounded-all bg-gradient-to-tr from-[#00FF66] via-[#00C853] to-transparent opacity-10 blur-xl animate-pulse-ambient" />
            </motion.div>

            {/* floating technology widgets */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Dynamic Telemetry Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-4 right-4 p-4 rounded-xl border border-[#1A1A1A] bg-[#121212]/90 backdrop-blur-md shadow-xl text-white"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-all bg-[#00FF66] animate-ping" />
                  <p className="text-[10px] font-mono tracking-widest uppercase text-[#B5B5B5]">Cloud Compute</p>
                </div>
                <div className="mt-2.5 h-8 w-24 flex items-end gap-1 select-none">
                  {[40, 75, 45, 90, 60, 50, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="w-2.5 bg-gradient-to-t from-[#00C853] to-[#00FF66] rounded-t-sm"
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
                    <Icon size={14} className="animate-pulse text-[#00FF66]" />
                    <span className="font-display font-medium text-[11px] tracking-wide whitespace-nowrap text-[#B5B5B5]">{badge.label}</span>
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
