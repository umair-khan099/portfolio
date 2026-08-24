import React from "react";

export const TechIcon = ({ name, icon: IconComponent, color, glowColor, style, tilt = "" }) => {
  return (
    <div
      style={{
        ...style,
        boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 30px ${color}44, inset 0 1px 1px rgba(255,255,255,0.35)`,
        borderColor: `${color}77`,
      }}
      className={`tech-icon-item absolute z-10 flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 rounded-2xl sm:rounded-3xl bg-[#0e0e14]/90 backdrop-blur-xl border transition-all duration-500 cursor-default select-none pointer-events-auto group ${tilt}`}
    >
      {/* 1. Deep Ambient Outer Bloom Glow */}
      <div
        className="absolute -inset-3 sm:-inset-4 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl sm:blur-2xl z-0"
        style={{
          background: glowColor || `radial-gradient(circle, ${color}77 0%, transparent 75%)`,
        }}
      />

      {/* 2. Concentric Inner Light Surface */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-35 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${color}66 0%, transparent 70%)`,
        }}
      />

      {/* 3. 3D Glass Specular Top Highlight */}
      <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10" />

      {/* 4. Large Luminous Icon Container */}
      <div
        className="relative z-10 flex items-center justify-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#050508]/85 border shadow-inner shrink-0"
        style={{
          borderColor: `${color}66`,
          boxShadow: `inset 0 0 14px ${color}44, 0 0 18px ${color}55`,
        }}
      >
        <IconComponent />
      </div>

      {/* 5. Bold High-Contrast Typography */}
      <span
        className="relative z-10 font-heading text-xs sm:text-sm lg:text-base font-extrabold tracking-wider uppercase drop-shadow-md shrink-0"
        style={{
          color: "#F4F4F0",
          textShadow: `0 0 12px ${color}88`,
        }}
      >
        {name}
      </span>
    </div>
  );
};
