import React, { useState, useEffect, memo } from 'react';
import { createPortal } from 'react-dom'; // 🚀 ADDED PORTAL IMPORT
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Lock, Grid, ArrowRight, ShieldCheck, Cpu, Smartphone, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Cinematic Asset Imports (For Layout)
import heroGate from '../assets/gate-estate-timber-wide.jpg';
import gateSliding from '../assets/gate-vertical-timber.jpg';
import gateSwing from '../assets/gate-wrought-iron-estate.jpg';
import gateSecurity from '../assets/gate-silver-palisade.jpg';
import gateCustom from '../assets/gate-architectural-circle.jpg';
import gatePedestrian from '../assets/gate-ped-horizontal-slat.jpg';
import gateTimber from '../assets/gate-timber-arched-swing.jpg';

// Complete Portfolio Archive
import p1 from '../assets/gate-silver-sliding-circle.jpg';
import p2 from '../assets/gate-black-steel-arched.jpg';
import p3 from '../assets/gate-timber-sliding-windows.jpg';
import p4 from '../assets/gate-steel-timber-horizontal.jpg';
import p5 from '../assets/gate-timber-vertical-framed.jpg';
import p6 from '../assets/gate-steel-timber-studded.jpg';
import p7 from '../assets/gate-steel-timber-studded-angle.jpg';
import p8 from '../assets/gate-timber-vertical-solid.jpg';
import p9 from '../assets/gate-timber-diagonal-split.jpg';
import p10 from '../assets/gate-white-steel-ornate.jpg';
import p11 from '../assets/gate-white-steel-ornate-close.jpg';
import p12 from '../assets/gate-steel-timber-wave.jpg';
import p13 from '../assets/gate-timber-diagonal-sliding.jpg';
import p14 from '../assets/gate-timber-vertical-wide.jpg';
import p15 from '../assets/gate-galvanized-timber-sliding.jpg';
import p16 from '../assets/gate-white-slatted-pedestrian.jpg';
import p17 from '../assets/gate-galvanized-installation.jpg';
import p18 from '../assets/gate-timber-horizontal-wide.jpg';
import p19 from '../assets/gate-pedestrian-timber-horizontal.jpg';
import p20 from '../assets/gate-pedestrian-timber-rustic.jpg';
import p21 from '../assets/gate-pedestrian-timber-diagonal-split.jpg';
import p22 from '../assets/gate-pedestrian-timber-tall.jpg';
import p23 from '../assets/gate-pedestrian-galvanized-ornate.jpg';
import p24 from '../assets/gate-pedestrian-timber-wave.jpg';
import p25 from '../assets/gate-pedestrian-timber-horizontal-slats.jpg';
import p26 from '../assets/gate-pedestrian-white-vertical.jpg';
import p27 from '../assets/gate-timber-antique-carved.jpg';
import p28 from '../assets/gate-pedestrian-timber-horizontal-wall.jpg';
import p29 from '../assets/gate-timber-swing-split.jpg';
import p30 from '../assets/gate-timber-swing-ornate-frame.jpg';

// ⚡️ PERFORMANCE UPGRADE: Validated static arrays outside the component
const catalogueItems = [
  { img: p1, title: "Silver Architectural Sliding" },
  { img: p2, title: "Black Steel Arched" },
  { img: p3, title: "Solid Timber with Cutouts" },
  { img: p4, title: "Steel Frame Horizontal Timber" },
  { img: p5, title: "Vertical Timber Cross-Braced" },
  { img: p6, title: "Studded Steel & Timber" },
  { img: p7, title: "Studded Steel Sliding System" },
  { img: p8, title: "Solid Vertical Timber" },
  { img: p9, title: "Diagonal Timber & Steel Base" },
  { img: p10, title: "White Ornate Steel Sliding" },
  { img: p11, title: "White Ornate Detail" },
  { img: p12, title: "Curved Wave Timber Design" },
  { img: p13, title: "Fully Clad Diagonal Timber" },
  { img: p14, title: "Wide Vertical Timber Base" },
  { img: p15, title: "Heavy Galvanized Timber" },
  { img: p16, title: "White Horizontal Pedestrian" },
  { img: p17, title: "Custom On-Site Welding" },
  { img: p18, title: "Horizontal Nutec Boundary" },
  { img: p19, title: "Timber Pedestrian Windows" },
  { img: p20, title: "Rustic Vertical Timber Swing" },
  { img: p21, title: "Diagonal Split Pedestrian" },
  { img: p22, title: "Tall Horizontal Timber" },
  { img: p23, title: "Galvanized Ornate Pedestrian" },
  { img: p24, title: "Curved Wave Pedestrian" },
  { img: p25, title: "Seamless Slatted Pedestrian" },
  { img: p26, title: "White Vertical Pedestrian" },
  { img: p27, title: "Antique Carved Timber Doors" },
  { img: p28, title: "Boundary Wall Pedestrian" },
  { img: p29, title: "Split Timber & Steel Swing" },
  { img: p30, title: "Ornate Border Timber Swing" }
];

