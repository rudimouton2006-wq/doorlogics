import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// Cinematic Collage Assets
import workInstallation from '../assets/work-installation.jpg';
import garagePremiumTimber from '../assets/garage-premium-timber.jpg';
import gateWroughtIronEstate from '../assets/gate-wrought-iron-estate.jpg';
import workFabrication from '../assets/work-fabrication.jpg';
import precisionMaintenance from '../assets/precision-maintenance.jpg';
import workWelding from '../assets/work-welding.jpg';
import workGroundwork from '../assets/work-groundwork.jpg';

// Services & Section Assets
import homeServiceGate from '../assets/gate-estate-timber-wide.jpg';
import splitGarageDoors from '../assets/garage-charcoal-double.jpg';
import clearvuFence from '../assets/fence-estate-curved-timber.jpg';
import gateMotorCorrect from '../assets/auto-et-drive-motor.jpg';
import homeServiceRemotes from '../assets/auto-centurion-access.jpg';

export default function Home() {
  return (
    <PageTransition>
      {/* HERO SECTION - CINEMATIC MASONRY GRID
        Massive background collage, perfectly rounded bottom corners to create a distinct section.
      */}
      <section className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-2xl bg-brand-dark">
        
        {/* Full Screen Cinematic Collage Layer */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-12 grid-rows-5 md:grid-rows-6 gap-2 md:gap-4 p-2 md:p-4 opacity-50">
          <img src={workInstallation} alt="Installation" className="col-span-2 row-span-2 md:col-span-4 md:row-span-6 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={garagePremiumTimber} alt="Premium Timber Garage" className="col-span-1 row-span-1 md:col-span-4 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={gateWroughtIronEstate} alt="Wrought Iron Gate" className="col-span-1 row-span-1 md:col-span-2 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={workFabrication} alt="Fabrication" className="col-span-1 row-span-1 md:col-span-2 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={precisionMaintenance} alt="Precision Maintenance" className="col-span-1 row-span-1 md:col-span-3 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={workWelding} alt="Welding" className="col-span-1 row-span-1 md:col-span-3 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
          <img src={workGroundwork} alt="Groundwork" className="col-span-1 row-span-1 md:col-span-2 md:row-span-3 w-full h-full object-cover rounded-[30px] md:rounded-[40px] shadow-lg" />
        </div>
        
        {/* Smooth, elegant gradient overlay for perfect text contrast without harshness */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/95 backdrop-blur-[2px]" />

        {/* Foreground Content Layer */}
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
              Established 1991
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
              Engineering<br />
              <span className="text-brand-primary drop-shadow-[0_0_20px_rgba(61,107,44,0.4)]">Excellence.</span>
            </h1>

            <p className="text-base md:text-xl text-white/90 max-w-2xl mb-12 md:mb-16 leading-relaxed font-medium drop-shadow-md">
              Professional solutions designed for absolute convenience and safety. Specializing in bespoke perimeter property access across the Western Cape.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-primary-hover hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(61,107,44,0.4)] flex items-center justify-center gap-3"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:0834001919"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 font-bold text-sm uppercase tracking-widest group backdrop-blur-md shadow-lg"
              >
                <ShieldAlert size={18} className="text-brand-primary group-hover:text-brand-dark transition-colors" />
                Emergency Help
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID - EXTREME ROUNDED GEOMETRY */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight mb-6">
              Our Services
            </h2>
            <p className="text-brand-slate text-base md:text-lg font-medium leading-relaxed">
              Professional installation and repairs for all types of perimeter property access. Engineered and built to last without compromise.
            </p>
          </div>

          {/* Fully breathable, heavily rounded grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Driveway Gates", href: "/gates", img: homeServiceGate, desc: "Bespoke sliding and swing gate manufacturing." },
              { title: "Garage Doors", href: "/garages", img: splitGarageDoors, desc: "Premium timber, aluminium, and aluzinc doors." },
              { title: "Secure Fencing", href: "/fencing", img: clearvuFence, desc: "High-security perimeter fencing solutions." },
              { title: "Automation", href: "/automation", img: gateMotorCorrect, desc: "High-speed, reliable motor installations." },
              { title: "Repairs", href: "/support", img: workWelding, desc: "Expert technical repairs and maintenance." },
              { title: "Remotes", href: "/support", img: homeServiceRemotes, desc: "Secure access control and programming." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[400px] md:h-[450px] w-full rounded-[40px] overflow-hidden bg-brand-surface shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500"
              >
                <Link to={service.href} className="block w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
                  />
                  {/* Smooth, soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform transition-transform duration-500">
                    <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base font-medium mb-6 line-clamp-2">
                      {service.desc}
                    </p>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELIABILITY SECTION - CINEMATIC & SOFT */}
      <section className="py-24 md:py-40 bg-brand-bg rounded-t-[40px] md:rounded-t-[80px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Soft, fully rounded image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 aspect-square md:aspect-[4/3] w-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl"
            >
              <img 
                src={precisionMaintenance} 
                alt="Expertise and Reliability" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 tracking-tight leading-[1.1] text-brand-dark">
                Reliability<br />by Design.
              </h2>
              
              <div className="space-y-8 md:space-y-10">
                {[
                  { label: "Expert Repairs", text: "We repair all garage door and gate operator brands efficiently to minimize downtime and expense." },
                  { label: "Custom Builds", text: "Bespoke gate and fencing manufacturing tailored strictly to your property's dimensions and aesthetics." },
                  { label: "Direct Support", text: "Speak directly to an expert for immediate technical guidance. No call centers, just real help." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 md:p-8 rounded-[30px] bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-brand-dark">
                        {item.label}
                      </h4>
                      <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA SECTION - SOFT MINIMALISM */}
      <section className="py-32 md:py-48 bg-white text-center rounded-b-[40px] md:rounded-b-[80px]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-brand-dark rounded-[40px] md:rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background glow effect within the rounded card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
                Ready to Upgrade?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto font-medium">
                Let's discuss your property's security and access requirements.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Initiate Contact
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}