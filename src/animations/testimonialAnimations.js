import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initTestimonialAnimations = ({
  containerRef,
  headingRef,
  trackRef,
}) => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isReduced) {
      gsap.set(track, {
        clearProps: "all",
      });

      if (headingRef.current) {
        gsap.set(headingRef.current, {
          opacity: 1,
          y: 0,
        });
      }

      return;
    }

    /*
    ---------------------------------------------
    HEADING REVEAL
    ---------------------------------------------
    */

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            once: true,
          },
        },
      );
    }

    /*
    ---------------------------------------------
    HORIZONTAL SCROLL
    ---------------------------------------------
    */

    const getScrollAmount = () => {
      return Math.max(0, track.scrollWidth - window.innerWidth);
    };

    const horizontalTween = gsap.to(track, {
      x: () => -getScrollAmount(),

      ease: "none",

      scrollTrigger: {
        trigger: container,

        start: "top top",

        end: () => `+=${getScrollAmount()}`,

        pin: true,

        scrub: 1,

        invalidateOnRefresh: true,

        anticipatePin: 1,
      },
    });
  }, containerRef);

  return ctx;
};
