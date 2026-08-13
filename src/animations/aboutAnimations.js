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
    gsap.set(headingRef.current, { scale: 1.12, opacity: 0 });
    gsap.set(paragraphRef.current, { y: 50, opacity: 0 });
    gsap.set(ctaRef.current, { y: 30, opacity: 0 });

    if (decosRef.deco1) gsap.set(decosRef.deco1, { x: -60, opacity: 0, rotate: -10 });
    if (decosRef.deco2) gsap.set(decosRef.deco2, { x: 60, opacity: 0, rotate: 10 });
    if (decosRef.deco3) gsap.set(decosRef.deco3, { y: 60, opacity: 0, scale: 0.85 });

    // Entrance Timeline directly tied to scroll progress
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'top 35%',
        scrub: 0.6,
        invalidateOnRefresh: true
      }
    });

    entranceTl
      .to(headingRef.current, {
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      }, 0)
      .to(paragraphRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      }, 0.1)
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      }, 0.2);

    if (decosRef.deco1) entranceTl.to(decosRef.deco1, { x: 0, opacity: 0.7, rotate: 0, ease: 'none' }, 0);
    if (decosRef.deco2) entranceTl.to(decosRef.deco2, { x: 0, opacity: 0.7, rotate: 0, ease: 'none' }, 0.1);
    if (decosRef.deco3) entranceTl.to(decosRef.deco3, { y: 0, opacity: 0.7, scale: 1, ease: 'none' }, 0.15);

    // Subtle continuous parallax scroll effect while passing through section
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6
      }
    });

    if (decosRef.deco1) parallaxTl.to(decosRef.deco1, { y: -40, ease: 'none' }, 0);
    if (decosRef.deco2) parallaxTl.to(decosRef.deco2, { y: -80, ease: 'none' }, 0);
    if (decosRef.deco3) parallaxTl.to(decosRef.deco3, { y: -60, rotate: 15, ease: 'none' }, 0);

  }, containerRef);

  return ctx;
};
