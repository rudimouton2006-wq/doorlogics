import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2, ArrowRight, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';

// Cinematic Asset Import
import heroContact from '../assets/work-installation.jpg';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a standard JavaScript object
    const data = Object.fromEntries(formData.entries());
    
    // --- WEB3FORMS CONFIGURATION ---
    data.access_key = "7a1d1acc-c5cf-4f51-95f7-3733222ba091"; 
    data.subject = `New Doorlogics Inquiry: ${inquiryType.toUpperCase()}`;
    data.from_name = "Doorlogics Website";

    try {
      // Live AJAX submission to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clear the form for future use
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your internet connection and try again, or contact us directly via phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pb-24 md:pb-40">
        
        {/* HERO SECTION - CINEMATIC & SOFT */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-sm mb-16 md:mb-24">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroContact} 
              alt="Doorlogics Team on Site" 
              className="w-full h-full object-cover object-center" 
            />
            {/* Cinematic dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark/95" />
          </div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full flex flex-col items-center"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 shadow-lg"
              >
                <CheckCircle2 size={14} className="text-brand-primary" />
                Direct Communication
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-6 tracking-tight">
                Let's Start<br />
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Talking.</span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                Speak directly with our Bellville office for inquiries, or reach Ronnie for immediate technical emergencies across the greater Cape Town area.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* COMMUNICATION HUB - BREATHABLE & ROUNDED */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Headquarters Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-10 md:p-12 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8">
                  <MapPin size={24} />
                </div>
                <h3 className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] mb-4">Headquarters</h3>
                <p className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight leading-snug">
                  3 Wellington Street,<br />
                  Oakdale, Bellville
                </p>
              </motion.div>

              {/* Connect Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-brand-dark p-10 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
              >
                {/* Subtle glow */}
                <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 border border-white/20">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] mb-10">Direct Lines</h3>
                  
                  <div className="space-y-10">
                    <div className="group">
                      <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                        Office Support
                      </span>
                      <a href="tel:0219192221" className="block text-3xl md:text-4xl font-black text-white tracking-tight hover:text-brand-primary transition-colors duration-300">
                        021 919 2221
                      </a>
                    </div>

                    <div className="group">
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                        <ShieldAlert size={14} className="text-brand-secondary" /> Emergency Line
                      </span>
                      <a href="tel:0834001919" className="block text-3xl md:text-4xl font-black text-white tracking-tight hover:text-brand-secondary transition-colors duration-300">
                        083 400 1919
                      </a>
                    </div>

                    <div className="group pt-6 border-t border-white/10">
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                        <Mail size={14} /> Direct Email
                      </span>
                      <a href="mailto:doorlogics@telkomsa.net" className="block text-lg md:text-xl font-bold text-white tracking-tight hover:text-brand-primary transition-colors duration-300 truncate">
                        doorlogics@telkomsa.net
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTELLIGENT CONTACT FORM - EXTREMELY ROUNDED & SMOOTH */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[40px] md:rounded-[60px] shadow-[0_20px_60px_rgb(0,0,0,0.08)] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col h-full"
                  >
                    <input type="hidden" name="Inquiry Type" value={inquiryType} />

                    <div className="mb-10">
                      <h3 className="text-2xl font-black tracking-tight text-brand-dark mb-6">How can we help?</h3>
                      <div className="flex flex-wrap gap-3">
                        {['quote', 'repair', 'service', 'other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={cn(
                              "px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border shadow-sm",
                              inquiryType === type 
                                ? "bg-brand-dark text-white border-brand-dark scale-105" 
                                : "bg-brand-surface border-brand-border text-brand-slate hover:border-brand-primary hover:text-brand-dark"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 flex-grow">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Full Name</label>
                          <input 
                            name="name" 
                            required 
                            type="text" 
                            className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Phone Number</label>
                          <input 
                            name="Phone Number" 
                            required 
                            type="tel" 
                            className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                            placeholder="082 123 4567" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Email Address</label>
                        <input 
                          name="email" 
                          required 
                          type="email" 
                          className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                          placeholder="john@example.com" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Property Address (Optional)</label>
                        <input 
                          name="Property Address" 
                          type="text" 
                          className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                          placeholder="Suburb or Area" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Your Message</label>
                        <textarea 
                          name="Message Details" 
                          required 
                          rows={4} 
                          className="w-full bg-brand-bg border border-brand-border/80 rounded-[30px] px-6 py-5 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none resize-none" 
                          placeholder="Please provide details about your requirements..." 
                        />
                      </div>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="mt-10 w-full bg-brand-primary text-white py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary-hover hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 disabled:hover:shadow-none"
                    >
                      {isSubmitting ? (
                        <>
                          Transmitting
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white z-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">Message Received.</h3>
                    <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed mb-12 max-w-sm">
                      Thank you for contacting Doorlogics. Our team will review your request and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 rounded-full border border-brand-border text-[11px] font-bold uppercase tracking-widest text-brand-dark hover:bg-brand-surface hover:border-brand-primary transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}