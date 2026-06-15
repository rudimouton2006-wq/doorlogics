import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Garages', href: '/garages' },
  { name: 'Gates', href: '/gates' },
  { name: 'Fencing', href: '/fencing' },
  { name: 'Automation', href: '/automation' },
  { name: 'Support', href: '/support' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none flex justify-center">
      <div className={cn(
        "flex items-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto",
        scrolled 
          ? "max-w-fit mt-6 bg-white/95 backdrop-blur-3xl rounded-full border border-brand-border/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] h-20 px-8 md:px-10 gap-0" 
          /* Added mt-4 md:mt-8 to guarantee a safe breathing zone below the browser search bar */
          : "w-full max-w-7xl mt-4 md:mt-8 px-6 bg-transparent h-28 md:h-32 justify-between gap-8"
      )}>
        
        {/* Recalibrated Morphing Logo - Protected Bounding Box */}
        <Link 
          to="/" 
          className={cn(
            "flex items-center origin-left transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shrink-0",
            scrolled 
              ? "w-0 opacity-0 scale-50 pointer-events-none" 
              /* Adjusted width to sit perfectly inside the new protected height */
              : "w-[170px] md:w-[240px] opacity-100 scale-100"
          )}
        >
          <img 
            src={logo} 
            alt="Doorlogics Logo" 
            className="w-full h-auto object-contain drop-shadow-xl" 
          />
        </Link>

        {/* Desktop Nav - Always Prominent */}
        <div className={cn(
          "hidden lg:flex items-center transition-all duration-[1000ms]",
          scrolled ? "gap-8" : "gap-10 xl:gap-12"
        )}>
          <ul className="flex items-center gap-6 xl:gap-10">
            {navLinks.filter(l => l.href !== '/contact').map((link, i) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "font-display text-[11px] font-black uppercase tracking-[0.4em] transition-colors relative flex flex-col items-center group",
                    location.pathname === link.href ? "text-brand-primary" : "text-brand-dark hover:text-brand-primary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-2.5 w-1 h-1 rounded-full bg-brand-primary transition-all duration-300",
                    location.pathname === link.href ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  )} />
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <Link
            to="/contact"
            className={cn(
              "bg-brand-primary text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-[800ms] ease-out hover:bg-brand-dark hover:shadow-2xl hover:-translate-y-1 shadow-lg shrink-0",
              scrolled ? "scale-95 hover:scale-100" : "scale-100"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-3 transition-all duration-500 rounded-full shrink-0",
            scrolled ? "bg-brand-primary/10 text-brand-primary" : "bg-white/10 text-brand-primary backdrop-blur-md"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-8 bg-brand-dark rounded-[40px] z-[110] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto"
          >
            <div className="h-full flex flex-col p-12 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors hover:bg-brand-primary"
              >
                <X size={24} />
              </button>

              <div className="mb-16">
                <img src={logo} alt="Doorlogics Logo" className="w-[200px] h-auto object-contain brightness-0 invert opacity-90" />
              </div>

              <ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "font-display text-4xl font-black uppercase tracking-tighter transition-colors",
                        location.pathname === link.href ? "text-brand-primary underline decoration-4 underline-offset-8" : "text-white hover:text-brand-primary/80"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="tel:0834001919"
                  className="bg-brand-primary text-white p-8 rounded-3xl flex flex-col items-center gap-2 shadow-2xl transition-transform hover:scale-[1.02]"
                >
                  <ShieldAlert size={32} className="animate-pulse mb-2 text-brand-secondary" />
                  <span className="font-display font-black text-xs uppercase tracking-[0.4em] opacity-60">Emergency Line</span>
                  <span className="text-3xl font-black tracking-tighter">083 400 1919</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}