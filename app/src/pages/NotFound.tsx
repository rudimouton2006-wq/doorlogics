import React, { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// ⚡️ PERFORMANCE UPGRADE: React.memo()
// Freezes this completely static 404 page in memory to prevent unnecessary re-renders.
const NotFound = memo(function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-white pt-20 px-6">
        <div className="max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8 will-change-transform will-change-opacity"
          >
            <ShieldAlert size={48} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black text-brand-dark mb-6 tracking-tighter will-change-transform will-change-opacity"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-black uppercase tracking-widest text-brand-dark mb-6 will-change-transform will-change-opacity"
          >
            Perimeter Breach
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-brand-slate text-lg font-bold mb-12 max-w-md mx-auto will-change-transform will-change-opacity"
          >
            The page you are looking for has been moved, deleted, or does not exist.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="will-change-transform will-change-opacity"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-all hover:shadow-xl hover:-translate-y-1 will-change-transform"
            >
              <ArrowLeft size={16} />
              Return to Base
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;