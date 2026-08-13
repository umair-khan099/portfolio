import React, { useEffect, useRef } from 'react';
import { initPreloaderAnimation } from '../../animations/heroAnimations';

export const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const ctx = initPreloaderAnimation(
      { containerRef, numberRef },
      onComplete
    );

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#F4F4F0] select-none pointer-events-auto"
      style={{ willChange: 'transform' }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Large Percentage Counter */}
        <span
          ref={numberRef}
          className="font-heading text-7xl sm:text-9xl md:text-[12rem] font-bold tracking-tighter text-[#F4F4F0] opacity-90 transition-all duration-75"
        >
          00%
        </span>

        {/* Minimal status subtext */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#A0A0A0]">
            INITIALIZING EXPERIENTIAL PORTFOLIO
          </span>
        </div>
      </div>
    </div>
  );
};
