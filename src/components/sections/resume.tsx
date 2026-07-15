"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/constants/profile";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { Download, FileText } from "lucide-react";

export function Resume() {
  const [resumeExists, setResumeExists] = useState(true);

  useEffect(() => {
    fetch(`/resume/${profile.resumeFilename}`, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setResumeExists(false);
      })
      .catch(() => setResumeExists(false));
  }, []);

  return (
    <SectionContainer id="resume" heading="Credentials">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-xl border border-border bg-card/50 relative overflow-hidden">
        
        {/* Abstract Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        {/* Credentials Info */}
        <div className="flex items-start gap-4 z-10">
          <div className="p-3 rounded bg-neutral-900 border border-border text-accent hidden sm:block">
            <FileText size={24} />
          </div>
          <div className="flex flex-col gap-1 max-w-lg">
            <h4 className="text-lg font-bold tracking-tight text-foreground">
              Review engineering record & experience
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Access my complete, technical resume outlining systems development, deep learning integrations, and academic history in PDF format.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="z-10 w-full md:w-auto flex justify-end">
          <FadeIn delay={0.2} direction="none" className="w-full sm:w-auto">
            {resumeExists ? (
              <a
                href={`/resume/${profile.resumeFilename}`}
                download={profile.resumeFilename}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono bg-primary text-primary-foreground hover:bg-neutral-200 shadow-sm h-10 px-4 gap-2 w-full sm:w-auto"
              >
                <Download size={16} />
                Download Resume PDF
              </a>
            ) : (
              <Button
                variant="primary"
                disabled
                className="gap-2 w-full sm:w-auto cursor-not-allowed opacity-50"
                aria-label="Resume file currently unavailable"
              >
                <Download size={16} />
                Resume Unavailable
              </Button>
            )}
          </FadeIn>
        </div>

      </div>
    </SectionContainer>
  );
}
