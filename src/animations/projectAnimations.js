import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Signature Stacked Projects Animation
 * @param {Object} refs - DOM references for Projects section
 */
export const initProjectStackAnimations = ({ containerRef, headingRef, cardsRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Heading Reveal
    if (headingRef.current) {
      if (isReduced) {
        gsap.set(headingRef.current, { opacity: 1, scale: 1, y: 0 });
      } else {
        gsap.set(headingRef.current, { opacity: 0, scale: 1.15, y: 80 });

        gsap.to(headingRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    }

    const cardElements = cardsRef.current;
    if (!cardElements || cardElements.length === 0) return;

    if (isReduced) {
      cardElements.forEach((card) => {
        gsap.set(card, { y: 0, scale: 1, opacity: 1 });
      });
      return;
    }

    // Set initial card states
    // Card 0 (Project 01) is active initially
    gsap.set(cardElements[0], { y: '0%', scale: 1, opacity: 1, zIndex: 1 });

    // Cards 1, 2, 3 start off-screen below (y: 100vh, scale: 0.90)
    for (let i = 1; i < cardElements.length; i++) {
      gsap.set(cardElements[i], {
        y: '100vh',
        scale: 0.90,
        opacity: 1,
        zIndex: i + 1
      });
    }

    // Single scrubbed timeline pinning the project section
    const stackTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${cardElements.length * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate Card 0 initial visual scale
    const firstVisual = cardElements[0].querySelector('.project-visual-inner');
    if (firstVisual) {
      gsap.set(firstVisual, { scale: 1.15 });
      stackTl.to(firstVisual, { scale: 1, ease: 'none', duration: 0.5 }, 0);
    }

    // Loop through cards 1 to N-1 for stacking transitions
    for (let i = 1; i < cardElements.length; i++) {
      const currentCard = cardElements[i];
      const prevCard = cardElements[i - 1];
      const visualInner = currentCard.querySelector('.project-visual-inner');

      const startTime = i;

      // Previous card scales down slightly and shifts up as next card covers it
      stackTl.to(prevCard, {
        scale: 0.94,
        yPercent: -2,
        ease: 'none',
        duration: 1
      }, startTime);

      // Incoming card moves up from 100vh to 0 and scales up to 1
      stackTl.to(currentCard, {
        y: '0vh',
        scale: 1,
        ease: 'none',
        duration: 1
      }, startTime);

      // Visual inside incoming card zooms out from 1.15 to 1.0
      if (visualInner) {
        gsap.set(visualInner, { scale: 1.15 });
        stackTl.to(visualInner, {
          scale: 1.0,
          ease: 'none',
          duration: 1
        }, startTime);
      }
    }

  }, containerRef);

  return ctx;
};
