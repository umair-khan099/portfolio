import React, { useEffect, useRef } from 'react';
import { testimonialsData } from '../../data/testimonials';
import { initTestimonialAnimations } from '../../animations/testimonialAnimations';

export const Testimonials = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = initTestimonialAnimations({
      containerRef,
      headingRef,
      cardsRef
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative w-full min-h-screen bg-[#050505] text-[#F4F4F0] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden select-none border-t border-[rgba(244,244,240,0.08)]"
    >
      {/* Section Header */}
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto mb-16 lg:mb-24 flex flex-col items-start gap-3"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
          <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
            [ 05 // ENDORSEMENTS & COLLABORATIONS ]
          </span>
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase text-[#F4F4F0]">
          PEOPLE ARE <span className="accent-gradient-text">SAYING</span>
        </h2>
      </div>

      {/* Editorial Staggered Card Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
        {testimonialsData.map((item, index) => {
          // Asymmetric column span & offset assignment for editorial composition
          const colSpans = [
            'md:col-span-7',
            'md:col-span-5 md:mt-12',
            'md:col-span-5',
            'md:col-span-7 md:mt-8',
            'md:col-span-12 max-w-3xl mx-auto mt-4'
          ];

          return (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${colSpans[index]} group relative bg-[#0c0c0e] border border-[rgba(244,244,240,0.12)] rounded-3xl p-8 lg:p-10 flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[rgba(244,244,240,0.3)] hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Quote text */}
              <p className="text-base sm:text-lg text-[#F4F4F0]/90 font-light leading-relaxed tracking-wide group-hover:text-[#F4F4F0] transition-colors duration-300">
                "{item.quote}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 border-t border-[rgba(244,244,240,0.08)] pt-6">
                {/* CSS Avatar Initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6]/30 via-[#EC4899]/20 to-[rgba(244,244,240,0.1)] border border-[rgba(244,244,240,0.2)] flex items-center justify-center font-heading text-xs font-bold text-[#F4F4F0] group-hover:scale-105 transition-transform duration-300">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-heading text-sm font-bold tracking-wider text-[#F4F4F0] uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-heading tracking-widest text-[#A0A0A0] uppercase">
                    {item.role} // <span className="text-[#F4F4F0]/70">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
