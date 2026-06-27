import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Warehouse, Shield, Settings, X, ChevronRight, ChevronLeft, ArrowRight, Grid, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Primary Cinematic Assets
import heroGarage from '../assets/garage-premium-timber.jpg';
import installationGarage from '../assets/garage-charcoal-double.jpg';

// Complete Asset Arsenal
import gPureWhite from '../assets/garage-pure-white.jpg';
import gModernGlass from '../assets/garage-modern-glass.jpg';
import gPremiumBalcony from '../assets/garage-premium-balcony.jpg';
import gTimberEstate from '../assets/garage-timber-estate.jpg';
import gCharcoalSleek from '../assets/garage-charcoal-sleek.jpg';
import gCharcoalSingle from '../assets/garage-charcoal-single.jpg';
import gCharcoalMatte from '../assets/garage-charcoal-matte.jpg';
import gWhiteHorizontal from '../assets/garage-white-horizontal.jpg';
import gAluminiumPremium from '../assets/garage-aluminium-premium.jpg';
import gMidcenturyTimber from '../assets/garage-midcentury-timber.jpg';
import gTimberTransom from '../assets/garage-timber-transom.jpg';
import gSlattedTimber from '../assets/garage-slatted-timber.jpg';
import gTimberDiagonal from '../assets/garage-timber-diagonal.jpg';
import gRusticStudded from '../assets/garage-rustic-studded.jpg';
import gBrownDouble from '../assets/garage-brown-double.jpg';
import gAluzincBrown from '../assets/garage-aluzinc-brown.jpg';
import gArchedBrown from '../assets/garage-arched-brown.jpg';
import gMerantiArched from '../assets/garage-meranti-arched.jpg';
import gFibreClassic from '../assets/garage-fibre-classic.jpg';
import gFibreArched from '../assets/garage-fibre-arched.jpg';
import gAlphenTipup from '../assets/garage-alphen-tipup.jpg';

// The Ultimate Consolidated Gallery for Lightbox
const catalogueItems = [
  { img: heroGarage, title: "Premium Modern Timber" },
  { img: gModernGlass, title: "Modern Matte with Glass Panels" },
  { img: gPremiumBalcony, title: "Wide Timber under Glass Balcony" },
  { img: gTimberEstate, title: "Wide Timber Estate Door" },
  { img: installationGarage, title: "Double Charcoal Split" },
  { img: gCharcoalSleek, title: "Charcoal Sleek Horizontal" },
  { img: gCharcoalSingle, title: "Single Charcoal Horizontal" },
  { img: gCharcoalMatte, title: "Wide Matte Charcoal" },
  { img: gPureWhite, title: "Crisp White Horizontal" },
  { img: gWhiteHorizontal, title: "Single White Horizontal" },
  { img: gAluminiumPremium, title: "Aluminium Premium Multi-Car" },
  { img: gMidcenturyTimber, title: "Mid-Century Split Roof Timber" },
  { img: gTimberTransom, title: "Timber with Glass Transom" },
  { img: gSlattedTimber, title: "Modern Slatted Timber" },
  { img: gTimberDiagonal, title: "Single Diagonal Timber" },
  { img: gRusticStudded, title: "Rustic Meranti with Metal Studs" },
  { img: gBrownDouble, title: "Double Brown Flat-Top" },
  { img: gAluzincBrown, title: "Aluzinc Brown Strip" },
  { img: gArchedBrown, title: "Double Arched Brown" },
  { img: gMerantiArched, title: "Double Arched Meranti" },
  { img: gFibreArched, title: "Double Arched Fibre" },
  { img: gFibreClassic, title: "Single Fibre Classic" },
  { img: gAlphenTipup, title: "Alphen Tip-up Brick Enclosure" }
];

// Curated Showcase for the main page layout
const showcaseItems = [
  { img: gModernGlass, title: "Modern Glass Panel", span: "md:col-span-2 md:row-span-2" },
  { img: gMidcenturyTimber, title: "Mid-Century Slatted", span: "md:col-span-1 md:row-span-1" },
  { img: gTimberEstate, title: "Timber Estate", span: "md:col-span-1 md:row-span-1" },
  { img: gCharcoalSleek, title: "Charcoal Sleek", span: "md:col-span-2 md:row-span-1" },
];

