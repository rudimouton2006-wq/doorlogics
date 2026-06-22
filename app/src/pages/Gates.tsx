import React from 'react';
import { motion } from 'motion/react';
import { Zap, Lock, Grid, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Local Asset Imports
import gate1 from '../assets/gate-1.jpg';
import gate2 from '../assets/gate-2.jpg';
import gate3 from '../assets/gate-3.jpg';
import gate4 from '../assets/gate-4.jpg';

const specs = [
  { icon: <Zap size={28} />, title: "High-Speed", desc: "Operating at up to 36m/min to minimize perimeter vulnerability windows during entry and exit." },
  { icon: <Lock size={28} />, title: "Anti-Lift", desc: "Proprietary galvanized bracket systems designed specifically to eliminate forced-entry lifting." },
  { icon: <Grid size={28} />, title: "Custom Clad", desc: "Clearview, Nutec, or architectural timber cladding engineered to match your property aesthetics." },
];

export default function Gates() {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* HERO SECTION - STARK & MINIMALIST */}
          <div className="max-w-4xl mb-32 md:mb-48">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-brand-slate mb-8"
            >
              Driveway Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Entrance Gates.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              We design and build bespoke sliding or swing gates that combine absolute security with architectural elegance. Every gate is made to order for your specific property requirements.
            </motion.p>
          </div>

          {/* SPEC CARDS - GEOMETRIC & FLAT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40 md:mb-56">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-14 bg-white border border-brand-border/50 hover:border-brand-primary transition-colors duration-500 group relative"
              >
                <div className="w-14 h-14 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-500">
                  {spec.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">{spec.title}</h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 4-GRID IMAGE MATRIX - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 md:mb-56">
            {[
              { title: "Sliding Timber", desc: "Heavy-duty steel frame with premium hardwood cladding.", img: gate1 },
              { title: "Double Swing", desc: "Classic double swing configurations with robust hinges.", img: gate2 },
              { title: "Steel Palisade", desc: "High-security steel perimeter gates, powder-coated to last.", img: gate3 },
              { title: "Custom Architectural", desc: "Bespoke designs to perfectly match your property's exterior.", img: gate4 }
            ].map((gate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-brand-border/50 bg-white hover:border-brand-primary transition-colors duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-brand-dark">
                  <img 
                    src={gate.img} 
                    alt={gate.title} 
                    className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                </div>
                <div className="p-10 md:p-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{gate.title}</h3>
                  <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">{gate.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AUTHORITY BLOCK - HIGH CONTRAST MINIMALISM */}
          <div className="bg-brand-dark p-14 md:p-24 text-white relative overflow-hidden">
            <div className="max-w-5xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-[0.95]">
                Why Work<br />With Us.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-white/10 pt-16">
                {[
                  { icon: <ShieldCheck size={28} />, title: "Heavy Duty", desc: "We use thicker steel extrusions for superior durability and uncompromising security." },
                  { icon: <Cpu size={28} />, title: "Fast Motors", desc: "High-speed Centurion and ET NICE motors to minimize wait times at your entrance." },
                  { icon: <Smartphone size={28} />, title: "Smart Access", desc: "Open your gate via smartphone, GSM intercom, or secure remote from anywhere." }
                ].map((item, i) => (
                  <div key={i} className="space-y-8">
                    <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-brand-primary">
                      {item.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-black uppercase tracking-widest">{item.title}</h4>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA SECTION - RAW MINIMALISM */}
          <section className="py-24 border-t border-brand-border/30 mt-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-brand-dark">
                Secure Your Perimeter.
              </h2>
              <Link 
                to="/contact"
                className="inline-block bg-brand-dark text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}