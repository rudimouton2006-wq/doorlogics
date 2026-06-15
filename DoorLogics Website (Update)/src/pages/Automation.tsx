import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BatteryFull, Smartphone, Radio, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';

export default function Automation() {
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
              Smart Motors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              Any Style of<br />
              <span className="text-brand-primary">Automation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              We provide professional automation for any gate or garage door system. Smart, reliable motors tailored to your specific safety and operational needs.
            </motion.p>
          </div>

          {/* Premium Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
            {[
              { 
                title: "Gate Automation", 
                desc: "Powerful, high-speed sliding and swing gate motors from leading manufacturers, designed for heavy-duty cycles.",
                img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format"
              },
              { 
                title: "Garage Motors", 
                desc: "Quiet, belt-driven operators for sectional, roll-up and tip-up doors with advanced anti-crush safety protocols.",
                img: "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?auto=format"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[60px] overflow-hidden border-2 border-brand-border bg-white hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-[400px] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="p-12 flex-grow flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-slate text-lg font-bold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upgraded "Dark Mode" Tech Specs Block */}
          <div className="bg-brand-dark rounded-[64px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-4xl relative z-10">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-white">Reliable Features.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Smartphone size={24} />, title: "Mobile Control", desc: "Open, close, or securely lock your systems using a simple smartphone app from anywhere in the world." },
                  { icon: <BatteryFull size={24} />, title: "Backup Battery", desc: "High-capacity deep-cycle batteries ensure our systems keep working flawlessly even during grid power outages." },
                  { icon: <Radio size={24} />, title: "Safety Beams", desc: "Active infrared sensors that instantly reverse the motor to prevent the door from closing on vehicles or pedestrians." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-white/60 text-sm font-bold leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Call To Action */}
          <div className="py-32 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-dark mb-10">Ready for Smart Security?</h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Upgrade Your System
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}