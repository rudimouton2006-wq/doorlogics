import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BatteryFull, Smartphone, Radio, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Local Asset Imports
import newMotor from '../assets/new-motor.jpg'; // Ronni's new photo
import auto2 from '../assets/auto-2.jpg';
import auto3 from '../assets/auto-3.jpg';
import auto4 from '../assets/auto-4.jpg';

export default function Automation() {
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
              Smart Motors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Automation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              We provide professional automation for any gate or garage door system. Smart, reliable motors tailored to your specific safety and operational needs.
            </motion.p>
          </div>

          {/* 4-GRID IMAGE MATRIX - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 md:mb-56">
            {[
              { title: "High speed motors", desc: "ET NICE motors delivering lightning-fast, reliable execution for any gate weight.", img: newMotor },
              { title: "Heavy Sliding Gates", desc: "High-torque industrial motors designed to swiftly move extra-wide and heavy driveway gates.", img: auto2 },
              { title: "Security Integration", desc: "Motors and accessories available for your specific safety and security requirements.", img: auto3 },
              { title: "Swing Gate Motors", desc: "Synchronized dual-arm rams built for perfectly opening heavy swing gates.", img: auto4 }
            ].map((item, i) => (
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
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                </div>
                <div className="p-10 md:p-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AUTHORITY BLOCK - HIGH CONTRAST MINIMALISM */}
          <div className="bg-brand-dark p-14 md:p-24 text-white relative overflow-hidden">
            <div className="max-w-5xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-[0.95]">
                Reliable<br />Features.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-white/10 pt-16">
                {[
                  { icon: <Smartphone size={28} />, title: "Mobile + ET Remote", desc: "Open, close, or securely lock your systems using a smartphone app or ET Remotes from anywhere." },
                  { icon: <BatteryFull size={28} />, title: "Backup Battery", desc: "High-capacity deep-cycle batteries ensure our systems keep working flawlessly even during grid power outages." },
                  { icon: <Radio size={28} />, title: "Safety Beams", desc: "Active infrared sensors that instantly reverse the motor to prevent the door from closing on vehicles or pedestrians." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-8">
                    <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-brand-primary">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-black uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA SECTION - RAW MINIMALISM */}
          <section className="py-24 border-t border-brand-border/30 mt-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-brand-dark">
                Ready for Smart Security?
              </h2>
              <Link 
                to="/contact"
                className="inline-block bg-brand-dark text-white px-12 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
              >
                Upgrade Your System
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}