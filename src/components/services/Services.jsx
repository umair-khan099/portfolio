import React, { useEffect, useRef } from "react";
import { servicesData } from "../../data/services";
import { initServicesAnimations } from "../../animations/servicesAnimations";

export const Services = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = initServicesAnimations({
      containerRef,
      headingRef,
      rowsRef,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full min-h-screen bg-[#F4F4F0] text-[#050505] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden select-none border-t border-[rgba(0,0,0,0.1)]"
    >
      {/* Top Section Header with Pinned Heading */}
      <div className="max-w-7xl mx-auto w-full mb-16 lg:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div ref={headingRef} className="will-change-transform z-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
            <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#666666]">
              [ 03 // CAPABILITIES & SPECIALTIES ]
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase text-[#050505]">
            SERVICES
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#555555] font-light leading-relaxed">
          Delivering end-to-end interactive solutions from initial creative
          direction to high-performance WebGL engineering.
        </p>
      </div>

      {/* Editorial Horizontal Rows */}
      <div className="max-w-7xl mx-auto w-full flex flex-col border-t border-[#050505]/15">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (rowsRef.current[index] = el)}
            className="service-row group relative py-10 lg:py-14 border-b border-[#050505]/15 px-4 sm:px-6 cursor-pointer hover:bg-[#050505]/[0.03]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
              {/* Column 1: Oversized Number */}
              <div className="lg:col-span-2">
                <span className="service-num font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#999999] group-hover:text-[#050505] transition-all duration-300 group-hover:scale-110 inline-block">
                  {service.number}
                </span>
              </div>

              {/* Column 2: Large Title */}
              <div className="lg:col-span-4">
                <h3 className="service-title text-2xl sm:text-3xl lg:text-4xl font-bold font-heading uppercase text-[#050505] tracking-tight group-hover:translate-x-3 transition-transform duration-300 ease-out">
                  {service.title}
                </h3>
              </div>

              {/* Column 3: Concise Description & Tags */}
              <div className="service-desc lg:col-span-5 flex flex-col gap-3">
                <p className="text-sm sm:text-base text-[#444444] font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-heading tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#050505]/5 text-[#666666] border border-[#050505]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 4: Arrow Icon */}
              <div className="service-arrow lg:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-[#050505]/20 flex items-center justify-center group-hover:bg-[#050505] group-hover:text-[#F4F4F0] group-hover:border-[#050505] transition-all duration-300">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
