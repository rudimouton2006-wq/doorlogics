import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Precision scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guarantee mobile menu closes on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Garages', path: '/garages' },
    { name: 'Gates', path: '/gates' },
    { name: 'Fencing', path: '/fencing' },
    { name: 'Automation', path: '/automation' },
    { name: 'Support', path: '/support' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isScrolled ? 'py-6 px-4' : 'py-8 md:py-12 px-0'
        )}
      >
        {/* Subtle top gradient to ensure pure white text visibility over any hero image */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-700 pointer-events-none -z-10",
            isScrolled ? "opacity-0" : "opacity-100"
          )} 
        />

        {/* 
          Masterpiece Layout Animation Wrapper 
          Transitions seamlessly from a full-width container to a centered, outlined pill.
        */}
        <motion.div
          layout
          className={cn(
            "pointer-events-auto flex items-center transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
            isScrolled
              ? "bg-white/95 backdrop-blur-md border border-brand-border/80 shadow-sm px-8 py-5"
              : "w-full container mx-auto bg-transparent px-6 justify-between"
          )}
        >
          {/* Dynamic Logo Container - Massive at top, vanishes on scroll */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                layout
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex-shrink-0 overflow-hidden"
              >
                <Link to="/" className="block pr-12 origin-left">
                  <img 
                    src={logo} 
                    alt="Doorlogics" 
                    className="h-20 md:h-32 w-auto brightness-0 invert drop-shadow-2xl transition-transform hover:scale-105 duration-500" 
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation - Centered & Highly Legible */}
          <motion.nav layout className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.3em] relative group transition-colors duration-300",
                    isScrolled 
                      ? "text-brand-slate hover:text-brand-dark" 
                      : "text-white/80 hover:text-white drop-shadow-md",
                    isActive && (isScrolled ? "text-brand-primary" : "text-white")
                  )}
                >
                  {link.name}
                  {/* Brutalist Hover Underline */}
                  <span 
                    className={cn(
                      "absolute -bottom-2 left-0 w-full h-[1px] transition-all duration-300 origin-left",
                      isScrolled ? "bg-brand-primary" : "bg-white",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )} 
                  />
                </Link>
              );
            })}
            
            {/* Sharp CTA Button */}
            <Link
              to="/contact"
              className={cn(
                "ml-2 px-8 py-4 text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-300",
                isScrolled 
                  ? "bg-brand-dark text-white hover:bg-brand-primary" 
                  : "bg-white text-brand-dark hover:bg-brand-primary hover:text-white"
              )}
            >
              Contact Us
            </Link>
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            layout
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-brand-dark" : "text-white drop-shadow-md"
            )}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay - Brutalist & Clean */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 lg:hidden border-b border-brand-border"
          >
            <nav className="flex flex-col w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-6 border-b border-brand-border text-2xl font-black uppercase tracking-tighter text-brand-dark hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-brand-dark text-white py-6 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-brand-primary transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}