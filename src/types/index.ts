export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  featured: boolean;
  image: string;
  status: "Completed" | "Beta" | "Production" | "Archived";
  year: string;
  tags: string[];
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
