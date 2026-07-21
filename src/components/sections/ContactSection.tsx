"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import ContactForm from "@/components/common/ContactForm";
import personal from "@/data/personal";
import { fadeUp, sectionStaggerContainer, viewportRepeat } from "@/lib/motion";

export default function ContactSection() {
  return (
    <motion.section
      className="mb-40 max-w-[1200px] mx-auto px-6 md:px-margin-page grid grid-cols-12 gap-gutter pt-12 border-t border-outline-variant"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={viewportRepeat}
      variants={sectionStaggerContainer}
    >
      <motion.div variants={fadeUp} className="col-span-12 md:col-span-5">
        <h2 className="font-serif text-headline-lg text-on-background mb-4">Start a Connection</h2>
        <p className="font-mono text-body-md text-on-surface-variant mb-12">
          Available for consulting, full-time engineering roles, or architectural deep-dives.
        </p>
        <div className="space-y-6">
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={`mailto:${personal.email}`}
          >
            <Mail size={16} strokeWidth={1.5} className="text-primary shrink-0" /> {personal.email}
          </a>
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} strokeWidth={1.5} className="text-primary shrink-0" /> LinkedIn Profile
          </a>
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} strokeWidth={1.5} className="text-primary shrink-0" /> GitHub Profile
          </a>
          {personal.x && (
            <a
              className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
              href={personal.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={16} strokeWidth={1.5} className="text-primary shrink-0" /> Twitter / X
            </a>
          )}
        </div>
      </motion.div>
      <motion.div variants={fadeUp} className="col-span-12 md:col-span-7 bg-[#20201e] p-8 md:p-12">
        <ContactForm />
      </motion.div>
    </motion.section>
  );
}
