import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Local Asset Import
import aboutHeritage from '../assets/about-heritage.jpg';

export default function About() {
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
              Our History
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Three Decades<br />
              <span className="text-brand-primary">of Quality.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              Since 1991, we have been the Western Cape's trusted partner for gate and garage door excellence. Based in Bellville, we build for longevity and uncompromising reliability.
            </motion.p>
          </div>

          {/* HERITAGE MATRIX - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-40 md:mb-56 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden aspect-square md:aspect-[4/3] relative group bg-brand-dark border border-brand-border/50"
            >
              <img 
                src={aboutHeritage} 
                alt="Doorlogics Personal Service" 
                className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
              />
            </motion.div>
            
            <div className="pr-0 lg:pr-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark leading-[0.95] mb-8">
                Personal<br />Service.
              </h2>
              <div className="space-y-6 text-brand-slate text-base md:text-lg font-medium leading-relaxed mb-16">
                <p>
                  Owned and managed by Ronnie Mouton, Doorlogics remains a family-focused business where quality comes first. We do not compromise on the grade of steel, the caliber of the motors, or the precision of the installation.
                </p>
                <p>
                  Every project we undertake is handled with exact precision. We don't just install doors—we provide peace of mind through expert craftsmanship and dedicated after-sales support.
                </p>
              </div>
              
              {/* AUTHORITY QUOTE BLOCK - RAW MINIMALISM */}
              <div className="bg-brand-dark p-10 md:p-14 text-white">
                <p className="font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight mb-8">
                  "We believe in doing it right the first time."
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center gap-4">
                  <div className="w-8 h-1 bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase text-brand-primary tracking-[0.3em]">
                    Ronnie Mouton
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STAT GRID - GEOMETRIC & FLAT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 md:mb-56">
            {[
              { icon: <Clock size={24} />, label: "Years of Experience", value: "30+" },
              { icon: <ShieldCheck size={24} />, label: "Successful Projects", value: "10k+" },
              { icon: <Award size={24} />, label: "Owner-Managed", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-14 bg-white border border-brand-border/50 hover:border-brand-primary transition-colors duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 border border-brand-border flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-brand-dark leading-none">
                  {stat.value}
                </div>
                <p className="font-black text-[10px] uppercase tracking-[0.3em] text-brand-slate">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA SECTION - RAW MINIMALISM */}
          <section className="py-24 border-t border-brand-border/30 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-brand-dark">
                Experience the Standard.
              </h2>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-4 bg-brand-dark text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}