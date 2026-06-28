import React from 'react';
import { motion } from 'motion/react';
import { Settings, BatteryFull, KeyRound, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Cinematic Asset Import
import supportHero from '../assets/precision-maintenance.jpg';

const knowledgeBase = [
  {
    icon: <Settings size={28} />,
    title: "Motors & Mechanisms",
    tag: "Mechanical",
    tips: [
      { subtitle: "Track Clearing", text: "Sweep your sliding gate track weekly. Even small stones or accumulated leaves can derail the gate or burn out the motor gearbox over time." },
      { subtitle: "Lubrication Limits", text: "Never use heavy grease on your gate rack or pinion gear; it attracts dirt and creates grinding paste. Use a dry silicone spray if necessary, but keep it minimal." },
      { subtitle: "Service Intervals", text: "Residential motors require professional servicing every 12-18 months. High-traffic complex gates need inspection every 6 months to maintain warranty." }
    ]
  },
  {
    icon: <BatteryFull size={28} />,
    title: "Battery Lifecycles",
    tag: "Power",
    tips: [
      { subtitle: "Expected Lifespan", text: "Standard 7Ah gel batteries typically last 2 to 3 years depending on usage and the frequency of grid load-shedding." },
      { subtitle: "Warning Signs", text: "If your gate begins moving sluggishly, stops halfway, or beeps continuously after a power failure, your battery has likely lost its deep-cycle capacity." },
      { subtitle: "Pro Tip", text: "Consider upgrading to high-capacity Lithium-ion drop-in replacements for up to 5x the lifespan and faster recharge rates during heavy load-shedding." }
    ]
  },
  {
    icon: <KeyRound size={28} />,
    title: "Access & Remotes",
    tag: "Security",
    tips: [
      { subtitle: "Lost Remotes", text: "If a remote is lost or stolen, it is critical to have a technician clear the receiver memory entirely and reprogram your remaining remotes to prevent unauthorized access." },
      { subtitle: "Range Issues", text: "If you have to stand right next to the gate for the remote to work, replace the internal battery (usually a 12V A23 or CR2032) before assuming the receiver is faulty." },
      { subtitle: "Smart Upgrades", text: "We can install GSM intercom modules, allowing you to open your gate securely from anywhere in the world using your smartphone." }
    ]
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "General Maintenance",
    tag: "Longevity",
    tips: [
      { subtitle: "Coastal Protection", text: "In the Western Cape, wipe down your gate motor casing and safety beams with a damp cloth monthly to prevent salt-air corrosion." },
      { subtitle: "Garage Spring Tension", text: "Test your garage door balance twice a year. Disconnect the motor; the door should easily lift by hand and stay open halfway. If it crashes down, call us immediately." },
      { subtitle: "Warranty Preservation", text: "Warranties are voided by pest infestations (ants/geckos in the PC board) or lightning strikes. Ensure your system has sealed cable entries and inline surge protection." }
    ]
  }
];

export default function SupportPortal() {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pb-24 md:pb-40">
        
        {/* HERO SECTION - CINEMATIC & SOFT */}
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center rounded-b-[40px] md:rounded-b-[80px] shadow-sm mb-16 md:mb-24">
          <div className="absolute inset-0 z-0">
            <img 
              src={supportHero} 
              alt="Precision Maintenance" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark/95" />
          </div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mt-8">
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
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 shadow-lg"
              >
                <CheckCircle2 size={14} className="text-brand-primary" />
                Knowledge Base
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-black text-white leading-[1.1] mb-6 tracking-tight">
                System<br />
                <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(61,107,44,0.3)]">Intelligence.</span>
              </h1>

              <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                Professional engineering advice and best practices to maximize the operational lifespan and reliability of your automated systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* KNOWLEDGE BASE GRID - EXTREMELY BREATHABLE & ROUNDED */}
        <section className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Warning Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16 bg-white border border-brand-border/50 rounded-[30px] p-6 md:p-8 flex items-start md:items-center gap-6 shadow-sm max-w-4xl mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark mb-1">Safety First</h4>
                <p className="text-brand-slate text-sm font-medium leading-relaxed">
                  Gate motors and garage springs operate under extreme tension and carry 220V mains power. Never attempt internal repairs yourself. If in doubt, contact our technical team.
                </p>
              </div>
            </motion.div>

            {/* The Information Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {knowledgeBase.map((section, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col h-full"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-6 mb-10 border-b border-brand-border/50 pb-8">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner">
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-slate block mb-1">
                        {section.tag}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-brand-dark">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Tips Content */}
                  <div className="flex flex-col gap-8 flex-grow">
                    {section.tips.map((tip, idx) => (
                      <div key={idx} className="group">
                        <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                          {tip.subtitle}
                        </h4>
                        <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">
                          {tip.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}