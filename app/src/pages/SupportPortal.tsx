import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, CalendarClock, MessageCircle, AlertTriangle, FileText, ArrowRight, Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

// Cinematic Asset Import
import supportHero from '../assets/precision-maintenance.jpg';

export default function SupportPortal() {
  const [activeTab, setActiveTab] = useState<'fault' | 'service'>('fault');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // --- WEB3FORMS CONFIGURATION ---
    data.access_key = "7a1d1acc-c5cf-4f51-95f7-3733222ba091"; 
    data.subject = `Doorlogics Support Portal: ${activeTab === 'fault' ? 'Fault Report' : 'Service Booking'}`;
    data.from_name = "Doorlogics Support System";

    try {
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
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please contact us directly via WhatsApp or phone.");
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
              src={supportHero} 
              alt="Precision Maintenance" 
              className="w-full h-full object-cover object-center" 
            />
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
                <ShieldAlert size={14} className="text-brand-primary" />
                Technical Support
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-6 tracking-tight">
                Support<br />
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Portal.</span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                Report system faults, book routine maintenance, or access our emergency technical pipeline directly. We're engineered to respond.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* EMERGENCY ACTION & RESOURCES - BREATHABLE & ROUNDED */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Emergency WhatsApp Pipeline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-brand-dark p-10 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#25D366]/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#25D366] mb-6 border border-white/20 shadow-inner">
                    <MessageCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-3">Urgent Breakdown?</h3>
                  <p className="text-white/70 text-sm font-medium mb-8">
                    If your gate is stuck open or your garage won't close, bypass the queue and message Ronnie directly.
                  </p>
                  <a 
                    href="https://wa.me/27834001919" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-[#25D366] text-brand-dark py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3"
                  >
                    WhatsApp Pipeline
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>

              {/* Lifecycle Maintenance Spec Sheets */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 md:p-10 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <h3 className="text-xl font-black tracking-tight text-brand-dark mb-6">Maintenance Specs</h3>
                <div className="space-y-4">
                  {[
                    { title: "Gate Motor Care Guide", desc: "Track clearing & lubrication" },
                    { title: "Garage Spring Optimization", desc: "Tension & balance checks" },
                    { title: "Battery Lifecycle", desc: "Maximizing backup power" }
                  ].map((doc, i) => (
                    <Link 
                      key={i} 
                      to="/guides" 
                      className="group flex items-center gap-5 p-5 rounded-[24px] bg-brand-bg border border-brand-border/50 hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-slate group-hover:text-brand-primary shadow-sm transition-colors">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{doc.title}</h4>
                        <p className="text-[11px] font-medium text-brand-slate uppercase tracking-wider mt-1">{doc.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* INTERACTIVE SUPPORT ENGINE - APP-LIKE UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-7 bg-white p-6 md:p-12 rounded-[40px] md:rounded-[60px] shadow-[0_20px_60px_rgb(0,0,0,0.08)] relative overflow-hidden flex flex-col"
            >
              {/* Premium App-Like Tab Switcher */}
              <div className="relative flex p-2 bg-brand-bg rounded-full mb-10 w-full md:w-3/4 mx-auto shadow-inner border border-brand-border/50">
                <button
                  onClick={() => setActiveTab('fault')}
                  className={cn(
                    "flex-1 relative z-10 py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2",
                    activeTab === 'fault' ? "text-white" : "text-brand-slate hover:text-brand-dark"
                  )}
                >
                  <AlertTriangle size={16} />
                  Report Fault
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={cn(
                    "flex-1 relative z-10 py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2",
                    activeTab === 'service' ? "text-white" : "text-brand-slate hover:text-brand-dark"
                  )}
                >
                  <CalendarClock size={16} />
                  Book Service
                </button>

                {/* Animated Pill Background */}
                <motion.div
                  className="absolute top-2 bottom-2 w-[calc(50%-8px)] bg-brand-dark rounded-full shadow-md"
                  animate={{ left: activeTab === 'fault' ? '8px' : 'calc(50%)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </div>

              {/* Dynamic Forms */}
              <div className="relative flex-grow">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col h-full"
                    >
                      <input type="hidden" name="Request Type" value={activeTab === 'fault' ? 'Fault Report' : 'Service Booking'} />
                      
                      <div className="space-y-5 flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Full Name</label>
                            <input 
                              name="Name" 
                              required 
                              type="text" 
                              className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none shadow-inner" 
                              placeholder="John Doe" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Phone Number</label>
                            <input 
                              name="Phone" 
                              required 
                              type="tel" 
                              className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none shadow-inner" 
                              placeholder="082 123 4567" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">System Type</label>
                          <select 
                            name="System Type"
                            className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none shadow-inner appearance-none cursor-pointer"
                          >
                            <option value="Garage Door">Garage Door</option>
                            <option value="Driveway Gate">Driveway Gate</option>
                            <option value="Gate Motor">Gate Motor</option>
                            <option value="Intercom/Access">Intercom / Access Control</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">Property Address</label>
                          <input 
                            name="Address" 
                            required 
                            type="text" 
                            className="w-full bg-brand-bg border border-brand-border/80 rounded-full px-6 py-4 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none shadow-inner" 
                            placeholder="Full street address" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase text-brand-slate tracking-widest pl-4">
                            {activeTab === 'fault' ? 'Fault Description' : 'Service Notes'}
                          </label>
                          <textarea 
                            name="Details" 
                            required 
                            rows={4} 
                            className="w-full bg-brand-bg border border-brand-border/80 rounded-[30px] px-6 py-5 text-base font-medium text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none shadow-inner resize-none" 
                            placeholder={activeTab === 'fault' ? "Describe the issue (e.g., motor making a clicking sound, door won't close)..." : "Any specific concerns for the upcoming service?"} 
                          />
                        </div>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        className="mt-8 w-full bg-brand-primary text-white py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary-hover hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 disabled:hover:shadow-none"
                      >
                        {isSubmitting ? (
                          <>
                            Processing
                            <Loader2 size={18} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            {activeTab === 'fault' ? 'Submit Fault Report' : 'Request Service Booking'}
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white z-10 rounded-[40px]"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8"
                      >
                        <CheckCircle2 size={48} />
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-4">Request Logged.</h3>
                      <p className="text-brand-slate text-base font-medium leading-relaxed mb-10 max-w-sm">
                        Our technical team has received your {activeTab === 'fault' ? 'fault report' : 'booking request'} and will be in touch shortly to confirm scheduling.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-4 rounded-full border border-brand-border text-[11px] font-bold uppercase tracking-widest text-brand-dark hover:bg-brand-surface hover:border-brand-primary transition-all duration-300"
                      >
                        Submit Another Request
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}