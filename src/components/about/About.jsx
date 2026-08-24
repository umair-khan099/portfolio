import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../../data/aboutData';
import { initAboutAnimations } from '../../animations/aboutAnimations';
import { DecorativeObjects } from './DecorativeObjects';

export const About = () => {
  const containerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);
  const decosRef = useRef([]);

  // Mouse parallax coordinates (-0.5 to 0.5)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // GSAP ScrollTrigger Entrance Animation setup
  useLayoutEffect(() => {
    const ctx = initAboutAnimations({
      containerRef,
      labelRef,
      headingRef,
      contentRef,
      ctaRef,
      decosRef
    });

    return () => ctx.revert();
  }, []);

  // Subtle Mouse Move Parallax Reaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      // Disable parallax on touch devices or small mobile screens
      if (window.innerWidth < 768 || 'ontouchstart' in window) return;

      const rect = container.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

      setParallaxOffset({
        x: Math.max(-0.5, Math.min(0.5, relativeX)),
        y: Math.max(-0.5, Math.min(0.5, relativeY))
      });
    };

    const handleMouseLeave = () => {
      setParallaxOffset({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const profile = aboutData.profile;

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full h-screen min-h-[550px] lg:h-screen lg:min-h-screen bg-[#050505] text-[#F4F4F0] py-8 px-6 sm:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-[rgba(244,244,240,0.08)] select-none"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/10 via-[#EC4899]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Floating 3D Decorative Objects System */}
      <DecorativeObjects parallaxOffset={parallaxOffset} decosRef={decosRef} />

      {/* Central Content Composition */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">

        {/* Small Section Label */}
        <div ref={labelRef} className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
          <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
            [ 02 // INTRODUCTION ]
          </span>
        </div>

        {/* Oversized Centered Editorial Heading */}
        <h2
          ref={headingRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter uppercase leading-[0.9] text-[#F4F4F0] mb-4 sm:mb-6"
        >
          ABOUT <span className="accent-gradient-text">ME</span>
        </h2>

        {/* Short About Content from aboutData */}
        <div
          ref={contentRef}
          className="max-w-xl text-center flex flex-col gap-3 text-[#A0A0A0] font-light text-base sm:text-lg leading-relaxed tracking-wide mb-6 sm:mb-8"
        >
          {profile.intro && <p>{profile.intro}</p>}
          {profile.description && <p>{profile.description}</p>}
        </div>

        {/* Centered CTA Pill Button -> Navigates to /about */}
        <div ref={ctaRef} className="flex justify-center">
          <Link to="/about" className="pill-button group cursor-pointer">
            <span>MORE ABOUT ME</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};
