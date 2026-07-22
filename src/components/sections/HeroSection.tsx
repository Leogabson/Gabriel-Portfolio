"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import personal from "@/data/personal";
import MagneticButton from "@/components/MagneticButton";
import { fadeUp, heroStaggerContainer } from "@/lib/motion";

const baseTransition = { duration: 0.6, ease: "easeOut" as const };

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="pt-32 pb-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={heroStaggerContainer}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-margin-page">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 lg:col-span-7">
            <motion.div variants={heroStaggerContainer} className="space-y-8">
              <motion.h1
                variants={fadeUp}
                transition={baseTransition}
                className="font-serif text-5xl md:text-7xl leading-tight text-on-background"
              >
                {personal.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={baseTransition}
                className="font-mono text-lg tracking-widest text-primary uppercase"
              >
                {personal.title}
              </motion.p>

              <motion.p
                variants={fadeUp}
                transition={baseTransition}
                className="mt-6 text-lg leading-relaxed max-w-2xl text-on-surface-variant"
              >
                Engineering full-stack products from concept to scale, bridging the gap
                between technical architecture and user-centric design.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={baseTransition}
                className="mt-10 flex flex-wrap gap-4"
              >
                <MagneticButton href="#projects">View Projects</MagneticButton>
                <MagneticButton href="#contact" variant="outline">Get in Touch</MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="col-span-12 lg:col-span-5"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-outline-variant bg-surface">
              <Image
                src="/images/20260512_182915.jpg"
                alt="Gabriel Ehuwa - Software Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
