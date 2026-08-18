import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const AmbientBackground = () => {
  const containerRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const glow1 = glow1Ref.current;
    const glow2 = glow2Ref.current;
    const cursorGlow = cursorGlowRef.current;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isCoarse || isReduced || !container || !cursorGlow) return;

    // GSAP quickTo interpolators for buttery smooth cursor inertia & parallax
    const xToCursor = gsap.quickTo(cursorGlow, "x", {
      duration: 1.4,
      ease: "power2.out",
    });
    const yToCursor = gsap.quickTo(cursorGlow, "y", {
      duration: 1.4,
      ease: "power2.out",
    });

    const xToGlow1 = glow1
      ? gsap.quickTo(glow1, "x", { duration: 2.2, ease: "power2.out" })
      : null;
    const yToGlow1 = glow1
      ? gsap.quickTo(glow1, "y", { duration: 2.2, ease: "power2.out" })
      : null;

    const xToGlow2 = glow2
      ? gsap.quickTo(glow2, "x", { duration: 2.5, ease: "power2.out" })
      : null;
    const yToGlow2 = glow2
      ? gsap.quickTo(glow2, "y", { duration: 2.5, ease: "power2.out" })
      : null;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const winW = window.innerWidth || 1000;
      const winH = window.innerHeight || 1000;

      // Position main ambient cursor glow
      xToCursor(clientX);
      yToCursor(clientY);

      // Subtle parallax offset for static background light fields (-25px to +25px)
      const offsetX = (clientX / winW - 0.5) * 50;
      const offsetY = (clientY / winH - 0.5) * 50;

      if (xToGlow1 && yToGlow1) {
        xToGlow1(offsetX);
        yToGlow1(offsetY);
      }
      if (xToGlow2 && yToGlow2) {
        xToGlow2(-offsetX * 0.8);
        yToGlow2(-offsetY * 0.8);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-50 select-none"
    >
      {/* Top Left Multi-Plane Ambient Glow */}
      <div
        ref={glow1Ref}
        className="absolute -top-[15vw] -left-[15vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.1) 60%, transparent 80%)",
          willChange: "transform",
        }}
      />

      {/* Bottom Right Multi-Plane Ambient Glow */}
      <div
        ref={glow2Ref}
        className="absolute -bottom-[15vw] -right-[15vw] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-[160px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(255, 107, 107, 0.1) 60%, transparent 80%)",
          willChange: "transform",
        }}
      />

      {/* Primary Cursor-Following Ambient Light Field */}
      <div
        ref={cursorGlowRef}
        className="absolute top-0 left-0 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] opacity-25 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 75%)",
          willChange: "transform",
        }}
      />
    </div>
  );
};
