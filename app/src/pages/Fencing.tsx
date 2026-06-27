import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Cinematic Asset Imports
import fenceHero from '../assets/fence-estate-curved-timber.jpg';
import fenceTimber from '../assets/fence-brown-steel-brick.jpg';
import fenceClearvu from '../assets/fence-galvanized-palisade.jpg';
import fenceSpear from '../assets/fence-steel-spear-detail.jpg';

export default function Fencing() {
  return (
    <PageTransition>
      {/* HERO SECTION - CINEMATIC & SOFT */}
      <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src={fenceHero} 
            alt="Secure Estate Fencing" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark/90" />
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
              Boundary Security
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Absolute<br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Perimeter Control.</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium">
              We provide professional perimeter security solutions, from clear-view panels to custom heavy-duty steel fencing engineered for absolute structural integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESIGN CAPABILITIES MATRIX - BREATHABLE & ROUNDED */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              Fencing Index
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              Explore our diverse range of secure boundary solutions. Engineered for the Western Cape environment, designed to match your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Architectural Steel", desc: "Custom steel profiles with premium timber or composite inserts.", img: fenceTimber },
              { title: "High-Visibility Security", desc: "Clear-view galvanized panels preventing any unauthorized access.", img: fenceClearvu },
              { title: "Steel Palisade", desc: "Heavy-duty spear-top fencing designed for ultimate perimeter defense.", img: fenceSpear }
            ].map((fence, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[450px] w-full rounded-[40px] overflow-hidden bg-brand-surface shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <img 
                  src={fence.img} 
                  alt={fence.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                  <h3 className="text-white text-2xl font-black tracking-tight mb-3">
                    {fence.title}
                  </h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed mb-0">
                    {fence.desc}
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
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-16 leading-[1.05]">
                Built for<br />Strength.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {[
                  { icon: <Shield size={28} />, title: "Coastal Grade", desc: "Galvanized and powder-coated to resist aggressive rust in the Western Cape environment." },
                  { icon: <Lock size={28} />, title: "Anti-Climb", desc: "Designed with specific apertures that prevent intruders from gaining any foothold or grip." },
                  { icon: <Zap size={28} />, title: "Precision Install", desc: "Deep-anchored posts set in high-strength concrete ensure your fence remains standing for decades." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start bg-white/5 p-8 rounded-[30px] border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 shadow-inner">
                      {item.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black tracking-tight mb-4">{item.title}</h4>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
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
                Secure Your Boundary.
              </h2>
              <p className="text-brand-slate text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Let's secure your property with a custom-engineered fencing solution designed specifically for your perimeter.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}