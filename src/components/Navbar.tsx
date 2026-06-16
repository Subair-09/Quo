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
          ? isDarkMode
            ? "bg-[#0B1020]/90 border-b border-white/10 backdrop-blur-md shadow-lg py-3.5"
            : "bg-white/90 border-b border-slate-200 backdrop-blur-md shadow-sm py-3.5"
          : isDarkMode
          ? "bg-[#0B1020]/40 border-b border-transparent backdrop-blur-sm py-5"
          : "bg-white/40 border-b border-transparent backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300/10 shadow-md overflow-hidden p-0.5">
              <img
                src="https://imgur.com/LS8v8Bd.png"
                alt="Quotients Logo"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className={`font-display font-bold tracking-tight text-md ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                  QUOTIENTS
                </span>
                <span className="text-brand-cyan font-bold ml-1 text-md animate-pulse">▪</span>
              </div>
              <p className={`text-[9px] font-mono tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "text-brand-cyan bg-brand-cyan/10"
                      : "text-brand-electric bg-brand-electric/5"
                    : isDarkMode
                    ? "text-slate-300 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-brand-text hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Dark Mode toggle icon button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ml-2 ${
                isDarkMode ? "text-amber-400 hover:bg-white/5" : "text-brand-text hover:bg-slate-100"
              }`}
              aria-label="Toggle theme mode"
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* GET CONSULTATION Button from the Sleek Interface Theme */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`ml-3 px-5 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all cursor-pointer ${
                isDarkMode
                  ? "bg-white text-[#0B1020] hover:bg-slate-100 shadow-xl shadow-white/5"
                  : "bg-[#0B1020] text-white hover:bg-opacity-90 shadow-xl shadow-slate-900/10"
              }`}
            >
              GET CONSULTATION
            </button>
          </div>

          {/* Mobile elements (hamburger and theme toggle) */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                isDarkMode ? "text-amber-400 hover:bg-white/10" : "text-brand-midnight hover:bg-slate-100"
              }`}
              aria-label="Toggle theme mode"
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg cursor-pointer ${
                isDarkMode ? "text-white hover:bg-white/10" : "text-brand-midnight hover:bg-slate-100"
              }`}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className={`lg:hidden border-t mt-3 ${
              isDarkMode ? "bg-brand-midnight/95 border-white/10" : "bg-white/95 border-slate-100"
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? isDarkMode
                        ? "text-brand-cyan bg-brand-cyan/10"
                        : "text-brand-electric bg-brand-electric/5 font-semibold"
                      : isDarkMode
                      ? "text-slate-300 hover:bg-white/5"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
