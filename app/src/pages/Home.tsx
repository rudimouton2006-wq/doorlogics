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

// Ronni's New Image Additions
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
      {/* Hero Section - Rebuilt for Central Garage Door */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-white text-center">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full flex flex-col items-center"
          >
            <span className="inline-block text-xs md:text-sm font-black uppercase tracking-[0.4em] text-brand-slate mb-8">
              Established 1991 • Quality Engineering
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[8vw] font-black text-brand-dark leading-[0.85] mb-10 uppercase tracking-tighter">
              Expert<br />
              <span className="text-brand-primary">Garage Doors.</span>
            </h1>

            {/* Garage Door In Middle (Ronni's Edit) */}
            <div className="w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white mb-10 relative group">
              <img 
                src={heroGarageDoor} 
                alt="Expert Garage Doors" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>

            {/* Added Perimeter & Access Control Copy */}
            <p className="text-lg md:text-2xl text-brand-slate max-w-3xl mb-14 leading-relaxed font-extrabold">
              Simple, professional solutions designed for your convenience and safety. We specialize in <span className="text-brand-primary">all types of perimeter property access</span> and <span className="text-brand-primary">all types of access control.</span>
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-brand-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-center"
              >
                Request a Quote
              </Link>
              <a
                href="tel:0834001919"
                className="flex items-center justify-center gap-3 px-8 md:px-12 py-5 md:py-6 border-4 border-brand-dark text-brand-dark rounded-full hover:bg-brand-secondary hover:border-brand-secondary hover:text-white transition-all font-black text-xs md:text-sm uppercase tracking-[0.3em] group active:scale-95"
              >
                <ShieldAlert size={20} className="text-brand-secondary group-hover:text-white transition-colors" />
                Emergency Help
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simplified Category Grid */}
      <section className="py-32 md:py-40 bg-white border-t border-brand-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-8">
              Our Services.
            </h2>
            <p className="text-brand-slate text-lg md:text-xl font-extrabold leading-relaxed">
              Professional installation and repairs for all types of perimeter property access. Built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                className="group relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-xl border-4 border-white hover:border-brand-primary/50 transition-all duration-500"
              >
                <Link to={service.href} className="block w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group-hover:text-brand-primary transition-colors">
                      Explore Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Trust Section */}
      <section className="py-32 md:py-40 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-14 uppercase tracking-tighter leading-[0.9] text-brand-dark">
                Reliability<br />by Design.
              </h2>
              <div className="space-y-12">
                {[
                  { label: "Expert Repairs", text: "We repair all brands of garage door and gate operator brands ( old or new ) efficiently to minimize your downtime and expense." },
                  { label: "Custom Builds", text: "Bespoke gate and fencing manufacturing tailored exactly to your property's dimensions and aesthetics." },
                  { label: "Direct Support", text: "Speak directly to an expert for immediate technical guidance. No call centers, just real help." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 items-start">
                    <div className="text-brand-primary font-black text-3xl md:text-4xl opacity-40 leading-none pt-1">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-black uppercase tracking-widest mb-3 text-brand-dark">
                        {item.label}
                      </h4>
                      <p className="text-brand-slate text-base md:text-lg font-bold leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative border-4 border-white"
            >
              <img 
                src={homeTrustReliability} 
                alt="Expertise and Reliability" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Mini Gallery Section */}
      <section className="py-32 md:py-40 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 border-b border-white/10 pb-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Featured Portfolio.
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-extrabold leading-relaxed">
                A curated selection of our bespoke installations, showcasing our absolute versatility across different materials and architectural styles.
              </p>
            </div>
            <Link 
              to="/garages" 
              className="shrink-0 text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-primary hover:text-white transition-colors flex items-center gap-3 py-4"
            >
              View Capabilities <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { img: gallery1, title: "Horizontal Timber", category: "Garage Doors" },
              { img: gallery2, title: "Aluzinc Charcoal", category: "Garage Doors" },
              { img: steelPalisade, title: "Steel Palisade", category: "Perimeter Security" }, // Steel Palisade swapped in here
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
                className="group relative aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden border-2 border-white/10 bg-white/5"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-brand-primary text-xs font-black uppercase tracking-widest mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight leading-none">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer Call to Action */}
      <section className="py-40 md:py-60 bg-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-brand-dark">
              Let's talk.
            </h2>
            <Link 
              to="/contact"
              className="inline-block bg-brand-primary text-white px-14 py-7 rounded-full font-black text-sm md:text-base uppercase tracking-[0.4em] hover:bg-brand-dark transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}