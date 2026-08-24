import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TechIcon } from "./TechIcon";

// 6 Target Technologies with organic orbit arrangement & prominent floating specs
const techData = [
  {
    id: "js",
    name: "JavaScript",
    color: "#F7DF1E",
    glowColor:
      "radial-gradient(circle, rgba(247,223,30,0.65) 0%, rgba(247,223,30,0.15) 50%, transparent 80%)",
    pos: {
      top: "8%",
      left: "50%",
      transform: "translateX(-50%)",
    },
    float: { y: -14, rotate: 3, scale: 1.04, duration: 3.4, delay: 0 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M11.968 18.066c-.347.574-.954.912-1.745.912-1.077 0-1.67-.58-1.67-1.464 0-1.282 1.096-1.733 2.658-2.222.863-.26 1.766-.554 1.766-1.688 0-1.321-.99-2.115-2.613-2.115-1.54 0-2.48.78-2.793 1.83l1.52.424c.164-.53.538-.85 1.258-.85.72 0 1.1.339 1.1.841 0 .615-.468.868-1.523 1.221-1.332.441-2.905.954-2.905 2.766 0 1.636 1.22 2.76 3.125 2.76 1.488 0 2.502-.68 2.87-1.579l-1.048-.887zm6.78-8.566h-1.696v6.07c0 1.463-.78 2.088-1.892 2.088-.728 0-1.267-.29-1.597-.78l-1.047.887c.504.833 1.43 1.346 2.645 1.346 2.072 0 3.587-1.15 3.587-3.486v-6.125z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    color: "#61DAFB",
    glowColor:
      "radial-gradient(circle, rgba(97,218,251,0.65) 0%, rgba(97,218,251,0.15) 50%, transparent 80%)",
    pos: {
      top: "24%",
      left: "5%",
    },
    float: { y: 16, rotate: -4, scale: 1.05, duration: 4.1, delay: 0.3 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1.8"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1.8"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: "node",
    name: "Node.js",
    color: "#5FA04E",
    glowColor:
      "radial-gradient(circle, rgba(95,160,78,0.65) 0%, rgba(95,160,78,0.15) 50%, transparent 80%)",
    pos: {
      top: "24%",
      right: "5%",
    },
    float: { y: -16, rotate: 5, scale: 1.03, duration: 3.7, delay: 0.6 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <path
          d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z"
          fill="#5FA04E"
          fillOpacity="0.35"
          stroke="#5FA04E"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 6.5L6.5 9.7v4.6l5.5 3.2 5.5-3.2V9.7L12 6.5z"
          stroke="#5FA04E"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="#5FA04E" />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express",
    color: "#FFFFFF",
    glowColor:
      "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.12) 50%, transparent 80%)",
    pos: {
      top: "62%",
      left: "5%",
    },
    float: { y: -12, rotate: -3, scale: 1.04, duration: 3.9, delay: 0.2 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <rect
          width="24"
          height="24"
          rx="6"
          fill="#FFFFFF"
          fillOpacity="0.18"
          stroke="#FFFFFF"
          strokeWidth="1.6"
        />
        <text
          x="12"
          y="15.8"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="extrabold"
          fontFamily="sans-serif"
          letterSpacing="-0.5"
        >
          ex
        </text>
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    color: "#47A248",
    glowColor:
      "radial-gradient(circle, rgba(71,162,72,0.65) 0%, rgba(71,162,72,0.15) 50%, transparent 80%)",
    pos: {
      top: "62%",
      right: "5%",
    },
    float: { y: 14, rotate: 4, scale: 1.05, duration: 4.3, delay: 0.5 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <path
          d="M12 2c.4 1.8 1.4 3.7 2.4 5.4 1.4 2.4 3.1 4.7 3.6 7.6.6 3.5-.7 7-3.9 8.6-.7.3-1.4.4-2.1.4s-1.4-.1-2.1-.4C6.7 22 5.4 18.5 6 15c.5-2.9 2.2-5.2 3.6-7.6C10.6 5.7 11.6 3.8 12 2z"
          fill="#47A248"
          fillOpacity="0.35"
          stroke="#47A248"
          strokeWidth="1.8"
        />
        <path
          d="M12 2v20"
          stroke="#47A248"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    color: "#4169E1",
    glowColor:
      "radial-gradient(circle, rgba(65,105,225,0.65) 0%, rgba(65,105,225,0.15) 50%, transparent 80%)",
    pos: {
      top: "80%",
      left: "50%",
      transform: "translateX(-50%)",
    },    
    float: { y: -15, rotate: -4, scale: 1.03, duration: 3.6, delay: 0.4 },
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
        fill="none"
      >
        <path
          d="M12 3C7 3 3 6.5 3 11c0 3.2 2 6 5 7.2V21l3.5-2h.5c5 0 9-3.5 9-8s-4-8-9-8z"
          fill="#336791"
          fillOpacity="0.35"
          stroke="#4169E1"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="9.5" r="1.4" fill="#4169E1" />
        <path
          d="M13 10c1 0 2.5.5 3 2"
          stroke="#4169E1"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const TechOrbit = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const icons = containerRef.current?.querySelectorAll(".tech-icon-item");
      if (!icons) return;

      icons.forEach((icon, i) => {
        const spec = techData[i]?.float || {
          y: -14,
          rotate: 3,
          scale: 1.04,
          duration: 3.6,
          delay: 0,
        };
        gsap.to(icon, {
          y: spec.y,
          rotate: spec.rotate,
          scale: spec.scale,
          duration: spec.duration,
          delay: spec.delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-visible select-none [perspective:1000px]"
    >
      {/* Central Spatial Visual Core - Editorial Ambient Rings & Glow */}
      <div className="absolute w-52 h-52 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full border border-[rgba(244,244,240,0.08)] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#EC4899]/8 to-transparent backdrop-blur-3xl pointer-events-none z-0 shadow-[0_0_80px_rgba(139,92,246,0.15)] flex items-center justify-center">
        <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-[rgba(244,244,240,0.1)] bg-gradient-to-br from-[rgba(244,244,240,0.03)] to-transparent" />
        <div className="absolute w-3 h-3 rounded-full bg-[#EC4899] blur-xs animate-ping" />
      </div>

      {/* Orbital Decorative Ellipse Track */}
      <div className="absolute w-[86%] h-[82%] rounded-[50%] border border-[rgba(244,244,240,0.07)] pointer-events-none z-0" />

      {/* Render 6 Technology Floating Objects */}
      {techData.map((tech) => (
        <TechIcon
          key={tech.id}
          name={tech.name}
          icon={tech.icon}
          color={tech.color}
          glowColor={tech.glowColor}
          style={tech.pos}
        />
      ))}
    </div>
  );
};
