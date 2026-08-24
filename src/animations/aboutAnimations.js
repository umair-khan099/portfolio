import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes About section entrance and subtle scroll animations
 * @param {Object} params - DOM references for About section
 */
export const initAboutAnimations = ({ containerRef, labelRef, headingRef, contentRef, ctaRef, decosRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      if (labelRef?.current) gsap.set(labelRef.current, { opacity: 1, y: 0 });
      if (headingRef?.current) gsap.set(headingRef.current, { opacity: 1, y: 0 });
      if (contentRef?.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
      if (ctaRef?.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });
      if (decosRef?.current) {
        decosRef.current.forEach((el) => {
          if (el) gsap.set(el, { opacity: 1, scale: 1 });
        });
      }
      return;
    }

    // Set initial entrance states
    if (labelRef?.current) gsap.set(labelRef.current, { y: 20, opacity: 0 });
    if (headingRef?.current) gsap.set(headingRef.current, { y: 35, opacity: 0, scale: 0.96 });
    if (contentRef?.current) gsap.set(contentRef.current, { y: 30, opacity: 0 });
    if (ctaRef?.current) gsap.set(ctaRef.current, { y: 25, opacity: 0, scale: 0.95 });

    if (decosRef?.current) {
      decosRef.current.forEach((el, index) => {
        if (el) {
          const initialScale = 0.6 + (index % 3) * 0.15;
          gsap.set(el, { opacity: 0, scale: initialScale });
        }
      });
    }

    // Entrance Timeline
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 0.8,
        invalidateOnRefresh: true
      }
    });

    if (labelRef?.current) {
      entranceTl.to(labelRef.current, { y: 0, opacity: 1, ease: 'power2.out' }, 0);
    }

    if (headingRef?.current) {
      entranceTl.to(headingRef.current, { y: 0, opacity: 1, scale: 1, ease: 'power3.out' }, 0.05);
    }

    if (contentRef?.current) {
      entranceTl.to(contentRef.current, { y: 0, opacity: 1, ease: 'power2.out' }, 0.15);
    }

    if (ctaRef?.current) {
      entranceTl.to(ctaRef.current, { y: 0, opacity: 1, scale: 1, ease: 'back.out(1.4)' }, 0.25);
    }

    // Fade and scale in decorative objects in staggered groups
    if (decosRef?.current) {
      decosRef.current.forEach((el, index) => {
        if (el) {
          const delayOffset = 0.05 + (index % 5) * 0.04;
          entranceTl.to(el, { opacity: 1, scale: 1, ease: 'power2.out' }, delayOffset);
        }
      });
    }

  }, containerRef);

  return ctx;
};
