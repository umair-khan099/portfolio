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

    // Heading reveal animation
    if (headingRef.current) {
      gsap.set(headingRef.current, { opacity: 0, y: -60 });

      gsap.to(headingRef.current, {
        opacity: 1,
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

    // Staggered sequence for cards (0, 2, 1, 4, 3)
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length > 0) {
      const sequenceIndices = [0, 2, 1, 4, 3];
      const rotations = [-1, 1, -0.5, 0.8, -1.2];

      cards.forEach((card, idx) => {
        const rot = rotations[idx % rotations.length];
        gsap.set(card, { opacity: 0, y: 50, rotate: rot });
      });

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      sequenceIndices.forEach((orderIdx, seqStep) => {
        if (cards[orderIdx]) {
          cardTl.to(cards[orderIdx], {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out'
          }, seqStep * 0.15);
        }
      });
    }

  }, containerRef);

  return ctx;
};
