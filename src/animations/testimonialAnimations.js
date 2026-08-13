import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Testimonials section staggered reveal animations
 * @param {Object} refs - DOM references for Testimonials section
 */
export const initTestimonialAnimations = ({ containerRef, headingRef, cardsRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      if (headingRef.current) gsap.set(headingRef.current, { opacity: 1, y: 0 });
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          if (card) gsap.set(card, { opacity: 1, y: 0, rotate: 0 });
        });
      }
      return;
    }

    // Heading reveal animation scrubbed with scroll
    if (headingRef.current) {
      gsap.set(headingRef.current, { opacity: 0, y: 40 });

      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });
    }

    // Staggered sequence for cards (0, 2, 1, 4, 3) scrubbed to scroll
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length > 0) {
      const sequenceIndices = [0, 2, 1, 4, 3];
      const rotations = [-1, 1, -0.5, 0.8, -1.2];

      cards.forEach((card, idx) => {
        const rot = rotations[idx % rotations.length];
        gsap.set(card, { opacity: 0, y: 45, rotate: rot });
      });

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });

      sequenceIndices.forEach((orderIdx, seqStep) => {
        if (cards[orderIdx]) {
          cardTl.to(cards[orderIdx], {
            opacity: 1,
            y: 0,
            rotate: 0,
            ease: 'power2.out'
          }, seqStep * 0.12);
        }
      });
    }

  }, containerRef);

  return ctx;
};
