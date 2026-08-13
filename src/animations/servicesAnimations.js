import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Services section animations: pinned heading & staggered row reveals
 * @param {Object} refs - DOM references for Services section
 */
export const initServicesAnimations = ({ containerRef, headingRef, rowsRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      if (rowsRef.current) {
        gsap.set(rowsRef.current, { opacity: 1, x: 0 });
      }
      return;
    }

    // Pinned Services Heading while rows scroll
    if (headingRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: headingRef.current,
        pinSpacing: false,
        anticipatePin: 1
      });
    }

    // Staggered Row Reveal Animations
    const rows = containerRef.current.querySelectorAll('.service-row');
    rows.forEach((row, idx) => {
      gsap.set(row, { opacity: 0, x: 80 });

      gsap.to(row, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      });
    });

  }, containerRef);

  return ctx;
};
