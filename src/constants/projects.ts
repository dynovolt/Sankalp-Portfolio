import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "calcnest",
    title: "CalcNest",
    description: "A premium, cloud-native collaborative calculation platform that lets teams run real-time dynamic computations and share complex mathematical formulas seamlessly.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    github: "https://github.com/dynovolt/CalcNest",
    demo: "https://calcnest.vercel.app",
    featured: true,
    image: "/projects/calcnest.webp",
    status: "Production Ready",
    year: "2026",
    tags: ["Collaboration", "SaaS", "Real-time"],
    hasDeployment: true,
    problemStatement: "Modern teams lack a unified, secure, real-time environment to write and run dynamic calculations collaboratively. Standard spreadsheets are overly complex, prone to broken cell references, and isolated, while simple scratchpad calculators completely lack multi-user collaboration, shared variables, or audit-trail history.",
    whyBuilt: "To bridge the gap between static spreadsheet formulas and collaborative document editing. CalcNest was built to provide a lightweight calculation canvas that feels as immediate as a Google Doc, yet operates with a powerful reactive calculation engine for complex financial, mathematical, or engineering formulas.",
    architecture: [
      {
        title: "Frontend Client",
        description: "Responsive Next.js React client with computation canvas editor.",
        icon: "Cpu"
      },
      {
        title: "API Layer",
        description: "Stateless calculation service orchestrating dependency parsing.",
        icon: "Terminal"
      },
      {
        title: "Database Store",
        description: "PostgreSQL database persisting formula workspaces and user configurations.",
        icon: "Database"
      },
      {
        title: "Authentication",
        description: "Supabase authentication guarding user workspaces and access tokens.",
        icon: "Share2"
      },
      {
        title: "Deployment Target",
        description: "Vercel Edge Network serving pages with low-latency CDN caches.",
        icon: "Server"
      }
    ],
    coreFeatures: [
      {
        title: "Real-time Multi-user Canvas",
        description: "Collaborative calc-sheets allowing dozens of engineers to concurrently edit equations and observe outcomes instantly."
      },
      {
        title: "Reactive Computation DAG",
        description: "Under-the-hood Directed Acyclic Graph that automatically recalculates down-stream cells when upstream inputs change."
      },
      {
        title: "Universal Math & Unit Library",
        description: "Built-in support for advanced trigonometric functions, statistics, and customizable metric units with auto-conversion."
      },
      {
        title: "Audit History Timeline",
        description: "Git-like version tracking detailing who changed which equation, with absolute point-in-time state restoration."
      }
    ],
    techStackCategorized: {
      languages: ["TypeScript", "JavaScript", "SQL"],
      frameworks: ["Next.js (App Router)", "React.js", "Tailwind CSS"],
      database: ["PostgreSQL (Supabase)"],
      infrastructure: ["Supabase Realtime Engine", "Vercel Edge Network"],
      deployment: ["Vercel Git Integration"]
    },
    engineeringChallenges: [
      {
        challenge: "Resolving cyclic dependencies and handling race conditions in concurrent user recalculations.",
        solution: "Implemented a custom topological sort cycle-detector on the DAG parser that blocks circular updates, coupled with Operational Transformation rules for cursor sync.",
        tradeOff: "Minor reduction in processing throughput under heavy concurrent write loads in exchange for guaranteed structural safety and consistent client state."
      },
      {
        challenge: "Optimizing formula parsing performance for sheets containing thousands of interconnected formulas.",
        solution: "Moved AST parsing and calculation processes to multi-threaded Web Workers, keeping the React UI thread completely unblocked.",
        tradeOff: "Small startup delay when worker scripts boot up, but entirely smooth interaction behavior afterwards."
      }
    ],
    roadmap: [
      "Natural language expression parser using localized AI model suggestions.",
      "Offline-first sync using local IndexedDB storage syncing back once online.",
      "Custom plugin API to support importing custom engineering calculations and libraries."
    ],
    gallery: [
      "/projects/calcnest-hero.webp",
      "/projects/calcnest-editor.webp",
      "/projects/calcnest-collab.webp"
    ]
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "An advanced LLM-powered analytical platform that parses resumes, identifies structural gaps, scores industry alignment, and generates targeted actionable optimization advice.",
    techStack: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    github: "https://github.com/dynovolt/AI-Resume-Analyzer",
    demo: "https://resume-analyzer.vercel.app",
    featured: true,
    image: "/projects/resume-analyzer.webp",
    status: "Complete",
    year: "2026",
    tags: ["LLM", "AI Agents", "Career Tech"],
    hasDeployment: true,
    problemStatement: "Job seekers face a completely opaque screening process handled by Applicant Tracking Systems (ATS) and automated filters. They submit hundreds of applications without receiving direct feedback on why their resumes fall short or how to highlight their actual capabilities effectively.",
    whyBuilt: "I wanted to level the playing field by providing candidates with the exact analytical insights recruiters have. AI Resume Analyzer uses local AI models and structural parser engines to break down resumes, highlighting missing keywords, styling anomalies, and general readability metrics.",
    architecture: [
      {
        title: "Frontend Dashboard",
        description: "Interactive React single-page app displaying scores and Heatmaps.",
        icon: "Cpu"
      },
      {
        title: "API Processing Gateway",
        description: "FastAPI endpoint routing documents to the asynchronous parse worker.",
        icon: "Terminal"
      },
      {
        title: "Database & Queue Cache",
        description: "PostgreSQL user database storing analysis reports with Redis caching job queues.",
        icon: "Database"
      },
      {
        title: "Model Server Auth",
        description: "JWT-based session authentication tokens securing user data access endpoints.",
        icon: "Share2"
      },
      {
        title: "Deployment Orchestration",
        description: "Dockerized container deployment hosted on Render's auto-scaling platform.",
        icon: "Server"
      }
    ],
    coreFeatures: [
      {
        title: "Deep PDF Parsing",
        description: "Advanced text extractors that preserve resume styling structure, headings, dates, and nested grids."
      },
      {
        title: "ATS Compatibility Matcher",
        description: "Scores resumes against general ATS constraints, alerting users of invisible tables, wrong layouts, or unsupported fonts."
      },
      {
        title: "Skill-Gap Heatmap Matrix",
        description: "Visualizes the alignment between resume skills and target job descriptions, revealing missing requirements."
      },
      {
        title: "Actionable Enhancement Tips",
        description: "Generates tailored sentence suggestions utilizing strong action verbs and quantitative metrics based on LLM suggestions."
      }
    ],
    techStackCategorized: {
      languages: ["Python", "TypeScript", "SQL"],
      frameworks: ["React.js", "FastAPI", "Tailwind CSS"],
      database: ["PostgreSQL (Relational)", "Redis (Job Caching)"],
      infrastructure: ["Docker Containers", "Celery Task Queue Worker"],
      deployment: ["Render (Backend Services)", "Vercel (Frontend Dashboard)"]
    },
    engineeringChallenges: [
      {
        challenge: "High latency in LLM processing for complex multi-page resumes leading to client timeout errors.",
        solution: "Offloaded document parsing and model queries to a background Celery worker queue, implementing Server-Sent Events (SSE) to push progress updates.",
        tradeOff: "Higher backend setup complexity and Redis hosting costs, but user retention increased due to progress feedback."
      },
      {
        challenge: "Handling unstructured PDF layouts containing multiple columns and irregular text segments.",
        solution: "Built a customized bounding-box heuristics classifier that groups nearby text blocks before sending them to the NLP parser.",
        tradeOff: "Slightly higher parsing time for double-column layouts, but parsing accuracy improved by 40%."
      }
    ],
    roadmap: [
      "Automated LinkedIn profile optimization sync via browser helper tools.",
      "Custom interview simulator that uses resume gaps to generate custom test questions.",
      "Support for multi-language resume processing (e.g., German, French, Spanish)."
    ],
    gallery: [
      "/projects/resume-analyzer-hero.webp",
      "/projects/resume-analyzer-dashboard.webp",
      "/projects/resume-analyzer-feedback.webp"
    ]
  },
  {
    slug: "currently-building",
    title: "Currently Building",
    description: "A next-generation AI-native development workspace that runs local developer agents, handles complex file modifications, and executes tests safely in isolated environments.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Docker", "Framer Motion"],
    github: "https://github.com/Sankalp-S/currently-building",
    demo: "https://currently-building.vercel.app",
    featured: true,
    image: "/projects/currently-building.webp",
    status: "Active Development",
    year: "2026",
    tags: ["AI Agents", "Developer Tooling", "Local Sandbox"],
    hasDeployment: false,
    problemStatement: "Software development is shifting towards agentic workflows, but current tools lack a secure local sandboxed runtime where AI agents can execute tests, edit codebases safely, and run commands without compromising developer machines.",
    whyBuilt: "To create a highly optimized local runtime environment that acts as a secure container for agentic execution, giving AI assistants the freedom to run, test, and build applications while keeping host systems isolated.",
    architecture: [
      {
        title: "Frontend workspace",
        description: "Next.js visual dashboard showing agent decision logs and file edits.",
        icon: "Cpu"
      },
      {
        title: "API Orchestrator Layer",
        description: "FastAPI server directing multi-agent code tools and sandbox processes.",
        icon: "Terminal"
      },
      {
        title: "Database Cache",
        description: "PostgreSQL tracking workspace history and Redis storing session state details.",
        icon: "Database"
      },
      {
        title: "Sandbox Authentication",
        description: "Strict token validation securing API calls from custom client-side tools.",
        icon: "Share2"
      },
      {
        title: "Deployment & Runtime",
        description: "Local Docker container environment isolating file-system writes.",
        icon: "Server"
      }
    ],
    coreFeatures: [
      {
        title: "Sandboxed Terminal Execution",
        description: "Runs shell commands in isolated Docker containers, preventing host system command hijacking."
      },
      {
        title: "Telemetry & Decision Log Visuals",
        description: "Vibrant timeline logs mapping agent decisions, tool execution, and syntax validation status."
      },
      {
        title: "Interactive Code Diff Editor",
        description: "Review-and-approve visual layout highlighting agent edits before applying them to workspace files."
      },
      {
        title: "Self-healing Syntax Loops",
        description: "Automatically feeds terminal compiler and lint errors back to coding agents to self-correct codebase errors."
      }
    ],
    techStackCategorized: {
      languages: ["TypeScript", "Python", "Go"],
      frameworks: ["Next.js (App Router)", "FastAPI", "Tailwind CSS"],
      database: ["PostgreSQL (Config Store)", "Redis (Task Cache)"],
      infrastructure: ["Docker Sandbox Runtimes", "Local LLM Hostings"],
      deployment: ["Self-managed deployment / Docker Compose"]
    },
    engineeringChallenges: [
      {
        challenge: "Securing the file system while keeping codebase sync latency near-instant.",
        solution: "Implemented a virtual memory-mapped file system overlay that stages modifications in memory, committing to disk only upon developer confirmation.",
        tradeOff: "Minor increase in memory usage for large repositories in exchange for absolute command security and system safety."
      },
      {
        challenge: "Orchestrating concurrent LLM reasoning steps without triggering rate limit blocks.",
        solution: "Built a stateless task tokenizer queueing requests with automatic token throttling and local llama model backups.",
        tradeOff: "Slightly longer execution queues when cloud rates are saturated but guarantees 100% execution success."
      }
    ],
    roadmap: [
      "Official VS Code Extension syncing workspace files with the agent sandbox.",
      "Collaboration multiplayer mode allowing two developers to review agent swarms.",
      "Expanded support for complex multi-container microservice debugging."
    ],
    gallery: [
      "/projects/currently-building-hero.webp",
      "/projects/currently-building-terminal.webp",
      "/projects/currently-building-diff.webp"
    ]
  }
];