export default function Garages() {
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
        
        {/* HERO SECTION - CINEMATIC & SOFT */}
        <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl z-10">
          <div className="absolute inset-0 z-0 bg-brand-dark">
            <img 
              src={heroGarage} 
              alt="Premium Modern Timber Garage Door" 
              className="w-full h-full object-cover object-center opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/95" />
          </div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full flex flex-col items-center"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 md:mb-12 shadow-lg"
              >
                <CheckCircle2 size={14} className="text-brand-primary" />
                Premium Grade Doors
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight">
                Expert<br />
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Garage Doors.</span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium">
                Engineered to withstand Cape Town's exact weather conditions while matching your architectural design preferences perfectly.
              </p>
              
              <button
                onClick={() => setSelectedIndex(0)}
                className="bg-brand-primary text-white px-10 md:px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <Grid size={18} />
                Explore Portfolio
              </button>
            </motion.div>
          </div>
        </section>

        {/* FEATURE CARDS - BREATHABLE & ROUNDED */}
        <section className="py-24 md:py-40 bg-brand-bg rounded-b-[40px] md:rounded-b-[80px] -mt-10 pt-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: <Warehouse size={24} />, title: "Any Style", desc: "Decades of experience installing bespoke sectional, roll-up, and tip-up architectural doors." },
                { icon: <Settings size={24} />, title: "Smooth Tech", desc: "High-cycle torsion springs and precision nylon rollers for virtually silent, friction-free movement." },
                { icon: <Shield size={24} />, title: "Secure Build", desc: "Bespoke engineering for unique entrance requirements, ensuring perfect structural alignment and security." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-10 md:p-14 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-brand-dark">
                    {feature.title}
                  </h3>
                  <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERT INSTALLATION - CINEMATIC SPLIT */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-[4/3] w-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl group"
              >
                <img 
                  src={installationGarage} 
                  alt="Quality Split Garage Door Installation" 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-80" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 lg:pl-8"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark leading-[1.1] mb-8">
                  Expert<br />Installation.
                </h2>
                <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed mb-12">
                  Our team handles everything from exact frame measurement to full high-torque motor automation. We ensure your garage door operates perfectly, silently, and securely from day one.
                </p>
                
                <div className="space-y-4">
                  {[
                    { label: "Detailed Assessment", detail: "Exact measurements prevent future tracking issues." },
                    { label: "High-Torque Motors", detail: "Heavy lifting power for large sectional doors." },
                    { label: "Direct Support", detail: "Talk directly to our experts for technical queries." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-center p-5 rounded-[24px] bg-brand-bg hover:bg-brand-primary/5 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm flex-shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <span className="block text-brand-dark font-black tracking-tight text-sm">
                          {item.label}
                        </span>
                        <span className="block text-brand-slate text-xs font-medium mt-1">
                          {item.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CINEMATIC MASONRY SHOWCASE */}
        <section className="py-24 md:py-32 bg-brand-bg rounded-[40px] md:rounded-[80px] mx-4 md:mx-8 mb-24 md:mb-32 shadow-xl">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
                Featured Styles
              </h2>
              <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
                A curated look at our bespoke material and design capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {showcaseItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={cn(
                    "group relative w-full rounded-[40px] overflow-hidden bg-brand-surface shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[300px]",
                    item.span
                  )}
                  onClick={() => setSelectedIndex(0)} // Open modal on any click
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                    <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setSelectedIndex(0)}
                className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-3"
              >
                <Grid size={18} />
                View Complete Archive ({catalogueItems.length})
              </button>
            </div>
          </div>
        </section>
        
        {/* CTA SECTION - GLOWING & ROUNDED */}
        <section className="py-24 md:py-40 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-brand-dark rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
                  Ready to Upgrade?
                </h2>
                <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                  Let's design and engineer the perfect garage door for your home.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary-hover hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Book an Installation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL - IMMERSIVE APP-LIKE UI */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110"
                aria-label="Close Gallery"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 hidden md:block"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Container */}
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
                    className="w-full h-full object-contain drop-shadow-2xl rounded-[20px]"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-50 p-4 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 hidden md:block"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Title & Index / Mobile Nav */}
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
      </AnimatePresence>
    </PageTransition>
  );
}