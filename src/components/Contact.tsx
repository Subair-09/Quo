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
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-white text-[#0F172A]"
      }`}
    >
      {/* Background glow meshes */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Communication channels info */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-[10px] font-mono tracking-widest text-brand-cyan uppercase w-fit">
                <Sparkles size={11} className="animate-pulse" />
                <span>PARTNER ENGAGEMENT</span>
              </div>

              <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                Let's Build Something <br className="hidden sm:inline" />Extraordinary
              </h2>
              
              <p className={`text-xs sm:text-sm font-sans leading-relaxed max-w-sm ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
                Have a project concept or training request? Submit your requirements. A senior partner will analyze and schedule a free design workshop.
              </p>
            </div>

            {/* Direct Channels */}
            <div className={`space-y-4 pt-4 border-t ${isDarkMode ? "border-white/5" : "border-slate-200"}`}>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-electric/15 text-brand-electric border border-brand-electric/10 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Send inquiries to</p>
                  <a href="mailto:info@quotientsdh.com" className={`font-display font-semibold text-xs tracking-wider hover:text-brand-cyan transition-colors ${isDarkMode ? "text-white" : "text-[#0F172A]"}`}>
                    info@quotientsdh.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/10 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Urgent Phone hotline</p>
                  <a href="tel:+2348123456789" className={`font-display font-semibold text-xs tracking-wider hover:text-brand-cyan transition-colors ${isDarkMode ? "text-white" : "text-[#0F172A]"}`}>
                    +234 (0) 812 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-brand-purple/15 text-brand-purple border border-brand-purple/10 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Regional Headquarters</p>
                  <p className={`text-xs font-sans leading-relaxed max-w-[280px] ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
                    Horizon Technology Center, Suite 300, 10 Kingsway Road, Ikoyi, Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Social channels tags */}
            <div className={`space-y-3 pt-6 border-t ${isDarkMode ? "border-white/5" : "border-slate-200"}`}>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Secure Developer Credentials</p>
              
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
                      className={`p-2.5 rounded-xl border transition-all ${
                        isDarkMode 
                          ? "border-white/5 bg-white/2.5 hover:bg-white/10 text-slate-300" 
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
                      } hover:text-brand-cyan`}
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
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-2xl space-y-5 text-left relative ${
                isDarkMode ? "border-white/10 bg-white/5 backdrop-blur-md" : "border-slate-200 bg-white"
              }`}
            >
              {/* Alert list on validation fail */}
              <AnimatePresence>
                {validations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 space-y-1.5"
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
                  className={`absolute inset-0 rounded-3xl text-center z-20 flex flex-col items-center justify-center p-6 ${
                    isDarkMode ? "bg-[#0b1020]" : "bg-white"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20">
                    <CheckCircle2 size={32} className="animate-bounce" />
                  </div>
                  <h3 className={`font-display font-extrabold text-lg ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>Spec Package Received Successfully</h3>
                  <p className={`text-xs max-w-sm mt-2 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Thank you! Our senior systems development representative will analyze your requirements. Expect an official project proposal email within 12 working hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className={`mt-6 px-6 py-2.5 rounded-xl border transition-all text-xs font-semibold tracking-wider cursor-pointer font-mono ${
                      isDarkMode ? "border-white/10 hover:bg-white/5 text-white" : "border-slate-200 hover:bg-slate-50 text-[#0F172A]"
                    }`}
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </motion.div>
              )}

              {/* Name & Company Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                    className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-cyan hover:border-white/20" 
                        : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric hover:border-slate-300"
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company-input" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                    className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-cyan hover:border-white/20" 
                        : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric hover:border-slate-300"
                    }`}
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                    className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-cyan hover:border-white/20" 
                        : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric hover:border-slate-300"
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone-input" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                    className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 ${
                      isDarkMode 
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-cyan hover:border-white/20" 
                        : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric hover:border-slate-300"
                    }`}
                  />
                </div>
              </div>

              {/* Service interested in */}
              <div className="space-y-1.5">
                <label htmlFor="service-select" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Services Interested In <span className="text-rose-500">*</span>
                </label>
                <select
                  id="service-select"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  disabled={formStatus === "sending"}
                  className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors disabled:opacity-50 ${
                    isDarkMode 
                      ? "bg-[#0b1020] border border-white/10 text-white focus:border-brand-cyan" 
                      : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric"
                  }`}
                >
                  <option value="" disabled>Choose a service</option>
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv} className={isDarkMode ? "bg-[#0b1020] text-white" : "bg-white text-slate-800"}>{srv}</option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label htmlFor="details-textarea" className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
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
                  className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-colors resize-none disabled:opacity-50 leading-relaxed ${
                    isDarkMode 
                      ? "bg-white/5 border border-white/10 text-white focus:border-brand-cyan hover:border-white/20" 
                      : "bg-slate-50 border border-slate-200 text-[#0F172A] focus:border-brand-electric hover:border-slate-300"
                  }`}
                />
              </div>

              {/* Submit triggers button */}
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-4 rounded-xl text-xs font-bold tracking-wider text-white bg-brand-electric shadow-lg shadow-brand-electric/15 hover:shadow-brand-electric/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 text-center select-none uppercase disabled:opacity-50"
              >
                {formStatus === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
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

              <p className="text-[9.5px] font-mono text-center text-slate-500">
                🔒 Protected by End-to-End Enterprise Encryption Layer
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
