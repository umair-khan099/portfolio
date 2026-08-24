import React, { useLayoutEffect, useRef } from "react";
import { testimonialsData } from "../../data/testimonials";
import { initTestimonialAnimations } from "../../animations/testimonialAnimations";

export const Testimonials = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = initTestimonialAnimations({
      containerRef,
      headingRef,
      trackRef,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative w-full min-h-screen bg-[#050505] text-[#F4F4F0] overflow-hidden border-t border-[rgba(244,244,240,0.08)]"
    >
      {/* Header */}
      <div
        ref={headingRef}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-24 lg:pt-28 pb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />

          <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
            [ 05 // TESTIMONIALS ]
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase leading-[0.9]">
            PEOPLE <span className="accent-gradient-text">SAY</span>
          </h2>

          <p className="max-w-sm text-sm text-[#888888] leading-relaxed">
            A few words from people I have worked with across products,
            engineering, and development.
          </p>
        </div>
      </div>

      {/* Horizontal Track */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="testimonial-track flex gap-5 lg:gap-6 px-6 sm:px-12 lg:px-20 w-max"
        >
          {testimonialsData.map((item) => (
            <article
              key={item.id}
              className="testimonial-card relative flex-shrink-0 w-[82vw] sm:w-[420px] lg:w-[460px] min-h-[280px] lg:min-h-[300px] p-6 lg:p-8 rounded-2xl border border-white/[0.10] bg-[#0C0C0E] flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-xs tracking-[0.2em] text-[#666666]">
                    {item.id}
                  </span>

                  <span className="text-2xl text-[#8B5CF6]/70">“</span>
                </div>

                <p className="text-base lg:text-lg text-[#E8E8E8] leading-relaxed font-light max-w-[390px]">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8 pt-5 border-t border-white/[0.08]">
                <div className="w-9 h-9 rounded-full border border-white/[0.15] bg-white/[0.06] flex items-center justify-center text-[10px] font-bold">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-heading text-xs font-bold tracking-wider">
                    {item.name}
                  </h4>

                  <p className="text-[10px] tracking-wider text-[#777777] uppercase mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* End spacing */}
          <div className="w-[8vw] flex-shrink-0" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-10 pb-10">
        <div className="flex items-center gap-3 text-[#666666]">
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Scroll
          </span>

          <div className="w-16 h-px bg-white/20" />

          <span className="text-[10px] tracking-[0.25em] uppercase">→</span>
        </div>
      </div>
    </section>
  );
};
