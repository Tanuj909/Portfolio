export interface SkillItem {
  name: string;
  category: "backend" | "database" | "frontend" | "tools";
  badgeTheme: "peach" | "blush" | "mauve" | "lavender" | "cream";
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const allSkills: SkillItem[] = [
  { name: "Java", category: "backend", badgeTheme: "peach" },
  { name: "Spring Boot", category: "backend", badgeTheme: "blush" },
  { name: "Spring Security", category: "backend", badgeTheme: "mauve" },
  { name: "Hibernate / JPA", category: "backend", badgeTheme: "lavender" },
  { name: "REST APIs", category: "backend", badgeTheme: "cream" },
  { name: "PostgreSQL", category: "database", badgeTheme: "peach" },
  { name: "MySQL", category: "database", badgeTheme: "blush" },
  { name: "Redis", category: "database", badgeTheme: "mauve" },
  { name: "React.js", category: "frontend", badgeTheme: "lavender" },
  { name: "Flutter", category: "frontend", badgeTheme: "cream" },
  { name: "JavaScript", category: "frontend", badgeTheme: "peach" },
  { name: "TypeScript", category: "frontend", badgeTheme: "blush" },
  { name: "Git", category: "tools", badgeTheme: "mauve" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend & Systems",
    description: "Enterprise Java services, microservices, and secure API architectures.",
    skills: allSkills.filter((s) => s.category === "backend"),
  },
  {
    id: "database",
    name: "Databases & Caching",
    description: "Relational persistence, query optimization, and high-speed memory stores.",
    skills: allSkills.filter((s) => s.category === "database"),
  },
  {
    id: "frontend",
    name: "Web & Mobile",
    description: "Modern, responsive client applications and cross-platform interfaces.",
    skills: allSkills.filter((s) => s.category === "frontend"),
  },
  {
    id: "tools",
    name: "Tooling & Version Control",
    description: "Collaborative development, versioning, and continuous delivery.",
    skills: allSkills.filter((s) => s.category === "tools"),
  },
];
