import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

// SEO Title Dictionary
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

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update the browser tab title based on the current route
    const title = routeTitles[location.pathname] || 'Doorlogics | Expert Security';
    document.title = title;
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}