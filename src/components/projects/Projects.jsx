import React, { useEffect, useRef } from "react";
import { projectsData } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { initProjectStackAnimations } from "../../animations/projectAnimations";

export const Projects = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = initProjectStackAnimations({
      containerRef,
      headingRef,
      cardsRef,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative w-full min-h-screen bg-[#050505] text-[#F4F4F0] py-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-start select-none"
    >
      {/* Section Header */}
      <div
        ref={headingRef}
        className="w-full max-w-7xl mx-auto mb-12 lg:mb-16 flex flex-col items-start gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></span>
          <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
            [ 04 // FEATURED ARCHITECTURE & CASE STUDIES ]
          </span>
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase text-[#F4F4F0]">
          SELECTED <span className="accent-gradient-text">WORK</span>
        </h2>
      </div>

      {/* Sticky Project Stacking Stage Container */}
      <div className="project-stage relative w-full h-[80vh] flex items-center justify-center">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <ProjectCard
              ref={(el) => (cardsRef.current[index] = el)}
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
