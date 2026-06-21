// projects.js

import hospital from "../../assets/Images/hospital.jpg";
import webiste from "../../assets/Images/website.jpg";
import billing from "../../assets/Images/billing.jpg";
import logisticsDashboard from "../../assets/Images/logistics_dashboard.png";
import logisticsTracking from "../../assets/Images/logistics_tracking.png";
import salonDashboard from "../../assets/Images/salon_dashboard.png";
import salonMobile from "../../assets/Images/salon_mobile.png";

const projects = [
  {
    id: 1,
    title: "On-Demand Logistics Platform (Porter-like App)",
    techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "PostGIS", "Redis"],
    description:
      "Developed the backend of an on-demand logistics platform supporting rider, driver, vehicle, booking, trip, wallet, and document management workflows. Built secure REST APIs using Spring Boot and Spring Security with JWT-based Authentication and Role-Based Access Control (RBAC). Leveraged PostgreSQL and PostGIS for geospatial operations including nearby driver search, distance calculations, and location-based services. Designed a scalable architecture with Redis-based real-time driver location tracking, reducing frequent database write operations by up to 80–90% and enabling faster location updates for active drivers.",
    features: [
      "End-to-End Workflows: Managed rider, driver, vehicle, booking, trip, wallet, and document verification.",
      "Robust Security: Implemented JWT-based stateless authentication and strict Role-Based Access Control (RBAC).",
      "Geospatial Calculations: Utilized PostGIS for complex geographic operations like radius-based search and path optimization.",
      "Redis Caching: Scaled location-updates by tracking driver latitude/longitude in Redis, bypassing heavy DB writes."
    ],
    github: "https://github.com/your-repo-1",
    demo: "https://your-demo-link-1",
    image: logisticsDashboard,
    images: [logisticsDashboard, logisticsTracking]
  },
  {
    id: 2,
    title: "Salon Saas PlatForm",
    techStack: ["Next.js", "Tailwind CSS", "OpenStreetMap", "Spring Boot", "Spring Security", "PostgreSQL", "PostGIS", "Firebase", "JWT"],
    description:
      "Developed a full-stack salon discovery and appointment booking platform. The frontend is built using Next.js and Tailwind CSS, integrating OpenStreetMap with user geolocation tracking to help users discover nearby salons. The backend is built with Spring Boot and Spring Security, utilizing PostgreSQL and PostGIS for optimized geospatial query calculations. The platform features JWT-based stateless authentication, Firebase storage for stylist profiles and salon media, automated email notifications for bookings and invoices, and is fully deployed on Hostinger VPS.",
    features: [
      "Interactive Geolocation: Integrated OpenStreetMap and browser geolocation to search and display salons within a specific radius.",
      "Geospatial Queries: Used PostgreSQL and PostGIS to run optimized distance-based queries for nearest stylist discovery.",
      "Stateless Auth: Built JWT-based authentication and Role-Based Access Control (RBAC) with Spring Security.",
      "Media & Notifications: Integrated Firebase for uploading salon images and Java Mail Sender for transactional emails.",
      "VPS Hosting: Deployed and configured the production-ready applications on a Hostinger VPS server."
    ],
    github: "https://github.com/your-repo-3",
    demo: "https://your-demo-link-3",
    image: salonDashboard,
    images: [salonDashboard, salonMobile]
  },
  {
    id: 3,
    title: "Dsd Systems Pvt Ltd Website",
    techStack: ["React", "TailwindCSS", "JavaScript", "Lucid-react", "Framer-motion", "React-router-dom", "React Form"],
    description:
      "A modern, responsive corporate website for Dsd Systems Pvt Ltd. Developed with a focus on user experience and performance, utilizing React and Framer Motion for smooth animations and transitions. Showcases the company's services, portfolio, and contact information in an engaging interface.",
    features: [
      "Modern UI/UX: Custom designed layouts using TailwindCSS and responsive principles.",
      "Smooth Motion: Enhanced interactivity with Framer Motion scroll and entry animations.",
      "Dynamic Routing: Configured React Router for seamless single-page application experience.",
      "Lead Generation: Implemented secure contact forms and user interaction telemetry."
    ],
    github: "https://github.com/your-repo-2",
    demo: "https://dsdspl.com/",
    image: webiste,
    images: [webiste]
  },
  {
    id: 4,
    title: "IPD Microservice",
    techStack: ["Java", "Spring-Boot", "JPA", "MySql", "React", "TailwindCSS"],
    description:
      "A dedicated In-Patient Department (IPD) Microservice that manages the entire lifecycle of admitted patients. Key features include bed allocation, admission and discharge processing, and daily care tracking. Optimizes resource utilization and improves the overall patient care experience.",
    features: [
      "Admission & Discharge: Automated intake forms and patient discharge summary generation.",
      "Resource Optimization: Dynamic visual mapping of hospital bed availability and ward status.",
      "EHR Integration: Securely synced diagnostic details and patient histories with Spring Data JPA."
    ],
    github: "https://github.com/your-repo-4",
    demo: "https://your-demo-link-4",
    image: hospital,
    images: [hospital]
  }
];

export default projects;
