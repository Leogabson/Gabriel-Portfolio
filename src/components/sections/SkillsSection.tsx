"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills";
import { fadeUp, sectionStaggerContainer, viewportRepeat } from "@/lib/motion";

export default function SkillsSection() {
  return (
    <motion.section
      className="mb-40 max-w-[1200px] mx-auto px-6 md:px-margin-page"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={viewportRepeat}
      variants={sectionStaggerContainer}
    >
      <motion.div variants={fadeUp} className="technical-line mb-12" />
      <motion.h2 variants={fadeUp} className="font-serif text-headline-lg text-on-background mb-12">
        Stack &amp; Expertise
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((category) => (
          <motion.div
            key={category.category}
            variants={fadeUp}
            className="border-l border-primary pl-6"
          >
            <h3 className="font-mono text-label-sm text-primary uppercase mb-6 tracking-widest">
              {category.category}
            </h3>
            <ul className="space-y-4 font-mono text-body-md text-on-surface-variant">
              {category.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-primary text-xs">&gt;</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
