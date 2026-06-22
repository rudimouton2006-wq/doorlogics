import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

export default function Guides() {
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
              Resources
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              How-To<br />
              <span className="text-brand-primary">Guides.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              Simple, actionable advice on maintaining your gate and garage systems to ensure maximum operational life and absolute reliability.
            </motion.p>
          </div>

          {/* GUIDE CARDS - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-40 md:mb-56">
            {[
              { 
                category: "Maintenance",
                icon: <BookOpen size={20} />,
                title: "Gate Care 101", 
                desc: "Learn the essential protocols to keep your sliding gate track clear of debris and your motor running smoothly year-round.",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format"
              },
              { 
                category: "Security",
                icon: <ShieldCheck size={20} />,
                title: "Remote Training", 
                desc: "A step-by-step technical guide on how to securely program new remotes and delete compromised ones from your entire system.",
                img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format"
              }
            ].map((guide, i) => (
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
                    src={guide.img} 
                    alt={guide.title} 
                    className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                </div>
                
                <div className="p-10 md:p-12 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border border-brand-border flex items-center justify-center text-brand-primary group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                      {guide.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase text-brand-slate tracking-[0.3em]">{guide.category}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{guide.title}</h3>
                  <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed mb-12 flex-grow">{guide.desc}</p>
                  
                  <button className="flex items-center justify-between w-full pt-8 border-t border-brand-border/50 text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark group-hover:text-brand-primary transition-colors mt-auto">
                    <span>Read Protocol</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AUTHORITY BLOCK - HIGH CONTRAST MINIMALISM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark p-14 md:p-24 text-white text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Need Expert Help?</h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-14 font-medium leading-relaxed text-base md:text-lg">
                If your system is acting up and a manual guide isn't enough, our technicians are ready to assist. Secure your perimeter today.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-white text-brand-dark px-12 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary hover:text-white transition-colors duration-300"
              >
                Book a Service
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}