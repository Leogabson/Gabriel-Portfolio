"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import services from "@/data/services";
import {
  fadeUp,
  sectionStaggerContainer,
  useMotionSafe,
  viewportOnce,
} from "@/lib/motion";

export default function ServicesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { reducedMotion } = useMotionSafe();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Exactly 3 identical sets of 5 services for perfect 33.333333% seamless looping
  const marqueeItems = [...services, ...services, ...services];

  const isReduced = mounted && reducedMotion;

  return (
    <motion.section
      className="mb-40 pt-20 overflow-hidden"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionStaggerContainer}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-margin-page mb-12">
        <motion.div variants={fadeUp} className="technical-line mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <motion.span
              variants={fadeUp}
              className="font-mono text-label-sm text-primary uppercase tracking-widest block mb-2"
            >
              05 // SERVICES
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-headline-lg text-on-background"
            >
              Distinct Services I Offer
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <p className="font-mono text-body-md text-on-surface-variant max-w-md">
              Engineering solutions tailored for high scalability, fault tolerance, and modern user experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Unified Marquee Container to prevent SSR/Hydration mismatch */}
      <div
        className="relative w-full cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Edge Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-r from-[#131312] via-[#131312]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-l from-[#131312] via-[#131312]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max py-4"
          animate={{
            x: isReduced ? "0%" : ["-33.333333%", "0%"],
          }}
          transition={
            isReduced
              ? { duration: 0 }
              : {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: isHovered ? 75 : 25,
                    ease: "linear",
                  },
                }
          }
        >
          {marqueeItems.map((service, idx) => (
            <div
              key={`${service.id}-${idx}`}
              className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 border border-outline-variant bg-[#1c1c1a] group hover:border-primary/60 transition-colors duration-300 p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Service Image Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-outline-variant mb-6 bg-[#20201e] group-hover:border-primary/40 transition-colors duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="420px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] text-primary bg-[#131312]/90 border border-primary/30 px-2 py-0.5 uppercase tracking-widest">
                    {service.number}
                  </span>
                </div>

                {/* Service Category & Title */}
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                  {service.category}
                </div>

                <h3 className="font-serif text-headline-sm text-on-background mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant group-hover:border-primary/30 transition-colors duration-300">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-outline-variant font-mono text-[9px] text-on-surface-variant uppercase group-hover:border-primary/40 group-hover:text-on-background transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
