"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { profile } from "@/constants/profile";

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DossierModal({ isOpen, onClose }: DossierModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        
        // Find all focusable elements
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Store previous active element to restore focus on close
    const previousActiveElement = document.activeElement as HTMLElement;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus the first button inside the modal after mounting
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button'
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 50);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-title"
          aria-describedby="dossier-subtitle"
        >
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
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md border border-border bg-card/90 p-6 rounded-xl shadow-2xl shadow-accent/5 backdrop-blur-md overflow-hidden z-10 flex flex-col gap-5 outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            {/* Glowing Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 id="dossier-title" className="text-xl font-bold tracking-tight text-foreground font-sans">
                  Engineering Dossier
                </h3>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md border border-border/60 bg-neutral-900/40 text-muted hover:text-foreground transition-all hover:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
              <p id="dossier-subtitle" className="text-xs text-muted font-sans font-normal">
                Professional Engineering Record
              </p>
            </div>

            {/* Status / Version Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs border border-border bg-neutral-950/40 p-3 rounded-lg">
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-[9px] uppercase tracking-wider">Current Version</span>
                <span className="text-foreground font-semibold">v0.2.0</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-[9px] uppercase tracking-wider">Updated</span>
                <span className="text-foreground font-semibold">July 2026</span>
              </div>
            </div>

            {/* Contents checklist */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                Contents
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {[
                  "Resume",
                  "Projects",
                  "Technical Skills",
                  "Leadership",
                  "Research Interests",
                  "Certifications"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground/90">
                    <span className="text-emerald-500 font-bold" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle divider */}
            <div className="h-[1px] bg-border/60 w-full my-1" />

            {/* Actions Footer */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`/resume/${profile.resumeFilename}`}
                download={profile.resumeFilename}
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono bg-primary text-primary-foreground hover:bg-neutral-200 shadow-sm h-10 px-4 gap-2 tracking-wider"
                aria-label="Download resume PDF"
              >
                Download Resume
              </a>
              <a
                href={`/resume/${profile.resumeFilename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono bg-card border border-border text-foreground hover:bg-neutral-900 h-10 px-4 gap-2 tracking-wider"
                aria-label="View resume PDF in a new window"
              >
                View Resume
              </a>
              <Button
                variant="ghost"
                onClick={onClose}
                className="w-full tracking-wider hover:bg-neutral-900/40 text-muted hover:text-foreground text-xs"
                aria-label="Close engineering dossier modal"
              >
                Close
              </Button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

