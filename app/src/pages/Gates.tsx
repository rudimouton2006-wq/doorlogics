import React from 'react';
import { motion } from 'motion/react';
import { Zap, Lock, Grid, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Local Asset Imports
import gate1 from '../assets/gate-1.jpg';
import gate2 from '../assets/gate-2.jpg';
import gate3 from '../assets/gate-3.jpg';
import gate4 from '../assets/gate-4.jpg';

const specs = [
  { icon: <Zap size={32} />, title: "High-Speed Execution", desc: "Operating at up to 36m/min to minimize perimeter vulnerability windows during entry and exit." },
  { icon: <Lock size={32} />, title: "Anti-Lift Geometry", desc: "Proprietary galvanized bracket systems designed specifically to eliminate forced-entry lifting." },
  { icon: <Grid size={32} />, title: "Custom Cladding", desc: "Clearview, Nutec, or architectural timber cladding engineered to match your property aesthetics." },
];

export default function Gates() {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Hero Section */}
          <div className="max-w-5xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-xs md:text-sm uppercase tracking-[0.4em] block mb-8"
            >
              Driveway Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Entrance Gates.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              We design and build bespoke sliding or swing gates that combine absolute security with architectural elegance. Every gate is made to order for your specific property.
            </motion.p>
          </div>

          {/* Upgraded Tactile Spec Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-40 md:mb-48">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 md:p-14 bg-gradient-to-br from-white to-brand-bg/50 rounded-[40px] border-4 border-brand-border hover:border-brand-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">{spec.title}</h3>
                <p className="text-brand-slate text-base md:text-lg font-extrabold leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Upgraded Dynamic 4-Grid Image Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-40 md:mb-48">
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
                className="group rounded-[60px] overflow-hidden border-4 border-white bg-brand-surface hover:border-brand-primary/40 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={gate.img} alt={gate.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-12 md:p-14 flex-grow flex flex-col justify-center bg-brand-surface">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark">{gate.title}</h3>
                  <p className="text-brand-slate text-lg font-extrabold leading-relaxed">{gate.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dark Mode Authority Block */}
          <div className="bg-brand-dark rounded-[64px] p-14 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-5xl relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-20 text-white">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {[
                  { icon: <ShieldCheck size={32} />, title: "Heavy Duty", desc: "We use thicker steel extrusions for superior durability and uncompromising security." },
                  { icon: <Cpu size={32} />, title: "Fast Motors", desc: "High-speed Centurion and Gemini motors to minimize wait times at your entrance." },
                  { icon: <Smartphone size={32} />, title: "Smart Access", desc: "Open your gate via smartphone, GSM intercom, or secure remote from anywhere." }
                ].map((item, i) => (
                  <div key={i} className="space-y-8">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      {item.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest">{item.title}</h4>
                    <p className="text-white/80 text-base md:text-lg font-extrabold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-24 mt-32 text-center bg-brand-surface rounded-[60px] border border-brand-border">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-12">Secure Your Perimeter</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-14 py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}