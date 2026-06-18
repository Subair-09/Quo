import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Founder from "./components/Founder";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import AiTraining from "./components/AiTraining";
import DevProcess from "./components/DevProcess";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // SaaS/AI agencies typically flourish in slick, modern dark themes by default.
  // We enable the dark state initially to represent this premium brand identity.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [preselectedService, setPreselectedService] = useState<string>("");

  useEffect(() => {
    // Sync React dark state with root HTML document if wanted
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Viewport Scroll Tracker / Active link spy
  useEffect(() => {
    const handleViewportScroll = () => {
      const sections = [
        "hero",
        "about",
        "founder",
        "services",
        "why-us",
        "portfolio",
        "training",
        "process",
        "tech",
        "contact"
      ];
      
      const scrollYOffset = window.scrollY + 160; // top offset boundary

      for (const sec of sections) {
        const docEl = document.getElementById(sec);
        if (docEl) {
          const startPosition = docEl.offsetTop;
          const totalHeight = docEl.offsetHeight;
          
          if (scrollYOffset >= startPosition && scrollYOffset < startPosition + totalHeight) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleViewportScroll);
    return () => window.removeEventListener("scroll", handleViewportScroll);
  }, []);

  // Secure scrolling helper
  const handleScrollToTargetSection = (id: string, srvTitle?: string) => {
    if (srvTitle) {
      setPreselectedService(srvTitle);
    }
    
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
    <div
      className="min-h-screen text-sans antialiased overflow-x-hidden bg-[#050505] text-white"
    >
      {/* Dynamic Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
      />

      <main className="w-full">
        {/* Section 1 — Hero Section */}
        <Hero
          isDarkMode={isDarkMode}
          onCtaClick={handleScrollToTargetSection}
        />

        {/* Section 2 — About Us */}
        <AboutUs
          isDarkMode={isDarkMode}
          onCtaClick={handleScrollToTargetSection}
        />

        {/* Founder, Mission & Vision Section */}
        <Founder isDarkMode={isDarkMode} />

        {/* Section 3 — Services */}
        <Services
          isDarkMode={isDarkMode}
          onCtaClick={handleScrollToTargetSection}
        />

        {/* Section 4 — Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5 — Portfolio */}
        <Portfolio
          isDarkMode={isDarkMode}
        />

        {/* Section 6 — AI System Blueprint & ROI Estimator */}
        <AiTraining
          isDarkMode={isDarkMode}
          onCtaClick={handleScrollToTargetSection}
        />

        {/* Section 7 — Development Process */}
        <DevProcess
          isDarkMode={isDarkMode}
        />

        {/* Section 8 — Testimonials */}
        <Testimonials
          isDarkMode={isDarkMode}
        />

        {/* Section 9 — Technology Stack */}
        <TechStack
          isDarkMode={isDarkMode}
        />

        {/* Section 10 — Contact Info & consultation form */}
        <Contact
          isDarkMode={isDarkMode}
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer Area */}
      <Footer
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
