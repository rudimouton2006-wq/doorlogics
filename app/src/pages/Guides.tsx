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
          
          {/* Hero Section */}
          <div className="max-w-5xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-xs md:text-sm uppercase tracking-[0.4em] block mb-8"
            >
              Resources
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              How-To<br />
              <span className="text-brand-primary">Guides.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              Simple, actionable advice on maintaining your gate and garage systems to ensure maximum operational life and absolute reliability.
            </motion.p>
          </div>

          {/* Upgraded Tactile Guide Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-40 md:mb-48">
            {[
              { 
                category: "Maintenance",
                icon: <BookOpen size={28} />,
                title: "Gate Care 101", 
                desc: "Learn the essential protocols to keep your sliding gate track clear of debris and your motor running smoothly year-round.",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format"
              },
              { 
                category: "Security",
                icon: <ShieldCheck size={28} />,
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
                className="group rounded-[60px] overflow-hidden border-4 border-white bg-brand-surface hover:border-brand-primary/40 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b-4 border-white">
                  <img src={guide.img} alt={guide.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-12 md:p-14 flex flex-col flex-grow bg-brand-surface">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-brand-primary p-3 bg-brand-primary/10 rounded-2xl">
                      {guide.icon}
                    </div>
                    <span className="text-xs md:text-sm font-black uppercase text-brand-primary tracking-widest">{guide.category}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">{guide.title}</h3>
                  <p className="text-brand-slate font-extrabold text-base md:text-lg leading-relaxed mb-12 flex-grow">{guide.desc}</p>
                  
                  <button className="flex items-center justify-between w-full pt-8 border-t-2 border-brand-border text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-dark group-hover:text-brand-primary transition-colors mt-auto">
                    <span>Read Protocol</span>
                    <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <ArrowRight size={24} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upgraded Dark Mode Authority Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[64px] p-14 md:p-24 text-white text-center shadow-2xl relative overflow-hidden"
          >
            {/* Glowing background blurs for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">Need Expert Help?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-14 font-extrabold leading-relaxed text-lg md:text-xl">
                If your system is acting up and a manual guide isn't enough, our technicians are ready to assist. Secure your perimeter today.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-brand-primary text-white px-14 py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Book a Service
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}