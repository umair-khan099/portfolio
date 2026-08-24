import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initAboutAnimations } from '../../animations/aboutAnimations';

export const About = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const deco1Ref = useRef(null);
  const deco2Ref = useRef(null);
  const deco3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = initAboutAnimations({
      containerRef,
      headingRef,
      paragraphRef,
      ctaRef,
      decosRef: {
        deco1: deco1Ref.current,
        deco2: deco2Ref.current,
        deco3: deco3Ref.current
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full min-h-screen bg-[#050505] text-[#F4F4F0] py-28 px-6 sm:px-12 lg:px-20 flex flex-col justify-center overflow-hidden border-t border-[rgba(244,244,240,0.06)] select-none"
    >
      {/* Decorative CSS 3D Spatial Objects */}
      <div
        ref={deco1Ref}
        className="absolute top-16 left-8 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 via-[#EC4899]/15 to-transparent blur-2xl pointer-events-none z-0"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <div
        ref={deco2Ref}
        className="absolute bottom-20 right-8 sm:right-24 w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-[rgba(244,244,240,0.08)] bg-gradient-to-br from-[rgba(244,244,240,0.03)] to-transparent backdrop-blur-md pointer-events-none z-0 shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <div
        ref={deco3Ref}
        className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-[#EC4899]/20 bg-gradient-to-tr from-[#EC4899]/10 to-transparent blur-sm pointer-events-none z-0"
      />

      {/* Main Asymmetric Content Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Oversized Editorial Heading */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
            <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
              [ 02 // PHILOSOPHY & VISION ]
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-heading tracking-tighter uppercase leading-[0.9] text-[#F4F4F0]"
          >
            ABOUT <br />
            <span className="accent-gradient-text">ME</span>
          </h2>
        </div>

        {/* Right Column: Intentionally Narrow Paragraph & CTA */}
        <div className="lg:col-span-6 lg:pt-16 flex flex-col items-start gap-8 max-w-xl">
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl font-light text-[#A0A0A0] leading-relaxed tracking-wide"
          >
            I build digital experiences where engineering, tactile interaction design, and real-time 3D systems meet. Operating at the intersection of aesthetic rigor and technical precision to sculpt memorable web artifacts.
          </p>

          <div ref={ctaRef} className="pt-2">
            <Link
              to="/about"
              className="pill-button group cursor-pointer"
            >
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

      </div>

      {/* Decorative Editorial Watermark */}
      <div className="absolute bottom-6 right-10 text-[10vw] font-bold font-heading text-[rgba(244,244,240,0.02)] pointer-events-none select-none uppercase tracking-tighter">
        VANCE ARCHITECTURE
      </div>
    </section>
  );
};
