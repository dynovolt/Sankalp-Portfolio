"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/constants/profile";
import { socials } from "@/constants/socials";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight, Download, Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { DossierModal } from "@/components/shared/dossier-modal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center border-b border-border overflow-hidden py-16 md:py-24"
    >
      {/* Background Grids & Ambient Lights */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.8]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />
      
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none opacity-[0.6]"
        style={{
          backgroundImage: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(79, 140, 255, 0.12) 0%, transparent 80%)'
        }}
      />

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Premium Typography & Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          
          {/* Availability Status Capsule */}
          <FadeIn delay={0.1} direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border/80 bg-neutral-900/40 backdrop-blur-md text-[10px] font-mono tracking-widest text-muted uppercase w-fit select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              {profile.availability}
            </div>
          </FadeIn>

          {/* Large Editorial Headline */}
          <FadeIn delay={0.2} direction="up" className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-foreground leading-[1.08] max-w-2xl">
              {profile.heroTagline.split(" ").map((word, i) => {
                const isHighlight = ["intelligent", "software", "real-world"].includes(word.toLowerCase().replace(/[.,]/g, ""));
                return (
                  <span
                    key={i}
                    className={isHighlight ? "text-foreground font-extrabold" : "text-foreground/90 font-bold"}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </h1>
          </FadeIn>

          {/* Subheading / Tagline */}
          <FadeIn delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-muted font-sans font-normal max-w-xl leading-relaxed">
              {profile.heroSubtitle}
            </p>
          </FadeIn>

          {/* Roles / Skill tags grid */}
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-wrap gap-2.5 max-w-lg pt-1">
              {profile.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/60 border border-border/60 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 select-none group"
                >
                  <span className="h-1 w-1 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                  <span className="text-[11px] font-mono tracking-wider text-muted group-hover:text-foreground transition-colors">{tag}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono bg-primary text-primary-foreground hover:bg-neutral-200 shadow-sm h-11 px-6 text-base gap-2 group shadow-lg shadow-accent/5"
              >
                View Projects
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="gap-2 border border-border/80 bg-neutral-900/20 backdrop-blur-sm hover:bg-neutral-900/80 text-foreground"
                aria-label="Open engineering dossier modal"
              >
                Download Resume
                <Download size={14} />
              </Button>
            </div>
          </FadeIn>

          {/* Quick Social Contacts */}
          <FadeIn delay={0.6} direction="up" className="flex items-center gap-5 mt-2">
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase">Profiles:</span>
            <div className="flex items-center gap-4">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-200 hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socials.email.url}
                className="text-muted hover:text-foreground transition-all duration-200 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Premium Developer Dashboard / Neural Portrait Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <FadeIn delay={0.3} direction="none" className="relative w-full max-w-[380px] aspect-square">
            
            {/* Soft Ambient Inner Glow */}
            <div className="absolute inset-0 bg-accent/8 rounded-2xl blur-2xl pointer-events-none" />

            {/* Premium Technical Frame */}
            <div className="relative w-full h-full rounded-2xl border border-border/80 bg-neutral-950/40 backdrop-blur-md p-5 overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-neutral-700/80 transition-all duration-500">
              
              {/* Corner Fine Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/60" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[9px] text-muted tracking-wider">sankalp_engine.sh</span>
              </div>

              {/* Technical Lattice/Grid SVG Illustration */}
              <div className="w-full flex-grow flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-500 py-4">
                <svg
                  className="w-full h-full max-h-[220px]"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="85" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="35" stroke="rgba(79, 140, 255, 0.08)" strokeWidth="1" />
                  
                  <line x1="15" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="100" y1="15" x2="100" y2="185" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                  <g className="animate-pulse" style={{ animationDuration: '6s' }}>
                    <path
                      d="M50,50 L100,100 M150,50 L100,100 M50,150 L100,100 M150,150 L100,100"
                      stroke="rgba(79, 140, 255, 0.3)"
                      strokeWidth="1.2"
                      strokeDasharray="2, 4"
                    />
                    <path
                      d="M100,35 L100,165 M35,100 L165,100"
                      stroke="rgba(255, 255, 255, 0.06)"
                      strokeWidth="1"
                    />
                    <circle cx="100" cy="100" r="8" fill="url(#coreGlow)" />
                    <circle cx="50" cy="50" r="3.5" fill="rgba(255,255,255,0.7)" />
                    <circle cx="150" cy="50" r="3.5" fill="rgba(255,255,255,0.7)" />
                    <circle cx="50" cy="150" r="3.5" fill="rgba(255,255,255,0.7)" />
                    <circle cx="150" cy="150" r="3.5" fill="rgba(255,255,255,0.7)" />
                  </g>

                  <path
                    d="M 100,15 A 85,85 0 0,1 185,100"
                    stroke="#4F8CFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6, 180"
                    className="animate-[spin_8s_linear_infinite]"
                  />
                  <path
                    d="M 100,185 A 85,85 0 0,1 15,100"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="12, 160"
                    className="animate-[spin_12s_linear_infinite_reverse]"
                  />

                  <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4F8CFF" />
                      <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Status Header Overlay */}
              <div className="flex justify-between items-center pt-3 border-t border-border/40 font-mono text-[9px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE</span>
                </div>
                <span>LOC: {profile.location.toUpperCase()}</span>
                <span>AVAIL: 100%</span>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
    <DossierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
