import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Warehouse, Shield, Settings, X, ChevronRight, ChevronLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Primary Assets
import splitGarageDoors from '../assets/split-garage-doors.jpg';

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

const catalogueItems = [
  { img: gAluzincWhite, title: "Aluzinc White" },
  { img: gAluzincBrown, title: "Aluzinc Brown Horizontal" },
  { img: gDiagonalMeranti, title: "Diagonal Meranti" },
  { img: gTimberSlatted1, title: "Timber Slatted 16x88mm" },
  { img: gCorotexBrown, title: "Corotex Brown Slatted" },
  { img: gFibreClassic, title: "Fibre Glass Classic" },
  { img: gFibreRegency, title: "Fibre Glass Regency" },
  { img: gMerantiRaised, title: "Meranti Raised 20 Block" },
  { img: gTimberSlatted2, title: "Timber Slatted 16x132mm" },
  { img: gModernTimber, title: "Modern Horizontal Timber" },
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
      <div className="pt-32 md:pt-40 pb-0 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* HERO SECTION - STARK & MINIMALIST */}
          <div className="max-w-4xl mb-32 md:mb-48">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-brand-slate mb-8"
            >
              Premium Doors
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-10 md:mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              Expert<br />
              <span className="text-brand-primary">Garage Doors.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              We specialize in the installation and maintenance of all types of garage doors. We aim to supply low maintenance, high quality quiet and efficient garage doors at fair prices to withstand Cape Town's weather conditions and your design preferences.
            </motion.p>
          </div>

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
              className="overflow-hidden aspect-square md:aspect-[4/3] relative group bg-brand-dark"
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

        {/* COMPREHENSIVE TECHNICAL CATALOGUE - BRUTALIST GRID */}
        <div className="w-full border-t border-brand-border/50 bg-brand-surface pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="container mx-auto px-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark mb-4 md:mb-6">Style Index.</h2>
              <p className="text-brand-slate text-base md:text-lg font-medium">A comprehensive overview of our material and design capabilities. Click to enlarge.</p>
            </div>
          </div>
          
          {/* Flush Grid with 1px borders */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-brand-border/50">
              {catalogueItems.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className="aspect-square relative group overflow-hidden border-r border-b border-brand-border/50 bg-white cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center grayscale-[30%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
                  />
                  {/* Hover Label Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              className="inline-block bg-brand-dark text-white px-10 md:px-12 py-5 md:py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
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
                className="absolute left-0 md:left-8 z-50 p-4 bg-white/10 hover:bg-brand-primary text-white transition-colors duration-300 border border-white/20"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Container */}
              <div className="w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center px-16 md:px-24">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={catalogueItems[selectedIndex].img}
                    alt={catalogueItems[selectedIndex].title}
                    className="w-full h-full object-contain shadow-2xl border border-white/10"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-0 md:right-8 z-50 p-4 bg-white/10 hover:bg-brand-primary text-white transition-colors duration-300 border border-white/20"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Title & Index Counter */}
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex flex-col md:flex-row md:items-center gap-4">
                <div className="px-6 py-4 bg-black border border-white/20 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
                  {catalogueItems[selectedIndex].title}
                </div>
                <div className="px-6 py-4 bg-white/10 border border-white/20 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] backdrop-blur-sm w-fit">
                  {selectedIndex + 1} / {catalogueItems.length}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
}