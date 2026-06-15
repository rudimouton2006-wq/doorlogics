import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-surface pt-24 pb-10 border-t border-brand-primary/20 relative overflow-hidden">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 p-40 opacity-[0.03] pointer-events-none rotate-12">
        <img src={logo} alt="" className="h-[500px] w-auto brightness-0 invert" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16 pb-16 border-b border-brand-surface/10">
          {/* Brand Monolith */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105 origin-left w-fit">
              {/* Made the logo significantly more prominent */}
              <img src={logo} alt="Doorlogics Logo" className="h-16 md:h-20 w-auto brightness-0 invert drop-shadow-lg" />
            </Link>
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter leading-none">Reliable Service Since 1991.</h3>
              {/* Increased text size and opacity for flawless visibility */}
              <p className="text-brand-surface/70 text-sm md:text-base leading-relaxed font-bold">
                Decades of experience in gate and garage door automation. We provide high-quality installations and maintenance across the Western Cape.
              </p>
            </div>
            {/* Social buttons surgically removed */}
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="font-display font-black uppercase tracking-[0.4em] text-brand-primary mb-6 text-[10px] md:text-[11px]">The Services</h4>
              <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em]">
                {['Garages', 'Gates', 'Fencing', 'Automation'].map((service) => (
                  <li key={service}>
                    <Link to={`/${service.toLowerCase()}`} className="text-brand-surface/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 text-[10px] md:text-[11px]">The Command</h4>
              <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em]">
                {['Support', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-brand-surface/70 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-display font-black uppercase tracking-[0.4em] text-brand-primary mb-4 text-[10px] md:text-[11px]">Headquarters</h4>
                <address className="not-italic text-xs md:text-sm leading-loose text-brand-surface/80 font-black uppercase tracking-widest">
                  3 Wellington Street<br />
                  Oakdale, Bellville
                </address>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-secondary">Office (Rika & Madilu)</span>
                <a href="tel:0219192221" className="text-2xl font-black text-white hover:text-brand-primary transition-colors tracking-tighter">021 919 2221</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-surface/40">
            <span>© {new Date().getFullYear()} Doorlogics</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-surface/20" />
            <a 
              href="https://takumitech.co.za/" 
              className="hover:text-white transition-colors text-brand-surface/70"
              target="_blank"
              rel="noreferrer"
            >
              Developed by Takumi Tech
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
             <a href="tel:0834001919" className="flex items-center gap-3 hover:scale-105 transition-transform group">
               <ShieldAlert size={18} className="text-brand-secondary group-hover:text-white transition-colors" />
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-secondary group-hover:text-white transition-colors">Emergency (Ronnie): 083 400 1919</span>
             </a>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-surface/50 hover:text-white transition-colors"
             >
               Top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}