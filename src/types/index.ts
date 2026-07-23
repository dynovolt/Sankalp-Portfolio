export interface ProjectChallenge {
  challenge: string;
  solution: string;
  tradeOff: string;
}

export interface ProjectArchitectureStep {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechStackCategorized {
  languages?: string[];
  frameworks?: string[];
  database?: string[];
  infrastructure?: string[];
  deployment?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  featured: boolean;
  image: string;
  status: "Completed" | "Beta" | "Production" | "Archived" | "Active Development" | "Production Ready";
  year: string;
  tags: string[];
  hasDeployment: boolean;
  deploymentStatus?: "DEPLOYING" | "LOCAL ENVIRONMENT" | "ARCHIVED";
  deploymentProgress?: number;
  currentRelease?: string;
  expectedRelease?: string;
  problemStatement?: string;
  whyBuilt?: string;
  architecture?: ProjectArchitectureStep[];
  coreFeatures?: ProjectFeature[];
  techStackCategorized?: ProjectTechStackCategorized;
  engineeringChallenges?: ProjectChallenge[];
  roadmap?: string[];
  gallery?: string[];
}

export interface Profile {
  fullName: string;
  shortName: string;
  currentRole: string;
  tags: string[];
  education: string;
  university: string;
  graduationYear: string;
  currentYear: string;
  location: string;
  heroTagline: string;
  heroSubtitle: string;
  resumeFilename: string;
  profileImagePath: string;
  currentStatus: string;
  bio: {
    heading: string;
    paragraphs: string[];
  };
  availability: string;
}

export interface NavItem {
  name: string;
  href: string;
}
