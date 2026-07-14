"use client";

import React from "react";
import { socials } from "@/constants/socials";
import { SectionContainer } from "@/components/shared/section-container";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Mail, Github, Linkedin, Calendar, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <SectionContainer id="contact" heading="Connect">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Info Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <FadeIn delay={0.1} direction="right">
            <h3 className="text-3xl font-sans font-bold tracking-tight text-foreground">
              Initiate a connection
            </h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              Have an ambitious project, research opportunity, or technical role in mind? Feel free to reach out directly or schedule a brief sync.
            </p>
          </FadeIn>
        </div>

        {/* Right Links Column */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email Card */}
          <FadeIn delay={0.2} direction="up">
            <a href={socials.email.url} className="block group">
              <Card className="p-4 flex items-center justify-between hover:bg-neutral-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neutral-900 border border-border text-accent group-hover:bg-neutral-800 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">{socials.email.title}</span>
                    <span className="text-xs font-mono text-foreground break-all">{socials.email.displayText}</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-foreground transition-colors" />
              </Card>
            </a>
          </FadeIn>

          {/* LinkedIn Card */}
          <FadeIn delay={0.3} direction="up">
            <a href={socials.linkedin.url} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-4 flex items-center justify-between hover:bg-neutral-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neutral-900 border border-border text-accent group-hover:bg-neutral-800 transition-colors">
                    <Linkedin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">{socials.linkedin.title}</span>
                    <span className="text-xs font-mono text-foreground">{socials.linkedin.displayName}</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-foreground transition-colors" />
              </Card>
            </a>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn delay={0.4} direction="up">
            <a href={socials.github.url} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="p-4 flex items-center justify-between hover:bg-neutral-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neutral-900 border border-border text-accent group-hover:bg-neutral-800 transition-colors">
                    <Github size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">{socials.github.title}</span>
                    <span className="text-xs font-mono text-foreground">{socials.github.username}</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-foreground transition-colors" />
              </Card>
            </a>
          </FadeIn>

          {/* Calendly Card (Future Placeholder) */}
          <FadeIn delay={0.5} direction="up">
            <div className="relative group opacity-80 cursor-not-allowed">
              <Card className="p-4 flex items-center justify-between bg-card/40 border-dashed border-border/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neutral-950 border border-border/40 text-muted">
                    <Calendar size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">{socials.calendly.title}</span>
                    <span className="text-xs font-mono text-muted">{socials.calendly.displayText}</span>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>

        </div>

      </div>
    </SectionContainer>
  );
}
