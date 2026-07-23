"use client";

import React, { use, useState } from "react";
import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Cpu, 
  Share2, 
  Database, 
  Terminal, 
  Server, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { DeploymentCenter } from "@/components/shared/deployment-center";
import { Project } from "@/types";

// Step-specific icons
const stepIcons = [LayoutGrid, Terminal, Database, ShieldCheck, Server];

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Custom Dashboard Mockup rendering for screenshots
function MockupScreen({ slug, index }: { slug: string; index: number }) {
  if (slug === "calcnest") {
    const screens = [
      <div key="c1" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
            <span className="ml-2 text-neutral-500 text-[9px]">calcnest.cloud/workspace/financials</span>
          </div>
          <span className="text-[9px] text-accent font-bold px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20">LIVE COLLAB (3)</span>
        </div>
        <div className="grid grid-cols-3 gap-3 flex-grow">
          <div className="col-span-2 border border-white/5 bg-neutral-900/40 rounded p-3 flex flex-col gap-2">
            <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">COMPUTATION CANVAS</span>
            <div className="flex flex-col gap-1.5 mt-1 text-[9px]">
              <div><span className="text-neutral-600">A1: </span><span className="text-foreground">yearly_growth</span> = 0.12 <span className="text-muted-foreground">(12% Growth Target)</span></div>
              <div><span className="text-neutral-600">A2: </span><span className="text-foreground">base_revenue</span> = 1500000</div>
              <div><span className="text-neutral-600">A3: </span><span className="text-foreground">forecasted_rev</span> = A2 * (1 + yearly_growth)^5</div>
              <div className="text-emerald-500 font-bold mt-1 pl-4 border-l-2 border-emerald-500/30">&rarr; A3 Output: $2,643,513.20</div>
            </div>
          </div>
          <div className="border border-white/5 bg-neutral-900/20 rounded p-3 flex flex-col gap-2">
            <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">COLLABORATORS</span>
            <ul className="flex flex-col gap-1.5 mt-1 text-[9px]">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Sankalp S. <span className="text-neutral-600">(Owner)</span></li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Alex Rivera <span className="text-neutral-600">(Editing A3)</span></li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Sarah Chen <span className="text-neutral-600">(Viewing)</span></li>
            </ul>
          </div>
        </div>
      </div>,
      <div key="c2" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">calcnest.cloud/workspace/graph-debugger</span>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center gap-4 relative">
          <div className="border border-white/10 bg-neutral-900 px-3 py-1.5 rounded shadow">base_revenue</div>
          <div className="text-neutral-600">&darr;</div>
          <div className="border border-accent bg-accent/10 text-accent px-3 py-1.5 rounded shadow flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
            forecasted_rev
          </div>
          <div className="text-neutral-600">&darr;</div>
          <div className="border border-white/10 bg-neutral-900 px-3 py-1.5 rounded shadow">tax_implication</div>
        </div>
      </div>,
      <div key="c3" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">calcnest.cloud/variables</span>
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">VARIABLE REGISTRY</span>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="p-2 border border-white/5 bg-neutral-900/40 rounded flex flex-col">
              <span className="text-accent font-bold">inflation_index</span>
              <span className="text-neutral-600 text-[8px]">Global Scope</span>
              <span className="text-foreground mt-1">3.4%</span>
            </div>
            <div className="p-2 border border-white/5 bg-neutral-900/40 rounded flex flex-col">
              <span className="text-accent font-bold">corporate_tax_rate</span>
              <span className="text-neutral-600 text-[8px]">Local Scope</span>
              <span className="text-foreground mt-1">21.0%</span>
            </div>
          </div>
        </div>
      </div>
    ];
    return screens[index] || screens[0];
  }

  if (slug === "ai-resume-analyzer") {
    const screens = [
      <div key="r1" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="ml-2 text-neutral-500 text-[9px]">resume-analyzer.ai/dashboard</span>
          </div>
          <span className="text-[9px] text-emerald-500 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">ANALYZED</span>
        </div>
        <div className="grid grid-cols-3 gap-3 flex-grow">
          <div className="border border-white/5 bg-neutral-900/40 rounded p-3 flex flex-col justify-between items-center text-center">
            <span className="text-neutral-500 font-bold text-[8px]">COMPATIBILITY SCORE</span>
            <span className="text-3xl font-sans font-bold text-accent mt-2">84%</span>
            <span className="text-neutral-600 text-[8px] mt-1">ATS High Alignment</span>
          </div>
          <div className="col-span-2 border border-white/5 bg-neutral-900/20 rounded p-3 flex flex-col gap-2">
            <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">KEYWORD GAP ANALYSIS</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-[8px]">✓ TensorFlow</span>
              <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-[8px]">✓ FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[8px]">✗ Kubernetes</span>
              <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[8px]">✗ Vector Embeddings</span>
            </div>
          </div>
        </div>
      </div>,
      <div key="r2" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">resume-analyzer.ai/optimization</span>
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">LLM BULLET POINT ENHANCER</span>
          <div className="p-2 border border-red-500/10 bg-red-500/5 rounded text-[8px]">
            <span className="text-red-400">Before:</span> "Responsible for writing Python code for our servers."
          </div>
          <div className="p-2 border border-green-500/10 bg-green-500/5 rounded text-[8px]">
            <span className="text-green-400">After (Optimized):</span> "Designed and deployed stateless FastAPI REST endpoints in Python, increasing query throughput by 42%."
          </div>
        </div>
      </div>,
      <div key="r3" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">resume-analyzer.ai/pdf-segments</span>
        </div>
        <div className="flex-grow grid grid-cols-4 gap-2">
          <div className="border border-dashed border-white/15 rounded flex items-center justify-center p-2 text-center text-neutral-600 text-[8px]">HEADER (100% parsing)</div>
          <div className="border border-dashed border-white/15 rounded col-span-2 flex items-center justify-center p-2 text-center text-neutral-600 text-[8px]">EXPERIENCE BLOCK (92% parsing)</div>
          <div className="border border-dashed border-white/15 rounded flex items-center justify-center p-2 text-center text-neutral-600 text-[8px]">EDUCATION (100% parsing)</div>
        </div>
      </div>
    ];
    return screens[index] || screens[0];
  }

  if (slug === "currently-building") {
    const screens = [
      <div key="cb1" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="ml-2 text-neutral-500 text-[9px]">agent-workspace.dev/terminal</span>
          </div>
          <span className="text-[9px] text-amber-500 font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">AGENT ACTIVE</span>
        </div>
        <div className="grid grid-cols-4 gap-3 flex-grow">
          <div className="border-r border-white/5 pr-2 flex flex-col gap-1 text-[8px] text-neutral-500">
            <span className="text-neutral-400 font-bold mb-1">TASK SWARM</span>
            <span className="text-accent bg-accent/5 px-1 py-0.5 rounded">1. run tests</span>
            <span>2. fix lint</span>
            <span>3. compile build</span>
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <div><span className="text-accent font-bold">Local Agent:</span> Scanning workspace files...</div>
              <div className="text-green-500 font-bold">&rarr; Sandbox created: container_id=f9b2d8</div>
              <div><span className="text-accent font-bold">Local Agent:</span> Executing `npm run test` in sandbox...</div>
            </div>
            <div className="text-neutral-600 text-[8px] border-t border-white/5 pt-1">
              Agent input terminal stream active
            </div>
          </div>
        </div>
      </div>,
      <div key="cb2" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">agent-workspace.dev/sandbox-status</span>
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <span className="text-neutral-500 font-bold border-b border-white/5 pb-1">ISOLATED DOCKER CONTAINER</span>
          <div className="grid grid-cols-3 gap-2 text-center text-[8px] mt-1">
            <div className="p-2 border border-white/5 bg-neutral-900 rounded">
              <div className="text-neutral-500">CPU LIMIT</div>
              <div className="text-foreground font-bold mt-1">1.5 Cores</div>
            </div>
            <div className="p-2 border border-white/5 bg-neutral-900 rounded">
              <div className="text-neutral-500">MEMORY LIMIT</div>
              <div className="text-foreground font-bold mt-1">2.0 GB</div>
            </div>
            <div className="p-2 border border-white/5 bg-neutral-900 rounded text-green-400 border-green-500/20">
              <div className="text-neutral-500">NETWORK</div>
              <div className="text-green-400 font-bold mt-1">Isolated</div>
            </div>
          </div>
        </div>
      </div>,
      <div key="cb3" className="w-full h-full flex flex-col bg-neutral-950 font-mono text-[10px] text-neutral-400 p-4">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="text-neutral-500 text-[9px]">agent-workspace.dev/diff-review</span>
        </div>
        <div className="flex-grow flex flex-col gap-1">
          <span className="text-neutral-500 font-bold border-b border-white/5 pb-0.5">APPROVAL QUEUE</span>
          <div className="p-1.5 border border-white/5 bg-neutral-900 rounded text-[7px] leading-tight">
            <div className="text-neutral-500 font-bold">src/app/page.tsx:</div>
            <div className="text-red-400 bg-red-500/5 px-1">- &lt;Hero /&gt;</div>
            <div className="text-green-400 bg-green-500/5 px-1">+ &lt;Hero anim="premium" /&gt;</div>
          </div>
        </div>
      </div>
    ];
    return screens[index] || screens[0];
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-950 font-mono text-[10px] text-neutral-500">
      Screen Placeholder {index + 1}
    </div>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  // Map architecture details. The spec asks for: Frontend -> API -> Database -> Authentication -> Deployment
  const defaultArchitectureSteps = [
    { title: "Frontend", desc: "User interface and visual system layout." },
    { title: "API", desc: "Routing layers, task gateways, and input validation." },
    { title: "Database", desc: "Persistent system configurations and state storage." },
    { title: "Authentication", desc: "Security filters, tokens, and authorization logs." },
    { title: "Deployment", desc: "Container runtimes and hosting target instances." }
  ];

  return (
    <div className="w-full min-h-screen py-10 flex flex-col items-center">
      {/* Back to Portfolio Breadcrumb */}
      <div className="max-w-5xl w-full px-6 md:px-8 mb-8 flex justify-start">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="max-w-5xl w-full px-6 md:px-8 mb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between border-b border-border pb-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                {project.year}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-neutral-900/60 text-[10px] font-mono text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
              {project.title}
            </h1>
            
            <p className="text-base text-muted leading-relaxed font-sans mt-2">
              {project.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-row gap-3 font-mono text-xs">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card text-foreground hover:bg-neutral-900 h-10 px-4 gap-2 transition-all"
            >
              <Github size={14} />
              GitHub Repository
            </a>
            
            {project.hasDeployment ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-neutral-200 h-10 px-4 gap-2 transition-all font-semibold"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <button
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 h-10 px-4 gap-2 transition-all cursor-pointer font-semibold"
              >
                <Sparkles size={14} className="animate-pulse" />
                Deployment Center
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid: 2 Columns details, 1 Column Tech blueprint */}
      <section className="max-w-5xl w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        
        {/* Left Column blocks */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          
          {/* Section 1: Problem */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              01. The Problem Statement
            </h3>
            <Card className="p-6 border-white/5 bg-card/40 leading-relaxed text-sm font-sans text-muted">
              {project.problemStatement}
            </Card>
          </div>

          {/* Section 2: Why I Built It */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              02. Why I Built It
            </h3>
            <p className="text-sm leading-relaxed text-muted font-sans">
              {project.whyBuilt}
            </p>
          </div>

          {/* Section 3: Architecture Visualization */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              03. Architecture Overview
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-between">
              {defaultArchitectureSteps.map((step, idx) => {
                const IconComponent = stepIcons[idx] || Cpu;
                const detailedStep = project.architecture?.[idx];
                return (
                  <React.Fragment key={step.title}>
                    <Card className="p-4 border-white/5 bg-neutral-950 flex flex-col gap-2 flex-grow min-h-[120px] justify-between md:max-w-[150px] w-full">
                      <div className="h-7 w-7 rounded bg-accent/5 border border-accent/20 flex items-center justify-center text-accent">
                        <IconComponent size={14} />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-[11px] font-bold text-foreground">{detailedStep?.title || step.title}</h4>
                        <p className="text-[9px] text-muted-foreground leading-snug">{detailedStep?.description || step.desc}</p>
                      </div>
                    </Card>
                    {idx < 4 && (
                      <div className="text-muted/60 rotate-90 md:rotate-0 flex items-center justify-center shrink-0">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Section 4: Core Features */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              04. Core Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.coreFeatures?.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <span className="h-5 w-5 rounded bg-accent/5 text-accent border border-accent/10 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                    +
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-bold text-foreground">{feature.title}</h4>
                    <p className="text-[11px] text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Engineering Decisions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              05. Engineering Decisions & Trade-offs
            </h3>
            <div className="flex flex-col gap-6">
              {project.engineeringChallenges?.map((item, idx) => (
                <Card key={idx} className="p-5 border-white/5 bg-card/30 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-accent uppercase tracking-wider">Implementation Decision</span>
                    <p className="text-xs font-semibold text-foreground">{item.challenge}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/5 text-[11px] leading-relaxed">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-emerald-500 font-bold">Choice & Heuristics</span>
                      <p className="text-muted">{item.solution}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-amber-500 font-bold">Trade-off Decision</span>
                      <p className="text-muted">{item.tradeOff}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 7: Future Roadmap */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono tracking-widest text-accent uppercase">
              06. Future Roadmap
            </h3>
            <div className="flex flex-col gap-3 font-mono text-xs pl-2 border-l border-white/10">
              {project.roadmap?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 py-1">
                  <span className="text-accent text-[9px] mt-0.5">[{idx + 1}]</span>
                  <p className="text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Technology Stack blueprint */}
        <div className="flex flex-col gap-8">
          <Card className="p-6 border-white/5 bg-neutral-950/60 sticky top-24 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-xs font-mono text-accent uppercase tracking-widest">
                Technology Stack
              </h3>
              <div className="h-[1px] w-8 bg-accent mt-1" />
            </div>

            {project.techStackCategorized && (
              <div className="flex flex-col gap-5 text-xs font-mono">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Languages</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.languages?.map((lang) => (
                      <span key={lang} className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                        {lang}
                      </span>
                    )) || <span className="text-neutral-600">TypeScript, SQL</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Frameworks</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.frameworks?.map((fw) => (
                      <span key={fw} className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                        {fw}
                      </span>
                    )) || <span className="text-neutral-600">Next.js, Tailwind CSS</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Database</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.database?.map((db) => (
                      <span key={db} className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                        {db}
                      </span>
                    )) || <span className="text-neutral-600">PostgreSQL</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Cloud</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                      {project.slug === "calcnest" ? "Vercel" : project.slug === "ai-resume-analyzer" ? "Render Cloud" : "Local Hosting"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Authentication</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                      {project.slug === "calcnest" ? "OTP Email Authentication" : project.slug === "ai-resume-analyzer" ? "JWT Session Auth" : "Local Token Validator"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-muted-foreground uppercase">Deployment</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStackCategorized.deployment?.map((dep) => (
                      <span key={dep} className="px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-[10px] text-foreground">
                        {dep}
                      </span>
                    )) || <span className="text-neutral-600">Vercel Git Integration</span>}
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Section 8: Project Gallery */}
      <section className="max-w-5xl w-full px-6 md:px-8 mb-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-mono tracking-widest text-accent uppercase border-b border-border pb-3">
            07. Project Gallery
          </h3>
          
          <div className="relative w-full aspect-video border border-border rounded-xl bg-neutral-950 overflow-hidden shadow-2xl">
            {/* Screen Mockup Container */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <MockupScreen slug={project.slug} index={activeSlide} />
            </div>

            {/* Slider controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background/80 hover:bg-neutral-900 text-foreground transition-all cursor-pointer z-20"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-background/80 hover:bg-neutral-900 text-foreground transition-all cursor-pointer z-20"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>

            {/* Carousel dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {[0, 1, 2].map((slide) => (
                <button
                  key={slide}
                  onClick={() => setActiveSlide(slide)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeSlide === slide ? "w-4 bg-accent" : "w-1.5 bg-neutral-700"
                  }`}
                  aria-label={`Go to slide ${slide + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: Related Projects & Return to Portfolio */}
      <section className="max-w-5xl w-full px-6 md:px-8 border-t border-border pt-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-mono tracking-widest text-accent uppercase">
              Explore More Showcase Projects
            </h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((proj) => (
              <Card key={proj.title} className="p-6 h-full flex flex-col justify-between bg-card/60 hover:bg-card/90 border border-border hover:border-accent/40 transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted uppercase">{proj.year}</span>
                    <span className="text-[9px] font-mono text-accent px-2 py-0.5 rounded-full border border-border bg-background">
                      {proj.status}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold text-foreground">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <Link 
                  href={`/projects/${proj.slug}`} 
                  className="text-xs font-mono text-accent mt-4 inline-flex items-center gap-1 hover:underline w-fit"
                >
                  View Showcase &rarr;
                </Link>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link 
              href="/#projects" 
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 border border-border text-foreground hover:bg-neutral-800 h-10 px-6 gap-2 transition-all font-mono text-xs"
            >
              <ArrowLeft size={14} />
              Return to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <DeploymentCenter
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
