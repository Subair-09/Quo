import React, { useState } from "react";
import { Mail, ArrowRight, Linkedin, Twitter, Github, Heart, MessageSquare, CheckCircle, Smartphone } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim() && subEmail.includes("@")) {
      try {
        await fetch("https://formspree.io/f/mwvjdwyd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            subject: "New Corporate Newsletter Registry",
            newsletter_email: subEmail,
            message: `New User signed up for the newsletter registry: ${subEmail}`
          })
        });
      } catch (err) {
        // Fallback gracefully so UI remains active
      }
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
      className="border-t border-[#1A1A1A] relative z-10 bg-[#050505] text-[#B5B5B5] select-none"
    >
      {/* Top Footer widget area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Branding Logo and Statement (4/12 col span) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div
              onClick={() => scrollToSection("hero")}
              className="flex items-center cursor-pointer group w-fit"
            >
              <div>
                <span className="font-display font-extrabold tracking-tight text-sm text-white group-hover:text-[#00FF66] transition-colors">
                  QUOTIENTS
                </span>
                <p className="text-[9px] font-mono tracking-widest text-[#707070] font-bold">
                  DIGITAL HORIZON Ltd
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-[#B5B5B5]">
              We design, develop, and deploy scalable enterprise platforms and high-speed cognitive AI networks, helping corporate institutions turn ideas into valuable digital products.
            </p>

            {/* Newsletter Sign up mock */}
            <div className="space-y-2 max-w-sm pt-2">
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-semibold">
                Corporate Newsletter Registry
              </p>

              {subscribed ? (
                <div className="flex items-center space-x-2 text-[11px] text-[#00FF66] font-mono py-2 animate-pulse">
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
                    className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-4 py-3 text-[11px] outline-none focus:border-[#00FF66] text-white transition-colors pr-10 hover:border-[#222]"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-1.5 rounded-lg bg-[#00FF66] hover:bg-[#00E65C] text-black cursor-pointer transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services Quick Lists (3/12 col span) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10.5px] font-mono tracking-widest uppercase text-white font-bold">
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
                    className="hover:text-[#00FF66] transition-colors text-left cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2/12 col span) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10.5px] font-mono tracking-widest uppercase text-white font-bold">
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
                    className="hover:text-[#00FF66] transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Registration & Info (3/12 col span) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10.5px] font-mono tracking-widest uppercase text-white font-bold">
              Corporate Scope
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="font-semibold text-[#707070] uppercase tracking-widest text-[9.5px] font-mono font-bold">Registration Code</p>
                <p className="mt-0.5 text-white font-mono">RC 9161809</p>
              </div>

              <div>
                <p className="font-semibold text-[#707070] uppercase tracking-widest text-[9.5px] font-mono font-bold">Operations Address</p>
                <p className="mt-0.5 text-white">
                  35 Hammed Oghere Ikotun, Lagos, Nigeria
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#00FF66]/20 bg-[#121212] hover:bg-[#00FF66] hover:text-black transition-colors text-[10.5px] font-semibold text-[#00FF66] cursor-pointer uppercase font-mono font-bold"
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
      <div className="border-t border-[#1D1D1D] py-8 bg-[#0D0D0D] text-[#707070]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 w-full md:w-auto">
            {/* Project Timeline widget */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#707070] lg:tracking-widest uppercase font-mono">Project Timeline</span>
              <div className="flex items-center gap-2 mt-1.5 select-none">
                <div className="flex items-center text-[11px] font-bold text-[#B5B5B5]">
                  <span className="w-4 h-4 rounded-full mr-2 flex items-center justify-center text-[8px] bg-[#1A1A1A] border border-[#1A1A1A] text-white">1</span> Strategy
                </div>
                <div className="w-4 h-px bg-[#1A1A1A]"></div>
                <div className="flex items-center text-[11px] font-bold text-[#00FF66]">
                  <span className="w-4 h-4 bg-[#00FF66] text-black rounded-full mr-2 flex items-center justify-center text-[8px] font-bold">2</span> Buildout
                </div>
                <div className="w-4 h-px bg-[#1A1A1A]"></div>
                <div className="flex items-center text-[11px] font-bold text-[#707070]">
                  <span className="w-4 h-4 rounded-full mr-2 flex items-center justify-center text-[8px] bg-[#121212] border border-[#1A1A1A] text-[#707070]">3</span> Deliver
                </div>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block h-10 w-px bg-[#1A1A1A]"></div>

            {/* Contact Center widget */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#707070] lg:tracking-widest uppercase font-mono">Contact Center</span>
              <span className="text-sm font-bold mt-0.5 font-mono text-[#00FF66]">
                hello@quotientsdh.com
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-[11px] font-mono text-[#707070] text-left md:text-right w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#1A1A1A]">
            © 2026 Quotients Digital Horizon Ltd. <span className="text-white/40 ml-1 font-bold">Intelligent Systems Architecture.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
