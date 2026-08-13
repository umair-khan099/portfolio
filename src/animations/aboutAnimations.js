import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes About section entrance and parallax animations
 * @param {Object} refs - DOM references for About section
 */
export const initAboutAnimations = ({ containerRef, headingRef, paragraphRef, ctaRef, decosRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      gsap.set([headingRef.current, paragraphRef.current, ctaRef.current], { opacity: 1, scale: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(headingRef.current, { scale: 1.2, opacity: 0 });
    gsap.set(paragraphRef.current, { y: 60, opacity: 0 });
    gsap.set(ctaRef.current, { y: 30, opacity: 0 });

    if (decosRef.deco1) gsap.set(decosRef.deco1, { x: -100, opacity: 0, rotate: -15 });
    if (decosRef.deco2) gsap.set(decosRef.deco2, { x: 100, opacity: 0, rotate: 15 });
    if (decosRef.deco3) gsap.set(decosRef.deco3, { y: 100, opacity: 0, scale: 0.8 });

    // Entrance Timeline triggered on scroll
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    entranceTl
      .to(headingRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out'
      })
      .to(paragraphRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out'
      }, '-=0.7')
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

    // Decorative Objects Reveal Timeline
    if (decosRef.deco1 || decosRef.deco2 || decosRef.deco3) {
      const decosTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      if (decosRef.deco1) {
        decosTl.to(decosRef.deco1, { x: 0, opacity: 0.8, rotate: 0, duration: 1.2, ease: 'power3.out' }, 0);
      }
      if (decosRef.deco2) {
        decosTl.to(decosRef.deco2, { x: 0, opacity: 0.8, rotate: 0, duration: 1.4, ease: 'power3.out' }, 0.1);
      }
      if (decosRef.deco3) {
        decosTl.to(decosRef.deco3, { y: 0, opacity: 0.8, scale: 1, duration: 1.3, ease: 'power3.out' }, 0.2);
      }
    }

    // Parallax Scroll Effect on decorative elements
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    if (decosRef.deco1) parallaxTl.to(decosRef.deco1, { y: -60, ease: 'none' }, 0);
    if (decosRef.deco2) parallaxTl.to(decosRef.deco2, { y: -120, ease: 'none' }, 0);
    if (decosRef.deco3) parallaxTl.to(decosRef.deco3, { y: -90, rotate: 25, ease: 'none' }, 0);

  }, containerRef);

  return ctx;
};
