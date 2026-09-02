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
  category: "BACKEND";
  projectType: "CLIENT WORK";
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
  metrics: {
    label: string;
    value: string;
  }[];
  accentColor: string;
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
    id: "logistics-porter-platform",
    title: "Logistics Platform (Porter-like App)",
    tagline: "High-frequency Redis driver broadcast, real-time routing, Razorpay wallet & notification engine",
    category: "BACKEND",
    projectType: "CLIENT WORK",
    year: "August 2026 – Present",
    role: "Java Backend Developer",
    client: "Logistics Enterprise Client",
    industry: "On-Demand Logistics & Fleet Routing",
    duration: "Client Delivery",
    description:
      "A scalable on-demand logistics platform developed and delivered for a client, featuring real-time driver broadcasting, route optimization, automated notification dispatch, and driver wallet management.",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Notification Service",
      "Google Routes API",
      "Razorpay",
      "Linux VPS",
      "systemd",
    ],
    liveUrl: "https://portfolio-seven-dun-14.vercel.app/",
    accentColor: "#00F0FF",
    metrics: [
      { label: "DB Read/Write Reduction", value: "90%+" },
      { label: "Driver Broadcast Latency", value: "< 15ms" },
      { label: "Wallet Transaction Accuracy", value: "100.0%" },
    ],
    keyPoints: [
      {
        title: "Redis In-Memory Driver Broadcast",
        description:
          "Built a Redis-based nearby driver broadcast system with PostgreSQL fallback. Reduced database reads and writes by over 90% by handling high-frequency driver location updates in Redis RAM.",
      },
      {
        title: "Google Routes API Integration",
        description:
          "Integrated Google Routes API for dynamic route optimization, precise polyline mapping, distance calculation, and accurate travel time estimation between pickup and drop points.",
      },
      {
        title: "Razorpay Secure Driver Wallet",
        description:
          "Integrated Razorpay payment gateway to enable secure driver wallet recharges, automated trip commission deductions, and ledger tracking.",
      },
      {
        title: "Real-Time Notification Service",
        description:
          "Integrated automated Notification Service to broadcast instant ride dispatch alerts, order confirmations, and driver arrival notifications.",
      },
      {
        title: "Linux VPS Deployment with systemd",
        description:
          "Deployed and managed the Spring Boot application on a Linux VPS using PostgreSQL, Redis, and automated systemd service daemons for 24/7 reliability.",
      },
    ],
    techStackBreakdown: [
      { category: "Backend Engine", skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Notification Service"] },
      { category: "Database & Cache", skills: ["Redis (In-Memory)", "PostgreSQL", "SQL Optimization", "PostGIS"] },
      { category: "Third-Party Integrations", skills: ["Google Routes API", "Razorpay Payment Gateway"] },
      { category: "Deployment & Server", skills: ["Linux VPS", "systemd Daemons", "Git", "Maven"] },
    ],
    highlights: [
      "Reduced database read/write pressure by over 90% via Redis in-memory location caching.",
      "Instantaneous sub-15ms nearby driver lookup and broadcast dispatch.",
      "100% financial transaction accuracy across driver wallet recharges and payouts.",
      "High uptime production deployment running on Linux VPS with systemd.",
    ],
  },
  {
    id: "salon-saas-platform",
    title: "Salon Platform (Multi-Tenant SaaS)",
    tagline: "Multi-store management, staff commission tracking, PostGIS geolocation, booking engine & notification service",
    category: "BACKEND",
    projectType: "CLIENT WORK",
    year: "June 2026 – July 2026",
    role: "Backend & API Engineer",
    client: "Beauty & Wellness Enterprise",
    industry: "Multi-Tenant SaaS / Booking Management",
    duration: "Client Delivery",
    description:
      "A complete multi-tenant SaaS platform developed for salon businesses to manage online appointments, multi-store operations, staff commissions, location-based discovery, and customer notifications.",
    featured: true,
    coverImage: "/salon/home.png",
    snapshots: [
      {
        category: "Discovery & Portals",
        title: "Customer Storefront Home",
        image: "/salon/home.png",
        description: "Modern client-facing discovery landing with service search and featured stores.",
      },
      {
        category: "Discovery & Portals",
        title: "Salon Branch Directory",
        image: "/salon/salons.png",
        description: "Multi-branch store listings with PostGIS geo-distance discovery and filters.",
      },
      {
        category: "Discovery & Portals",
        title: "Salon Partner Portal",
        image: "/salon/partner.png",
        description: "Store onboarding, franchise partnership and multi-branch management gateway.",
      },
      {
        category: "Discovery & Portals",
        title: "Secure Authentication",
        image: "/salon/login.png",
        description: "Spring Security JWT login portal with Role-Based Access Control (RBAC).",
      },
      {
        category: "Store Details & Catalog",
        title: "Salon Overview & Profile",
        image: "/salon/salon_details/salon_details.png",
        description: "Store details, amenities, operating hours, and customer feedback.",
      },
      {
        category: "Store Details & Catalog",
        title: "Services & Price Menu",
        image: "/salon/salon_details/services.png",
        description: "Categorized service catalog with dynamic durations and pricing structures.",
      },
      {
        category: "Store Details & Catalog",
        title: "Staff & Stylist Management",
        image: "/salon/salon_details/satff.png",
        description: "Stylist roster, specializations, schedule availability and commission logic.",
      },
      {
        category: "Store Details & Catalog",
        title: "Salon Image Gallery",
        image: "/salon/salon_details/gallery.png",
        description: "High-resolution photo portfolio showcasing salon ambiance and styling work.",
      },
      {
        category: "Booking & Checkout",
        title: "Real-Time Slot Selection",
        image: "/salon/Booking/timeslot.png",
        description: "Interactive calendar with live slot validation preventing double-bookings.",
      },
      {
        category: "Booking & Checkout",
        title: "Advance Booking Form",
        image: "/salon/Booking/booking form.png",
        description: "Client contact collection, service add-ons, and stylist assignment.",
      },
      {
        category: "Booking & Checkout",
        title: "Checkout & Summary",
        image: "/salon/Booking/checkout.png",
        description: "Final booking summary, billing breakdown, and appointment confirmation.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "PostGIS",
      "Spring Security (JWT)",
      "Notification Service",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    liveUrl: "https://portfolio-seven-dun-14.vercel.app/",
    accentColor: "#10B981",
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
      {
        title: "Automated Notification Service",
        description:
          "Integrated automated Notification Service to send real-time appointment booking confirmations, schedule updates, and SMS/Email reminders to clients.",
      },
      {
        title: "Frontend with Next.js & JavaScript",
        description:
          "Engineered the modern client storefront, appointment booking flow, and responsive salon dashboards using Next.js and JavaScript with Tailwind CSS.",
      },
    ],
    techStackBreakdown: [
      { category: "Backend Engine", skills: ["Java", "Spring Boot", "Spring Security (JWT)", "JPA / Hibernate", "Notification Service", "REST APIs"] },
      { category: "Database & Spatial", skills: ["PostgreSQL", "SQL Optimization", "PostGIS (Distance Operations)"] },
      { category: "Frontend Client", skills: ["Next.js", "JavaScript", "React.js", "Tailwind CSS", "Responsive UI"] },
      { category: "Tooling & APIs", skills: ["Postman", "Git", "Maven", "Linux VPS"] },
    ],
    highlights: [
      "100% role-based security isolation across multi-store manager and staff tiers.",
      "Sub-25ms response time for advance slot booking and availability checks.",
      "Automated Notification Service for instant booking and schedule reminders.",
      "Fast, responsive Next.js & JavaScript frontend connected to Spring Boot REST APIs.",
    ],
  },
];
