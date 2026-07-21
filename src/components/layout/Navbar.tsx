"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import personal from "@/data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131312] border-b border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-6 md:px-margin-page py-6 flex justify-between items-center">
        <a 
          href="#" 
          className="font-serif text-headline-md font-bold text-on-background tracking-tight hover:text-primary transition-colors duration-200"
        >
          LEO GABSON
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-mono text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button px-6 py-2 font-mono text-label-sm font-bold uppercase tracking-widest text-center"
          >
            Resume
          </a>

          {/* Animated Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-on-background block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-on-background block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-on-background block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black md:hidden z-40"
            />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden border-t border-outline-variant bg-[#131312] overflow-hidden z-50 relative"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={itemVariants}
                    className="font-mono text-label-md text-on-surface-variant hover:text-primary py-2 transition-colors duration-200"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
