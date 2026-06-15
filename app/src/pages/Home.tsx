import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.6em] text-brand-slate mb-8">
                Established 1991 • Quality Engineering
              </span>
              <h1 className="text-[14vw] lg:text-[10vw] font-black text-brand-dark leading-[0.8] mb-12 uppercase tracking-tighter">
                Expert<br />
                <span className="text-brand-primary">Security.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-slate max-w-2xl mb-16 leading-relaxed font-bold">
                We build and maintain high-quality gates and garage doors. Simple, professional solutions designed for your property's safety.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="bg-brand-primary text-white px-12 py-6 rounded-full font-black text-[12px] uppercase tracking-[0.4em] hover:bg-brand-dark transition-all shadow-2xl hover:-translate-y-1"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:0834001919"
                  className="flex items-center gap-3 px-10 py-6 border-2 border-brand-dark text-brand-dark rounded-full hover:bg-brand-secondary hover:border-brand-secondary hover:text-white transition-colors font-black text-[12px] uppercase tracking-[0.4em] group"
                >
                  <ShieldAlert size={16} className="text-brand-secondary group-hover:text-white transition-colors" />
                  Emergency Help
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Background Element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-surface skew-x-12 translate-x-20 z-0 pointer-events-none hidden lg:block" />
      </section>

      {/* Simplified Category Grid */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-8">
              Our Services.
            </h2>
            <p className="text-brand-slate text-xl font-bold">
              Professional installation and repairs for all types of perimeter property access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Driveway Gates", href: "/gates", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format" },
              { title: "Garage Doors", href: "/garages", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format" },
              { title: "Motor Repairs", href: "/automation", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format" },
              { title: "Secure Fencing", href: "/fencing", img: "https://images.unsplash.com/photo-1585255318111-d1c92500c58e?auto=format" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[40px] overflow-hidden"
              >
                <Link to={service.href} className="block w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-10 left-10">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-[8px] font-black uppercase tracking-[0.3em]">
                      Explore Details <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Trust Section */}
      <section className="py-40 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-black mb-12 uppercase tracking-tighter leading-[0.9]">
                Reliability<br />by Design.
              </h2>
              <div className="space-y-12">
                {[
                  { label: "Expert Repairs", text: "We fix all major brands of gate and garage motors efficiently." },
                  { label: "Custom Builds", text: "Bespoke gate manufacturing tailored to your property aesthetics." },
                  { label: "Direct Support", text: "Speak directly to an expert for immediate technical guidance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="text-brand-primary font-black text-2xl opacity-20">0{i+1}</div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-2">{item.label}</h4>
                      <p className="text-brand-slate text-sm font-bold leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format" 
                alt="Expertise" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple Footer Call to Action */}
      <section className="py-60 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-7xl font-black mb-16 uppercase tracking-tighter">
              Let's talk.
            </h2>
            <Link 
              to="/contact"
              className="inline-block bg-brand-primary text-white px-16 py-8 rounded-full font-black text-[12px] uppercase tracking-[0.5em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}