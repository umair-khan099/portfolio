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

    const rows = containerRef.current ? containerRef.current.querySelectorAll('.service-row') : [];
    if (!rows.length) return;

    if (isReduced) {
      rows.forEach(row => gsap.set(row, { opacity: 1, y: 0 }));
      return;
    }

    // Set initial state for all rows: y: 80px, opacity: 0
    rows.forEach(row => {
      gsap.set(row, { opacity: 0, y: 80 });
      const num = row.querySelector('.service-num');
      const title = row.querySelector('.service-title');
      const desc = row.querySelector('.service-desc');
      const arrow = row.querySelector('.service-arrow');
      if (num && title && desc && arrow) {
        gsap.set([num, title, desc, arrow], { y: 20, opacity: 0 });
      }
    });

    // Unified scrubbed Services Timeline pinned to container
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${rows.length * 75}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Heading subtle entrance / anchor response
    if (headingRef.current) {
      gsap.set(headingRef.current, { y: 0 });
    }

    // Sequentially enter each row with micro-staggering
    rows.forEach((row, idx) => {
      const num = row.querySelector('.service-num');
      const title = row.querySelector('.service-title');
      const desc = row.querySelector('.service-desc');
      const arrow = row.querySelector('.service-arrow');

      const stepStart = idx * 1.2;

      // Incoming row moves continuously from y: 80 to 0 and opacity: 0 to 1
      servicesTl.to(row, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power2.out'
      }, stepStart);

      // Micro-stagger inside row (number -> title -> description -> arrow)
      if (num && title && desc && arrow) {
        servicesTl.to([num, title, desc, arrow], {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out'
        }, stepStart + 0.15);
      }
    });

    // Short visual breathing room at end before section unpins
    servicesTl.to({}, { duration: 0.5 });

  }, containerRef);

  return ctx;
};
