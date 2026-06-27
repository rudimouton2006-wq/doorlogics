import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BatteryFull, Smartphone, Radio, ArrowRight, CheckCircle2, ShieldCheck, Cpu, KeyRound } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Cinematic Asset Imports
import heroHardware from '../assets/hardware-track-system.jpg'; 
import motorEt from '../assets/auto-et-drive-motor.jpg';
import accessCenturion from '../assets/auto-centurion-access.jpg';

export default function Automation() {
  return (
    <PageTransition>
      {/* HERO SECTION - CINEMATIC & SOFT */}
      <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroHardware} 
            alt="Precision Tracking Hardware" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/60 to-brand-dark/95" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
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
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 md:mb-12 shadow-lg"
            >
              <CheckCircle2 size={14} className="text-brand-primary" />
              Smart Motor Systems
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Intelligent<br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Automation.</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium">
              We provide professional, high-torque automation for any gate or garage door system. Smart, reliable motors tailored to your specific safety and operational demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE HARDWARE GRID - BREATHEABLE & EXTREME ROUNDED */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              The Ecosystem
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              We exclusively install premium-grade automation hardware from trusted industry leaders, ensuring a lifetime of frictionless operation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              { 
                title: "High-Speed Drives", 
                desc: "ET NICE & Centurion motors delivering lightning-fast, reliable execution for heavy residential and industrial gates.", 
                img: motorEt 
              },
              { 
                title: "Access Control", 
                desc: "Secure keypads, anti-clone remotes, and smart entry systems to manage your perimeter with absolute precision.", 
                img: accessCenturion 
              }
            ].map((system, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[450px] md:h-[550px] w-full rounded-[40px] md:rounded-[60px] overflow-hidden bg-brand-surface shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <img 
                  src={system.img} 
                  alt={system.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Soft cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform transition-transform duration-500">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/20 backdrop-blur-md text-brand-primary mb-6">
                    {i === 0 ? <Cpu size={24} /> : <KeyRound size={24} />}
                  </div>
                  <h3 className="text-white text-3xl font-black tracking-tight mb-4">
                    {system.title}
                  </h3>
                  <p className="text-white/70 text-base font-medium leading-relaxed mb-0 max-w-sm">
                    {system.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY BLOCK - SOFT DARK MODE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark rounded-[40px] md:rounded-[80px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-16 leading-[1.05] text-center md:text-left">
                Reliable<br />Features.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { icon: <Smartphone size={28} />, title: "Mobile Control", desc: "Open, close, or securely lock your systems using a smartphone app from anywhere." },
                  { icon: <BatteryFull size={28} />, title: "Backup Power", desc: "High-capacity deep-cycle batteries ensure flawless operation during grid power outages." },
                  { icon: <Radio size={28} />, title: "Safety Beams", desc: "Active infrared sensors instantly reverse the motor to prevent closing on vehicles or people." }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 p-8 md:p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 shadow-inner">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black tracking-tight mb-4">{feature.title}</h4>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - GLOWING & ROUNDED */}
      <section className="py-24 md:py-40 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-brand-bg rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-brand-dark">
                Ready for Smart Security?
              </h2>
              <p className="text-brand-slate text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Upgrade your manual gates or replace your aging motors with next-generation automation.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Upgrade System
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}