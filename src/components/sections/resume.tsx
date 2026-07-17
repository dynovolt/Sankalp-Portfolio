"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { FileText, Shield } from "lucide-react";
import { DossierModal } from "@/components/shared/dossier-modal";

export function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SectionContainer id="resume" heading="Engineering Dossier">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-xl border border-border bg-card/50 relative overflow-hidden">
          
          {/* Abstract Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Credentials / Resume Card Info */}
          <div className="flex flex-col sm:flex-row items-start gap-4 z-10 w-full md:w-auto">
            <div className="p-3 rounded bg-neutral-900 border border-border text-accent hidden sm:block">
              <FileText size={24} />
            </div>
            <div className="flex flex-col gap-2 max-w-lg">
              {/* Header & Status Chip */}
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-bold tracking-tight text-foreground font-sans">
                  Professional Engineering Record
                </h4>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-mono tracking-widest text-emerald-500 select-none">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  ● VERIFIED
                </div>
              </div>
              
              <p className="text-xs text-muted leading-relaxed font-sans font-normal">
                Access my complete, technical resume outlining systems development, deep learning integrations, and academic history in PDF format.
              </p>

              {/* Minimal Metadata Info Grid */}
              <div className="grid grid-cols-3 gap-6 mt-2 pt-3 border-t border-border/50 text-xs font-mono">
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[9px] uppercase tracking-wider">Version</span>
                  <span className="text-foreground font-semibold">v0.2.0</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[9px] uppercase tracking-wider">Status</span>
                  <span className="text-foreground font-semibold flex items-center gap-1">
                    <Shield size={10} className="text-emerald-500" />
                    Verified
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[9px] uppercase tracking-wider">Last Updated</span>
                  <span className="text-foreground font-semibold">July 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="z-10 w-full md:w-auto flex justify-end">
            <FadeIn delay={0.2} direction="none" className="w-full sm:w-auto">
              <Button
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="gap-2 w-full sm:w-auto font-mono text-xs tracking-wider"
                aria-label="Open engineering dossier modal"
              >
                <FileText size={16} />
                Engineering Dossier
              </Button>
            </FadeIn>
          </div>

        </div>
      </SectionContainer>

      <DossierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


