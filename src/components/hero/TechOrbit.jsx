import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SiJavascript } from "react-icons/si";
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
      <SiJavascript
        color="#F7DF1E"
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0"
      />
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
  const wrappersRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
  const offsetsRef = useRef(techData.map(() => ({ x: 0, y: 0 })));
  const homePosRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Organic Floating Animation on inner TechIcon elements
      const icons = containerRef.current?.querySelectorAll(".tech-icon-item");
      if (icons) {
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
      }

      // Find the parent Hero section element to expand interaction space across full Hero
      const heroEl =
        containerRef.current?.closest("section") || containerRef.current;

      // 2. Measure home orbit positions of card wrappers relative to full Hero section
      const measureHomePositions = () => {
        if (!heroEl) return;
        const heroRect = heroEl.getBoundingClientRect();
        homePosRef.current = wrappersRef.current.map((wrapper, i) => {
          if (!wrapper) return { x: 0, y: 0 };
          const rect = wrapper.getBoundingClientRect();
          const currentOffset = offsetsRef.current[i] || { x: 0, y: 0 };
          return {
            x: rect.left + rect.width / 2 - heroRect.left - currentOffset.x,
            y: rect.top + rect.height / 2 - heroRect.top - currentOffset.y,
          };
        });
      };

      measureHomePositions();

      // 3. Hero Section Mouse Event Listeners
      const handleMouseMove = (e) => {
        if (!heroEl) return;
        const heroRect = heroEl.getBoundingClientRect();
        mouseRef.current.x = e.clientX - heroRect.left;
        mouseRef.current.y = e.clientY - heroRect.top;
        mouseRef.current.isHovering = true;
      };

      const handleMouseLeave = () => {
        mouseRef.current.isHovering = false;
      };

      const handleResize = () => {
        measureHomePositions();
      };

      if (heroEl) {
        heroEl.addEventListener("mousemove", handleMouseMove);
        heroEl.addEventListener("mouseleave", handleMouseLeave);
      }
      window.addEventListener("resize", handleResize);

      // 4. GSAP Ticker Physics Loop for Trailing Magnetic Chain
      const lerpFactors = [0.18, 0.12, 0.09, 0.07, 0.055, 0.045];
      const spacing = 110; // Spacing distance between cards in chain

      const updateChain = () => {
        // Skip mouse follow on mobile / non-fine pointer devices
        const isDesktop = window.matchMedia("(pointer: fine)").matches;
        if (!isDesktop) return;

        const homePos = homePosRef.current;
        if (!homePos || homePos.length < techData.length) return;

        const isHovering = mouseRef.current.isHovering;

        // Calculate target positions for each card relative to full Hero coordinates
        const targetOffsets = techData.map(() => ({ x: 0, y: 0 }));

        if (isHovering) {
          // Card 0 targets mouse position directly in Hero
          const mouseX = mouseRef.current.x;
          const mouseY = mouseRef.current.y;

          targetOffsets[0] = {
            x: mouseX - homePos[0].x,
            y: mouseY - homePos[0].y,
          };

          // Cards 1..5 target position behind preceding card along trailing vector
          for (let i = 1; i < techData.length; i++) {
            const prevAbsX = homePos[i - 1].x + offsetsRef.current[i - 1].x;
            const prevAbsY = homePos[i - 1].y + offsetsRef.current[i - 1].y;

            let dx, dy;
            if (i === 1) {
              dx = prevAbsX - mouseX;
              dy = prevAbsY - mouseY;
            } else {
              const pPrevAbsX = homePos[i - 2].x + offsetsRef.current[i - 2].x;
              const pPrevAbsY = homePos[i - 2].y + offsetsRef.current[i - 2].y;
              dx = prevAbsX - pPrevAbsX;
              dy = prevAbsY - pPrevAbsY;
            }

            const dist = Math.hypot(dx, dy);
            const dirX = dist > 0.01 ? dx / dist : 0;
            const dirY = dist > 0.01 ? dy / dist : 1;

            const targetAbsX = prevAbsX + dirX * spacing;
            const targetAbsY = prevAbsY + dirY * spacing;

            targetOffsets[i] = {
              x: targetAbsX - homePos[i].x,
              y: targetAbsY - homePos[i].y,
            };
          }
        }

        // Lerp offsets towards targets and apply directly to DOM
        for (let i = 0; i < techData.length; i++) {
          const ease = isHovering ? lerpFactors[i] : 0.06;
          offsetsRef.current[i].x +=
            (targetOffsets[i].x - offsetsRef.current[i].x) * ease;
          offsetsRef.current[i].y +=
            (targetOffsets[i].y - offsetsRef.current[i].y) * ease;

          if (wrappersRef.current[i]) {
            gsap.set(wrappersRef.current[i], {
              x: offsetsRef.current[i].x,
              y: offsetsRef.current[i].y,
            });
          }
        }
      };

      gsap.ticker.add(updateChain);

      return () => {
        gsap.ticker.remove(updateChain);
        if (heroEl) {
          heroEl.removeEventListener("mousemove", handleMouseMove);
          heroEl.removeEventListener("mouseleave", handleMouseLeave);
        }
        window.removeEventListener("resize", handleResize);
      };
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

      {/* Render 6 Technology Floating Objects with Outer Follow Wrappers */}
      {techData.map((tech, i) => (
        <div
          key={tech.id}
          ref={(el) => (wrappersRef.current[i] = el)}
          className="tech-follow-wrapper absolute pointer-events-auto z-50"
          style={{
            ...tech.pos,
            willChange: "transform",
          }}
        >
          <TechIcon
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
            glowColor={tech.glowColor}
          />
        </div>
      ))}
    </div>
  );
};
