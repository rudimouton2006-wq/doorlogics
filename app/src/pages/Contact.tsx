import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2, Send, Clock, ShieldAlert } from 'lucide-react';
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
    // PASTE YOUR KEY INSIDE THE QUOTES BELOW:
    data.access_key = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 
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
          <div className="max-w-5xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-xs md:text-sm uppercase tracking-[0.4em] block mb-8"
            >
              Direct Communication
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              Let's Start<br />
              <span className="text-brand-primary">Talking.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              Speak directly with Rika or Madilu at our Bellville office for inquiries, or reach Ronnie for immediate technical emergencies across the Northern Suburbs and greater Cape Town area.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 mb-20">
            {/* Communication Hub */}
            <div className="lg:col-span-5 space-y-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-sm md:text-base font-black uppercase text-brand-primary tracking-[0.3em]">Headquarters</h3>
                </div>
                <p className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter leading-tight pl-20">
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
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-sm md:text-base font-black uppercase text-brand-primary tracking-[0.3em]">Connect</h3>
                </div>
                
                <div className="space-y-14 pl-20">
                  <div className="group">
                    <span className="block text-xs md:text-sm font-black text-brand-slate uppercase tracking-widest mb-3 flex items-center gap-3">
                      Office <span className="opacity-50">(Rika & Madilu)</span>
                    </span>
                    <a href="tel:0219192221" className="block text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-primary transition-colors">
                      021 919 2221
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-xs md:text-sm font-black text-brand-secondary uppercase tracking-widest mb-3 flex items-center gap-3">
                      <ShieldAlert size={16} /> Emergency <span className="opacity-50">(Ronnie)</span>
                    </span>
                    <a href="tel:0834001919" className="block text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-secondary transition-colors">
                      083 400 1919
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-xs md:text-sm font-black text-brand-slate uppercase tracking-widest mb-3 flex items-center gap-3">
                      <Mail size={16} /> Direct Email
                    </span>
                    <a href="mailto:doorlogics@telkomsa.net" className="block text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-primary transition-colors truncate">
                      doorlogics@telkomsa.net
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Intelligent Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:col-span-7 p-10 md:p-16 bg-brand-surface rounded-[40px] md:rounded-[60px] border-4 border-white shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-10"
                  >
                    <input type="hidden" name="Inquiry Type" value={inquiryType} />

                    {/* Inquiry Type Selector */}
                    <div className="space-y-5">
                      <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">How can we help?</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['quote', 'repair', 'service', 'other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={cn(
                              "py-5 px-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                              inquiryType === type 
                                ? "bg-brand-primary text-white shadow-lg scale-100" 
                                : "bg-white border-2 border-brand-border text-brand-slate hover:border-brand-primary/50 hover:bg-brand-primary/5 scale-95"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">Full Name</label>
                        <input name="name" required type="text" className="w-full bg-white border-2 border-brand-border rounded-full px-8 py-6 text-base md:text-lg font-extrabold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="John Doe" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">Phone Number</label>
                        <input name="Phone Number" required type="tel" className="w-full bg-white border-2 border-brand-border rounded-full px-8 py-6 text-base md:text-lg font-extrabold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="082 123 4567" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">Email Address</label>
                      <input name="email" required type="email" className="w-full bg-white border-2 border-brand-border rounded-full px-8 py-6 text-base md:text-lg font-extrabold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">Property Address (Optional)</label>
                      <input name="Property Address" type="text" className="w-full bg-white border-2 border-brand-border rounded-full px-8 py-6 text-base md:text-lg font-extrabold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="Suburb or Area" />
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs md:text-sm font-black uppercase text-brand-dark tracking-widest block pl-4">Your Message</label>
                      <textarea name="Message Details" required rows={5} className="w-full bg-white border-2 border-brand-border rounded-[32px] px-8 py-6 text-base md:text-lg font-extrabold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none resize-none" placeholder="Please provide details about your requirements..." />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-brand-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-4 disabled:opacity-70 disabled:pointer-events-none active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={24} className="animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-brand-surface z-10"
                  >
                    <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-10">
                      <CheckCircle2 size={64} />
                    </div>
                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark mb-6">Message Received.</h3>
                    <p className="text-brand-slate text-lg md:text-xl font-extrabold leading-relaxed mb-14 max-w-md">
                      Thank you for contacting Doorlogics. Rika or Madilu will review your request and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-brand-primary hover:text-brand-dark transition-colors border-b-2 border-brand-primary pb-1"
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