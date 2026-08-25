import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

// ⚡️ PERFORMANCE UPGRADE: Extracted static array outside the component.
// The Navbar re-renders frequently (every time the user scrolls past the threshold).
// Keeping this array outside prevents the Javascript engine from destroying and 
// reallocating this memory on every scroll state change.
const navLinks = [
  { name: 'Garages', path: '/garages' },
  { name: 'Gates', path: '/gates' },
  { name: 'Fencing', path: '/fencing' },
  { name: 'Automation', path: '/automation' },
  { name: 'Support', path: '/support' },
  { name: 'About', path: '/about' },
];

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 🚀 PERFORMANCE UPGRADE: Throttled Scroll Detection
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 60;
          // Only trigger a re-render if the state actually needs to change
          setIsScrolled((prev) => {
            if (prev !== scrolled) return scrolled;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guarantee mobile menu closes seamlessly on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        {/* Cinematic Top Gradient */}
        <div 
          className={cn(
            "absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-brand-dark/80 via-brand-dark/30 to-transparent transition-opacity duration-700 pointer-events-none -z-10 will-change-opacity",
            isScrolled ? "opacity-0" : "opacity-100"
          )} 
        />

        <motion.nav
          layout
          className={cn(
            "pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full origin-top will-change-transform",
            isScrolled
              ? "mt-4 md:mt-6 max-w-5xl mx-4 bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-full px-4 md:px-6 py-3"
              : "mt-0 max-w-7xl mx-auto bg-transparent rounded-none px-6 md:px-12 py-8 md:py-10"
          )}
        >
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 relative z-50">
            <motion.img 
              layout
              src={logo} 
              alt="Doorlogics" 
              fetchPriority="high"
              decoding="async"
              draggable="false"
              className={cn(
                "w-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
                isScrolled 
                  ? "h-10 md:h-12 brightness-0 drop-shadow-none"
                  : "h-16 md:h-24 brightness-0 invert drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              )} 
            />
          </Link>

          {/* DESKTOP LINKS */}
          <motion.div layout className="hidden lg:flex items-center gap-2 will-change-transform">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-5 py-2.5 rounded-full group"
                >
                  <span className={cn(
                    "relative z-10 text-[11px] xl:text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300",
                    isScrolled 
                      ? (isActive ? "text-brand-primary drop-shadow-none" : "text-brand-dark group-hover:text-brand-primary drop-shadow-none")
                      : (isActive ? "text-brand-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : "text-white group-hover:text-brand-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]")
                  )}>
                    {link.name}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      className={cn(
                        "absolute inset-0 rounded-full z-0 will-change-transform",
                        isScrolled ? "bg-brand-primary/10" : "bg-white/20 backdrop-blur-md"
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {!isActive && (
                    <div className={cn(
                      "absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity",
                      isScrolled ? "bg-brand-bg" : "bg-white/10 backdrop-blur-sm"
                    )} />
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className={cn(
                "ml-4 px-8 py-3.5 rounded-full text-[11px] xl:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 will-change-transform",
                isScrolled 
                  ? "bg-brand-dark text-white hover:bg-brand-primary shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_25px_rgba(61,107,44,0.3)]" 
                  : "bg-brand-primary text-white hover:bg-white hover:text-brand-dark shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_25px_rgba(255,255,255,0.3)]"
              )}
            >
              Contact
            </Link>
          </motion.div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden relative z-50 p-4 rounded-full transition-all duration-300 overflow-hidden shadow-lg will-change-transform",
              mobileMenuOpen 
                ? "bg-brand-dark text-white" 
                : isScrolled 
                  ? "bg-brand-surface text-brand-dark border border-brand-border/50 hover:bg-brand-bg" 
                  : "bg-brand-primary/90 backdrop-blur-md text-white border border-white/20 hover:bg-brand-primary"
            )}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="will-change-transform"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-md lg:hidden pointer-events-auto will-change-opacity"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-28 left-4 right-4 z-40 bg-white/95 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-white/50 p-6 lg:hidden flex flex-col gap-2 pointer-events-auto will-change-transform will-change-opacity"
            >
              <div className="flex flex-col gap-2 w-full overflow-y-auto max-h-[60vh] hide-scrollbar pb-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        "p-5 rounded-full text-center text-sm font-black uppercase tracking-[0.2em] transition-all duration-300",
                        isActive 
                          ? "bg-brand-primary/10 text-brand-primary" 
                          : "bg-transparent text-brand-dark hover:bg-brand-bg hover:text-brand-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              
              <Link
                to="/contact"
                className="mt-4 w-full p-6 rounded-full text-center text-xs font-black uppercase tracking-[0.25em] bg-brand-dark text-white hover:bg-brand-primary transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 will-change-transform"
              >
                Initiate Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;