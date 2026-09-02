export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  shortBio: string;
  location: string;
  availability: string;
  focus: string[];
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
  socials: {
    name: string;
    url: string;
    handle: string;
    icon: string;
  }[];
  email: string;
  linkedin: string;
  resumeUrl: string;
  aboutStory: {
    lead: string;
    paragraphs: string[];
    currentlyFocusing: string[];
  };
  philosophies: {
    number: string;
    title: string;
    description: string;
    details: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Tanuj Kashyap",
  role: "Java Backend Developer",
  tagline: "BUILDING DIGITAL PRODUCTS THAT SOLVE REAL PROBLEMS",
  headline: "Java Backend Developer with 1+ year experience building scalable REST APIs & microservices.",
  shortBio:
    "Java Backend Developer with 1+ year of professional experience building scalable REST APIs, microservices, and secure architectures with Spring Boot.",
  location: "India",
  availability: "Open to exciting opportunities",
  focus: ["BACKEND ARCHITECTURE", "SPRING BOOT MICROSERVICES", "JAVA & REST APIS"],
  stats: [],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanuj-kashyap-909934275/",
      handle: "linkedin.com/in/tanuj-kashyap-909934275",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:tanujkashyap913@gmail.com",
      handle: "tanujkashyap913@gmail.com",
      icon: "mail",
    },
  ],
  email: "tanujkashyap913@gmail.com",
  linkedin: "https://www.linkedin.com/in/tanuj-kashyap-909934275/",
  resumeUrl: "/Resume/Resume.pdf",
  aboutStory: {
    lead: "Java Backend Developer building scalable, resilient, and production-grade architectures.",
    paragraphs: [
      "I am a Java Backend Developer with 1+ year of professional experience specializing in engineering scalable REST APIs, microservices, and secure backend systems using Spring Boot. With industry experience designing production workflows at DSD Systems Pvt Ltd, I prioritize clean layered architecture, performance, and high availability.",
      "My technical core spans Spring Security (JWT & RBAC), JPA/Hibernate, global exception handling, and database query optimization across PostgreSQL and MySQL. I have architected high-throughput systems—including a Porter-like logistics platform leveraging Redis broadcasting to reduce database load by over 90%, and a multi-tenant SaaS salon management platform.",
      "I hold an MCA in Computer Science from Delhi Skill and Entrepreneurship University and a BCA from Institute of Technology and Science. I focus on writing maintainable, production-ready code that drives real business impact.",
    ],
    currentlyFocusing: [
      "Java & Spring Boot 3.x",
      "Microservices Architecture",
      "Spring Security & JWT (RBAC)",
      "PostgreSQL & MySQL Query Optimization",
      "Redis Caching & Pub/Sub",
      "RESTful API Design & Postman",
      "Docker & Linux VPS Deployment",
    ],
  },
  philosophies: [
    {
      number: "01",
      title: "THINK IN SYSTEMS",
      description: "Architecture, maintainability, and scalability over quick hacks.",
      details:
        "Every feature is part of a larger ecosystem. I architect with clear domain boundaries, strict API contracts, and predictable data flows so systems stay easy to reason about as traffic grows.",
    },
    {
      number: "02",
      title: "BUILD FOR REAL USERS",
      description: "Features must solve actual business problems, not just demonstrate technology.",
      details:
        "Technical sophistication is meaningless if the end user experiences friction. I focus on sub-100ms response times, intuitive state management, and reliable error handling.",
    },
    {
      number: "03",
      title: "KEEP IT SIMPLE & MODULAR",
      description: "Complex systems should have simple interfaces and clear abstractions.",
      details:
        "Premature complexity is the enemy of velocity. I prefer well-tested, decoupled components and battle-tested patterns over unnecessary layers of abstraction.",
    },
    {
      number: "04",
      title: "SHIP, MEASURE & ITERATE",
      description: "Build, automate tests, deploy securely, and continually refine.",
      details:
        "Continuous delivery and observability are first-class citizens. Automated pipelines, structured logging, and fast feedback loops ensure reliable releases.",
    },
  ],
};
