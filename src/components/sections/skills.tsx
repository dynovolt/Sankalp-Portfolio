"use client";

import React from "react";
import { skillGroups } from "@/constants/skills";
import { SectionContainer } from "@/components/shared/section-container";
import { FadeIn } from "@/components/animations/fade-in";

export function Skills() {
  return (
    <SectionContainer id="skills" heading="Technical Arsenal">
      <div className="flex flex-col gap-8">
        
        {/* Short context */}
        <div className="max-w-2xl flex flex-col gap-2">
          <h3 className="text-2xl font-sans font-bold tracking-tight text-foreground">
            Technologies & methodologies
          </h3>
          <p className="text-sm text-muted">
            Proficiencies across programming languages, full-stack frameworks, cloud systems, and AI models.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <FadeIn key={group.category} delay={groupIndex * 0.1} direction="up" className="flex flex-col gap-4">
              <h4 className="text-xs font-mono font-semibold tracking-wider text-accent uppercase">
                {group.category}
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-card border border-border/80 hover:border-neutral-800 text-xs font-mono text-foreground tracking-wide transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}
