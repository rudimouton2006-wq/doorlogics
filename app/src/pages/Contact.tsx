import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Check, Loader2, ArrowRight, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';

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
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* HERO SECTION - STARK & MINIMALIST */}
          <div className="max-w-4xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-brand-slate mb-8"
            >
              Direct Communication
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Let's Start<br />
              <span className="text-brand-primary">Talking.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              Speak directly with Rika or Madilu at our Bellville office for inquiries, or reach Ronnie for immediate technical emergencies across the greater Cape Town area.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
            
            {/* COMMUNICATION HUB - EDITORIAL LAYOUT */}
            <div className="lg:col-span-5 space-y-20 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-12 h-12 border border-brand-border flex items-center justify-center text-brand-primary">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em]">Headquarters</h3>
                </div>
                <p className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter leading-tight pl-0 md:pl-16">
                  3 Wellington Street,<br />
                  Oakdale, Bellville
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-12 h-12 border border-brand-border flex items-center justify-center text-brand-primary">
                    <Phone size={20} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em]">Connect</h3>
                </div>
                
                <div className="space-y-12 pl-0 md:pl-16">
                  <div className="group">
                    <span className="block text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                      Office Support
                    </span>
                    <a href="tel:0219192221" className="block text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter hover:text-brand-primary transition-colors duration-300">
                      021 919 2221
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                      <ShieldAlert size={14} /> Emergency Line
                    </span>
                    <a href="tel:0834001919" className="block text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter hover:text-brand-secondary transition-colors duration-300">
                      083 400 1919
                    </a>
                  </div>

                  <div className="group pt-4">
                    <span className="block text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
                      <Mail size={14} /> Direct Email
                    </span>
                    <a href="mailto:doorlogics@telkomsa.net" className="block text-xl md:text-2xl font-black text-brand-dark uppercase tracking-tighter hover:text-brand-primary transition-colors duration-300 truncate">
                      doorlogics@telkomsa.net
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTELLIGENT CONTACT FORM - BRUTALIST ARCHITECTURE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:col-span-7 p-10 md:p-16 bg-white border border-brand-border/50 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit} 
                    className="space-y-10"
                  >
                    <input type="hidden" name="Inquiry Type" value={inquiryType} />

                    {/* Inquiry Type Selector - Flat Grid */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">How can we help?</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['quote', 'repair', 'service', 'other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={cn(
                              "py-4 px-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 border",
                              inquiryType === type 
                                ? "bg-brand-dark text-white border-brand-dark" 
                                : "bg-white border-brand-border text-brand-slate hover:border-brand-primary"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">Full Name</label>
                        <input name="name" required type="text" className="w-full bg-brand-surface border border-brand-border/50 px-6 py-5 text-sm font-medium focus:border-brand-primary transition-colors outline-none" placeholder="John Doe" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">Phone Number</label>
                        <input name="Phone Number" required type="tel" className="w-full bg-brand-surface border border-brand-border/50 px-6 py-5 text-sm font-medium focus:border-brand-primary transition-colors outline-none" placeholder="082 123 4567" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">Email Address</label>
                      <input name="email" required type="email" className="w-full bg-brand-surface border border-brand-border/50 px-6 py-5 text-sm font-medium focus:border-brand-primary transition-colors outline-none" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">Property Address (Optional)</label>
                      <input name="Property Address" type="text" className="w-full bg-brand-surface border border-brand-border/50 px-6 py-5 text-sm font-medium focus:border-brand-primary transition-colors outline-none" placeholder="Suburb or Area" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em] block">Your Message</label>
                      <textarea name="Message Details" required rows={5} className="w-full bg-brand-surface border border-brand-border/50 px-6 py-5 text-sm font-medium focus:border-brand-primary transition-colors outline-none resize-none" placeholder="Please provide details about your requirements..." />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-colors duration-300 flex items-center justify-between px-8 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          Transmitting...
                          <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-brand-dark text-white z-10"
                  >
                    <div className="w-20 h-20 border border-brand-primary flex items-center justify-center text-brand-primary mb-10">
                      <Check size={40} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Message Received.</h3>
                    <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed mb-14 max-w-sm">
                      Thank you for contacting Doorlogics. Our team will review your request and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary hover:text-white transition-colors duration-300 border-b border-brand-primary pb-1"
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