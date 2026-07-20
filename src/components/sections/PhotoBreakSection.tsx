"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  scrollRevealTransition,
  useMotionSafe,
  viewportRepeat,
} from "@/lib/motion";

const CAPTION =
  "Deep work at the intersection of systems architecture and product craft — where code meets intent.";

export default function PhotoBreakSection() {
  const { reducedMotion } = useMotionSafe();

  const imageTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const };

  const textTransition = reducedMotion
    ? { duration: 0 }
    : { ...scrollRevealTransition, delay: 0.15 };

  return (
    <section
      id="photo-break"
      className="mb-40 pt-12 border-t border-outline-variant"
      aria-label="Workspace photo"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-margin-page">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <motion.div
            className="col-span-12 md:col-span-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportRepeat}
            transition={imageTransition}
          >
            <div className="relative w-full aspect-[16/10] max-h-[280px] sm:max-h-[360px] md:max-h-[480px] overflow-hidden border border-outline-variant rounded-[6px] bg-[#20201e]">
              <Image
                src="/images/workstation.png"
                alt="Gabriel's developer workstation with code editor and mobile simulator"
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-5 flex flex-col justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportRepeat}
            transition={textTransition}
          >
            <span className="font-mono text-label-sm text-primary uppercase tracking-widest mb-4">
              How I Work
            </span>
            <p className="font-mono text-body-lg text-on-surface-variant leading-relaxed">
              {CAPTION}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
