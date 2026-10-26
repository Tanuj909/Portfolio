"use client";

import React, { useEffect } from "react";
import { X, Printer, Download, Mail, Phone, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "./Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden sm:overflow-y-auto bg-black/60 backdrop-blur-md animate-in fade-in duration-200 print:fixed print:inset-0 print:p-0 print:m-0 print:bg-white print:overflow-visible print:z-[99999]">
      {/* Print Specific CSS to fit on 1 single page & eliminate margins/headers */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm 8mm;
          }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            overflow: visible !important;
            height: auto !important;
          }
          header, nav, footer, section, #__next > *:not(.fixed) {
            display: none !important;
          }
          .resume-print-sheet {
            font-size: 8.2pt !important;
            line-height: 1.22 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .resume-print-section {
            padding-top: 4px !important;
            padding-bottom: 4px !important;
            border-color: #e5e7eb !important;
          }
          .resume-print-title {
            font-size: 9pt !important;
            margin-bottom: 2px !important;
          }
          .resume-print-sub {
            font-size: 8.2pt !important;
          }
          .resume-print-bullets {
            font-size: 7.8pt !important;
            line-height: 1.2 !important;
          }
          .resume-print-bullets li {
            margin-bottom: 1px !important;
          }
        }
      `}</style>

      <div className="relative w-full h-[100dvh] sm:h-auto max-w-4xl sm:my-auto rounded-none sm:rounded-3xl bg-[#FFF8F2] border-0 sm:border border-[#B58AA8]/30 shadow-2xl overflow-hidden text-[#30252E] flex flex-col print:w-full print:max-w-none print:m-0 print:rounded-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Top Control Bar - Completely Hidden in Print */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 bg-[#FFF8F2]/95 backdrop-blur-md border-b border-[#B58AA8]/20 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#75405F]" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#4B263F]">
              TANUJ KASHYAP — RESUME
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Resume/Resume.pdf"
              download="Tanuj_Kashyap_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#75405F] hover:bg-[#4B263F] text-[#FFF8F2] text-xs font-semibold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#F8D5C9]" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-[#F8D5C9]/40 hover:bg-[#F8D5C9] text-[#4B263F] transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-6 md:p-8 bg-[#F8ECE4] print:max-h-none print:p-0 print:overflow-visible print:bg-white overscroll-contain">
          <div className="resume-print-sheet max-w-3xl mx-auto bg-white text-[#111827] shadow-xl rounded-lg sm:rounded-xl p-4 sm:p-8 md:p-12 font-sans selection:bg-[#F3C6C8] selection:text-[#4B263F]">
            
            {/* Header */}
            <div className="text-center pb-3 sm:pb-4 border-b border-gray-300 print:pb-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 uppercase print:text-xl">
                TANUJ KASHYAP
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-600 mt-2 font-medium resume-print-sub">
                <a
                  href="mailto:tanujkashyap913@gmail.com"
                  className="hover:text-[#75405F] transition-colors"
                >
                  tanujkashyap913@gmail.com
                </a>
                <span>|</span>
                <a href="tel:7678497053" className="hover:text-[#75405F] transition-colors">
                  7678497053
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/in/tanuj-kashyap-909934275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#75405F] transition-colors"
                >
                  linkedin.com/in/tanuj-kashyap-909934275
                </a>
                <span>|</span>
                <span className="text-gray-700">Delhi NCR, India</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-print-section pt-3 pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="resume-print-bullets text-xs text-gray-700 leading-relaxed text-justify">
                Software Developer with 1+ year of professional experience, specializing in scalable REST APIs and Microservices using Java and Spring Boot. Proficient in JWT authentication, MySQL and PostgreSQL optimization, and clean layered architecture. Adept at building secure, maintainable, and production-grade software applications with high performance.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="resume-print-section pt-3 pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                TECHNICAL SKILLS
              </h2>
              <div className="resume-print-bullets space-y-1 text-xs text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Backend: </span>
                  <span>Java, Spring Boot, Spring MVC, Spring Security, JPA, Hibernate, REST APIs, JWT, Microservices</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Databases & Caching: </span>
                  <span>PostgreSQL, MySQL, Redis, SQL Query Optimization, PostGIS</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Frontend & Mobile: </span>
                  <span>React.js, Next.js, Flutter, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools & DevOps: </span>
                  <span>Git, GitHub, Bitbucket, Maven, Postman, Linux VPS, systemd, MySQL Workbench</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="resume-print-section pt-3 pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* Role 1 */}
              <div className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                  <div className="font-bold text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Jr Software Engineer (Java Developer) — DSD Systems Pvt Ltd
                  </div>
                  <div className="text-xs text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    Jul 2025 – May 2026 | Noida, India
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-4 space-y-0.5 text-xs text-gray-700 leading-relaxed">
                  <li>Developed scalable REST APIs using Java and Spring Boot to support core business workflows.</li>
                  <li>Designed and implemented Microservices Architecture, improving service scalability and maintenance.</li>
                  <li>Optimized MySQL queries and indexing, reducing API response times and improving overall throughput.</li>
                  <li>Secured applications with Spring Security, implementing JWT authentication and role-based access control (RBAC).</li>
                  <li>Implemented Global Exception handling to ensure consistent and structured API responses.</li>
                  <li>Tested and validated REST APIs using Postman, maintaining reusable API collections.</li>
                  <li>Collaborated using Git, GitHub, and Bitbucket for version control and code reviews.</li>
                  <li>Designed and developed responsive web interfaces using React.js and modern CSS.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                  <div className="font-bold text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Jr Software Engineer Intern (Java Developer) — DSD Systems Pvt Ltd
                  </div>
                  <div className="text-xs text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    Mar 2025 – Jun 2025
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-4 space-y-0.5 text-xs text-gray-700 leading-relaxed">
                  <li>Assisted in REST API development using Java, Spring Boot, and MySQL.</li>
                  <li>Worked on backend feature development, bug fixing, and database optimization.</li>
                  <li>Gained practical experience with Spring Security, JPA/Hibernate, and API documentation.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-print-section pt-3 pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                FEATURED PROJECTS
              </h2>

              {/* Project 1: Riderzz */}
              <div className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                  <div className="font-bold text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Riderzz — Logistics & Fleet Platform <span className="font-normal text-gray-600">| Java, Spring Boot, PostgreSQL, Redis, Google Routes</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    Client Delivery • 2026
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-4 space-y-0.5 text-xs text-gray-700 leading-relaxed">
                  <li>Developed a scalable logistics and ride-booking platform for real-time fleet dispatch.</li>
                  <li>Built a Redis-based nearby driver broadcast system with PostgreSQL fallback, cutting database read/write load by over 90%.</li>
                  <li>Integrated Google Routes API for dynamic route optimization, distance, and accurate travel time calculation.</li>
                  <li>Integrated Razorpay payment gateway to enable secure driver wallet recharges and trip commission accounting.</li>
                  <li>Deployed and managed the Spring Boot application on a Linux VPS using systemd daemons.</li>
                </ul>
              </div>

              {/* Project 2: Hospital Management System */}
              <div className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                  <div className="font-bold text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Hospital Management System <span className="font-normal text-gray-600">| Java, Spring Boot, Spring Security, Hibernate, MySQL, React.js</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    2025 – 2026
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-4 space-y-0.5 text-xs text-gray-700 leading-relaxed">
                  <li>Engineered a clinical management application streamlining patient registration, appointments, and medical history.</li>
                  <li>Implemented Spring Security with JWT and role-based access control (RBAC) across doctors, staff, and patients.</li>
                  <li>Developed appointment scheduling logic with conflict-free slot validation and relational MySQL schemas.</li>
                </ul>
              </div>

              {/* Project 3: DashBlock */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                  <div className="font-bold text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    DashBlock — Blockchain Visualizer <span className="font-normal text-gray-600">| React.js, TypeScript, REST APIs, Tailwind CSS</span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    2025
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-4 space-y-0.5 text-xs text-gray-700 leading-relaxed">
                  <li>Created an interactive dashboard for visualizing blockchain transactions, gas metrics, and block explorer data.</li>
                  <li>Built sub-second wallet address lookups and tabular transaction history breakdown.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="pt-3">
              <h2 className="resume-print-title text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">
                EDUCATION
              </h2>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1 resume-print-sub">
                  <div>
                    <span className="font-bold text-gray-900">MCA – Computer Science</span>
                    <span className="text-gray-600"> | Delhi Skill and Entrepreneurship University</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">2022 – 2024</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1 resume-print-sub">
                  <div>
                    <span className="font-bold text-gray-900">BCA – Computer Science</span>
                    <span className="text-gray-600"> | Institute of Technology and Science</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">2019 – 2022</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
