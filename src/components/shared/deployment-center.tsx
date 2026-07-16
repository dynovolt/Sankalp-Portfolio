"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, GitFork, Milestone } from "lucide-react";
import { Project } from "@/types";

interface DeploymentCenterProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DeploymentCenter({ project, isOpen, onClose }: DeploymentCenterProps) {
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

  if (!project) return null;

  const getProgressBar = (progress: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round(progress / 10);
    const emptyBlocks = totalBlocks - filledBlocks;
    return "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "DEPLOYING":
        return "text-accent border-accent/20 bg-accent/5";
      case "LOCAL ENVIRONMENT":
        return "text-amber-500 border-amber-500/20 bg-amber-500/5";
      case "ARCHIVED":
        return "text-muted border-border bg-neutral-900/40";
      default:
        return "text-accent border-accent/20 bg-accent/5";
    }
  };

  const getStatusDotColor = (status?: string) => {
    switch (status) {
      case "DEPLOYING":
        return "bg-accent";
      case "LOCAL ENVIRONMENT":
        return "bg-amber-500";
      case "ARCHIVED":
        return "bg-muted";
      default:
        return "bg-accent";
    }
  };

  const handleRoadmapClick = () => {
    onClose();
    // Allow animation to finish before scrolling
    setTimeout(() => {
      const footerElement = document.getElementById("footer") || document.querySelector("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

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
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                  Deployment Center
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground font-sans">
                  {project.title}
                </h3>
              </div>
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
              {/* Project Status Chip */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">Status:</span>
                <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono tracking-widest ${getStatusColor(project.deploymentStatus)}`}>
                  <span className="relative flex h-1.5 w-1.5">
                    {project.deploymentStatus === "DEPLOYING" && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    )}
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${getStatusDotColor(project.deploymentStatus)}`} />
                  </span>
                  ● {project.deploymentStatus}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="font-mono text-xs border border-border bg-neutral-950/40 p-4 rounded-lg flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                    Progress:
                  </span>
                  <span className="text-foreground font-semibold">
                    {project.deploymentProgress}%
                  </span>
                </div>
                <div className="text-accent tracking-widest text-sm font-semibold">
                  {getProgressBar(project.deploymentProgress || 0)}
                </div>
              </div>

              <p className="text-xs text-muted leading-relaxed font-sans font-normal">
                This project is currently undergoing production deployment, testing and optimization before public release.
              </p>

              {/* Release Info */}
              <div className="grid grid-cols-2 gap-4 border border-border bg-neutral-950/20 p-3 rounded-lg font-mono text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-muted-foreground tracking-wider uppercase">
                    Current Release
                  </span>
                  <span className="text-foreground font-semibold">
                    {project.currentRelease}
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l border-border pl-4">
                  <span className="text-[9px] text-muted-foreground tracking-wider uppercase">
                    Expected Public Release
                  </span>
                  <span className="text-foreground font-semibold">
                    {project.expectedRelease}
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Button
                variant="outline"
                className="w-full gap-2 sm:flex-1 text-xs"
                onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
              >
                <GitFork size={14} />
                Repository &rarr;
              </Button>
              <Button
                variant="secondary"
                className="w-full gap-2 sm:flex-1 text-xs"
                onClick={handleRoadmapClick}
              >
                <Milestone size={14} />
                Roadmap &rarr;
              </Button>
            </div>

            <Button
              variant="ghost"
              className="w-full text-xs text-muted hover:text-foreground"
              onClick={onClose}
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
