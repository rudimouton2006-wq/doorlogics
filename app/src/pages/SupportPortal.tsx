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
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-24">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-[9px] uppercase tracking-[0.6em] block mb-6"
            >
              Customer Care
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-black text-brand-dark mb-10 leading-[0.8] tracking-tighter uppercase"
            >
              How Can<br />
              <span className="text-brand-primary">We Help?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-slate max-w-2xl leading-relaxed font-bold"
            >
              Whether you need an urgent emergency repair or a routine system check-up, our support team is standing by to resolve it immediately.
            </motion.p>
          </div>

          {/* Primary Action Matrix - Clean, Prominent, and Direct */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-white rounded-[40px] border-2 border-brand-border flex flex-col justify-between hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                  <Wrench size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">Report a Fault</h3>
                <p className="text-brand-dark/80 text-base font-bold leading-relaxed">If your gate or garage door isn't working correctly, log a ticket and we will dispatch a team.</p>
              </div>
              <Link to="/contact" className="mt-12 bg-white border-2 border-brand-primary text-brand-primary px-8 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-all group-hover:shadow-lg relative z-10">
                Open Ticket
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-white rounded-[40px] border-2 border-brand-border flex flex-col justify-between hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                  <Settings size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-dark">Book a Service</h3>
                <p className="text-brand-dark/80 text-base font-bold leading-relaxed">Regular maintenance prevents breakdowns and extends the lifespan of your expensive motors.</p>
              </div>
              <Link to="/contact" className="mt-12 bg-white border-2 border-brand-primary text-brand-primary px-8 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-all group-hover:shadow-lg relative z-10">
                Schedule
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 bg-brand-dark rounded-[40px] border-2 border-brand-dark flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary mb-8 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Emergency</h3>
                <p className="text-white/80 text-base font-bold leading-relaxed">For urgent security issues that need immediate attention. Tap below to message Ronnie directly.</p>
              </div>
              <a href="https://wa.me/27834001919" target="_blank" rel="noreferrer" className="mt-12 bg-[#25D366] border-2 border-[#25D366] text-white px-8 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-between hover:bg-transparent hover:text-[#25D366] transition-all group-hover:shadow-lg relative z-10">
                WhatsApp Ronnie
                <MessageSquare size={16} />
              </a>
            </motion.div>
          </div>

          {/* Redesigned Lifecycle Management */}
          <div className="mb-20">
            <div className="max-w-xl mb-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Lifecycle Management.</h2>
              <p className="text-brand-slate text-lg font-bold">Adhering to strict maintenance intervals prevents catastrophic failure and extends the operational lifespan of your motors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex flex-col p-8 bg-gradient-to-b from-white to-brand-bg/50 border-2 border-brand-border hover:border-brand-primary/50 shadow-sm hover:shadow-2xl rounded-[32px] transition-all duration-500 relative overflow-hidden"
    >
      {/* Accent Top Bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1.5 w-full transition-colors",
        priority === 'CRITICAL' ? "bg-red-500" : "bg-brand-primary"
      )} />

      <div className="flex items-center justify-between mb-8 mt-2">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
          priority === 'CRITICAL' ? "bg-red-500/10 text-red-600" : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
        )}>
          <Clock size={20} />
        </div>
        <span className={cn(
          "text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-[0.2em] shadow-sm",
          priority === 'CRITICAL' ? "bg-red-500 text-white" : "bg-white border border-brand-primary/20 text-brand-primary"
        )}>
          {priority}
        </span>
      </div>
      
      <h4 className="font-black text-2xl text-brand-dark tracking-tighter uppercase mb-4">{title}</h4>
      <p className="text-brand-slate text-base leading-relaxed font-bold flex-grow mb-8">{desc}</p>
      
      <div className="pt-6 border-t border-brand-border/80">
        <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate mb-2">Standard Interval</span>
        <span className="block text-brand-primary font-black text-2xl tracking-tighter uppercase">{interval}</span>
      </div>
    </motion.div>
  );
}