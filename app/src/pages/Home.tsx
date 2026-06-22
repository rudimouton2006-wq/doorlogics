import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// Primary Service Assets
import homeServiceGate from '../assets/home-service-gate.jpg';
import splitGarageDoors from '../assets/split-garage-doors.jpg';
import gateMotorCorrect from '../assets/gate-motor-correct.jpg';
import clearvuFence from '../assets/clearvu-fence.jpg';
import homeServiceRepairs from '../assets/home-service-repairs.jpg';
import homeServiceRemotes from '../assets/home-service-remotes.jpg';
import homeTrustReliability from '../assets/home-trust-reliability.jpg';

// Premium Image Additions
import heroGarageDoor from '../assets/hero-garage-door.jpg'; 
import steelPalisade from '../assets/steel-palisade.jpg'; 

// Mini Gallery Assets
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import galleryVictorian from '../assets/gallery-victorian.jpg';

export default function Home() {
  return (
    <PageTransition>
      {/* 
        HERO SECTION - STARK & MINIMALIST
      */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center">
        
        {/* Full Screen Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroGarageDoor} 
            alt="Expert Garage Doors" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Flawless, solid dark overlay for ultimate text contrast */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Foreground Content Layer */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full flex flex-col items-center"
          >
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-white/70 mb-8">
              Established 1991 • Engineering Excellence
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-black text-white leading-[0.9] mb-10 uppercase tracking-tighter">
              Expert<br />
              <span className="text-brand-primary">Garage Doors.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-14 leading-relaxed font-medium">
              Professional solutions designed for absolute convenience and safety. Specializing in all types of perimeter property access and high-end access control.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-12 py-5 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-colors duration-300"
              >
                Request a Quote
              </Link>
              <a
                href="tel:0834001919"
                className="flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-brand-dark transition-colors duration-300 font-black text-[11px] uppercase tracking-[0.3em] group backdrop-blur-sm"
              >
                <ShieldAlert size={16} className="text-brand-primary group-hover:text-brand-dark transition-colors" />
                Emergency Help
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID - ULTRA CLEAN GEOMETRY */}
      <section className="py-32 md:py-48 bg-white border-t border-brand-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8">
              Our Services.
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-xl">
              Professional installation and repairs for all types of perimeter property access. Engineered and built to last without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Driveway Gates", href: "/gates", img: homeServiceGate },
              { title: "Garage Doors", href: "/garages", img: splitGarageDoors },
              { title: "Secure Fencing", href: "/fencing", img: clearvuFence },
              { title: "Automation", href: "/automation", img: gateMotorCorrect },
              { title: "Repairs", href: "/support", img: homeServiceRepairs },
              { title: "Remotes", href: "/support", img: homeServiceRemotes }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-surface border border-brand-border/50"
              >
                <Link to={service.href} className="block w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      Explore Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELIABILITY SECTION - EDITORIAL STYLING */}
      <section className="py-32 md:py-48 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pr-0 lg:pr-12"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter leading-[0.95] text-brand-dark">
                Reliability<br />by Design.
              </h2>
              <div className="space-y-0">
                {[
                  { label: "Expert Repairs", text: "We repair all garage door and gate operator brands efficiently to minimize downtime and expense." },
                  { label: "Custom Builds", text: "Bespoke gate and fencing manufacturing tailored strictly to your property's dimensions and aesthetics." },
                  { label: "Direct Support", text: "Speak directly to an expert for immediate technical guidance. No call centers, just real help." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start border-t border-brand-border py-8">
                    <div className="text-brand-primary font-black text-[11px] tracking-[0.2em] mt-1.5">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-3 text-brand-dark">
                        {item.label}
                      </h4>
                      <p className="text-brand-slate text-base font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden bg-brand-border/30"
            >
              <img 
                src={homeTrustReliability} 
                alt="Expertise and Reliability" 
                className="w-full h-full object-cover object-center grayscale-[30%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION - HIGH CONTRAST */}
      <section className="py-32 md:py-48 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Portfolio.
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed">
                A curated selection of bespoke installations showcasing absolute versatility and engineering precision.
              </p>
            </div>
            <Link 
              to="/garages" 
              className="shrink-0 text-[11px] font-black uppercase tracking-[0.3em] text-white border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors flex items-center gap-3"
            >
              View Capabilities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: gallery1, title: "Horizontal Timber", category: "Garage Doors" },
              { img: gallery2, title: "Aluzinc Charcoal", category: "Garage Doors" },
              { img: steelPalisade, title: "Steel Palisade", category: "Perimeter Security" },
              { img: gallery4, title: "Vertical Slatted Timber", category: "Sliding Gates" },
              { img: galleryVictorian, title: "Victorian Security", category: "Pedestrian Gates" },
              { img: gallery3, title: "Steel & Timber Insert", category: "Sliding Gates" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden bg-black"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="block text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-white text-xl font-black uppercase tracking-tight leading-none">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - RAW MINIMALISM */}
      <section className="py-40 md:py-56 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-brand-dark">
              Let's Talk.
            </h2>
            <Link 
              to="/contact"
              className="inline-block bg-brand-dark text-white px-14 py-6 font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
            >
              Initiate Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}