"use client";

import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: MagneticButtonProps) {
  const isOutline = variant === "outline";
  const baseClasses = isOutline
    ? "px-6 py-3 border border-outline-variant text-on-background font-mono text-label-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300 inline-block"
    : "cta-button px-6 py-3 font-mono text-label-sm uppercase tracking-wider font-semibold inline-block";

  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
