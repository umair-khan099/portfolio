import React from "react";

export const TechIcon = ({
  name,
  icon: IconComponent,
  color,
  glowColor,
  style,
  tilt = "",
}) => {
  return (
    <div
      style={{
        ...style,
        zIndex: 50,
        boxShadow: `
          0 0 20px ${color}55,
          0 0 45px ${color}44,
          0 0 80px ${color}22,
          inset 0 1px 0 rgba(255,255,255,0.35)
        `,
        borderColor: `${color}99`,
      }}
      className={`
        tech-icon-item
        relative
        flex items-center
        gap-3
        px-5 py-3.5
        sm:px-6 sm:py-4
        rounded-2xl
        bg-[#09090d]/75
        backdrop-blur-md
        border
        cursor-default
        select-none
        pointer-events-auto
        group
      `}
    >
      {/* Strong outer glow */}
      <div
        className="
          absolute
          -inset-5
          rounded-3xl
          pointer-events-none
          blur-2xl
          z-[-1]
        "
        style={{
          background:
            glowColor ||
            `radial-gradient(
              circle,
              ${color}99 0%,
              ${color}55 35%,
              transparent 75%
            )`,
          opacity: 1,
        }}
      />

      {/* Secondary glow */}
      <div
        className="
          absolute
          -inset-2
          rounded-3xl
          pointer-events-none
          blur-lg
          z-[-1]
        "
        style={{
          background: color,
          opacity: 0.18,
        }}
      />

      {/* Glass highlight */}
      <div
        className="
          absolute
          inset-x-3
          top-0
          h-px
          pointer-events-none
        "
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${color},
            white,
            ${color},
            transparent
          )`,
          opacity: 0.8,
        }}
      />

      {/* Icon */}
      <div
        className="
          relative
          z-20
          flex
          items-center
          justify-center
          w-12 h-12
          sm:w-14 sm:h-14
          lg:w-16 lg:h-16
          rounded-xl
          bg-[#050508]
          border
          shrink-0
        "
        style={{
          borderColor: `${color}cc`,
          boxShadow: `
            0 0 15px ${color}99,
            0 0 35px ${color}55,
            inset 0 0 18px ${color}33
          `,
        }}
      >
        <IconComponent />
      </div>

      {/* Name */}
      <span
        className="
          relative
          z-20
          font-heading
          text-sm
          sm:text-base
          lg:text-lg
          font-extrabold
          tracking-wider
          uppercase
          whitespace-nowrap
        "
        style={{
          color: "#FFFFFF",
          textShadow: `
            0 0 8px ${color},
            0 0 18px ${color}99
          `,
        }}
      >
        {name}
      </span>
    </div>
  );
};
