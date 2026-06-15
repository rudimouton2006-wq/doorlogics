import React from 'react';
import { motion } from 'motion/react';
import { Warehouse, Shield, Wind, Sparkles, ChevronRight, Settings, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Local Asset Imports
import garage1 from '../assets/garage-1.jpg';
import garage2 from '../assets/garage-2.jpg';
import garage3 from '../assets/garage-3.jpg';
import garage4 from '../assets/garage-4.jpg';

export default function Garages() {
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
              Premium Doors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              Expert<br />
              <span className="text-brand-primary">Garage Doors.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              We specialize in sectional doors, roll-ups, and specialized repairs for any door type. Built for silent operation, maximum security, and Cape Town's exact weather conditions.
            </motion.p>
          </div>

          {/* Upgraded Tactile Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40">
            {[
              { icon: <Warehouse size={28} />, title: "Any Door Type", desc: "Decades of experience installing and repairing sectional, roll-up, and classic traditional timber doors." },
              { icon: <Settings size={28} />, title: "Smooth Tech", desc: "We utilize high-cycle torsion springs and precision nylon rollers for virtually silent, friction-free movement." },
              { icon: <Shield size={28} />, title: "Specialized Builds", desc: "Bespoke engineering for unique garage entrance requirements, ensuring perfect structural alignment." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gradient-to-br from-white to-brand-bg/50 rounded-[40px] border-2 border-brand-border hover:border-brand-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{feature.title}</h3>
                <p className="text-brand-slate text-base font-bold leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Expert Installation Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[60px] overflow-hidden shadow-2xl aspect-square md:aspect-video relative group"
            >
              <img 
                src={garage1} 
                alt="Quality Garage Door Installation" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
            </motion.div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-brand-dark">Expert Installation.</h2>
                <p className="text-brand-slate text-lg font-bold leading-relaxed">
                  Our team handles everything from exact frame measurement to full motor automation. We ensure your garage door operates perfectly and securely right from day one.
                </p>
              </div>
              
              <ul className="space-y-6">
                {[
                  { label: "Detailed Assessment", detail: "Exact measurements to prevent future tracking issues." },
                  { label: "Battery Backup Included", detail: "Ensuring operation during load-shedding." },
                  { label: "High-Torque Motors", detail: "Heavy lifting power for large sectional doors." },
                  { label: "Direct Support", detail: "Talk directly to Ronnie for any technical queries." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <div>
                      <span className="block text-brand-dark font-black uppercase tracking-widest text-[11px] mb-1">{item.label}</span>
                      <span className="block text-brand-slate text-sm font-bold">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Gallery Integration */}
          <div className="mb-40">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-4">Our Work.</h2>
                <p className="text-brand-slate text-lg font-bold">A selection of our recent garage door installations.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[garage2, garage3, garage4].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[40px] overflow-hidden aspect-square relative group"
                >
                  <img src={img} alt={`Garage project ${i + 2}`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-20 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-dark mb-10">Ready to upgrade your property?</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Book an Installation
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}