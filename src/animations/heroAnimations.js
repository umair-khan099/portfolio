import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Preloader Animation Timeline
 * @param {Object} refs - DOM references for preloader elements
 * @param {Function} onComplete - Callback when preloader finishes exit transition
 */
export const initPreloaderAnimation = (
  { containerRef, numberRef, textRef },
  onComplete,
) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = isReduced ? 0.3 : 1.2;

    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Count 0 to 100
    tl.to(counter, {
      value: 100,
      duration: duration,
      ease: "power2.inOut",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = `${Math.floor(counter.value).toString().padStart(2, "0")}%`;
        }
      },
    });

    // Subtle scale and blur effect during counting
    if (!isReduced) {
      tl.to(
        numberRef.current,
        {
          scale: 1.05,
          opacity: 0.95,
          duration: duration * 0.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        0,
      );
    }

    // Completion pulse and exit transition
    tl.to(containerRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: isReduced ? 0.4 : 0.8,
      ease: "power4.inOut",
      display: "none",
    });
  }, containerRef);

  return ctx;
};

/**
 * Initializes Hero Entrance Animation (Masked text reveal + 3D object entrance)
 * @param {Object} refs - DOM references for Hero section
 */
export const initHeroEntrance = ({ containerRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isReduced) {
      gsap.set(
        ".reveal-line, .hero-nav, .hero-label, .hero-desc, .hero-cta, .hero-3d",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      );

      return;
    }

    // -----------------------------------------
    // INITIAL STATES
    // -----------------------------------------

    gsap.set(".hero-nav", {
      opacity: 0,
      y: -16,
    });

    gsap.set(".hero-label .reveal-line", {
      y: "110%",
      opacity: 0,
    });

    gsap.set(".hero-title-1 .reveal-line", {
      y: "110%",
      opacity: 0,
    });

    gsap.set(".hero-title-2 .reveal-line", {
      y: "110%",
      opacity: 0,
    });

    gsap.set(".hero-desc .reveal-line", {
      y: "110%",
      opacity: 0,
    });

    gsap.set(".hero-cta", {
      opacity: 0,
      y: 18,
      scale: 0.96,
    });

    gsap.set(".hero-3d", {
      opacity: 0,
      y: 40,
      scale: 0.92,
    });

    // -----------------------------------------
    // ENTRANCE TIMELINE
    // -----------------------------------------

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Navigation
    tl.to(".hero-nav", {
      opacity: 1,
      y: 0,
      duration: 0.55,
    });

    // Small label
    tl.to(
      ".hero-label .reveal-line",
      {
        y: "0%",
        opacity: 1,
        duration: 0.65,
      },
      "-=0.25",
    );

    // First heading line
    tl.to(
      ".hero-title-1 .reveal-line",
      {
        y: "0%",
        opacity: 1,
        duration: 0.85,
      },
      "-=0.20",
    );

    // Second heading line
    tl.to(
      ".hero-title-2 .reveal-line",
      {
        y: "0%",
        opacity: 1,
        duration: 0.85,
      },
      "-=0.45",
    );

    // Description
    tl.to(
      ".hero-desc .reveal-line",
      {
        y: "0%",
        opacity: 1,
        duration: 0.65,
      },
      "-=0.20",
    );

    // CTA
    tl.to(
      ".hero-cta",
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
      },
      "-=0.15",
    );

    // 3D object
    tl.to(
      ".hero-3d",
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power3.out",
      },
      "-=0.35",
    );
  }, containerRef);

  return ctx;
};
/**
 * Initializes Hero ScrollTrigger Transformation
 * Pinned hero section while scrolling, with cinematic scaling/fading/moving
 * @param {Object} refs - DOM references
 */
export const initHeroScrollTransition = ({
  heroContainerRef,
  heroContentRef,
  objectWrapperRef,
}) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isReduced || !heroContainerRef.current) return;

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,

        start: "top top",

        // Keep the hero pinned for one viewport of scroll.
        end: "+=100%",

        pin: true,
        pinSpacing: true,

        // Slight smoothing, but don't make the animation
        // lag behind the actual scroll.
        scrub: 0.35,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    // -----------------------------------------
    // HERO TYPOGRAPHY
    // -----------------------------------------

    if (heroContentRef.current) {
      scrollTl.to(
        heroContentRef.current,
        {
          scale: 0.94,
          yPercent: -10,
          xPercent: -1.5,
          opacity: 0.72,
          ease: "none",
        },
        0,
      );
    }

    // -----------------------------------------
    // HERO 3D
    // -----------------------------------------

    if (objectWrapperRef.current) {
      scrollTl.to(
        objectWrapperRef.current,
        {
          xPercent: 8,
          yPercent: -4,
          scale: 0.92,
          rotation: 3,
          opacity: 0.78,
          ease: "none",
        },
        0,
      );
    }
  }, heroContainerRef);

  return ctx;
};
