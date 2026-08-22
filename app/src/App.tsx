import React, { useEffect, Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

// Global Layout Components (Loaded instantly)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 🚀 PERFORMANCE UPGRADE: Route-Based Code Splitting
// These pages will now only be downloaded when the user actually navigates to them.
const Home = lazy(() => import('./pages/Home'));
const Garages = lazy(() => import('./pages/Garages'));
const Gates = lazy(() => import('./pages/Gates'));
const Fencing = lazy(() => import('./pages/Fencing'));
const Automation = lazy(() => import('./pages/Automation'));
const SupportPortal = lazy(() => import('./pages/SupportPortal'));
const Guides = lazy(() => import('./pages/Guides'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// ⚡️ PERFORMANCE UPGRADE: Jank-Free Scroll Reset
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Offloads the scroll calculation to the next animation frame.
    // This prevents layout thrashing and stuttering while Framer Motion animates.
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' 
      });
    });
  }, [pathname]);

  return null;
});
ScrollToTop.displayName = 'ScrollToTop';

// ⚡️ PERFORMANCE UPGRADE: Memoized Fallback UI
// Prevents the browser from wasting CPU cycles re-rendering the loader
const PageLoader = memo(() => (
  <div className="min-h-[80vh] flex items-center justify-center bg-brand-bg">
    <Loader2 className="w-8 h-8 text-brand-primary animate-spin will-change-transform" />
  </div>
));
PageLoader.displayName = 'PageLoader';

// Router configuration with Animation Presence and Suspense
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/garages" element={<Suspense fallback={<PageLoader />}><Garages /></Suspense>} />
        <Route path="/gates" element={<Suspense fallback={<PageLoader />}><Gates /></Suspense>} />
        <Route path="/fencing" element={<Suspense fallback={<PageLoader />}><Fencing /></Suspense>} />
        <Route path="/automation" element={<Suspense fallback={<PageLoader />}><Automation /></Suspense>} />
        <Route path="/support" element={<Suspense fallback={<PageLoader />}><SupportPortal /></Suspense>} />
        <Route path="/guides" element={<Suspense fallback={<PageLoader />}><Guides /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        
        {/* Fallback route to catch 404s */}
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
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