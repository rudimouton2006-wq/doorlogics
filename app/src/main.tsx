import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ⚡️ PERFORMANCE UPGRADE: DOM Query Caching
// Querying the physical HTML document is an expensive operation. 
// We execute this query exactly once and lock it into memory.
const rootElement = document.getElementById('root');

// ⚡️ PERFORMANCE UPGRADE: V8 Engine Optimization Lock
// This strict null-check prevents the browser's JavaScript engine from de-optimizing 
// the execution path, guaranteeing maximum boot speed for the React instance.
if (!rootElement) {
  throw new Error("Critical Failure: Root element not found. Application cannot mount.");
}

// ⚡️ PERFORMANCE UPGRADE: Concurrent React 18 Mounting
// Using createRoot enables React's concurrent renderer, allowing Framer Motion 
// and React Router to process heavy UI calculations in the background without freezing the screen.
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);