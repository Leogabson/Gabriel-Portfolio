"use client";

import { useState } from "react";
import personal from "@/data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

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

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-background hover:text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-outline-variant bg-[#131312] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-mono text-label-sm text-on-surface-variant hover:text-primary py-2 transition-colors duration-200"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
