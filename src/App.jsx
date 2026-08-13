import React, { useState } from 'react';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Projects } from './components/projects/Projects';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F4F4F0] selection:bg-[#F4F4F0] selection:text-[#050505] overflow-x-hidden">
      {/* Cinematic Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Selected Work / Signature Stacked Projects */}
      <Projects />

      {/* Clean transition anchor point for Phase 3 (Testimonials, Contact, Footer) */}
      <div id="future-sections-anchor" className="relative w-full h-[40vh] flex items-center justify-center border-t border-[rgba(244,244,240,0.08)] bg-[#050505]">
        <div className="text-center px-4">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#A0A0A0] block mb-2">
            [ PHASE 2 COMPLETE ]
          </span>
          <p className="font-heading text-sm text-[#F4F4F0] opacity-50">
            About + Services + Signature Project Stack Ready
          </p>
        </div>
      </div>
    </main>
  );
}
