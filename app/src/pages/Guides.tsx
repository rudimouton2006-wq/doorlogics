import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ShieldCheck, CheckCircle2, Wrench } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Cinematic Asset Imports
import heroGuides from '../assets/hardware-track-system.jpg';
import guideMotor from '../assets/auto-et-drive-motor.jpg';
import guideRemotes from '../assets/auto-centurion-access.jpg';

export default function Guides() {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pb-24 md:pb-40">
        
        {/* HERO SECTION - CINEMATIC & SOFT */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-sm mb-16 md:mb-24">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroGuides} 
              alt="Hardware and Maintenance Tracking" 
              className="w-full h-full object-cover object-center" 
            />
            {/* Smooth cinematic dark overlay */}
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
                Technical Resources
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-6 tracking-tight">
                Maintenance<br />
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Protocols.</span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                Simple, actionable engineering advice on maintaining your gate and garage systems to ensure maximum operational life and absolute reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* GUIDES MATRIX - BREATHABLE & ROUNDED */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
              {[
                { 
                  category: "Mechanical Maintenance",
                  icon: <Wrench size={24} />,
                  title: "Gate Care 101", 
                  desc: "Learn the essential protocols to keep your sliding gate track clear of debris, prevent wheel friction, and ensure your motor runs smoothly year-round.",
                  img: guideMotor
                },
                { 
                  category: "Security & Access",
                  icon: <ShieldCheck size={24} />,
                  title: "Remote Training", 
                  desc: "A step-by-step technical guide on how to securely program new transmitters and delete compromised or lost remotes from your entire access system.",
                  img: guideRemotes
                }
              ].map((guide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group flex flex-col bg-white rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500"
                >
                  <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-brand-surface">
                    <img 
                      src={guide.img} 
                      alt={guide.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                    />
                    {/* Soft gradient for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-6 left-6 md:top-8 md:left-8">
                      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark shadow-sm">
                        {guide.icon}
                        <span className="mt-0.5">{guide.category}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-14 flex flex-col flex-grow relative">
                    {/* Floating action button aesthetic */}
                    <div className="absolute -top-10 right-8 md:right-12 w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-brand-dark transition-all duration-300">
                      <BookOpen size={28} />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-brand-dark pr-16">
                      {guide.title}
                    </h3>
                    <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed mb-10 flex-grow">
                      {guide.desc}
                    </p>
                    
                    <button className="flex items-center justify-center gap-3 w-full py-5 rounded-full border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:border-brand-primary group-hover:text-brand-primary transition-colors duration-300">
                      <span>Read Full Protocol</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHORITY CTA BLOCK - GLOWING & ROUNDED */}
        <section className="pt-20 md:pt-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark rounded-[40px] md:rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto"
            >
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Need Expert Help?</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed text-base md:text-lg">
                  If your system is acting up and a manual guide isn't enough, our technicians are ready to assist. Secure your perimeter today.
                </p>
                <Link 
                  to="/support" 
                  className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Book a Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}