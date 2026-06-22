import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Local Asset Imports
import fence1 from '../assets/fence-1.jpg';
import fence2 from '../assets/fence-2.jpg';
import clearvuFence from '../assets/clearvu-fence.jpg';
import fence4 from '../assets/fence-4.jpg';

export default function Fencing() {
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
              Boundary Security
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Secured Fencing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl font-medium leading-relaxed"
            >
              We provide professional perimeter security solutions, from clear-view panels to custom heavy-duty steel fencing for any property requirement.
            </motion.p>
          </div>

          {/* 4-GRID IMAGE MATRIX - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 md:mb-56">
            {[
              { title: "FIBRE CEMENT", desc: "FIBRE CEMENT. NUTEC BOARDS FILLED PANELS TO MATCH YOUR PROPERTY STYLING.", img: fence2 },
              { title: "Timber Inserts", desc: "Modern horizontal timber slats seamlessly integrated with sturdy boundary structures.", img: fence1 },
              { title: "Perimeter Steel", desc: "High-visibility, maximum security perimeter steel fencing preventing any unauthorized access.", img: clearvuFence },
              { title: "Curved steel fencing", desc: "The sky is the limit.", img: fence4 }
            ].map((fence, i) => (
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
                    src={fence.img} 
                    alt={fence.title} 
                    className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                </div>
                <div className="p-10 md:p-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{fence.title}</h3>
                  <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">{fence.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AUTHORITY BLOCK - HIGH CONTRAST MINIMALISM */}
          <div className="bg-brand-dark p-14 md:p-24 text-white relative overflow-hidden">
            <div className="max-w-5xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-[0.95]">
                Built for<br />Strength.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-white/10 pt-16">
                {[
                  { icon: <Shield size={28} />, title: "Coastal Grade", desc: "Galvanized and powder-coated to resist aggressive rust in the Western Cape environment." },
                  { icon: <Lock size={28} />, title: "Anti-Climb", desc: "Designed with small apertures that prevent intruders from gaining any foothold or grip." },
                  { icon: <Zap size={28} />, title: "Precision Install", desc: "Deep-anchored posts set in high-strength concrete ensure your fence remains standing for decades." }
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
                Secure Your Boundary.
              </h2>
              <Link 
                to="/contact"
                className="inline-block bg-brand-dark text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}