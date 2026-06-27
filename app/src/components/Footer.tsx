import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 md:pt-32 pb-10 rounded-t-[40px] md:rounded-t-[80px] relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24 md:mb-32">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col gap-8 pr-0 lg:pr-12">
            <Link to="/" className="inline-block w-fit group">
              <img 
                src={logo} 
                alt="Doorlogics" 
                className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" 
              />
            </Link>
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-sm">
              Engineering excellence since 1991. Professional gate and garage door automation across the Western Cape.
            </p>
          </div>

          {/* Services Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6 md:mb-8 ml-4">
              The Services
            </h4>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">
              {[
                { name: 'Garage Doors', href: '/garages' },
                { name: 'Driveway Gates', href: '/gates' },
                { name: 'Security Fencing', href: '/fencing' },
                { name: 'Automation', href: '/automation' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="inline-flex items-center px-4 py-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6 md:mb-8 ml-4">
              The Command
            </h4>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">
              {['Support', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="inline-flex items-center px-4 py-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6 md:mb-8 ml-4">
              Headquarters
            </h4>
            <div className="px-4">
              <address className="not-italic text-sm text-white/70 font-medium leading-relaxed mb-8">
                3 Wellington Street<br />
                Oakdale, Bellville
              </address>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Direct Line
                </span>
                <a 
                  href="tel:0219192221" 
                  className="inline-block w-fit text-2xl md:text-3xl font-black tracking-tight text-white hover:text-brand-primary transition-colors duration-300"
                >
                  021 919 2221
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Highly rounded and breathable */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center sm:text-left text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            <span>© {new Date().getFullYear()} Doorlogics</span>
            <span className="hidden sm:block w-1.5 h-1.5 bg-white/20 rounded-full" />
            <a 
              href="https://takumitech.co.za/" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Developed by Takumi Tech
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm"
          >
            <span>Return to Top</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp size={14} />
            </div>
          </button>
          
        </div>
      </div>
    </footer>
  );
}