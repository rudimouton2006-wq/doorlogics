import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// Primary Service Assets
import homeServiceGate from '../assets/home-service-gate.jpg';
import homeServiceGarage from '../assets/home-service-garage.jpg';
import homeServiceMotor from '../assets/home-service-motor.jpg';
import homeServiceFence from '../assets/home-service-fence.jpg';
import homeTrustReliability from '../assets/home-trust-reliability.jpg';

// Mini Gallery Assets
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Driveway Gates", href: "/gates", img: homeServiceGate },
              { title: "Garage Doors", href: "/garages", img: homeServiceGarage },
              { title: "Motor Repairs", href: "/automation", img: homeServiceMotor },
              { title: "Secure Fencing", href: "/fencing", img: homeServiceFence }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-lg border-2 border-brand-border hover:border-brand-primary/30 transition-all duration-500"
              >
                <Link to={service.href} className="block w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
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
              className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative border-2 border-brand-border"
            >
              <img 
                src={homeTrustReliability} 
                alt="Expertise and Reliability" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Mini Gallery Section */}
      <section className="py-40 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Featured Portfolio.
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-bold leading-relaxed">
                A curated selection of our bespoke installations, showcasing our versatility across different materials and architectural styles.
              </p>
            </div>
            <Link 
              to="/garages" 
              className="shrink-0 pb-2 text-[11px] font-black uppercase tracking-[0.4em] text-brand-primary hover:text-white transition-colors flex items-center gap-2"
            >
              View Capabilities <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: gallery1, title: "Horizontal Timber", category: "Garage Doors" },
              { img: gallery2, title: "Aluzinc Charcoal", category: "Garage Doors" },
              { img: gallery3, title: "Steel & Timber Insert", category: "Sliding Gates" },
              { img: gallery4, title: "Vertical Slatted Timber", category: "Sliding Gates" },
              { img: gallery5, title: "Victorian Security", category: "Pedestrian Gates" },
              { img: gallery6, title: "Timber Victorian", category: "Swing Gates" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 bg-white/5"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-brand-primary text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
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