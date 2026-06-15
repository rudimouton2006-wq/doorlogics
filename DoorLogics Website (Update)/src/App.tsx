import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Engineered Pages
import Home from './pages/Home';
import Garages from './pages/Garages';
import Gates from './pages/Gates';
import Fencing from './pages/Fencing';
import Automation from './pages/Automation';
import SupportPortal from './pages/SupportPortal';
import Guides from './pages/Guides';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Masterclass UX: Force window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [pathname]);

  return null;
}

// Router configuration with Animation Presence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/garages" element={<Garages />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/fencing" element={<Fencing />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/support" element={<SupportPortal />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback route to catch 404s and redirect home */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-surface font-sans antialiased selection:bg-brand-primary selection:text-white">
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}