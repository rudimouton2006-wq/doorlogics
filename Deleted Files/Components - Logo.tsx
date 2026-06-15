import React from 'react';
import { motion } from 'motion/react';

export default function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className="h-full aspect-square relative">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House Frame */}
          <path
            d="M15 45L50 15L85 45"
            stroke="var(--color-brand-secondary)"
            strokeWidth="10"
            strokeLinecap="square"
          />
          
          {/* Garage Element */}
          <rect x="20" y="45" width="60" height="40" fill="var(--color-brand-primary)" />
          
          {/* Moving Detail */}
          <motion.rect
            x="20"
            y="45"
            width="60"
            height="6"
            fill="white"
            fillOpacity="0.4"
            animate={{ y: [45, 80, 45] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-display font-black text-3xl leading-none tracking-tighter text-brand-dark uppercase">
          Doorlogics
        </span>
        <span className="text-[10px] font-black tracking-[0.6em] text-brand-secondary uppercase mt-2">
          Since 1991
        </span>
      </div>
    </div>
  );
}
