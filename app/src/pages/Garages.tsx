import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Warehouse, Shield, Settings, X, ChevronRight, ChevronLeft, ArrowRight, Grid } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Primary Assets
import splitGarageDoors from '../assets/split-garage-doors.jpg';
import garage2 from '../assets/garage-2.jpg';
import garage3 from '../assets/garage-3.jpg';
import garage4 from '../assets/garage-4.jpg';

// Technical Catalogue Assets
import gAluzincWhite from '../assets/g-aluzinc-white.jpg';
import gAluzincBrown from '../assets/g-aluzinc-brown.jpg';
import gDiagonalMeranti from '../assets/g-diagonal-meranti.jpg';
import gTimberSlatted1 from '../assets/g-timber-slatted-1.jpg';
import gCorotexBrown from '../assets/g-corotex-brown.jpg';
import gFibreClassic from '../assets/g-fibre-classic.jpg';
import gFibreRegency from '../assets/g-fibre-regency.jpg';
import gMerantiRaised from '../assets/g-meranti-raised.jpg';
import gTimberSlatted2 from '../assets/g-timber-slatted-2.jpg';
import gModernTimber from '../assets/g-modern-timber.jpg';
import gAlphenTipup from '../assets/g-alphen-tipup.jpg';
import gAluminiumWhite from '../assets/g-aluminium-white.jpg';
import gAluzincBrownStrip from '../assets/g-aluzinc-brown-strip.jpg';
import gAluzincCharcoal from '../assets/g-aluzinc-charcoal.jpg';
import gRusticMeranti from '../assets/g-rustic-meranti.jpg';

// The Ultimate Consolidated Gallery
const catalogueItems = [
  { img: gModernTimber, title: "Modern Horizontal Timber" },
  { img: splitGarageDoors, title: "Premium Split Timber" },
  { img: garage2, title: "Aluzinc Charcoal Sectional" },
  { img: garage3, title: "Horizontal Slatted Timber" },
  { img: garage4, title: "Modern Flush Panel" },
  { img: gAluzincWhite, title: "Aluzinc White" },
  { img: gAluzincBrown, title: "Aluzinc Brown Horizontal" },
  { img: gDiagonalMeranti, title: "Diagonal Meranti" },
  { img: gTimberSlatted1, title: "Timber Slatted 16x88mm" },
  { img: gCorotexBrown, title: "Corotex Brown Slatted" },
  { img: gFibreClassic, title: "Fibre Glass Classic" },
  { img: gFibreRegency, title: "Fibre Glass Regency" },
  { img: gMerantiRaised, title: "Meranti Raised 20 Block" },
  { img: gTimberSlatted2, title: "Timber Slatted 16x132mm" },
  { img: gAlphenTipup, title: "Alphen Tip-up" },
  { img: gAluminiumWhite, title: "Aluminium White Strip" },
  { img: gAluzincBrownStrip, title: "Aluzinc Brown Strip" },
  { img: gAluzincCharcoal, title: "Aluzinc Charcoal Strip" },
  { img: gRusticMeranti, title: "Rustic Meranti Sectional" }
];

