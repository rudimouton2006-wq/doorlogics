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
          <div className="max-w-5xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-xs md:text-sm uppercase tracking-[0.4em] block mb-8"
            >
              Our History
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              Three Decades<br />
              <span className="text-brand-primary">of Quality.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              Since 1991, we have been the Western Cape's trusted partner for gate and garage door excellence. Based in Bellville, we build for longevity and uncompromising reliability.
            </motion.p>
          </div>

          {/* Heritage Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-40 md:mb-48 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[60px] overflow-hidden shadow-2xl relative aspect-square group border-4 border-brand-border bg-brand-surface"
            >
              <img 
                src={aboutHeritage} 
                alt="Doorlogics Personal Service" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            <div className="space-y-14">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark leading-none">Personal Service.</h2>
              <div className="space-y-8 text-brand-slate text-lg md:text-xl font-extrabold leading-relaxed">
                <p>
                  Owned and managed by Ronnie Mouton, Doorlogics remains a family-focused business where quality comes first. We do not compromise on the grade of steel, the caliber of the motors, or the precision of the installation.
                </p>
                <p>
                  Every project we undertake is handled with exact precision. We don't just install doors—we provide peace of mind through expert craftsmanship and dedicated after-sales support.
                </p>
              </div>
              
              {/* Upgraded Authority Quote Block */}
              <div className="p-12 md:p-16 bg-brand-dark rounded-[40px] border-4 border-brand-dark shadow-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-colors duration-500">
                <div className="absolute -right-10 -top-10 w-56 h-56 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="font-black text-white text-3xl md:text-4xl leading-tight uppercase tracking-tight mb-10">
                    "WE BELIEVE IN DOING IT RIGHT THE FIRST TIME."
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-1.5 bg-brand-primary rounded-full" />
                    <span className="text-xs md:text-sm font-black uppercase text-brand-primary tracking-[0.3em]">Ronnie Mouton</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upgraded Tactile Stat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-40 md:mb-48">
            {[
              { icon: <Clock size={32} />, label: "Years of Experience", value: "30+" },
              { icon: <ShieldCheck size={32} />, label: "Successful Projects", value: "10,000+" },
              { icon: <Award size={32} />, label: "Owner-Managed", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-14 md:p-16 bg-gradient-to-br from-white to-brand-bg/50 border-4 border-white shadow-xl rounded-[40px] hover:border-brand-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-7xl font-black mb-6 tracking-tighter text-brand-dark">{stat.value}</div>
                <p className="font-display font-black text-xs md:text-sm uppercase tracking-[0.3em] text-brand-slate">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* New Conversion Pipeline CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24 text-center bg-brand-surface rounded-[60px] border border-brand-border"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-12">Experience the Doorlogics Standard.</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-14 py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}