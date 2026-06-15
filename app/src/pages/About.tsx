import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Local Asset Import
import aboutHeritage from '../assets/about-heritage.jpg';

export default function About() {
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
              Our History
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              Three Decades<br />
              <span className="text-brand-primary">of Quality.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              Since 1991, we have been the Western Cape's trusted partner for gate and garage door excellence. Based in Bellville, we build for longevity and uncompromising reliability.
            </motion.p>
          </div>

          {/* Heritage Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-40 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[60px] overflow-hidden shadow-2xl relative aspect-square group border-2 border-brand-border"
            >
              <img 
                src={aboutHeritage} 
                alt="Doorlogics Personal Service" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark">Personal Service.</h2>
              <div className="space-y-8 text-brand-slate text-lg font-bold leading-relaxed">
                <p>
                  Owned and managed by Ronnie Mouton, Doorlogics remains a family-focused business where quality comes first. We do not compromise on the grade of steel, the caliber of the motors, or the precision of the installation.
                </p>
                <p>
                  Every project we undertake is handled with exact precision. We don't just install doors—we provide peace of mind through expert craftsmanship and dedicated after-sales support.
                </p>
              </div>
              
              {/* Upgraded Authority Quote Block */}
              <div className="p-12 md:p-14 bg-brand-dark rounded-[40px] border border-brand-dark shadow-2xl relative overflow-hidden group hover:border-brand-primary/50 transition-colors duration-500">
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="font-black text-white text-2xl md:text-3xl leading-snug uppercase tracking-tight mb-8">
                    "WE BELIEVE IN DOING IT RIGHT THE FIRST TIME."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-px bg-brand-primary" />
                    <span className="text-[10px] font-black uppercase text-brand-primary tracking-widest">Ronnie Mouton</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upgraded Tactile Stat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {[
              { icon: <Clock size={24} />, label: "Years of Experience", value: "30+" },
              { icon: <ShieldCheck size={24} />, label: "Successful Projects", value: "10,000+" },
              { icon: <Award size={24} />, label: "Owner-Managed", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 md:p-16 bg-gradient-to-br from-white to-brand-bg/50 border-2 border-brand-border rounded-[40px] hover:border-brand-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-brand-dark">{stat.value}</div>
                <p className="font-display font-black text-[10px] uppercase tracking-[0.4em] text-brand-slate">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* New Conversion Pipeline CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 text-center border-t border-brand-border"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-brand-dark mb-10">Experience the Doorlogics Standard.</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}