export default function Garages() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // Keyboard navigation for the Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % catalogueItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + catalogueItems.length) % catalogueItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      <div className="bg-white min-h-screen">
        
        {/* HERO SECTION - MASSIVE BACKGROUND INTEGRATION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center">
          {/* Full Screen Premium Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={gModernTimber} 
              alt="Premium Modern Timber Garage Door" 
              className="w-full h-full object-cover object-center" 
            />
            {/* Dark Gradient Overlay for perfect text legibility */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>

          {/* Foreground Content */}
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full flex flex-col items-center"
            >
              <span className="inline-block text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/70 mb-8">
                Premium Grade Doors
              </span>
              
              <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-black text-white leading-[0.9] mb-10 uppercase tracking-tighter">
                Expert<br />
                <span className="text-brand-primary">Garage Doors.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-14 leading-relaxed font-medium">
                We specialize in the installation and maintenance of all types of garage doors. Engineered to withstand Cape Town's exact weather conditions while matching your architectural design preferences.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setSelectedIndex(0)}
                  className="bg-brand-primary text-white px-10 py-5 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-colors duration-300 flex items-center gap-3"
                >
                  <Grid size={16} />
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6 pt-32 md:pt-48">
          {/* FEATURE CARDS - GEOMETRIC & FLAT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 md:mb-56">
            {[
              { icon: <Warehouse size={24} />, title: "ANY DOOR TYPE", desc: "Decades of experience installing and repairing sectional, roll-up, and Tip-up doors." },
              { icon: <Settings size={24} />, title: "Smooth Tech", desc: "We utilize high-cycle torsion springs and precision nylon rollers for virtually silent, friction-free movement." },
              { icon: <Shield size={24} />, title: "Specialized Builds", desc: "Bespoke engineering for unique garage entrance requirements, ensuring perfect structural alignment." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-14 bg-white border border-brand-border/50 hover:border-brand-primary transition-colors duration-500 group relative"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary mb-8 md:mb-10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 md:mb-6 text-brand-dark leading-tight">{feature.title}</h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* EXPERT INSTALLATION MATRIX - EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32 md:mb-56">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden aspect-square md:aspect-[4/3] relative group bg-brand-dark border border-brand-border/50"
            >
              <img 
                src={splitGarageDoors} 
                alt="Quality Split Garage Door Installation" 
                className="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100" 
              />
            </motion.div>
            
            <div className="pr-0 lg:pr-12">
              <div className="mb-10 md:mb-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-brand-dark leading-[0.95]">Expert<br/>Installation.</h2>
                <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
                  Our team handles everything from exact frame measurement to full motor automation. We ensure your garage door operates perfectly and securely right from day one.
                </p>
              </div>
              
              <div className="space-y-0 border-t border-brand-border/50">
                {[
                  { label: "Detailed Assessment", detail: "Exact measurements to prevent future tracking issues." },
                  { label: "Battery Backup Included", detail: "Ensuring operation during load-shedding." },
                  { label: "High-Torque Motors", detail: "Heavy lifting power for large sectional doors." },
                  { label: "Direct Support", detail: "Talk directly to Ronnie for any technical queries." }
                ].map((item, i) => (
                  <div key={i} className="py-5 md:py-6 border-b border-brand-border/50 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="block text-brand-dark font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] md:w-1/3 shrink-0">
                      {item.label}
                    </span>
                    <span className="block text-brand-slate text-sm font-medium">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SLEEK GALLERY TRIGGER SECTION */}
        <div className="w-full border-t border-brand-border/50 bg-brand-surface py-32 md:py-48 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark mb-6">Style Index.</h2>
            <p className="text-brand-slate text-base md:text-lg font-medium mb-12">
              A comprehensive visual overview of our material and design capabilities. Browse our complete collection of bespoke garage doors.
            </p>
            <button 
              onClick={() => setSelectedIndex(0)}
              className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 md:px-12 py-5 md:py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
            >
              <Grid size={16} />
              Open Full Portfolio
            </button>
          </motion.div>
        </div>
        
        {/* CTA SECTION - RAW MINIMALISM */}
        <section className="py-24 md:py-32 border-t border-brand-border/30 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 md:mb-12 uppercase tracking-tighter text-brand-dark">
              Ready to Upgrade?
            </h2>
            <Link 
              to="/contact"
              className="inline-block bg-white border border-brand-border text-brand-dark px-10 md:px-12 py-5 md:py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300"
            >
              Book an Installation
            </Link>
          </motion.div>
        </section>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL - BRUTALIST & RESPONSIVE */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedIndex(null)} // Close when clicking background
          >
            {/* Main Lightbox Content */}
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-4 bg-white/10 hover:bg-brand-primary text-white transition-colors duration-300 border border-white/20"
                aria-label="Close Gallery"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 md:left-8 z-50 p-4 bg-white/10 hover:bg-brand-primary text-white transition-colors duration-300 border border-white/20 hidden md:block"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Container */}
              <div className="w-full h-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center md:px-24">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={catalogueItems[selectedIndex].img}
                    alt={catalogueItems[selectedIndex].title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-0 md:right-8 z-50 p-4 bg-white/10 hover:bg-brand-primary text-white transition-colors duration-300 border border-white/20 hidden md:block"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Title & Index Counter / Mobile Nav */}
              <div className="absolute bottom-4 left-0 w-full md:w-auto md:left-8 z-50 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 px-4">
                <div className="px-6 py-4 bg-black border border-white/20 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-center max-w-[90vw] truncate">
                  {catalogueItems[selectedIndex].title}
                </div>
                
                {/* Mobile controls integrated into bottom bar */}
                <div className="flex items-center gap-2">
                  <button onClick={handlePrev} className="md:hidden p-3 bg-white/10 border border-white/20 text-white active:bg-brand-primary">
                    <ChevronLeft size={20} />
                  </button>
                  <div className="px-6 py-4 bg-white/10 border border-white/20 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] backdrop-blur-sm">
                    {selectedIndex + 1} / {catalogueItems.length}
                  </div>
                  <button onClick={handleNext} className="md:hidden p-3 bg-white/10 border border-white/20 text-white active:bg-brand-primary">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
}