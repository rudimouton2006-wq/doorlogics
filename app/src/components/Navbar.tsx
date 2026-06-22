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

  // Flawless scroll detection for the dynamic shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-brand-border/50 shadow-sm py-4'
            : 'bg-transparent py-8 md:py-12'
        )}
      >
        {/* Subtle dark gradient behind the nav when at the top to guarantee text readability against any image */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-500 pointer-events-none -z-10",
            isScrolled ? "opacity-0" : "opacity-100"
          )} 
        />

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo Container - Massive at top, shrinks neatly on scroll */}
            <Link to="/" className="relative z-50 group flex-shrink-0 origin-left">
              <img 
                src={logo} 
                alt="Doorlogics Logo" 
                className={cn(
                  "w-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isScrolled 
                    ? "h-10 md:h-12" // Sleek and compact when scrolled
                    : "h-20 md:h-32 drop-shadow-2xl" // Massive and proud at the top
                )}
              />
            </Link>

            {/* Desktop Navigation - Ultra Readable */}
            <nav className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-[13px] font-black uppercase tracking-[0.25em] relative group transition-colors duration-300",
                      isScrolled 
                        ? "text-brand-dark" 
                        : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", // Heavy drop shadow for perfect contrast
                      isActive ? "text-brand-primary" : "hover:text-brand-primary"
                    )}
                  >
                    {link.name}
                    {/* Hover Underline Animation */}
                    <span 
                      className={cn(
                        "absolute -bottom-2 left-0 w-full h-[2px] rounded-full transition-all duration-300 origin-left",
                        isActive ? "bg-brand-primary scale-x-100" : "bg-brand-primary scale-x-0 group-hover:scale-x-100"
                      )} 
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Clean, Single CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className={cn(
                  "px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-1 active:scale-95",
                  isScrolled 
                    ? "bg-brand-primary text-white hover:bg-brand-dark shadow-lg hover:shadow-xl" 
                    : "bg-white text-brand-dark hover:bg-brand-primary hover:text-white shadow-2xl"
                )}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-50 p-2 rounded-full transition-colors",
                isScrolled ? "text-brand-dark" : "text-white drop-shadow-md"
              )}
            >
              {mobileMenuOpen ? <X size={32} className="text-brand-dark" /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-black uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-[1px] bg-brand-border my-6" />
              <Link
                to="/contact"
                className="w-full text-center bg-brand-primary text-white py-6 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-xl active:scale-95 transition-transform"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}