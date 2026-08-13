import React, { useState, useRef } from 'react';

export const ProjectCard = React.forwardRef(({ project, index }, ref) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="project-card relative w-[90vw] sm:w-[85vw] lg:w-[80vw] max-w-6xl h-[75vh] sm:h-[80vh] bg-[#0c0c0e] border border-[rgba(244,244,240,0.14)] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 pointer-events-auto"
      style={{ willChange: 'transform' }}
    >
      {/* Background Ambient Gradient Artifact */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: project.accentGradient }}
      />

      {/* TOP BAR: Number, Title, Category, Status Pill */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(244,244,240,0.1)] pb-6">
        <div className="flex items-center gap-4">
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#A0A0A0]">
            {project.number}
          </span>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F4F4F0]">
              {project.title}
            </h3>
            <span className="text-xs font-heading tracking-widest text-[#A0A0A0] uppercase">
              {project.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full border border-[rgba(244,244,240,0.15)] bg-[rgba(244,244,240,0.05)] text-[11px] font-heading tracking-widest text-[#F4F4F0] uppercase">
            {project.badge}
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/30 text-[11px] font-heading tracking-widest text-[#EC4899] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
            {project.status}
          </span>
        </div>
      </div>

      {/* MIDDLE: Abstract Spatial Visual Object / UI Artifact */}
      <div className="relative z-10 flex-1 my-6 rounded-2xl border border-[rgba(244,244,240,0.08)] bg-[#050505]/70 overflow-hidden flex items-center justify-center p-6">
        <div
          className="project-visual-inner w-full h-full rounded-xl flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden transition-transform duration-700 ease-out"
          style={{
            background: project.accentGradient,
            transform: isHovered ? 'scale(1.03)' : 'scale(1.0)'
          }}
        >
          {/* Top Tag & Grid Layout */}
          <div className="flex items-center justify-between text-xs font-heading tracking-widest text-[#F4F4F0]/80">
            <span>{project.visualSpec.tag}</span>
            <span>SYSTEM v2.6</span>
          </div>

          {/* Center Headline Banner */}
          <div className="my-auto text-center py-8">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter text-[#F4F4F0] uppercase drop-shadow-lg block">
              {project.visualSpec.headline}
            </span>
          </div>

          {/* Bottom Grid Items */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(244,244,240,0.15)] pt-4 text-[11px] font-heading tracking-wider text-[#A0A0A0] uppercase">
            {project.visualSpec.gridItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#F4F4F0]/60"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Description & Year Metadata */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="max-w-xl text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-4 shrink-0">
          <span className="text-xs font-heading tracking-widest text-[#A0A0A0]">
            YEAR // {project.year}
          </span>
          <a
            href={project.link}
            onClick={(e) => e.preventDefault()}
            className="w-9 h-9 rounded-full bg-[rgba(244,244,240,0.08)] border border-[rgba(244,244,240,0.15)] flex items-center justify-center text-[#F4F4F0] hover:bg-[#F4F4F0] hover:text-[#050505] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop Local Floating Cursor Label ("VIEW PROJECT →") */}
      {isHovered && (
        <div
          className="hidden lg:flex fixed pointer-events-none z-50 px-4 py-2 rounded-full bg-[#F4F4F0] text-[#050505] font-heading text-xs font-bold tracking-wider uppercase shadow-2xl transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`
          }}
        >
          VIEW PROJECT →
        </div>
      )}
    </div>
  );
});