const specs = [
  { icon: <Zap size={24} />, title: "High-Speed", desc: "Operating at up to 36m/min to minimize perimeter vulnerability windows during entry and exit." },
  { icon: <Lock size={24} />, title: "Anti-Lift", desc: "Proprietary galvanized bracket systems designed specifically to eliminate forced-entry lifting." },
  { icon: <Grid size={24} />, title: "Custom Clad", desc: "Clearview, Nutec, or architectural timber cladding engineered to match your aesthetics." },
];

const gateStyles = [
  { title: "Sliding Timber", desc: "Heavy-duty steel frame with premium hardwood cladding.", img: gateSliding },
  { title: "Classic Swing", desc: "Elegant wrought iron and timber double swing configurations.", img: gateSwing },
  { title: "High Security", desc: "Galvanized steel palisade designed for ultimate perimeter defense.", img: gateSecurity },
  { title: "Architectural", desc: "Bespoke geometric designs to perfectly match your property's exterior.", img: gateCustom },
  { title: "Pedestrian Access", desc: "Secure, stylized walkway gates with integrated access control.", img: gatePedestrian },
  { title: "Arched Timber", desc: "Solid hardwood swing gates with custom arched galvanized frames.", img: gateTimber },
];

// ⚡️ PERFORMANCE UPGRADE: Extracted hidden array from the render loop
const authorityFeatures = [
  { icon: <ShieldCheck size={28} />, title: "Heavy Duty", desc: "We use thicker steel extrusions for superior durability and uncompromising security." },
  { icon: <Cpu size={28} />, title: "Fast Motors", desc: "High-speed Centurion and ET NICE motors to minimize wait times at your entrance." },
  { icon: <Smartphone size={28} />, title: "Smart Access", desc: "Open your gate via smartphone, GSM intercom, or secure remote from anywhere." }
];

