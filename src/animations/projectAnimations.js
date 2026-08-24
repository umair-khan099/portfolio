import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Signature stacked project animation.
 *
 * Behaviour:
 * - Stage pins when it reaches top of viewport.
 * - Heading scrolls naturally above stage.
 * - First card is active initially, 100% visible inside viewport.
 * - Each next card rises smoothly from below.
 * - Previous card subtly recedes.
 * - Animation is driven by scroll progress.
 */
export const initProjectStackAnimations = ({
  containerRef,
  stageRef,
  headingRef,
  cardsRef,
}) => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;
    const stage = stageRef?.current || container?.querySelector(".project-stage");

    if (!container || !stage) return;

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    // ==================================================
    // REDUCED MOTION
    // ==================================================

    if (isReduced) {
      if (headingRef.current) {
        gsap.set(headingRef.current, {
          clearProps: "all",
          opacity: 1,
        });
      }

      cards.forEach((card) => {
        gsap.set(card, {
          clearProps: "all",
          opacity: 1,
          x: 0,
          y: 0,
          yPercent: 0,
          scale: 1,
        });

        const visual = card.querySelector(".project-visual-inner");

        if (visual) {
          gsap.set(visual, {
            clearProps: "all",
            scale: 1,
          });
        }
      });

      return;
    }

    // ==================================================
    // HEADING
    // ==================================================

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }

    // ==================================================
    // INITIAL CARD STATES
    // ==================================================

    // First card is active at center of stage.
    gsap.set(cards[0], {
      x: 0,
      y: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    });

    // All incoming cards start below the stage.
    cards.slice(1).forEach((card, index) => {
      gsap.set(card, {
        x: 0,
        y: "100vh",
        yPercent: 0,
        scale: 0.94,
        opacity: 1,
        zIndex: 11 + index,
      });
    });

    // ==================================================
    // PROJECT VISUAL INITIAL STATES
    // ==================================================

    cards.forEach((card) => {
      const visual = card.querySelector(".project-visual-inner");

      if (!visual) return;

      gsap.set(visual, {
        scale: 1.01,
      });
    });

    // Progressive exposed card depth levels
    const STACK_LEVELS = [
      { y: "0vh", scale: 1, opacity: 1 },
      { y: "-3.5vh", scale: 0.97, opacity: 0.94 },
      { y: "-6.5vh", scale: 0.94, opacity: 0.86 },
      { y: "-9.5vh", scale: 0.91, opacity: 0.78 },
    ];

    // ==================================================
    // MAIN STACK TIMELINE (PINNING PROJECT STAGE)
    // ==================================================

    const totalTransitions = Math.max(cards.length - 1, 1);
    const holdDuration = 0.3; // Breathing room hold after final card

    const stackTl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,

        start: "top top",

        // Total scroll distance includes transitions plus hold duration.
        end: `+=${(totalTransitions + holdDuration) * 100}%`,

        pin: stage,
        pinSpacing: true,

        // Scroll-linked animation needs scrub.
        scrub: 0.25,

        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ==================================================
    // FIRST PROJECT VISUAL
    // ==================================================

    const firstVisual = cards[0].querySelector(".project-visual-inner");

    if (firstVisual) {
      stackTl.to(
        firstVisual,
        {
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0,
      );
    }

    // ==================================================
    // CARD STACK TRANSITIONS
    // ==================================================

    cards.slice(1).forEach((currentCard, index) => {
      const currentVisual = currentCard.querySelector(".project-visual-inner");
      const transitionStart = index;

      // -----------------------------------------------
      // Incoming card becomes active at depth 0
      // -----------------------------------------------
      stackTl.to(
        currentCard,
        {
          y: STACK_LEVELS[0].y,
          scale: STACK_LEVELS[0].scale,
          opacity: STACK_LEVELS[0].opacity,
          duration: 1,
          ease: "none",
        },
        transitionStart,
      );

      // -----------------------------------------------
      // All previous cards recede progressively up into exposed stack
      // -----------------------------------------------
      for (let j = 0; j <= index; j++) {
        const depthTo = index + 1 - j;
        const targetLevel =
          STACK_LEVELS[Math.min(depthTo, STACK_LEVELS.length - 1)];

        stackTl.to(
          cards[j],
          {
            y: targetLevel.y,
            scale: targetLevel.scale,
            opacity: targetLevel.opacity,
            duration: 1,
            ease: "none",
          },
          transitionStart,
        );
      }

      // -----------------------------------------------
      // Incoming visual settles
      // -----------------------------------------------
      if (currentVisual) {
        stackTl.to(
          currentVisual,
          {
            scale: 1,
            duration: 1,
            ease: "none",
          },
          transitionStart,
        );
      }
    });

    // Short natural breathing room hold before section unpins
    stackTl.to({}, { duration: holdDuration });

    // ==================================================
    // CLEANUP / RESET
    // ==================================================
  }, containerRef);

  return ctx;
};