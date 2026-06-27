import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, Award, CheckCircle2, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

// Cinematic Asset Import
import ronnieFounder from '../assets/ronnie-founder.jpg';

export default function About() {
  return (
    <PageTransition>
      {/* HERO SECTION - SOFT & MINIMALIST */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-bg rounded-b-[40px] md:rounded-b-[80px] overflow-hidden text-center shadow-sm">
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
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-brand-border text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-dark mb-8 md:mb-12 shadow-sm"
            >
              <CheckCircle2 size={14} className="text-brand-primary" />
              Our History
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-brand-dark leading-[1.1] mb-8 tracking-tight">
              Three Decades<br />
              <span className="text-brand-primary">of Quality.</span>
            </h1>

            <p className="text-base md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium">
              Since 1991, we have been the Western Cape's trusted partner for premium gate and garage door engineering. Based in Bellville, built for longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HERITAGE MATRIX - CINEMATIC PORTRAIT & EDITORIAL TEXT */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            
            {/* Cinematic Portrait Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-square w-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl group"
            >
              <img 
                src={ronnieFounder} 
                alt="Ronnie Mouton - Founder of Doorlogics" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="text-white font-black text-2xl tracking-tight">Ronnie Mouton</p>
                <p className="text-white/70 font-medium text-sm md:text-base">Founder & Lead Engineer</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 lg:pl-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark leading-[1.1] mb-8">
                Personal<br />Service.
              </h2>
              
              <div className="space-y-6 text-brand-slate text-base md:text-lg font-medium leading-relaxed mb-12">
                <p>
                  Owned and managed by Ronnie Mouton, Doorlogics remains a family-focused business where absolute quality comes first. We do not compromise on the grade of steel, the caliber of the motors, or the precision of our installations.
                </p>
                <p>
                  Every project we undertake is handled with exact mechanical precision. We don't just install doors—we provide long-term peace of mind through expert craftsmanship and dedicated after-sales support.
                </p>
              </div>
              
              {/* Elegant Quote Block */}
              <div className="bg-brand-bg rounded-[30px] p-8 md:p-10 relative overflow-hidden shadow-inner">
                <Quote size={80} className="absolute -top-4 -left-4 text-brand-primary/10 rotate-180" />
                <p className="relative z-10 font-bold text-xl md:text-2xl tracking-tight leading-snug text-brand-dark mb-6">
                  "We believe in doing it right the first time. No shortcuts, just solid engineering."
                </p>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-1 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-black uppercase text-brand-slate tracking-[0.2em]">
                    The Doorlogics Standard
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STAT GRID - SOFT & FLOATING */}
      <section className="py-24 bg-white border-t border-brand-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Clock size={28} />, label: "Years of Experience", value: "30+" },
              { icon: <ShieldCheck size={28} />, label: "Successful Projects", value: "10k+" },
              { icon: <Award size={28} />, label: "Owner-Managed", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 md:p-14 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-brand-dark leading-none">
                  {stat.value}
                </div>
                <p className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-slate">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - GLOWING & ROUNDED */}
      <section className="py-24 md:py-40 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-brand-dark rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Experience the Standard.
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Work directly with the experts. Speak to our team today to discuss your perimeter access needs.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary-hover hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}