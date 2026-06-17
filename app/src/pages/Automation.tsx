import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BatteryFull, Smartphone, Radio, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';

// Local Asset Imports
import auto1 from '../assets/auto-1.jpg';
import auto2 from '../assets/auto-2.jpg';
import auto3 from '../assets/auto-3.jpg';
import auto4 from '../assets/auto-4.jpg';

export default function Automation() {
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
              Smart Motors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Automation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              We provide professional automation for any gate or garage door system. Smart, reliable motors tailored to your specific safety and operational needs.
            </motion.p>
          </div>

          {/* Upgraded Dynamic 4-Grid Image Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-40 md:mb-48">
            {[
              { title: "Motor Types", desc: "Quiet belt driven or powerful chain driven motors available.", img: auto1 },
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
                className="group rounded-[60px] overflow-hidden border-4 border-white bg-brand-surface hover:border-brand-primary/40 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-12 md:p-14 flex-grow flex flex-col justify-center bg-brand-surface">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-slate text-lg font-extrabold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Specs Block */}
          <div className="bg-brand-dark rounded-[64px] p-14 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-5xl relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-20 text-white">Reliable Features.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {[
                  { icon: <Smartphone size={32} />, title: "Mobile Control", desc: "Open, close, or securely lock your systems using a simple smartphone app from anywhere in the world." },
                  { icon: <BatteryFull size={32} />, title: "Backup Battery", desc: "High-capacity deep-cycle batteries ensure our systems keep working flawlessly even during grid power outages." },
                  { icon: <Radio size={32} />, title: "Safety Beams", desc: "Active infrared sensors that instantly reverse the motor to prevent the door from closing on vehicles or pedestrians." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-8">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-white/80 text-base md:text-lg font-extrabold leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-24 mt-32 text-center bg-brand-surface rounded-[60px] border border-brand-border">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark mb-12">Ready for Smart Security?</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-14 py-7 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Upgrade Your System
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}