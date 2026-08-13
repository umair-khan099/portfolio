import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes Preloader Animation Timeline
 * @param {Object} refs - DOM references for preloader elements
 * @param {Function} onComplete - Callback when preloader finishes exit transition
 */
export const initPreloaderAnimation = ({ containerRef, numberRef, textRef }, onComplete) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = isReduced ? 0.3 : 1.2;

    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Count 0 to 100
    tl.to(counter, {
      value: 100,
      duration: duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = `${Math.floor(counter.value).toString().padStart(2, '0')}%`;
        }
      }
    });

    // Subtle scale and blur effect during counting
    if (!isReduced) {
      tl.to(numberRef.current, {
        scale: 1.05,
        opacity: 0.95,
        duration: duration * 0.5,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      }, 0);
    }

    // Completion pulse and exit transition
    tl.to(containerRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: isReduced ? 0.4 : 0.8,
      ease: 'power4.inOut',
      display: 'none'
    });
  }, containerRef);

  return ctx;
};

/**
 * Initializes Hero Entrance Animation (Masked text reveal + 3D object entrance)
 * @param {Object} refs - DOM references for Hero section
 */
export const initHeroEntrance = ({ containerRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReduced) {
      gsap.set('.reveal-line, .hero-nav, .hero-label, .hero-desc, .hero-cta, .hero-3d', {
        opacity: 1,
        y: 0,
        scale: 1
      });
      return;
    }

    // Set initial state
    gsap.set('.hero-nav', { opacity: 0, y: -20 });
    gsap.set('.hero-label .reveal-line', { y: '120%', opacity: 0 });
    gsap.set('.hero-title-1 .reveal-line', { y: '120%', opacity: 0 });
    gsap.set('.hero-title-2 .reveal-line', { y: '120%', opacity: 0 });
    gsap.set('.hero-desc .reveal-line', { y: '120%', opacity: 0 });
    gsap.set('.hero-cta', { opacity: 0, scale: 0.9, y: 20 });
    gsap.set('.hero-3d', { opacity: 0, y: 60, scale: 0.85 });

    const tl = gsap.timeline({
      defaults: { ease: 'power4.out', duration: 1.1 }
    });

    // Sequence: Nav -> Label -> Title 1 -> Title 2 -> Desc -> CTA -> 3D Object
    tl.to('.hero-nav', { opacity: 1, y: 0, duration: 0.8 })
      .to('.hero-label .reveal-line', { y: '0%', opacity: 1 }, '-=0.5')
      .to('.hero-title-1 .reveal-line', { y: '0%', opacity: 1 }, '-=0.7')
      .to('.hero-title-2 .reveal-line', { y: '0%', opacity: 1 }, '-=0.9')
      .to('.hero-desc .reveal-line', { y: '0%', opacity: 1 }, '-=0.8')
      .to('.hero-cta', { opacity: 1, scale: 1, y: 0, duration: 0.8 }, '-=0.7')
      .to('.hero-3d', { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out' }, '-=1.0');

  }, containerRef);

  return ctx;
};

/**
 * Initializes Hero ScrollTrigger Transformation
 * Pinned hero section while scrolling, with cinematic scaling/fading/moving
 * @param {Object} refs - DOM references
 */
export const initHeroScrollTransition = ({ heroContainerRef, heroContentRef, objectWrapperRef }) => {
  const ctx = gsap.context(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Hero content: scale down subtly, move up, shift slightly horizontal, fade opacity to ~0.6
    if (heroContentRef.current) {
      scrollTl.to(heroContentRef.current, {
        scale: 0.92,
        yPercent: -15,
        xPercent: -2,
        opacity: 0.6,
        ease: 'none'
      }, 0);
    }

    // 3D Object: move toward side, rotate subtly, scale down slightly (slower & more subtle than typography)
    if (objectWrapperRef.current) {
      scrollTl.to(objectWrapperRef.current, {
        xPercent: 12,
        yPercent: -6,
        scale: 0.88,
        rotation: 5,
        opacity: 0.7,
        ease: 'none'
      }, 0);
    }
  }, heroContainerRef);

  return ctx;
};
