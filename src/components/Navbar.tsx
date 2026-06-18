import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  activeSection: string;
}

export default function Navbar({ isDarkMode, setIsDarkMode, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Us" },
    { id: "portfolio", label: "Portfolio" },
    { id: "training", label: "AI Training" },
    { id: "process", label: "Process" },
    { id: "tech", label: "Technologies" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 border-b border-[#1A1A1A] backdrop-blur-md shadow-2xl py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer group"
          >
            <div>
              <div className="flex items-center">
                <span className="font-display font-black tracking-tight text-md text-white">
                  QUOTIENTS
                </span>
                <span className="text-[#00FF66] font-bold ml-1.5 text-md animate-pulse">▪</span>
              </div>
              <p className="text-[9px] font-mono tracking-widest text-[#B5B5B5] group-hover:text-[#00FF66] transition-colors">
                DIGITAL HORIZON
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 transform cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#00FF66] bg-[#00FF66]/10 border border-[#00FF66]/20 glow-emerald-sm font-bold scale-[1.02]"
                    : "text-white/90 hover:text-[#00FF66] hover:bg-[#00FF66]/5 border border-transparent hover:border-[#00FF66]/20 hover:scale-[1.05] active:scale-[0.95] shadow-sm hover:shadow-[0_0_12px_rgba(0,255,102,0.15)]"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* GET CONSULTATION Button from the Sleek Interface Theme - Neon Emerald background */}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-5 px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#00FF66] hover:bg-[#00E65C] transition-all cursor-pointer shadow-lg hover:shadow-[#00FF66]/25 hover:scale-[1.03] active:scale-[0.98] duration-200"
            >
              GET CONSULTATION
            </button>
          </div>

          {/* Mobile elements (hamburger) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg cursor-pointer text-white hover:bg-white/10"
              aria-label="Toggle main menu"
            >
              {isOpen ? <X size={20} className="text-[#00FF66]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#1A1A1A] mt-3 bg-[#0D0D0D]/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform border-l-2 ${
                    activeSection === item.id
                      ? "text-[#00FF66] bg-[#00FF66]/15 font-bold pl-6 border-[#00FF66]"
                      : "text-white/90 border-transparent hover:bg-[#00FF66]/5 hover:text-[#00FF66] hover:pl-6 hover:border-[#00FF66]/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("contact");
                }}
                className="mt-4 block w-full text-center py-3 bg-[#00FF66] text-black font-bold rounded-xl text-sm transition-all shadow"
              >
                GET CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
