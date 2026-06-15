import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-surface pt-32 pb-14 border-t border-brand-primary/20 relative overflow-hidden">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 p-40 opacity-[0.03] pointer-events-none rotate-12">
        <img src={logo} alt="" className="h-[600px] w-auto brightness-0 invert" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 pb-20 border-b border-brand-surface/10">
          
          {/* Brand Monolith */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Link to="/" className="inline-block transition-transform hover:scale-105 origin-left w-fit pb-2">
              <img src={logo} alt="Doorlogics Logo" className="h-20 md:h-24 w-auto brightness-0 invert drop-shadow-lg" />
            </Link>
            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter leading-none">Reliable Service Since 1991.</h3>
              <p className="text-brand-surface/80 text-base md:text-lg leading-relaxed font-extrabold">
                Decades of experience in gate and garage door automation. We provide high-quality installations and maintenance across the Western Cape.
              </p>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 text-left">
            <div>
              <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-primary mb-8 text-sm md:text-base">The Services</h4>
              <ul className="flex flex-col gap-5 text-sm md:text-base font-black uppercase tracking-[0.2em]">
                {['Garages', 'Gates', 'Fencing', 'Automation'].map((service) => (
                  <li key={service}>
                    <Link to={`/${service.toLowerCase()}`} className="text-brand-surface/70 hover:text-white transition-colors hover:translate-x-2 inline-block py-1">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-secondary mb-8 text-sm md:text-base">The Command</h4>
              <ul className="flex flex-col gap-5 text-sm md:text-base font-black uppercase tracking-[0.2em]">
                {['Support', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-brand-surface/70 hover:text-white transition-colors hover:translate-x-2 inline-block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-primary mb-6 text-sm md:text-base">Headquarters</h4>
                <address className="not-italic text-sm md:text-base leading-loose text-brand-surface/80 font-black uppercase tracking-widest">
                  3 Wellington Street<br />
                  Oakdale, Bellville
                </address>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-secondary">Office (Rika & Madilu)</span>
                <a href="tel:0219192221" className="text-3xl font-black text-white hover:text-brand-primary transition-colors tracking-tighter inline-block pb-1">021 919 2221</a>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-surface/50">
            <span>© {new Date().getFullYear()} Doorlogics</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-surface/20" />
            <a 
              href="https://takumitech.co.za/" 
              className="hover:text-white transition-colors text-brand-surface/80 py-2"
              target="_blank"
              rel="noreferrer"
            >
              Developed by Takumi Tech
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
             <a href="tel:0834001919" className="flex items-center gap-3 hover:scale-105 transition-transform group py-2">
               <ShieldAlert size={20} className="text-brand-secondary group-hover:text-white transition-colors" />
               <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-secondary group-hover:text-white transition-colors">Emergency: 083 400 1919</span>
             </a>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-surface/60 hover:text-white transition-colors py-2 px-4 rounded-full border border-transparent hover:border-white/20"
             >
               Top ↑
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}