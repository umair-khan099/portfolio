/**
 * Checks if the user has requested prefers-reduced-motion
 * @returns {boolean}
 */
export const isReducedMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Linear interpolation helper
 * @param {number} start 
 * @param {number} end 
 * @param {number} factor 
 * @returns {number}
 */
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

/**
 * Clamp helper
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
