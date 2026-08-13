import React, { useState } from 'react';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './components/hero/Hero';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Initialize Lenis smooth scroll synchronized with GSAP
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F4F4F0] selection:bg-[#F4F4F0] selection:text-[#050505] overflow-x-hidden">
      {/* Cinematic Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Hero Section (Phase 1 Target) */}
      <Hero />

      {/* Clean transition anchor point for future phases (About, Work, Services, etc.) */}
      <div id="future-sections-anchor" className="relative w-full h-[50vh] flex items-center justify-center border-t border-[rgba(244,244,240,0.06)] bg-[#050505]">
        <div className="text-center px-4">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#A0A0A0] block mb-2">
            [ PHASE 1 COMPLETE ]
          </span>
          <p className="font-heading text-sm text-[#F4F4F0] opacity-50">
            Transition point for future Phase sections
          </p>
        </div>
      </div>
    </main>
  );
}
