// projects.js

import hospital from "../../assets/Images/hospital.jpg";
import webiste from "../../assets/Images/website.jpg";
import billing from "../../assets/Images/billing.jpg";


const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    techStack: ["Java", "Spring-Boot", "JPA", "MySql", "React", "TailwindCSS"],
    description:
      "A comprehensive Hospital Management System designed to streamline healthcare operations. Features include patient registration, appointment scheduling, doctor management, and electronic health records (EHR). Built with a robust backend to ensure data security and efficient handling of large datasets.",
    github: "https://github.com/your-repo-1",
    demo: "https://your-demo-link-1",
    image: hospital,
  },
  {
    id: 2,
    title: "Dsd Systems Pvt Ltd Website",
    techStack: ["React", "TailwindCSS", "JavaScript", "Lucid-react", "Framer-motion", "React-router-dom", "React Form"],
    description:
      "A modern, responsive corporate website for Dsd Systems Pvt Ltd. Developed with a focus on user experience and performance, utilizing React and Framer Motion for smooth animations and transitions. Showcases the company's services, portfolio, and contact information in an engaging interface.",
    github: "https://github.com/your-repo-2",
    demo: "https://dsdspl.com/",
    image: webiste,
  },
  {
    id: 3,
    title: "Hospital Billing System MicroServics",
    techStack: ["Java", "Spring-boot", "JPA", "MySql"],
    description:
      "A scalable Microservices-based Billing System tailored for hospital environments. Handles complex billing logic, invoice generation, and payment processing. Designed for high availability and fault tolerance, ensuring accurate financial transactions and easy integration with other hospital modules.",
    github: "https://github.com/your-repo-3",
    demo: "https://your-demo-link-3",
    image: billing,
  },
  {
    id: 4,
    title: "IPD Microservice",
    techStack: ["Java", "Spring-Boot", "JPA", "MySql", "React", "TailwindCSS"],
    description:
      "A dedicated In-Patient Department (IPD) Microservice that manages the entire lifecycle of admitted patients. Key features include bed allocation, admission and discharge processing, and daily care tracking. Optimizes resource utilization and improves the overall patient care experience.",
    github: "https://github.com/your-repo-4",
    demo: "https://your-demo-link-4",
    image: hospital,
  }
];

export default projects;
