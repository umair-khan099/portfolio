import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initServicesAnimations = ({
  containerRef,
  headingRef,
  rowsRef,
}) => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;

    if (!container) return;

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const rows = Array.from(container.querySelectorAll(".service-row"));

    if (!rows.length) return;

    // ---------------------------------------------
    // REDUCED MOTION
    // ---------------------------------------------

    if (isReduced) {
      gsap.set(rows, {
        clearProps: "all",
        opacity: 1,
        y: 0,
      });

      return;
    }

    // ---------------------------------------------
    // SERVICES HEADING
    // ---------------------------------------------

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: container,
            start: "top 82%",
            once: true,
          },
        },
      );
    }

    // ---------------------------------------------
    // SERVICE ROWS
    // ---------------------------------------------

    rows.forEach((row) => {
      const num = row.querySelector(".service-num");
      const title = row.querySelector(".service-title");
      const desc = row.querySelector(".service-desc");
      const arrow = row.querySelector(".service-arrow");

      const innerElements = [num, title, desc, arrow].filter(Boolean);

      // Initial state
      gsap.set(row, {
        opacity: 0,
        y: 50,
      });

      gsap.set(innerElements, {
        opacity: 0,
        y: 16,
      });

      // -------------------------------------------
      // ROW ENTER
      // -------------------------------------------

      const rowTl = gsap.timeline({
        scrollTrigger: {
          trigger: row,

          // Start when row enters lower part of viewport
          start: "top 88%",

          // Trigger only once
          once: true,

          // IMPORTANT:
          // No scrub.
          // Page scrolling remains completely free.
        },
      });

      rowTl.to(row, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      });

      rowTl.to(
        innerElements,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.35",
      );
    });
  }, containerRef);

  return ctx;
};
  