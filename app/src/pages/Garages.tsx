import React from 'react';
import { motion } from 'motion/react';
import { Warehouse, Shield, Wind, Sparkles, ChevronRight, Settings, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Local Asset Imports
import splitGarageDoors from '../assets/split-garage-doors.jpg';
import garage2 from '../assets/garage-2.jpg';
import garage3 from '../assets/garage-3.jpg';
import garage4 from '../assets/garage-4.jpg';

export default function Garages() {
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
              Premium Doors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              Expert<br />
              <span className="text-brand-primary">Garage Doors.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              We specialize in the installation and maintenance of all types of garage doors. We aim to supply low maintenance, high quality quiet and efficient garage doors at fair prices to withstand Cape Town's weather conditions and your design preferences.
            </motion.p>
          </div>

          {/* Upgraded Tactile Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-40 md:mb-48">
            {[
              { icon: <Warehouse size={32} />, title: "ANY DOOR TYPE", desc: "Decades of experience installing and repairing sectional, roll-up, and Tip-up doors." },
              { icon: <Settings size={32} />, title: "Smooth Tech", desc: "We utilize high-cycle torsion springs and precision nylon rollers for virtually silent, friction-free movement." },
              { icon: <Shield size={32} />, title: "Specialized Builds", desc: "Bespoke engineering for unique garage entrance requirements, ensuring perfect structural alignment." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 md:p-14 bg-gradient-to-br from-white to-brand-bg/50 rounded-[40px] border-4 border-brand-border hover:border-brand-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">{feature.title}</h3>
                <p className="text-brand-slate text-base md:text-lg font-extrabold leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Expert Installation Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-40 md:mb-48">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[60px] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-video relative group border-4 border-white"
            >
              <img 
                src={splitGarageDoors} 
                alt="Quality Split Garage Door Installation" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
              />
            </motion.div>
            
            <div className="space-y-14">
              <div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-brand-dark leading-none">Expert Installation.</h2>
                <p className="text-brand-slate text-lg md:text-xl font-extrabold leading-relaxed">
                  Our team handles everything from exact frame measurement to full motor automation. We ensure your garage door operates perfectly and securely right from day one.
                </p>
              </div>
              
              <ul className="space-y-8">
                {[
                  { label: "Detailed Assessment", detail: "Exact measurements to prevent future tracking issues." },
                  { label: "Battery Backup Included", detail: "Ensuring operation during load-shedding." },
                  { label: "High-Torque Motors", detail: "Heavy lifting power for large sectional doors." },
                  { label: "Direct Support", detail: "Talk directly to Ronnie for any technical queries." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <div className="w-3 h-3 rounded-full bg-brand-primary mt-2.5 shrink-0 shadow-sm" />
                    <div>
                      <span className="block text-brand-dark font-black uppercase tracking-[0.2em] text-xs md:text-sm mb-2">{item.label}</span>
                      <span className="block text-brand-slate text-base font-extrabold">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Gallery Integration */}
          <div className="mb-40 md:mb-48">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-brand-border pb-10">
              <div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark mb-6">Our Work.</h2>
                <p className="text-brand-slate text-lg md:text-xl font-extrabold">A selection of our recent garage door installations.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[garage2, garage3, garage4].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-xl border-4 border-white hover:border-brand-primary/40 transition-all duration-500 relative group"
                >
                  <img src={img} alt={`Garage project ${i + 2}`} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-24 text-center bg-brand-surface rounded-[60px] border border-brand-border">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-12">Ready to upgrade your property?</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-14 py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Book an Installation
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}