import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "calcnest",
    title: "CalcNest",
    description: "CalcNest is a modern SaaS platform that digitizes calculator rentals for universities. It replaces manual register-based systems with a secure, scalable, and user-friendly web application that streamlines inventory management, rentals, returns, and administration.",
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Prisma", "Supabase PostgreSQL", "Vercel"],
    github: "https://github.com/dynovolt/CalcNest",
    demo: "https://calcnest.vercel.app",
    featured: true,
    image: "/projects/calcnest.webp",
    status: "Production Ready",
    year: "2026",
    tags: ["Full-Stack SaaS", "OTP Auth", "University Portal"],
    hasDeployment: true,
    problemStatement: "Many universities continue to manage calculator rentals using paper registers and manual processes. This leads to misplaced records, inaccurate inventory tracking, inefficient borrowing workflows, and unnecessary administrative overhead.\n\nCalcNest solves this problem by providing a centralized digital platform where students can reserve calculators, administrators can manage inventory in real time, and the entire rental lifecycle becomes transparent and efficient.",
    whyBuilt: "I wanted to build a real-world SaaS product that solves an operational problem faced by universities while strengthening my skills in full-stack development, authentication, database design, product thinking, and scalable application architecture.\n\nRather than building another CRUD application, I focused on creating a product that could realistically be deployed within an educational institution.",
    architecture: [
      {
        title: "Frontend",
        description: "Built with Next.js 15 for a fast, responsive user interface.",
        icon: "Cpu"
      },
      {
        title: "Authentication",
        description: "Uses secure College Email OTP Authentication to verify access.",
        icon: "Mail"
      },
      {
        title: "API Layer",
        description: "Uses Next.js Server Actions & Route Handlers for backend logic.",
        icon: "Terminal"
      },
      {
        title: "Database",
        description: "Persisted in Supabase PostgreSQL for reliable relational storage.",
        icon: "Database"
      },
      {
        title: "ORM",
        description: "Utilizes Prisma for type-safe database queries and schemas.",
        icon: "Layers"
      },
      {
        title: "Hosting",
        description: "Deployed on Vercel for fast load times and seamless scaling.",
        icon: "Server"
      }
    ],
    coreFeatures: [
      {
        title: "College email OTP authentication",
        description: "Secure login restricting dashboard access to verified campus email addresses."
      },
      {
        title: "Student and Administrator dashboards",
        description: "Tailored roles and interfaces for borrowing calculators and managing system inventories."
      },
      {
        title: "Real-time calculator inventory",
        description: "Instant updates on calculator counts, availability states, and specific item locations."
      },
      {
        title: "Rental booking workflow",
        description: "Streamlined multi-step booking process for students to secure calculators for their courses."
      },
      {
        title: "Rental extension requests",
        description: "Enables students to submit borrowing extension requests directly for administrative approval."
      },
      {
        title: "QR-based pickup and return process",
        description: "Simplifies physical distribution and returns using instant QR-code verification scanners."
      },
      {
        title: "Inventory management dashboard",
        description: "Comprehensive management panel to add, edit, track, or retire physical calculators."
      },
      {
        title: "Usage analytics",
        description: "Provides admins with visual metrics on reservation frequencies, popular models, and return times."
      },
      {
        title: "Secure role-based access",
        description: "Protects critical database and UI actions, ensuring users only see what their role allows."
      },
      {
        title: "Responsive design",
        description: "Fully optimized layout that works beautifully across mobile devices, tablets, and desktops."
      }
    ],
    techStackCategorized: {
      languages: ["TypeScript", "JavaScript", "SQL"],
      frameworks: ["Next.js 15", "React", "Tailwind CSS"],
      database: ["Supabase PostgreSQL"],
      infrastructure: ["Prisma ORM", "OTP Email Authentication"],
      deployment: ["Vercel"]
    },
    engineeringChallenges: [
      {
        challenge: "Designing a database schema that could efficiently track calculators, rental history, availability, user roles, and booking status while maintaining consistency across multiple workflows.",
        solution: "Engineered a relational model in Prisma with transactional status updates, constraint checking, and history logs to guarantee consistency.",
        tradeOff: "Slightly more complex query logic for fetching state, but avoids out-of-sync or orphaned rental data."
      },
      {
        challenge: "Creating an intuitive user experience that remained simple for students while exposing advanced inventory management capabilities for administrators.",
        solution: "Built dual-view interfaces with role-based routing, keeping student bookings simple while offering analytics and CRUD tables for administrators.",
        tradeOff: "Requires maintaining separate routes and dashboard layouts, but ensures high usability and zero confusion for students."
      }
    ],
    roadmap: [
      "Payment gateway integration",
      "WhatsApp notifications",
      "Email reminders",
      "Predictive inventory analytics",
      "Multi-campus support",
      "Native mobile application",
      "RFID integration"
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
