"use client";

import React from "react";
import { profile } from "@/constants/profile";
import { SectionContainer } from "@/components/shared/section-container";
import { FadeIn } from "@/components/animations/fade-in";

export function About() {
  return (
    <SectionContainer id="about" heading="About & Motivation">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Heading */}
        <div className="md:col-span-4">
          <FadeIn delay={0.1} direction="right">
            <h3 className="text-3xl font-sans font-bold tracking-tight text-foreground">
              {profile.bio.heading}
            </h3>
          </FadeIn>
        </div>

        {/* Right Column: Paragraph blocks */}
        <div className="md:col-span-8 flex flex-col gap-6 text-muted font-sans text-sm sm:text-base leading-relaxed">
          {profile.bio.paragraphs.map((paragraph, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}
