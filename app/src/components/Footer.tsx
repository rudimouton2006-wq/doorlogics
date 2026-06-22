import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col gap-8 pr-0 lg:pr-12">
            <Link to="/" className="inline-block w-fit">
              <img 
                src={logo} 
                alt="Doorlogics" 
                className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
              />
            </Link>
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-sm">
              Engineering excellence since 1991. Professional gate and garage door automation across the Western Cape.
            </p>
          </div>

          {/* Services Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">
              The Services
            </h4>
            <ul className="flex flex-col gap-5 text-xs font-bold uppercase tracking-widest text-white/80">
              {[
                { name: 'Garage Doors', href: '/garages' },
                { name: 'Driveway Gates', href: '/gates' },
                { name: 'Security Fencing', href: '/fencing' },
                { name: 'Automation', href: '/automation' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-brand-primary transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">
              The Command
            </h4>
            <ul className="flex flex-col gap-5 text-xs font-bold uppercase tracking-widest text-white/80">
              {['Support', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">
              Headquarters
            </h4>
            <address className="not-italic text-sm text-white/80 font-medium leading-loose mb-8">
              3 Wellington Street<br />
              Oakdale, Bellville
            </address>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Direct Line
              </span>
              <a href="tel:0219192221" className="text-2xl font-black tracking-tighter hover:text-brand-primary transition-colors duration-300">
                021 919 2221
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Razor Thin */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-center md:text-left">
            <span>© {new Date().getFullYear()} Doorlogics</span>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <a 
              href="https://takumitech.co.za/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Developed by Takumi Tech
            </a>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Return to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}