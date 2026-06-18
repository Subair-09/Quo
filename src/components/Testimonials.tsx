import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data/websiteData";
import { Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/25 bg-[#00FF66]/5 text-[10px] font-mono tracking-widest text-[#00FF66] uppercase w-fit font-bold">
            <Sparkles size={11} />
            <span>ACCUMULATED TRUST REPORTS</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial Active Display Card with Quote backdrop */}
        <div className="relative">
          {/* Large decorative quotation graphic */}
          <div className="absolute -top-10 left-0 sm:left-4 opacity-5 pointer-events-none select-none text-9xl leading-none font-serif text-white">
            “
          </div>

          <div className="p-6 sm:p-10 rounded-3xl border border-[#1A1A1A] text-left shadow-2xl bg-[#121212] overflow-hidden min-h-[280px] sm:min-h-[220px] md:min-h-[200px]">
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
                    <Star key={i} size={15} className="fill-[#00FF66] text-[#00FF66] animate-pulse" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm font-sans tracking-wide leading-relaxed italic text-[#B5B5B5]">
                  "{active.text}"
                </p>

                {/* Client author metadata */}
                <div className="flex items-center space-x-4 pt-3 border-t border-[#1A1A1A]">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#00FF66]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-xs leading-tight uppercase tracking-wider text-white">
                      {active.name}
                    </h4>
                    <p className="text-[10px] font-mono mt-0.5 text-[#707070]">
                      {active.role} — <span className="text-[#00FF66] font-bold">{active.company}</span>
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
            className="p-3 rounded-xl border border-[#1A1A1A] bg-[#121212] hover:border-[#00FF66]/40 text-[#B5B5B5] hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
                  index === idx ? "bg-[#00FF66] w-5" : "bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-xl border border-[#1A1A1A] bg-[#121212] hover:border-[#00FF66]/40 text-[#B5B5B5] hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
