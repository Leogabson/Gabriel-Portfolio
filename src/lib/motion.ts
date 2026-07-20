import { useReducedMotion } from "framer-motion";

export const easeCurve = [0.25, 0.1, 0.25, 1.0] as const;

export function useMotionSafe() {
  const reducedMotion = useReducedMotion();
  return { reducedMotion: !!reducedMotion };
}

export const scrollRevealTransition = {
  duration: 0.6,
  ease: easeCurve,
};

export const hoverTransition = {
  duration: 0.3,
  ease: easeCurve,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: scrollRevealTransition,
  },
};

export const heroStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const sectionStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const viewportRepeat = {
  once: true,
  amount: 0.2,
};
