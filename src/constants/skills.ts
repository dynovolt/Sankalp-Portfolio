export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "C", "SQL"]
  },
  {
    category: "Frameworks & Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"]
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "Supabase", "Git", "GitHub"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Artificial Intelligence", "Machine Learning", "PyTorch", "TensorFlow"]
  }
];
