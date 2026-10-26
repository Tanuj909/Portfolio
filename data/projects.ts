export interface ProjectSnapshot {
  category: string;
  title: string;
  image: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "BACKEND" | "FULLSTACK" | "FRONTEND";
  projectType: string;
  year: string;
  role: string;
  client?: string;
  industry?: string;
  duration?: string;
  description: string;
  featured: boolean;
  coverImage?: string;
  snapshots?: ProjectSnapshot[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  accentColor: string;
  badgeTheme: "peach" | "blush" | "mauve" | "lavender" | "cream";
  keyPoints: {
    title: string;
    description: string;
  }[];
  techStackBreakdown: {
    category: string;
    skills: string[];
  }[];
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "riderzz",
    title: "Riderzz",
    tagline: "Logistics and ride-booking application with real-time driver broadcast & routing",
    category: "BACKEND",
    projectType: "CLIENT DELIVERY",
    year: "2026",
    role: "Java Backend Developer",
    client: "Logistics Enterprise Client",
    industry: "On-Demand Logistics & Fleet Dispatch",
    duration: "Client Delivery",
    description:
      "A logistics and ride-booking application featuring real-time driver broadcasting, route optimization, automated notification dispatch, and driver wallet management.",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Google Routes API",
      "Razorpay",
      "Linux VPS",
    ],
    liveUrl: "https://portfolio-seven-dun-14.vercel.app/",
    accentColor: "#75405F",
    badgeTheme: "plum" as any,
    metrics: [
      { label: "DB Read/Write Reduction", value: "90%+" },
      { label: "Driver Broadcast Latency", value: "< 15ms" },
      { label: "Wallet Transaction Accuracy", value: "100%" },
    ],
    keyPoints: [
      {
        title: "Redis In-Memory Driver Broadcast",
        description:
          "Engineered a Redis-based nearby driver broadcast system with PostgreSQL fallback. Reduced database reads and writes by over 90% by handling high-frequency driver location updates directly in Redis.",
      },
      {
        title: "Google Routes API Integration",
        description:
          "Integrated Google Routes API for dynamic route optimization, distance computation, and precise travel time estimation between pickup and drop points.",
      },
      {
        title: "Razorpay Secure Driver Wallet",
        description:
          "Integrated Razorpay payment gateway to enable secure driver wallet recharges, automated trip commission deductions, and ledger tracking.",
      },
      {
        title: "Notification Service & Dispatch",
        description:
          "Integrated automated Notification Service to broadcast instant ride dispatch alerts, order confirmations, and driver arrival notifications.",
      },
    ],
    techStackBreakdown: [
      { category: "Backend Engine", skills: ["Java", "Spring Boot", "Spring Security", "REST APIs"] },
      { category: "Database & Cache", skills: ["Redis (In-Memory)", "PostgreSQL", "SQL Optimization"] },
      { category: "Third-Party APIs", skills: ["Google Routes API", "Razorpay Payment Gateway"] },
      { category: "Deployment", skills: ["Linux VPS", "systemd Daemons", "Git"] },
    ],
    highlights: [
      "Reduced database read/write pressure by over 90% via Redis in-memory location caching.",
      "Sub-15ms nearby driver lookup and dispatch notification broadcast.",
      "100% financial transaction accuracy across driver wallet recharges and payouts.",
      "Reliable production deployment running on Linux VPS with automated systemd daemons.",
    ],
  },
  {
    id: "salon-saas-platform",
    title: "Salon Platform (Multi-Tenant SaaS)",
    tagline: "Multi-store management, staff commission tracking, PostGIS geolocation & booking engine",
    category: "FULLSTACK",
    projectType: "CLIENT DELIVERY",
    year: "2026",
    role: "Backend & API Engineer",
    client: "Beauty & Wellness Enterprise",
    industry: "Multi-Tenant SaaS / Booking Management",
    duration: "Client Delivery",
    description:
      "A complete multi-tenant SaaS platform developed for salon businesses to manage online appointments, multi-store operations, staff commissions, location-based discovery, and customer notifications.",
    featured: true,
    coverImage: "/Salon/home.png",
    snapshots: [
      {
        category: "Discovery & Portals",
        title: "Customer Storefront Home",
        image: "/Salon/home.png",
        description: "Modern client-facing discovery landing with service search and featured stores.",
      },
      {
        category: "Discovery & Portals",
        title: "Salon Branch Directory",
        image: "/Salon/salons.png",
        description: "Multi-branch store listings with PostGIS geo-distance discovery and filters.",
      },
      {
        category: "Discovery & Portals",
        title: "Salon Partner Portal",
        image: "/Salon/partner.png",
        description: "Store onboarding, franchise partnership and multi-branch management gateway.",
      },
      {
        category: "Discovery & Portals",
        title: "Secure Authentication",
        image: "/Salon/login.png",
        description: "Spring Security JWT login portal with Role-Based Access Control (RBAC).",
      },
      {
        category: "Store Details & Catalog",
        title: "Salon Overview & Profile",
        image: "/Salon/salon_details/salon_details.png",
        description: "Store details, amenities, operating hours, and customer feedback.",
      },
      {
        category: "Store Details & Catalog",
        title: "Services & Price Menu",
        image: "/Salon/salon_details/services.png",
        description: "Categorized service catalog with dynamic durations and pricing structures.",
      },
      {
        category: "Store Details & Catalog",
        title: "Staff & Stylist Management",
        image: "/Salon/salon_details/satff.png",
        description: "Stylist roster, specializations, schedule availability and commission logic.",
      },
      {
        category: "Store Details & Catalog",
        title: "Salon Image Gallery",
        image: "/Salon/salon_details/gallery.png",
        description: "High-resolution photo portfolio showcasing salon ambiance and styling work.",
      },
      {
        category: "Booking & Checkout",
        title: "Real-Time Slot Selection",
        image: "/Salon/Booking/timeslot.png",
        description: "Interactive calendar with live slot validation preventing double-bookings.",
      },
      {
        category: "Booking & Checkout",
        title: "Advance Booking Form",
        image: "/Salon/Booking/booking form.png",
        description: "Client contact collection, service add-ons, and stylist assignment.",
      },
      {
        category: "Booking & Checkout",
        title: "Checkout & Summary",
        image: "/Salon/Booking/checkout.png",
        description: "Final booking summary, billing breakdown, and appointment confirmation.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Hibernate / JPA",
      "React.js",
      "Tailwind CSS",
      "REST APIs",
    ],
    liveUrl: "https://portfolio-seven-dun-14.vercel.app/",
    accentColor: "#75405F",
    badgeTheme: "plum" as any,
    metrics: [
      { label: "Tenant Isolation", value: "100% RBAC" },
      { label: "Booking API Latency", value: "< 25ms" },
      { label: "Distance Precision", value: "PostGIS Geo" },
    ],
    keyPoints: [
      {
        title: "Multi-Store & Staff Management",
        description:
          "Developed and delivered a multi-tenant SaaS salon management platform using Spring Boot. Designed and implemented REST APIs for multi-store management, staff management, booking, and advance booking.",
      },
      {
        title: "Spring Security & JWT RBAC",
        description:
          "Implemented JWT-based authentication and Role-Based Access Control (RBAC) using Spring Security, ensuring strict tenant isolation across salon owners, managers, staff, and customers.",
      },
      {
        title: "Staff Commission & Business Logic",
        description:
          "Developed staff commission calculation logic, appointment management, and automated business workflows using Java, Spring Boot, and JPA.",
      },
      {
        title: "PostgreSQL & PostGIS Geolocation",
        description:
          "Utilized SQL, PostgreSQL, and PostGIS for efficient geo-spatial indexing, customer distance calculations, and nearby store branch discovery.",
      },
    ],
    techStackBreakdown: [
      { category: "Backend Engine", skills: ["Java", "Spring Boot", "Spring Security (JWT)", "JPA / Hibernate", "REST APIs"] },
      { category: "Database & Spatial", skills: ["PostgreSQL", "SQL Optimization", "PostGIS (Distance Operations)"] },
      { category: "Frontend Client", skills: ["React.js", "JavaScript", "Tailwind CSS", "Responsive UI"] },
      { category: "Tooling & APIs", skills: ["Postman", "Git", "Maven", "Linux VPS"] },
    ],
    highlights: [
      "100% role-based security isolation across multi-store manager and staff tiers.",
      "Sub-25ms response time for advance slot booking and availability checks.",
      "11 verified production screen snapshots included in the interactive case study.",
      "Responsive React.js & JavaScript frontend connected to Spring Boot REST APIs.",
    ],
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    tagline: "Hospital and patient management application with appointment scheduling & RBAC",
    category: "FULLSTACK",
    projectType: "HEALTHCARE APPLICATION",
    year: "2025 – 2026",
    role: "Java Full Stack Developer",
    industry: "Healthcare Systems & Clinical Management",
    description:
      "A hospital and patient management application designed to streamline patient registration, doctor appointment scheduling, electronic medical records, and role-based staff workflows.",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate / JPA",
      "MySQL",
      "REST APIs",
      "React.js",
    ],
    liveUrl: "https://portfolio-seven-dun-14.vercel.app/",
    accentColor: "#4B263F",
    badgeTheme: "burgundy" as any,
    metrics: [
      { label: "Role Isolation", value: "100% RBAC" },
      { label: "Appointment Scheduling", value: "Instant" },
      { label: "Data Integrity", value: "ACID Compliant" },
    ],
    keyPoints: [
      {
        title: "Patient & Doctor Scheduling Engine",
        description:
          "Designed comprehensive scheduling logic preventing overlapping appointments and managing doctor shift timetables with real-time slot validation.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Implemented Spring Security with JWT authentication to enforce strict access boundaries across doctors, nurses, administrative staff, and patients.",
      },
      {
        title: "Hibernate / JPA Relational Data Model",
        description:
          "Engineered an optimized MySQL database schema managing medical history records, prescriptions, patient admissions, and billing statements.",
      },
      {
        title: "Clean RESTful API Architecture",
        description:
          "Developed modular REST APIs with global exception handling and structured validation for seamless consumption by modern web frontends.",
      },
    ],
    techStackBreakdown: [
      { category: "Backend Engine", skills: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA"] },
      { category: "Database & Storage", skills: ["MySQL", "Relational Modeling", "Transaction Management"] },
      { category: "Web Interface", skills: ["React.js", "JavaScript", "Responsive UI"] },
      { category: "API & Validation", skills: ["REST APIs", "Global Exception Handling", "Postman"] },
    ],
    highlights: [
      "Zero overlapping appointments through robust concurrent booking checks.",
      "Strict data privacy and HIPAA-aligned role-based access control.",
      "Comprehensive patient history tracking with relational audit logs.",
      "High-performance REST API response times under 40ms for core clinical lookups.",
    ],
  },
];
