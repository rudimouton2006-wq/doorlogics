import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Flawless scroll detection for the glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-brand-border/50 shadow-sm py-4'
            : 'bg-transparent py-6 md:py-8'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo Container */}
            <Link to="/" className="relative z-50 group flex-shrink-0">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src={logo} 
                alt="Doorlogics Logo" 
                className={cn(
                  "w-auto transition-all duration-500",
                  isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                )}
              />
            </Link>

            {/* Desktop Navigation - Perfectly Centered */}
            <nav className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-xs font-black uppercase tracking-[0.2em] relative group transition-colors duration-300",
                      isScrolled ? "text-brand-dark" : "text-white drop-shadow-md",
                      isActive ? "text-brand-primary" : "hover:text-brand-primary"
                    )}
                  >
                    {link.name}
                    {/* Masterpiece Hover Underline Animation */}
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

            {/* Desktop CTA / Contact Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="tel:0834001919"
                className={cn(
                  "flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 hover:text-brand-primary",
                  isScrolled ? "text-brand-dark" : "text-white drop-shadow-md"
                )}
              >
                <ShieldAlert size={16} />
                <span>Emergency</span>
              </a>
              <Link
                to="/contact"
                className={cn(
                  "px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95",
                  isScrolled 
                    ? "bg-brand-dark text-white hover:bg-brand-primary" 
                    : "bg-white text-brand-dark hover:bg-brand-primary hover:text-white shadow-xl"
                )}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-50 p-2 rounded-full transition-colors",
                isScrolled ? "text-brand-dark" : "text-white"
              )}
            >
              {mobileMenuOpen ? <X size={28} className="text-brand-dark" /> : <Menu size={28} />}
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
              <div className="w-full h-[1px] bg-brand-border my-4" />
              <Link
                to="/contact"
                className="w-full text-center bg-brand-primary text-white py-5 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-xl active:scale-95 transition-transform"
              >
                Get a Quote
              </Link>
              <a 
                href="tel:0834001919"
                className="flex items-center justify-center gap-3 w-full border-2 border-brand-dark text-brand-dark py-5 rounded-full text-sm font-black uppercase tracking-[0.3em]"
              >
                <ShieldAlert size={18} /> Emergency Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}