// ⚡️ PERFORMANCE UPGRADE: React.memo()
// Locks the massive background layout in memory while the Lightbox modal state changes.
const Gates = memo(function Gates() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % catalogueItems.length : null));
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + catalogueItems.length) % catalogueItems.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Zero-Latency Image Preloading
  useEffect(() => {
    if (selectedIndex !== null) {
      const nextIdx = (selectedIndex + 1) % catalogueItems.length;
      const prevIdx = (selectedIndex - 1 + catalogueItems.length) % catalogueItems.length;
      
      const preloadNext = new Image();
      preloadNext.src = catalogueItems[nextIdx].img;
      
      const preloadPrev = new Image();
      preloadPrev.src = catalogueItems[prevIdx].img;
    }
  }, [selectedIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % catalogueItems.length : null));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + catalogueItems.length) % catalogueItems.length : null));
  };

  return (
    <PageTransition>
      {/* HERO SECTION - CINEMATIC & SOFT */}
      <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img 
            src={heroGate} 
            alt="Premium Estate Driveway Gates" 
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-full object-cover object-center opacity-85 will-change-transform" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full flex flex-col items-center will-change-transform will-change-opacity"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 md:mb-12 shadow-lg will-change-transform"
            >
              <CheckCircle2 size={14} className="text-brand-primary" />
              Driveway Solutions
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Mastercrafted<br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Entrance Gates.</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium">
              We design and build bespoke sliding and swing gates that seamlessly combine absolute security with stunning architectural elegance. Every gate is made to order.
            </p>

            <button
              onClick={() => setSelectedIndex(0)}
              className="bg-brand-primary text-white px-10 md:px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto will-change-transform"
            >
              <Grid size={18} />
              Explore Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* SPEC CARDS - BREATHABLE & ROUNDED */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 md:p-14 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left will-change-transform will-change-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                  {spec.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-brand-dark">
                  {spec.title}
                </h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC GALLERY MATRIX - SOFT & HIGH-END */}
      <section className="py-24 md:py-32 bg-brand-bg rounded-[40px] md:rounded-[80px] mx-4 md:mx-8 mb-24 md:mb-32 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              Design Capabilities
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              Explore our diverse range of custom gate configurations. From heavy-duty steel palisades to premium slatted timber sliding systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {gateStyles.map((gate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedIndex(0)}
                className="group relative h-[400px] w-full rounded-[40px] overflow-hidden bg-brand-surface shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer will-change-transform will-change-opacity"
              >
                <img 
                  src={gate.img} 
                  alt={gate.title} 
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 will-change-transform" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                  <h3 className="text-white text-2xl font-black tracking-tight mb-3">
                    {gate.title}
                  </h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed mb-0">
                    {gate.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setSelectedIndex(0)}
              className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-3 will-change-transform"
            >
              <Grid size={18} />
              View Complete Archive ({catalogueItems.length})
            </button>
          </div>
        </div>
      </section>

      {/* AUTHORITY BLOCK - SOFT DARK MODE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark rounded-[40px] md:rounded-[80px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl will-change-transform will-change-opacity"
          >
            {/* Soft background glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-16 leading-[1.05]">
                Why Work<br />With Us.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                {authorityFeatures.map((item, i) => (
                  <div key={i} className="flex flex-col items-start bg-white/5 p-8 rounded-[30px] border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 shadow-inner">
                      {item.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black tracking-tight mb-4">{item.title}</h4>
                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA SECTION - GLOWING & ROUNDED */}
      <section className="py-24 md:py-40 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-brand-bg rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden will-change-transform will-change-opacity"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Secure Your Perimeter.
              </h2>
              <p className="text-brand-slate text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Ready to upgrade your property's entrance? Let's design the perfect gate solution.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all duration-300 shadow-xl will-change-transform"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚀 FIXED FULLSCREEN LIGHTBOX MODAL VIA PORTAL */}
      {createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-2xl p-4 md:p-10 will-change-opacity"
              onClick={() => setSelectedIndex(null)}
            >
              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 will-change-transform"
                  aria-label="Close Gallery"
                >
                  <X size={24} />
                </button>

                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 hidden md:block will-change-transform"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* 🚀 PERFECT CENTERING WRAPPER */}
                <div className="w-full h-full max-w-7xl max-h-[85vh] flex flex-col items-center justify-center md:px-24">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      src={catalogueItems[selectedIndex].img}
                      alt={catalogueItems[selectedIndex].title}
                      decoding="async"
                      draggable="false"
                      className="w-full h-full object-contain drop-shadow-2xl rounded-[20px] will-change-transform will-change-opacity"
                    />
                  </AnimatePresence>
                </div>

                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 hidden md:block will-change-transform"
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-6 md:bottom-10 w-full z-50 flex flex-col md:flex-row items-center justify-center gap-4 px-4">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePrev} className="md:hidden p-3 rounded-full bg-white/10 border border-white/20 text-white active:bg-brand-primary transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    
                    <div className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest text-center backdrop-blur-md shadow-lg max-w-[70vw] truncate">
                      <span className="text-brand-primary mr-3">{selectedIndex + 1}/{catalogueItems.length}</span>
                      {catalogueItems[selectedIndex].title}
                    </div>

                    <button onClick={handleNext} className="md:hidden p-3 rounded-full bg-white/10 border border-white/20 text-white active:bg-brand-primary transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </PageTransition>
  );
});

Gates.displayName = 'Gates';

export default Gates;