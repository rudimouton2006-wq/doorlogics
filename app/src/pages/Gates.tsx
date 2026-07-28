import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Cinematic Asset Imports
import heroGate from '../assets/gate-estate-timber-wide.jpg';
import gatePedestrian from '../assets/gate-pedestrian-new.jpg';
import gateTimber from '../assets/fence-curved-timber.jpg';
import gateSteel from '../assets/fence-wrought-iron.jpg';

export default function Gates() {
  return (
    <PageTransition>
      {/* HERO SECTION - CINEMATIC & SOFT */}
      <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          {/* 🚀 PERFORMANCE: fetchPriority high, draggable false, will-change for GPU */}
          <img 
            src={heroGate} 
            alt="Premium Driveway Gates" 
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-full object-cover object-center opacity-85 will-change-transform" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/95" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full flex flex-col items-center will-change-transform will-change-opacity"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 md:mb-12 shadow-lg will-change-transform"
            >
              <CheckCircle2 size={14} className="text-brand-primary" />
              Bespoke Manufacturing
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Driveway<br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Gates.</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium">
              Custom-built sliding and swing gates designed for your property. Engineered for smooth automation, absolute security, and architectural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              Engineering Quality
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              Every gate we manufacture is built to withstand coastal weather conditions while providing seamless, heavy-duty security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              { icon: <Shield size={24} />, title: "Heavy-Duty Frames", desc: "Constructed with thick-walled structural steel to prevent sagging and warping over time." },
              { icon: <Settings size={24} />, title: "Automation Ready", desc: "Perfectly balanced and weighted for seamless integration with high-speed gate motors." },
              { icon: <PenTool size={24} />, title: "Bespoke Design", desc: "Manufactured exactly to your property's dimensions, slopes, and architectural style." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 md:p-14 bg-brand-surface rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left will-change-transform will-change-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-brand-dark">
                  {feature.title}
                </h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE GRID */}
      <section className="py-24 md:py-32 bg-brand-bg rounded-[40px] md:rounded-[80px] mx-4 md:mx-8 mb-24 md:mb-32 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              Gate Configurations
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              Whether you need a space-saving slider or an elegant double swing gate, we manufacture to your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: "Steel Sliding Gates", 
                desc: "Space-efficient and highly secure. Runs on a precision ground track for smooth operation.", 
                img: gateSteel 
              },
              { 
                title: "Timber Swing Gates", 
                desc: "Elegant entrance gates built on a steel sub-frame to prevent the wood from sagging.", 
                img: gateTimber 
              },
              { 
                title: "Pedestrian Gates", 
                desc: "Matching access gates equipped with secure deadbolts, electric strikes, or smart locks.", 
                img: gatePedestrian 
              }
            ].map((gate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[450px] w-full rounded-[40px] overflow-hidden bg-brand-surface shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 will-change-transform will-change-opacity"
              >
                {/* 🚀 PERFORMANCE: Lazy loading, async decoding, draggable disabled */}
                <img 
                  src={gate.img} 
                  alt={gate.title} 
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 will-change-transform" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                  <h3 className="text-white text-2xl font-black tracking-tight mb-3">
                    {gate.title}
                  </h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed mb-0">
                    {gate.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-40 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-brand-dark rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden will-change-transform will-change-opacity"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Start Your Project.
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Contact us for a site measurement and let's design the perfect entrance for your property.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark hover:scale-105 transition-all duration-300 shadow-xl will-change-transform"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}