import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data/websiteData";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-[10px] font-mono tracking-widest text-brand-cyan uppercase w-fit">
            <Sparkles size={11} />
            <span>ACCUMULATED TRUST REPORTS</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            What Clients Say
          </h2>
        </div>

        {/* Testimonial Active Display Card with Quote backdrop */}
        <div className="relative">
          {/* Large decorative quotation graphic */}
          <div className={`absolute -top-10 left-0 sm:left-4 opacity-5 pointer-events-none select-none text-9xl leading-none font-serif ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            “
          </div>

          <div
            className={`p-6 sm:p-10 rounded-3xl border text-left shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[280px] sm:min-h-[220px] md:min-h-[200px] ${
              isDarkMode ? "bg-white/5 border-white/10 backdrop-blur-xl" : "bg-white border-slate-200"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Stars reviews */}
                <div className="flex items-center space-x-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className={`text-xs sm:text-sm font-sans tracking-wide leading-relaxed italic ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  "{active.text}"
                </p>

                {/* Client author metadata */}
                <div className="flex items-center space-x-4 pt-3 border-t border-slate-200/10">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-11 h-11 rounded-full object-cover border border-brand-electric"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className={`font-display font-bold text-xs leading-tight uppercase tracking-wider ${isDarkMode ? "text-white" : "text-[#0F172A]"}`}>
                      {active.name}
                    </h4>
                    <p className={`text-[10px] font-mono mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {active.role} — <span className="text-brand-cyan">{active.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel slide controls */}
        <div className="flex items-center justify-center space-x-4 pt-2">
          <button
            onClick={handlePrev}
            className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDarkMode ? "border-white/10 text-slate-300 hover:bg-white/5 bg-white/2.5" : "border-slate-200 text-slate-600 hover:bg-slate-100 bg-white"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setIndex(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === idx ? "bg-brand-cyan w-5" : isDarkMode ? "bg-white/20" : "bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDarkMode ? "border-white/10 text-slate-300 hover:bg-white/5 bg-white/2.5" : "border-slate-200 text-slate-600 hover:bg-slate-100 bg-white"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
