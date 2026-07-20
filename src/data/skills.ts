export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Go", "Rust"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Other",
    items: ["REST APIs", "Firebase", "Git/GitHub", "JWT Auth"],
  },
  {
    category: "Currently learning",
    items: ["Cloud DevOps (AWS/GCP)", "AI integrations"],
  }
];

export default skills;
