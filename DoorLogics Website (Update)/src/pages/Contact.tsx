import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2, Send, Clock, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-[10px] uppercase tracking-[0.6em] block mb-6"
            >
              Direct Communication
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              Let's Start<br />
              <span className="text-brand-primary">Talking.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              Speak directly with Rika or Madilu at our Bellville office for inquiries, or reach Ronnie for immediate technical emergencies across the Northern Suburbs and greater Cape Town area.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
            {/* Communication Hub */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <MapPin size={18} />
                  </div>
                  <h3 className="text-xs font-black uppercase text-brand-primary tracking-[0.4em]">Headquarters</h3>
                </div>
                <p className="text-2xl md:text-3xl font-black text-brand-dark uppercase tracking-tighter leading-tight pl-14">
                  3 Wellington Street,<br />
                  Oakdale, Bellville
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Phone size={18} />
                  </div>
                  <h3 className="text-xs font-black uppercase text-brand-primary tracking-[0.4em]">Connect</h3>
                </div>
                
                <div className="space-y-10 pl-14">
                  <div className="group">
                    <span className="block text-[10px] font-black text-brand-slate uppercase tracking-widest mb-2 flex items-center gap-2">
                      Office <span className="opacity-50">(Rika & Madilu)</span>
                    </span>
                    <a href="tel:0219192221" className="block text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-primary transition-colors">
                      021 919 2221
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-[10px] font-black text-brand-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
                      <ShieldAlert size={12} /> Emergency <span className="opacity-50">(Ronnie)</span>
                    </span>
                    <a href="tel:0834001919" className="block text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-secondary transition-colors">
                      083 400 1919
                    </a>
                  </div>

                  <div className="group">
                    <span className="block text-[10px] font-black text-brand-slate uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Mail size={12} /> Direct Email
                    </span>
                    <a href="mailto:doorlogics@telkomsa.net" className="block text-xl md:text-2xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-primary transition-colors truncate">
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
              className="lg:col-span-7 p-8 md:p-14 bg-brand-surface rounded-[40px] md:rounded-[60px] border border-brand-border shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    {/* Inquiry Type Selector */}
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">How can we help?</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {['quote', 'repair', 'service', 'other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={cn(
                              "py-4 px-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                              inquiryType === type 
                                ? "bg-brand-primary text-white shadow-md scale-100" 
                                : "bg-white border border-brand-border text-brand-slate hover:border-brand-primary/50 hover:bg-brand-primary/5 scale-95"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-brand-border rounded-full px-8 py-5 font-bold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">Phone Number</label>
                        <input required type="tel" className="w-full bg-white border border-brand-border rounded-full px-8 py-5 font-bold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="082 123 4567" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">Email Address</label>
                      <input required type="email" className="w-full bg-white border border-brand-border rounded-full px-8 py-5 font-bold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">Property Address (Optional)</label>
                      <input type="text" className="w-full bg-white border border-brand-border rounded-full px-8 py-5 font-bold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" placeholder="Suburb or Area" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-brand-dark tracking-widest block pl-4">Your Message</label>
                      <textarea required rows={4} className="w-full bg-white border border-brand-border rounded-[32px] px-8 py-6 font-bold focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none resize-none" placeholder="Please provide details about your requirements..." />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-6 rounded-full font-black text-[11px] uppercase tracking-[0.5em] hover:bg-brand-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <Send size={16} />
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
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter text-brand-dark mb-4">Message Received.</h3>
                    <p className="text-brand-slate font-bold leading-relaxed mb-10 max-w-sm">
                      Thank you for contacting Doorlogics. Rika or Madilu will review your request and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary hover:text-brand-dark transition-colors"
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