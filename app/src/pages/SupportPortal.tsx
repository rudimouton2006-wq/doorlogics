import React from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  ShieldAlert,
  ArrowRight,
  Clock,
  MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const maintenanceSchedules = [
  { title: "Motor Limits", interval: "12 Months", priority: "STANDARD", desc: "Re-tensioning of drive belts and recalibration of open/close limits to prevent structural stress." },
  { title: "Battery Health", interval: "6 Months", priority: "CRITICAL", desc: "Deep-cycle testing of backup power systems to ensure operational integrity during load-shedding." },
  { title: "Rail Lubrication", interval: "3 Months", priority: "STANDARD", desc: "Application of dry silicone lubricants to tracks and hinges to eliminate friction-induced wear." }
];

export default function SupportPortal() {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* HERO SECTION - STARK & MINIMALIST */}
          <div className="max-w-4xl mb-32 md:mb-48">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-brand-slate mb-8"
            >
              Customer Care
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.9] tracking-tighter uppercase"
            >
              How Can<br />
              <span className="text-brand-primary">We Help?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl leading-relaxed font-medium"
            >
              Whether you need an urgent emergency repair or a routine system check-up, our support team is standing by to resolve it immediately.
            </motion.p>
          </div>

          {/* PRIMARY ACTION MATRIX - GEOMETRIC & FLAT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 md:mb-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 md:p-14 bg-white border border-brand-border/50 flex flex-col justify-between hover:border-brand-primary transition-colors duration-500 group relative"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-500">
                  <Wrench size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">Report a Fault</h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">If your gate or garage door isn't working correctly, log a ticket and we will dispatch a team.</p>
              </div>
              <Link to="/contact" className="mt-14 bg-white border border-brand-primary text-brand-primary px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-colors duration-300 relative z-10">
                Open Ticket
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 md:p-14 bg-white border border-brand-border/50 flex flex-col justify-between hover:border-brand-primary transition-colors duration-500 group relative"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-500">
                  <Settings size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">Book a Service</h3>
                <p className="text-brand-slate text-sm md:text-base font-medium leading-relaxed">Regular maintenance prevents breakdowns and extends the lifespan of your expensive motors.</p>
              </div>
              <Link to="/contact" className="mt-14 bg-white border border-brand-primary text-brand-primary px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-colors duration-300 relative z-10">
                Schedule
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 md:p-14 bg-brand-dark border border-brand-dark flex flex-col justify-between transition-colors duration-500 group text-white relative"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-brand-secondary mb-10">
                  <ShieldAlert size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">Emergency</h3>
                <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">For urgent security issues that need immediate attention. Tap below to message Ronnie directly.</p>
              </div>
              <a href="https://wa.me/27834001919" target="_blank" rel="noreferrer" className="mt-14 bg-transparent border border-[#25D366] text-[#25D366] px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-[#25D366] hover:text-white transition-colors duration-300 relative z-10">
                WhatsApp Ronnie
                <MessageSquare size={16} />
              </a>
            </motion.div>
          </div>

          {/* LIFECYCLE MANAGEMENT - EDITORIAL SPEC SHEET */}
          <div className="mb-20">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-brand-dark">Lifecycle<br />Management.</h2>
              <p className="text-brand-slate text-lg font-medium leading-relaxed">Adhering to strict maintenance intervals prevents catastrophic failure and extends the operational lifespan of your motors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceSchedules.map((schedule, i) => (
                <MaintenanceCard 
                  key={i}
                  title={schedule.title}
                  interval={schedule.interval}
                  priority={schedule.priority}
                  desc={schedule.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

function MaintenanceCard({ title, interval, priority, desc }: { title: string, interval: string, priority: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col p-10 md:p-12 bg-white border border-brand-border/50 hover:border-brand-primary transition-colors duration-500 relative"
    >
      {/* Accent Top Bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1 w-full transition-colors",
        priority === 'CRITICAL' ? "bg-red-500" : "bg-brand-primary"
      )} />

      <div className="flex items-center justify-between mb-10 mt-2">
        <div className={cn(
          "w-12 h-12 border flex items-center justify-center transition-colors duration-500",
          priority === 'CRITICAL' ? "border-red-500/30 text-red-600" : "border-brand-border text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary"
        )}>
          <Clock size={20} />
        </div>
        <span className={cn(
          "text-[10px] font-black uppercase px-4 py-2 tracking-[0.2em]",
          priority === 'CRITICAL' ? "bg-red-500 text-white" : "border border-brand-primary/20 text-brand-primary"
        )}>
          {priority}
        </span>
      </div>
      
      <h4 className="font-black text-2xl md:text-3xl text-brand-dark tracking-tighter uppercase mb-4">{title}</h4>
      <p className="text-brand-slate text-sm md:text-base leading-relaxed font-medium flex-grow mb-12">{desc}</p>
      
      <div className="pt-8 border-t border-brand-border/50">
        <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-brand-slate mb-2">Standard Interval</span>
        <span className="block text-brand-dark font-black text-2xl md:text-3xl tracking-tighter uppercase">{interval}</span>
      </div>
    </motion.div>
  );
}