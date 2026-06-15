import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, ChevronRight, ShieldCheck, Zap, EyeOff, Lock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Local Asset Imports
import fence1 from '../assets/fence-1.jpg';
import fence2 from '../assets/fence-2.jpg';
import fence3 from '../assets/fence-3.jpg';
import fence4 from '../assets/fence-4.jpg';

export default function Fencing() {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-32">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-[10px] uppercase tracking-[0.6em] block mb-6"
            >
              Boundary Security
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Secured Fencing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl font-bold leading-relaxed mb-20"
            >
              We provide professional perimeter security solutions, from clear-view panels to custom heavy-duty steel fencing for any property requirement.
            </motion.p>
          </div>

          {/* Upgraded Dynamic 4-Grid Image Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
            {[
              { title: "Timber Inserts", desc: "Modern horizontal timber slats seamlessly integrated with sturdy boundary structures.", img: fence1 },
              { title: "Architectural Walls", desc: "White masonry with custom curved wooden inserts designed to match the property styling.", img: fence2 },
              { title: "Perimeter Steel", desc: "High-visibility, maximum security perimeter steel fencing preventing any unauthorized access.", img: fence3 },
              { title: "Classic Brick & Steel", desc: "Traditional brick pillars combined with heavy-duty anti-climb steel rails.", img: fence4 }
            ].map((fence, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[60px] overflow-hidden border-2 border-brand-border bg-white hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={fence.img} alt={fence.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{fence.title}</h3>
                  <p className="text-brand-slate text-lg font-bold leading-relaxed">{fence.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dark Mode Authority Block */}
          <div className="bg-brand-dark rounded-[64px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl relative z-10">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-white">Built for Strength.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Shield size={24} />, title: "Coastal Grade", desc: "Galvanized and powder-coated to resist aggressive rust in the Western Cape environment." },
                  { icon: <Lock size={24} />, title: "Anti-Climb", desc: "Designed with small apertures that prevent intruders from gaining any foothold or grip." },
                  { icon: <Zap size={24} />, title: "Precision Install", desc: "Deep-anchored posts set in high-strength concrete ensure your fence remains standing for decades." }
                ].map((item, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-widest">{item.title}</h4>
                    <p className="text-white/60 text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-32 text-center">
             <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-dark mb-10">Secure Your Boundary</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}