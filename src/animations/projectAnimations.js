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
    gsap.set(cardElements[0], { y: '0vh', scale: 1, opacity: 1, zIndex: 1 });

    // Cards 1, 2, 3 start off-screen below (y: 85vh, scale: 0.90)
    for (let i = 1; i < cardElements.length; i++) {
      gsap.set(cardElements[i], {
        y: '85vh',
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
        end: `+=${cardElements.length * 90}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Card 0 initial visual scale
    const firstVisual = cardElements[0].querySelector('.project-visual-inner');
    if (firstVisual) {
      gsap.set(firstVisual, { scale: 1.12 });
      stackTl.to(firstVisual, { scale: 1.0, ease: 'none', duration: 0.5 }, 0);
    }

    // Loop through cards 1 to N-1 for physical 3-phase stacking transitions
    for (let i = 1; i < cardElements.length; i++) {
      const currentCard = cardElements[i];
      const prevCard = cardElements[i - 1];
      const visualInner = currentCard.querySelector('.project-visual-inner');

      const startTime = (i - 1) * 1.5;

      // Phase A & B: Incoming card movement starts first (y: 85vh -> 0vh)
      stackTl.to(currentCard, {
        y: '0vh',
        ease: 'power1.out',
        duration: 1.2
      }, startTime);

      // Incoming card scale follows (0.90 -> 1.0)
      stackTl.to(currentCard, {
        scale: 1.0,
        ease: 'power2.out',
        duration: 1.0
      }, startTime + 0.2);

      // Phase C: Previous card recedes subtly behind it (scale: 1.0 -> 0.96, yPercent: -3)
      stackTl.to(prevCard, {
        scale: 0.96,
        yPercent: -3,
        ease: 'power1.out',
        duration: 1.2
      }, startTime + 0.1);

      // Visual inside incoming card adjusts from 1.12 to 1.0
      if (visualInner) {
        gsap.set(visualInner, { scale: 1.12 });
        stackTl.to(visualInner, {
          scale: 1.0,
          ease: 'none',
          duration: 1.0
        }, startTime + 0.2);
      }
    }

    // Breathing point at end before section releases
    stackTl.to({}, { duration: 0.5 });

  }, containerRef);

  return ctx;
};
