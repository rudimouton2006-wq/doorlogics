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
          <div className="max-w-5xl mb-32 md:mb-40">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-primary font-display font-black text-xs md:text-sm uppercase tracking-[0.4em] block mb-8"
            >
              Customer Care
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[9vw] font-black text-brand-dark mb-12 leading-[0.85] tracking-tighter uppercase"
            >
              How Can<br />
              <span className="text-brand-primary">We Help?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-slate max-w-3xl leading-relaxed font-extrabold"
            >
              Whether you need an urgent emergency repair or a routine system check-up, our support team is standing by to resolve it immediately.
            </motion.p>
          </div>

          {/* Primary Action Matrix - Clean, Prominent, and Direct */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-40 md:mb-48">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 md:p-14 bg-white rounded-[40px] border-4 border-brand-border flex flex-col justify-between hover:border-brand-primary/40 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:scale-110 transition-transform">
                  <Wrench size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">Report a Fault</h3>
                <p className="text-brand-dark/80 text-base md:text-lg font-extrabold leading-relaxed">If your gate or garage door isn't working correctly, log a ticket and we will dispatch a team.</p>
              </div>
              <Link to="/contact" className="mt-14 bg-white border-4 border-brand-primary text-brand-primary px-10 py-6 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-all group-hover:shadow-xl relative z-10 active:scale-95">
                Open Ticket
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 md:p-14 bg-white rounded-[40px] border-4 border-brand-border flex flex-col justify-between hover:border-brand-primary/40 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover:scale-110 transition-transform">
                  <Settings size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-brand-dark leading-tight">Book a Service</h3>
                <p className="text-brand-dark/80 text-base md:text-lg font-extrabold leading-relaxed">Regular maintenance prevents breakdowns and extends the lifespan of your expensive motors.</p>
              </div>
              <Link to="/contact" className="mt-14 bg-white border-4 border-brand-primary text-brand-primary px-10 py-6 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-brand-primary hover:text-white transition-all group-hover:shadow-xl relative z-10 active:scale-95">
                Schedule
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-12 md:p-14 bg-brand-dark rounded-[40px] border-4 border-brand-dark flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-56 h-56 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary mb-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">Emergency</h3>
                <p className="text-white/80 text-base md:text-lg font-extrabold leading-relaxed">For urgent security issues that need immediate attention. Tap below to message Ronnie directly.</p>
              </div>
              <a href="https://wa.me/27834001919" target="_blank" rel="noreferrer" className="mt-14 bg-[#25D366] border-4 border-[#25D366] text-white px-10 py-6 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] flex items-center justify-between hover:bg-transparent hover:text-[#25D366] transition-all group-hover:shadow-xl relative z-10 active:scale-95">
                WhatsApp Ronnie
                <MessageSquare size={20} />
              </a>
            </motion.div>
          </div>

          {/* Redesigned Lifecycle Management */}
          <div className="mb-20">
            <div className="max-w-3xl mb-16">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-brand-dark">Lifecycle Management.</h2>
              <p className="text-brand-slate text-lg md:text-xl font-extrabold leading-relaxed">Adhering to strict maintenance intervals prevents catastrophic failure and extends the operational lifespan of your motors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
      className="group flex flex-col p-10 md:p-12 bg-gradient-to-b from-white to-brand-bg/50 border-4 border-brand-border hover:border-brand-primary/40 shadow-lg hover:shadow-2xl rounded-[40px] transition-all duration-500 relative overflow-hidden"
    >
      {/* Accent Top Bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-2 w-full transition-colors",
        priority === 'CRITICAL' ? "bg-red-500" : "bg-brand-primary"
      )} />

      <div className="flex items-center justify-between mb-10 mt-2">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors",
          priority === 'CRITICAL' ? "bg-red-500/10 text-red-600" : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
        )}>
          <Clock size={24} />
        </div>
        <span className={cn(
          "text-xs md:text-sm font-black uppercase px-6 py-3 rounded-full tracking-[0.2em] shadow-sm",
          priority === 'CRITICAL' ? "bg-red-500 text-white" : "bg-white border-2 border-brand-primary/20 text-brand-primary"
        )}>
          {priority}
        </span>
      </div>
      
      <h4 className="font-black text-3xl md:text-4xl text-brand-dark tracking-tighter uppercase mb-6">{title}</h4>
      <p className="text-brand-slate text-base md:text-lg leading-relaxed font-extrabold flex-grow mb-10">{desc}</p>
      
      <div className="pt-8 border-t-2 border-brand-border">
        <span className="block text-xs md:text-sm font-black uppercase tracking-widest text-brand-slate mb-3">Standard Interval</span>
        <span className="block text-brand-primary font-black text-3xl md:text-4xl tracking-tighter uppercase">{interval}</span>
      </div>
    </motion.div>
  );
}