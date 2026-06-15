import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Guides() {
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
              Resources
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              How-To<br />
              <span className="text-brand-primary">Guides.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              Simple, actionable advice on maintaining your gate and garage systems to ensure maximum operational life and reliability.
            </motion.p>
          </div>

          {/* Upgraded Tactile Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
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
                desc: "A step-by-step technical guide on how to securely program new remotes and delete compromised ones from your system.",
                img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format"
              }
            ].map((guide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[40px] overflow-hidden border-2 border-brand-border bg-gradient-to-br from-white to-brand-bg/50 hover:border-brand-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img src={guide.img} alt={guide.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-brand-primary p-2 bg-brand-primary/10 rounded-lg">
                      {guide.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase text-brand-primary tracking-widest">{guide.category}</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{guide.title}</h3>
                  <p className="text-brand-slate font-bold leading-relaxed mb-8 flex-grow">{guide.desc}</p>
                  
                  <button className="flex items-center justify-between w-full pt-6 border-t border-brand-border/80 text-[11px] font-black uppercase tracking-[0.4em] text-brand-dark group-hover:text-brand-primary transition-colors mt-auto">
                    <span>Read Protocol</span>
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upgraded "Dark Mode" Authority Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[64px] p-12 md:p-24 text-white text-center shadow-2xl relative overflow-hidden"
          >
            {/* Glowing background blurs for depth */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Need Expert Help?</h2>
              <p className="text-white/80 max-w-xl mx-auto mb-12 font-bold leading-relaxed text-lg">
                If your system is acting up and a guide isn't enough, our technicians are ready to assist. Secure your perimeter today.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-brand-dark transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
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