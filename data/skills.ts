export interface TechCategory {
  id: string;
  name: string;
  tagline: string;
  coreNode: string;
  coreSubtitle: string;
  iconType: "backend" | "database" | "tools" | "frontend";
  skills: string[];
}

export const skillsData: TechCategory[] = [
  {
    id: "backend",
    name: "BACKEND & APIS",
    tagline: "High-Throughput Microservices & Scalable REST APIs",
    coreNode: "SPRING BOOT & JAVA",
    coreSubtitle: "Primary Backend Engine",
    iconType: "backend",
    skills: [
      "RESTful APIs",
      "Spring Security",
      "JWT & RBAC",
      "JPA / Hibernate",
      "Microservices",
      "Spring MVC",
      "JDBC & Servlets",
      "Global Exception Handling",
    ],
  },
  {
    id: "database",
    name: "DATABASES & CACHING",
    tagline: "Relational Modeling, Spatial Indexing & In-Memory Stores",
    coreNode: "POSTGRESQL & REDIS",
    coreSubtitle: "Data & Caching Hub",
    iconType: "database",
    skills: [
      "MySQL",
      "Redis Caching",
      "SQL Query Optimization",
      "PostGIS (Geo Queries)",
      "Database Indexing",
      "Redis Pub/Sub",
      "Schema Design",
      "Transaction Management",
    ],
  },
  {
    id: "tools",
    name: "DEVOPS & TOOLS",
    tagline: "Containers, Automated Delivery & API Validation",
    coreNode: "DOCKER & CI/CD",
    coreSubtitle: "Infrastructure & Automation",
    iconType: "tools",
    skills: [
      "Git & GitHub",
      "Bitbucket",
      "Postman (API Testing)",
      "Maven Build",
      "Linux VPS Hosting",
      "systemd Services",
      "MySQL Workbench",
      "VS Code",
    ],
  },
  {
    id: "frontend",
    name: "WEB & FRONTEND",
    tagline: "Modern Dynamic Web Applications & Responsive UI",
    coreNode: "NEXT.JS & REACT",
    coreSubtitle: "Frontend Application Core",
    iconType: "frontend",
    skills: [
      "Tailwind CSS",
      "TypeScript",
      "JavaScript (ES6+)",
      "Responsive Web Design",
      "HTML5 Semantic",
      "Modern CSS3",
      "Client API Integration",
      "UI Component Architecture",
    ],
  },
];
