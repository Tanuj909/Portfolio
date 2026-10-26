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
  role: "Software Developer",
  tagline: "BUILDING SCALABLE WEB & MOBILE APPLICATIONS",
  headline: "Software Developer building scalable web and mobile applications using Java, Spring Boot, React, and modern technologies.",
  shortBio:
    "I build scalable web and mobile applications using Java, Spring Boot, React, and modern technologies with a strong focus on high-performance backend architecture and clean user experiences.",
  location: "Delhi NCR, India",
  availability: "Open to exciting opportunities",
  focus: ["JAVA & SPRING BOOT", "REST APIS & MICROSERVICES", "REACT & MODERN WEB"],
  stats: [
    {
      value: "1+",
      label: "Years of Experience",
      detail: "Professional backend & full-stack development",
    },
    {
      value: "5+",
      label: "Projects Completed",
      detail: "Client deliveries, production systems & SaaS",
    },
    {
      value: "MCA",
      label: "Computer Science",
      detail: "Delhi Skill and Entrepreneurship University",
    },
    {
      value: "Delhi NCR",
      label: "Location",
      detail: "India • Open to on-site & remote roles",
    },
  ],
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
    lead: "Software Developer specializing in robust backend engineering, scalable REST APIs, and modern application development.",
    paragraphs: [
      "I am a Software Developer with professional experience engineering high-performance REST APIs, microservices, and secure backend systems using Java and Spring Boot. With industry experience designing production workflows at DSD Systems Pvt Ltd, I prioritize clean layered architecture, modularity, and high system availability.",
      "My core backend capabilities span Spring Security (JWT authentication and role-based access control), JPA/Hibernate object-relational mapping, database query optimization across PostgreSQL and MySQL, and Redis caching. I have architected high-throughput solutions including a logistics ride-booking dispatch platform leveraging in-memory Redis broadcasting to reduce database load by over 90%, and a multi-tenant SaaS salon management platform.",
      "Alongside backend services, I build responsive, intuitive web and mobile interfaces using React.js, Next.js, and Flutter. I hold a Master of Computer Applications (MCA) from Delhi Skill and Entrepreneurship University and a BCA from Institute of Technology and Science, driven by a commitment to write maintainable code that delivers real business value.",
    ],
    currentlyFocusing: [
      "Java & Spring Boot",
      "Spring Security & JWT",
      "Hibernate / JPA",
      "REST APIs & Microservices",
      "PostgreSQL & MySQL",
      "Redis Caching",
      "React.js & Next.js",
      "Flutter Mobile Development",
      "Git & CI/CD",
    ],
  },
  philosophies: [
    {
      number: "01",
      title: "THINK IN SYSTEMS",
      description: "Architecture, maintainability, and scalability over quick hacks.",
      details:
        "Every feature is part of a larger ecosystem. I architect with clear domain boundaries, strict API contracts, and predictable data flows so systems remain stable and easy to maintain as traffic grows.",
    },
    {
      number: "02",
      title: "BUILD FOR REAL USERS",
      description: "Features must solve actual business problems with low latency.",
      details:
        "Technical sophistication is only worthwhile when end users have a reliable, smooth experience. I prioritize low response times, dependable error handling, and intuitive interaction design.",
    },
    {
      number: "03",
      title: "KEEP IT SIMPLE & MODULAR",
      description: "Complex domains require clean abstractions and decoupled components.",
      details:
        "Premature complexity impedes development velocity. I prefer well-tested, decoupled services and proven patterns over unnecessary layers of abstraction.",
    },
    {
      number: "04",
      title: "SHIP, MEASURE & ITERATE",
      description: "Automate validation, deploy reliably, and continually refine.",
      details:
        "Continuous delivery, structured logging, and automated test collections ensure that production releases remain predictable and regressions are identified immediately.",
    },
  ],
};
