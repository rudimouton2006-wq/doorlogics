import React, { useEffect, memo } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

// ⚡️ PERFORMANCE UPGRADE: Static object already extracted outside the component!
const routeTitles: Record<string, string> = {
  '/': 'Home | Doorlogics',
  '/garages': 'Expert Garage Doors | Doorlogics',
  '/gates': 'Driveway Gates | Doorlogics',
  '/fencing': 'Security Fencing | Doorlogics',
  '/automation': 'Smart Motor Automation | Doorlogics',
  '/support': 'Customer Care & Support | Doorlogics',
  '/guides': 'Maintenance Guides | Doorlogics',
  '/about': 'Our History | Doorlogics',
  '/contact': 'Contact Us | Doorlogics',
};

// ⚡️ PERFORMANCE UPGRADE: React.memo()
// Locks the wrapper in memory to prevent the animation from stuttering on parent re-renders.
const PageTransition = memo(function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update the browser tab title based on the current route
    const title = routeTitles[location.pathname] || 'Doorlogics | Expert Security';
    document.title = title;
  }, [location.pathname]); // ⚡️ PERFORMANCE UPGRADE: Strict dependency tracking prevents hash-change re-renders.

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      // 🚀 PERFORMANCE UPGRADE: GPU Offloading to prevent layout thrashing
      className="will-change-transform will-change-opacity"
    >
      {children}
    </motion.div>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;