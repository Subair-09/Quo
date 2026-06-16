import React, { useState } from "react";
import { Mail, ArrowRight, Linkedin, Twitter, Github, Heart, MessageSquare, CheckCircle, Smartphone } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim() && subEmail.includes("@")) {
      setSubscribed(true);
      setSubEmail("");
      setTimeout(() => setSubscribed(false), 8000);
    }
  };

  const scrollToSection = (id: string) => {
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
    <footer
      className={`border-t relative z-10 transition-colors duration-300 select-none ${
        isDarkMode ? "bg-[#070b19] border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-500"
      }`}
    >
      {/* Top Footer widget area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Branding Logo and Statement (4/12 col span) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 cursor-pointer group w-fit"
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
                <span className={`font-display font-black tracking-tight text-sm ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                  QUOTIENTS
                </span>
                <p className="text-[9px] font-mono tracking-widest text-slate-500">
                  DIGITAL HORIZON
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              We design, develop, and deploy scalable enterprise platforms and high-speed cognitive AI networks, helping corporate institutions turn ideas into valuable digital products.
            </p>

            {/* Newsletter Sign up mock */}
            <div className="space-y-2 max-w-sm pt-2">
              <p className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Corporate Newsletter Registry
              </p>

              {subscribed ? (
                <div className="flex items-center space-x-2 text-[11px] text-emerald-500 font-mono py-2 animate-pulse">
                  <CheckCircle size={12} />
                  <span>Subscribed to systems briefs.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-white/5 dark:bg-white/2.5 border border-slate-300 dark:border-white/5 rounded-xl px-4 py-3 text-[11px] outline-none focus:border-brand-cyan transition-colors pr-10"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-1.5 rounded-lg bg-brand-electric hover:bg-brand-electric/80 text-white cursor-pointer transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services Quick Lists (3/12 col span) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className={`text-[10.5px] font-mono tracking-widest uppercase ${isDarkMode ? "text-white" : "text-brand-midnight"} font-bold`}>
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "Professional Landing Pages",
                "Full Stack Web Applications",
                "AI-Powered Applications",
                "Business Software Solutions",
                "Web Templates & Digital Assets",
                "AI Training & Capacity"
              ].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-brand-cyan transition-colors text-left cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2/12 col span) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className={`text-[10.5px] font-mono tracking-widest uppercase ${isDarkMode ? "text-white" : "text-brand-midnight"} font-bold`}>
              Links Structure
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: "hero", label: "About Home" },
                { id: "about", label: "Corporate Info" },
                { id: "services", label: "Core Solutions" },
                { id: "why-us", label: "Trust Index" },
                { id: "portfolio", label: "Featured Work" },
                { id: "process", label: "Process Map" },
                { id: "contact", label: "Contact Sales" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-brand-cyan transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Registration & Info (3/12 col span) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className={`text-[10.5px] font-mono tracking-widest uppercase ${isDarkMode ? "text-white" : "text-brand-midnight"} font-bold`}>
              Corporate Scope
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="font-semibold text-slate-500 uppercase tracking-widest text-[9.5px] font-mono">Registration Code</p>
                <p className="mt-0.5 text-slate-400 dark:text-slate-300 font-mono">RC-1495142-NG</p>
              </div>

              <div>
                <p className="font-semibold text-slate-500 uppercase tracking-widest text-[9.5px] font-mono">Operations Address</p>
                <p className="mt-0.5 text-slate-400 dark:text-slate-300">
                  Horizon Tech Suite 300, 10 Kingsway Road, Ikoyi, Lagos
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/5 bg-slate-100 dark:bg-white/2.5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-[10.5px] font-semibold text-brand-electric dark:text-brand-cyan cursor-pointer uppercase"
                >
                  <MessageSquare size={11} />
                  <span>Free Consultation Session</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ribbon / Info Bar from the Sleek Interface Theme */}
      <div className={`border-t transition-colors duration-300 py-8 ${isDarkMode ? "bg-[#0B1020] border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-500"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 w-full md:w-auto">
            {/* Project Timeline widget */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Project Timeline</span>
              <div className="flex items-center gap-2 mt-1.5 select-none">
                <div className={`flex items-center text-[11px] font-bold ${isDarkMode ? "text-slate-300" : "text-[#0B1020]"}`}>
                  <span className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center text-[8px] ${isDarkMode ? "bg-white/10 border border-white/20 text-white" : "bg-slate-100 border border-slate-300 text-[#0B1020]"}`}>1</span> Strategy
                </div>
                <div className="w-4 h-px bg-slate-300/30"></div>
                <div className={`flex items-center text-[11px] font-bold ${isDarkMode ? "text-brand-cyan" : "text-[#2563EB]"}`}>
                  <span className="w-4 h-4 bg-blue-600 text-white rounded-full mr-2 flex items-center justify-center text-[8px]">2</span> Design
                </div>
                <div className="w-4 h-px bg-slate-300/30"></div>
                <div className="flex items-center text-[11px] font-bold text-slate-400">
                  <span className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center text-[8px] ${isDarkMode ? "bg-white/5 border border-white/10 text-slate-500" : "bg-slate-50 border border-slate-200 text-slate-400"}`}>3</span> Build
                </div>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block h-10 w-px bg-slate-300/30"></div>

            {/* Contact Center widget */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Contact Center</span>
              <span className={`text-sm font-bold mt-0.5 font-mono ${isDarkMode ? "text-[#00D4FF]" : "text-[#0B1020]"}`}>
                hello@quotients.horizon
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-[11px] font-mono text-slate-400 text-left md:text-right w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-300/10">
            © 2026 Quotients Digital Horizon Limited. <span className="text-slate-400/60 ml-1">Intelligent Systems Architecture.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
