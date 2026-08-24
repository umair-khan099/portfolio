import React, { useLayoutEffect, useRef } from 'react';
import { Navigation } from '../layout/Navigation';
import { TechOrbit } from './TechOrbit';
import { siteData } from '../../data/site';
import { initHeroEntrance, initHeroScrollTransition } from '../../animations/heroAnimations';

export const Hero = () => {
  const heroContainerRef = useRef(null);
  const heroContentRef = useRef(null);
  const objectWrapperRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Entrance masked reveal timeline
    const entranceCtx = initHeroEntrance({ containerRef: heroContainerRef });

    // 2. ScrollTrigger pin & transformation timeline
    const scrollCtx = initHeroScrollTransition({
      heroContainerRef,
      heroContentRef,
      objectWrapperRef
    });

    return () => {
      entranceCtx.revert();
      scrollCtx.revert();
    };
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative w-full h-screen min-h-[700px] bg-[#050505] text-[#F4F4F0] flex flex-col justify-between px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Header Navigation */}
      <Navigation />

      {/* Hero Main Asymmetric Content Grid */}
      <div
        ref={heroContentRef}
        className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 py-4 z-20 pointer-events-none"
      >
        {/* Left Column: Oversized Editorial Typography & Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 pointer-events-auto">
          {/* Role / Meta Tag */}
          <div className="reveal-mask hero-label">
            <div className="reveal-line flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]"></span>
              <span className="text-xs font-heading tracking-[0.25em] text-[#A0A0A0] uppercase">
                [ 01 // {siteData.role} ]
              </span>
            </div>
          </div>

          {/* Masked Reveal Oversized Heading Line 1 */}
          <div className="reveal-mask hero-title-1 -my-2 sm:-my-4">
            <h1 className="reveal-line text-[14vw] sm:text-[13vw] lg:text-[12vw] xl:text-[11vw] font-extrabold leading-[0.85] tracking-tight text-[#F4F4F0] uppercase">
              HI, I'M
            </h1>
          </div>

          {/* Masked Reveal Oversized Heading Line 2 with Accent Gradient */}
          <div className="reveal-mask hero-title-2 -my-2 sm:-my-4">
            <h1 className="reveal-line text-[14vw] sm:text-[13vw] lg:text-[12vw] xl:text-[11vw] font-extrabold leading-[0.85] tracking-tight accent-gradient-text uppercase">
              {siteData.shortName}
            </h1>
          </div>

          {/* Asymmetric Subtext & CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 max-w-xl">
            <div className="reveal-mask hero-desc flex-1">
              <p className="reveal-line text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed">
                {siteData.tagline}
              </p>
            </div>

            {/* Pill CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-cta pill-button group shrink-0 cursor-pointer"
            >
              <span>CONTACT ME</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Tech Icon Orbit */}
        <div
          ref={objectWrapperRef}
          className="hero-3d lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center relative pointer-events-auto"
        >
          <TechOrbit />
        </div>
      </div>

      {/* Bottom Status / Scroll Indicator */}
      <div className="w-full py-6 flex items-center justify-between z-20 border-t border-[rgba(244,244,240,0.08)]">
        <div className="flex items-center gap-2 text-xs text-[#A0A0A0] font-heading tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
          <span>{siteData.location}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-[#A0A0A0] font-heading tracking-widest uppercase">
          <span>SCROLL TO EXPLORE</span>
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};
