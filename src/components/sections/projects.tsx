"use client";

import React from "react";
import { projects } from "@/constants/projects";
import { SectionContainer } from "@/components/shared/section-container";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Github, ExternalLink, Code } from "lucide-react";

export function Projects() {
  return (
    <SectionContainer id="projects" heading="Featured Projects">
      <div className="flex flex-col gap-8">
        
        {/* Descriptive Section Header */}
        <div className="max-w-2xl flex flex-col gap-2">
          <h3 className="text-2xl font-sans font-bold tracking-tight text-foreground">
            Building functional software with high engineering standards
          </h3>
          <p className="text-sm text-muted">
            A curated selection of applications focusing on collaboration, artificial intelligence, and campus networking.
          </p>
        </div>

        {/* Project Panels Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1} direction="up">
              <Card className="h-full flex flex-col justify-between p-6 hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex flex-col gap-4">
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                      {project.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border bg-background text-[10px] font-mono text-accent">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold tracking-tight text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed min-h-[72px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-border text-[9px] font-mono text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Connections / Action Buttons */}
                <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border/40 font-mono text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
