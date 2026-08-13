import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Contact section sequential masked reveals and 3D scroll movement
 * @param {Object} refs - DOM references for Contact section
 */
export const initContactAnimations = ({ containerRef, linesRef, subtextRef, formFieldsRef, objectRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      if (linesRef.current) {
        linesRef.current.forEach(line => line && gsap.set(line, { y: '0%', opacity: 1 }));
      }
      if (subtextRef.current) gsap.set(subtextRef.current, { opacity: 1, y: 0 });
      if (formFieldsRef.current) {
        formFieldsRef.current.forEach(field => field && gsap.set(field, { opacity: 1, y: 0 }));
      }
      if (objectRef.current) gsap.set(objectRef.current, { opacity: 1, scale: 1 });
      return;
    }

    // Set initial states
    if (linesRef.current) {
      linesRef.current.forEach(line => {
        if (line) gsap.set(line, { y: '100%', opacity: 0 });
      });
    }
    if (subtextRef.current) gsap.set(subtextRef.current, { opacity: 0, y: 25 });
    if (formFieldsRef.current) {
      formFieldsRef.current.forEach(field => {
        if (field) gsap.set(field, { opacity: 0, y: 25 });
      });
    }
    if (objectRef.current) gsap.set(objectRef.current, { opacity: 0, scale: 0.85, y: 40 });

    // Scrubbed Sequential Entrance Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'top 30%',
        scrub: 0.6,
        invalidateOnRefresh: true
      }
    });

    // 1. Heading lines reveal
    if (linesRef.current) {
      linesRef.current.forEach((line, idx) => {
        if (line) {
          tl.to(line, {
            y: '0%',
            opacity: 1,
            ease: 'power3.out'
          }, idx * 0.1);
        }
      });
    }

    // 2. Supporting text reveal
    if (subtextRef.current) {
      tl.to(subtextRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }, 0.35);
    }

    // 3. Form fields sequential reveal
    if (formFieldsRef.current) {
      formFieldsRef.current.forEach((field, idx) => {
        if (field) {
          tl.to(field, {
            opacity: 1,
            y: 0,
            ease: 'power2.out'
          }, 0.45 + idx * 0.08);
        }
      });
    }

    // 4. 3D Object arrives secondary (after typography and form fields establish)
    if (objectRef.current) {
      tl.to(objectRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'power2.out'
      }, 0.8);

      // Scroll-linked downward parallax movement for 3D object
      gsap.to(objectRef.current, {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    }

  }, containerRef);

  return ctx;
};
