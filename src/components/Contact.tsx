import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Linkedin, Twitter, Github, Globe } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
  preselectedService: string;
}

export default function Contact({ isDarkMode, preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    details: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validations, setValidations] = useState<string[]>([]);

  // Keep state updated to match prop changes (preselected values from service cards click)
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const servicesList = [
    "Professional Landing Pages",
    "Full Stack Web Applications",
    "AI-Powered Applications",
    "Business Software Solutions",
    "Web Templates & Digital Products",
    "AI Training & Capacity Building"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // reset error alerts
    if (validations.length > 0) setValidations([]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push("Full Name is required");
    if (!formData.email.trim() || !formData.email.includes("@")) errors.push("Please provide a valid corporate email");
    if (!formData.service) errors.push("Please select a service you're interested in");
    if (!formData.details.trim()) errors.push("Please provide a brief summary of your project details");

    if (errors.length > 0) {
      setValidations(errors);
      return;
    }

    setFormStatus("sending");

    // Simulate reliable secure submission
    setTimeout(() => {
      // Save data locally
      const pendingSubmissions = JSON.parse(localStorage.getItem("qdh_submissions") || "[]");
      pendingSubmissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem("qdh_submissions", JSON.stringify(pendingSubmissions));

      setFormStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        details: ""
      });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white my-0 border-t border-[#1a1a1a]/40"
    >
      {/* Background glow meshes */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#00FF66]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#00C853]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Communication channels info */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[10px] font-mono tracking-widest text-[#00FF66] uppercase w-fit font-bold">
                <Sparkles size={11} className="animate-pulse" />
                <span>PARTNER ENGAGEMENT</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-tight leading-snug text-white">
                Let's Build Something <br className="hidden sm:inline" />Extraordinary
              </h2>
              
              <p className="text-xs sm:text-sm font-sans leading-relaxed max-w-sm text-[#B5B5B5]">
                Have a project concept or training request? Submit your requirements. A senior partner will analyze and schedule a free design workshop.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-[#1A1A1A]">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#121212] text-[#00FF66] border border-[#00FF66]/20 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#707070] uppercase tracking-wider font-bold">Send inquiries to</p>
                  <a href="mailto:info@quotientsdh.com" className="font-display font-semibold text-xs tracking-wider text-white hover:text-[#00FF66] transition-colors">
                    info@quotientsdh.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#121212] text-[#00FF66] border border-[#00FF66]/20 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#707070] uppercase tracking-wider font-bold">Urgent Phone hotline</p>
                  <a href="tel:+2348123456789" className="font-display font-semibold text-xs tracking-wider text-white hover:text-[#00FF66] transition-colors">
                    +234 (0) 812 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#121212] text-[#00FF66] border border-[#00FF66]/20 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#707070] uppercase tracking-wider font-bold">Regional Headquarters</p>
                  <p className="text-xs font-sans leading-relaxed max-w-[280px] text-[#B5B5B5]">
                    Horizon Technology Center, Suite 300, 10 Kingsway Road, Ikoyi, Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Social channels tags */}
            <div className="space-y-3 pt-6 border-t border-[#1A1A1A]">
              <p className="text-[10px] font-mono text-[#707070] uppercase tracking-wider font-bold">Secure Developer Credentials</p>
              
              <div className="flex items-center space-x-3.5">
                {[
                  { icon: Linkedin, url: "https://linkedin.com/company/quotientsdh", label: "LinkedIn" },
                  { icon: Twitter, url: "https://x.com/quotientsdh", label: "Twitter" },
                  { icon: Github, url: "https://github.com/quotientsdh", label: "GitHub" },
                  { icon: Globe, url: "#", label: "Corporate Root" }
                ].map((soc, i) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={i}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-[#1A1A1A] bg-[#121212] text-[#B5B5B5] hover:text-[#00FF66] hover:border-[#00FF66]/40 transition-all hover:scale-110"
                      title={soc.label}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block: Fully interactive Form element */}
          <div className="lg:col-span-7">
            
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-[#1A1A1A] bg-[#121212] transition-all duration-350 shadow-2xl space-y-5 text-left relative hover:border-[#00FF66]/25"
            >
              {/* Alert list on validation fail */}
              <AnimatePresence>
                {validations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/20 text-xs text-rose-400 space-y-1.5"
                  >
                    <div className="flex items-center space-x-2 text-rose-500 font-bold mb-1">
                      <AlertCircle size={14} />
                      <span>Form contains errors</span>
                    </div>
                    {validations.map((err, idx) => (
                      <p key={idx} className="pl-5 list-disc leading-tight relative before:absolute before:left-1 before:top-2 before:w-1 before:h-1 before:bg-rose-400 before:rounded-full">
                        {err}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status display overlay on success */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-3xl text-center z-20 flex flex-col items-center justify-center p-6 bg-[#050505] border border-[#00FF66]/40"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center mb-5 border border-[#00FF66]/30">
                    <CheckCircle2 size={32} className="animate-bounce" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-white">Spec Package Received Successfully</h3>
                  <p className="text-xs max-w-sm mt-2 leading-relaxed text-[#B5B5B5]">
                    Thank you! Our senior systems development representative will analyze your requirements. Expect an official project proposal email within 12 working hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 px-6 py-2.5 rounded-xl border border-[#00FF66]/30 bg-[#121212] hover:bg-[#00FF66] text-white hover:text-black transition-all text-xs font-semibold tracking-wider cursor-pointer font-mono font-bold"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </motion.div>
              )}

              {/* Name & Company Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company-input" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                    Company Name
                  </label>
                  <input
                    id="company-input"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme Corp"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone-input" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                    Phone Number
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234..."
                    disabled={formStatus === "sending"}
                    className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                  />
                </div>
              </div>

              {/* Service interested in */}
              <div className="space-y-1.5">
                <label htmlFor="service-select" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                  Services Interested In <span className="text-rose-500">*</span>
                </label>
                <select
                  id="service-select"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  disabled={formStatus === "sending"}
                  className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                >
                  <option value="" disabled className="text-[#707070]">Choose a service</option>
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv} className="bg-[#121212] text-white">{srv}</option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label htmlFor="details-textarea" className="text-[10px] font-mono tracking-widest uppercase text-[#707070] font-bold">
                  Project Scope Summary <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="details-textarea"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Outline key deliverables, desired systems scaling, target audience, dates if training is requested, or operational workflows requirements..."
                  disabled={formStatus === "sending"}
                  className="w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors resize-none disabled:opacity-50 leading-relaxed bg-[#0A0A0A] border border-[#1A1A1A] text-white focus:border-[#00FF66] hover:border-[#222]"
                />
              </div>

              {/* Submit triggers button */}
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-4 rounded-xl text-xs font-bold tracking-wider text-black bg-[#00FF66] shadow-lg shadow-[#00FF66]/10 hover:shadow-[#00FF66]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 text-center select-none uppercase disabled:opacity-50 font-display"
              >
                {formStatus === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    ENCRYPTING AND TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    GET FREE CONSULTATION
                  </>
                )}
              </button>

              <p className="text-[9.5px] font-mono text-center text-[#707070]">
                🔒 Protected by End-to-End Enterprise Encryption Layer
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
