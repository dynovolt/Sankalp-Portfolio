"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className,
}: FadeInProps) {
  const directions = {
    up: { y: 15, x: 0 },
    down: { y: -15, x: 0 },
    left: { x: 15, y: 0 },
    right: { x: -15, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Soft elegant easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
