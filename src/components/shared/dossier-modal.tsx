"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DossierModal({ isOpen, onClose }: DossierModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur & overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-md border border-border bg-card/90 p-6 rounded-xl shadow-2xl shadow-accent/5 backdrop-blur-md overflow-hidden z-10 flex flex-col gap-6"
          >
            {/* Glowing Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight text-foreground font-sans">
                Engineering Dossier
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md border border-border/60 bg-neutral-900/40 text-muted hover:text-foreground transition-all hover:bg-neutral-900"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted leading-relaxed font-sans font-normal">
                The resume is currently being regenerated to include the latest projects, research contributions, deployments, and engineering milestones.
              </p>

              {/* Status and Progress Info Card */}
              <div className="font-mono text-xs border border-border bg-neutral-950/40 p-4 rounded-lg flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                    Current Status:
                  </span>
                  <span className="text-foreground tracking-widest text-sm font-semibold">
                    ████████░░ 82%
                  </span>
                </div>
                <div className="h-[1px] bg-border" />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                    Expected Release:
                  </span>
                  <span className="text-foreground font-semibold">
                    v0.2.0
                  </span>
                </div>
              </div>
            </div>

            {/* Footer with Pulse chip and Button */}
            <div className="flex flex-col items-center gap-4 mt-2">
              {/* Blue Status Chip */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono tracking-widest text-accent select-none"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                ● COMPILING
              </motion.div>

              <Button
                variant="primary"
                onClick={onClose}
                className="w-full gap-2 group relative overflow-hidden"
              >
                Continue Exploring &rarr;
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
