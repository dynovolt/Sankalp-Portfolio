import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "CalcNest",
    description: "A premium, cloud-native collaborative calculation platform that lets teams run real-time dynamic computations and share complex mathematical formulas seamlessly.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    github: "https://github.com/Sankalp-S/CalcNest",
    demo: "https://calcnest.vercel.app",
    featured: true,
    image: "/projects/calcnest.webp",
    status: "Production",
    year: "2026",
    tags: ["Collaboration", "SaaS", "Real-time"],
    hasDeployment: false,
    deploymentStatus: "DEPLOYING",
    deploymentProgress: 82,
    currentRelease: "v0.1.0",
    expectedRelease: "v0.2.0"
  },
  {
    title: "AI Resume Analyzer",
    description: "An advanced LLM-powered analytical platform that parses resumes, identifies structural gaps, scores industry alignment, and generates targeted actionable optimization advice.",
    techStack: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    github: "https://github.com/Sankalp-S/AI-Resume-Analyzer",
    demo: "https://resume-analyzer.vercel.app",
    featured: true,
    image: "/projects/resume-analyzer.webp",
    status: "Beta",
    year: "2026",
    tags: ["LLM", "AI Agents", "Career Tech"],
    hasDeployment: false,
    deploymentStatus: "LOCAL ENVIRONMENT",
    deploymentProgress: 60,
    currentRelease: "v0.1.0",
    expectedRelease: "v0.2.0"
  },
  {
    title: "Campus Connect",
    description: "A robust, real-time distributed campus networking platform designed to synchronize academic schedules, facilitate peer mentorship, and streamline event coordination.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Sankalp-S/Campus-Connect",
    demo: "https://campus-connect.vercel.app",
    featured: true,
    image: "/projects/campus-connect.webp",
    status: "Completed",
    year: "2025",
    tags: ["Networking", "Real-time", "University"],
    hasDeployment: false,
    deploymentStatus: "ARCHIVED",
    deploymentProgress: 100,
    currentRelease: "v0.1.0",
    expectedRelease: "v0.2.0"
  }
];
