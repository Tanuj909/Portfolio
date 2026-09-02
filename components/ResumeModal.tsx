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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden sm:overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:fixed print:inset-0 print:p-0 print:m-0 print:bg-white print:overflow-visible print:z-[99999]">
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
          /* Hide everything in page body except resume modal */
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

      <div className="relative w-full h-[100dvh] sm:h-auto max-w-4xl sm:my-auto rounded-none sm:rounded-2xl bg-[#0D0F12] border-0 sm:border border-white/10 shadow-2xl shadow-black/90 overflow-hidden text-[#F4F4F5] flex flex-col print:w-full print:max-w-none print:m-0 print:rounded-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Top Control Bar - Completely Hidden in Print */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3.5 bg-[#0D0F12]/95 backdrop-blur-md border-b border-white/[0.08] shrink-0 print:hidden">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-white truncate max-w-[110px] xs:max-w-[150px] sm:max-w-none">
              RESUME
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Resume/Resume.pdf"
              download="Tanuj_Kashyap_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#00F0FF] text-[#08090B] text-[10px] sm:text-xs font-mono font-semibold hover:bg-[#00F0FF]/90 transition-colors shadow-sm"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* White Theme Paper Document Container */}
        <div className="flex-1 overflow-y-auto p-1.5 xs:p-2.5 sm:p-6 md:p-8 bg-[#181C22] print:max-h-none print:p-0 print:overflow-visible print:bg-white overscroll-contain">
          <div className="resume-print-sheet max-w-3xl mx-auto bg-white text-[#111827] shadow-xl rounded-md sm:rounded-lg p-3.5 xs:p-5 sm:p-8 md:p-12 font-sans selection:bg-[#00F0FF]/30 selection:text-black">
            
            {/* Header */}
            <div className="text-center pb-3 sm:pb-4 border-b border-gray-300 print:pb-2">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 uppercase print:text-xl">
                TANUJ KASHYAP
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 gap-y-0.5 sm:gap-y-1 text-[10px] xs:text-[11px] sm:text-xs text-gray-600 mt-1.5 sm:mt-2 font-medium resume-print-sub">
                <a
                  href="mailto:tanujkashyap913@gmail.com"
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  tanujkashyap913@gmail.com
                </a>
                <span>|</span>
                <a href="tel:7678497053" className="hover:text-blue-600 transition-colors">
                  7678497053
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/in/tanuj-kashyap-909934275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  linkedin.com/in/tanuj-kashyap-909934275
                </a>
                <span>|</span>
                <a
                  href="https://portfolio-seven-dun-14.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  portfolio-seven-dun-14.vercel.app
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-print-section pt-3 pb-2.5 sm:pt-3.5 sm:pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-1 sm:mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="resume-print-bullets text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700 leading-relaxed text-justify">
                Java Backend Developer with 1 year of professional experience, specializing in scalable REST APIs and Microservices using Spring Boot. Proficient in JWT-based security, MySQL optimization, and clean layered architecture. Adept at building secure, maintainable, and production-grade backend systems with a strong focus on performance and scalability.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="resume-print-section pt-2.5 pb-2.5 sm:pt-3 sm:pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-1 sm:mb-1.5">
                TECHNICAL SKILLS
              </h2>
              <div className="resume-print-bullets space-y-1 text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Technical Skills: </span>
                  <span>Java, Spring Boot, Spring MVC, Spring Security, JPA, Hibernate, REST APIs, JDBC, Servlets, JWT</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Database: </span>
                  <span>SQL, PostgreSQL, Redis</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools & DevOps: </span>
                  <span>Git, GitHub, Bitbucket, Docker, Maven, Postman, MySQL Workbench, VS Code, CI/CD</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="resume-print-section pt-2.5 pb-2.5 sm:pt-3 sm:pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5 sm:mb-2">
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* Role 1 */}
              <div className="mb-3 sm:mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 sm:mb-1 gap-0.5 sm:gap-2">
                  <div className="font-bold text-[11px] xs:text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Jr Software Engineer (Java Developer) — DSD Systems Pvt Ltd
                  </div>
                  <div className="text-[10px] xs:text-[11px] text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    Jul 2025 – May 2026 | Noida, India
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-3.5 sm:pl-4 space-y-0.5 sm:space-y-0.5 text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700 leading-relaxed">
                  <li>Developed scalable REST APIs using Java and Spring Boot to support core business workflows.</li>
                  <li>Designed and implemented a Microservices Architecture, improving scalability and simplifying service maintenance.</li>
                  <li>Optimized MySQL queries and indexing, reducing API response times and improving overall database performance.</li>
                  <li>Secured applications with Spring Security, implementing JWT authentication and role-based access control (RBAC).</li>
                  <li>Implemented Global Exception handling to ensure consistent API error responses.</li>
                  <li>Tested and validated REST APIs using Postman, maintaining reusable API collections and environment configurations.</li>
                  <li>Collaborated using Git, GitHub, and Bitbucket for version control, code reviews, and merge conflict resolution.</li>
                  <li>Designed and developed responsive and dynamic websites using React.js, CSS, and Tailwind CSS.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 sm:mb-1 gap-0.5 sm:gap-2">
                  <div className="font-bold text-[11px] xs:text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Jr Software Engineer Intern (Java Developer) — DSD Systems Pvt Ltd
                  </div>
                  <div className="text-[10px] xs:text-[11px] text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    Mar 2025 – Jun 2025
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-3.5 sm:pl-4 space-y-0.5 text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700 leading-relaxed">
                  <li>Assisted in REST API development using Java, Spring Boot, and MySQL.</li>
                  <li>Worked on backend feature development, bug fixing, and database optimization.</li>
                  <li>Gained experience with Spring Security, JPA/Hibernate, and API documentation.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-print-section pt-2.5 pb-2.5 sm:pt-3 sm:pb-3 border-b border-gray-200">
              <h2 className="resume-print-title text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5 sm:mb-2">
                PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="mb-3 sm:mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 sm:mb-1 gap-0.5 sm:gap-2">
                  <div className="font-bold text-[11px] xs:text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Logistics Platform (Porter-like App) <span className="font-normal text-gray-600">| Java, Spring Boot, Spring Security, PostgreSQL, PostGIS, Redis</span>
                  </div>
                  <div className="text-[10px] xs:text-[11px] text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    August 2026 – Present
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-3.5 sm:pl-4 space-y-0.5 text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700 leading-relaxed">
                  <li>Developed and delivered a Porter-like logistics platform for a Client.</li>
                  <li>Built a Redis-based nearby driver Broadcast system with PostgreSQL fallback for improved reliability.</li>
                  <li>Deployed and managed the Spring Boot application on a Linux VPS using PostgreSQL, Redis, and systemd.</li>
                  <li>Reduced database reads and writes by over 90% by handling high-frequency driver location updates through Redis.</li>
                  <li>Integrated Google Routes API for route optimisation, distance, and estimated travel time between pickup and drop locations.</li>
                  <li>Integrated Razorpay to enable secure driver wallet recharge and wallet transaction management.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5 sm:mb-1 gap-0.5 sm:gap-2">
                  <div className="font-bold text-[11px] xs:text-xs sm:text-[13px] text-gray-900 resume-print-title">
                    Salon Platform (SaaS) <span className="font-normal text-gray-600">| Spring Boot, Spring Security, JWT, JPA, PostgreSQL, PostGIS, Next.js</span>
                  </div>
                  <div className="text-[10px] xs:text-[11px] text-gray-600 font-medium sm:text-right shrink-0 resume-print-sub">
                    June 2026 – July 2026
                  </div>
                </div>

                <ul className="resume-print-bullets list-disc pl-3.5 sm:pl-4 space-y-0.5 text-[10.5px] xs:text-[11.5px] sm:text-xs text-gray-700 leading-relaxed">
                  <li>Developed and delivered a Multi-tenant SaaS salon management platform Using Spring Boot.</li>
                  <li>Designed and implemented REST APIs for multi-store management, staff management, booking, and advance booking.</li>
                  <li>Implemented JWT-based authentication and Role-Based Access Control (RBAC) using Spring Security.</li>
                  <li>Developed staff commission, appointment management, and business workflows using Spring Boot and JPA.</li>
                  <li>Utilized PostgreSQL and PostGIS for efficient distance calculations and location-based operations.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="pt-2.5 sm:pt-3">
              <h2 className="resume-print-title text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider mb-1 sm:mb-1.5">
                EDUCATION
              </h2>

              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[10.5px] xs:text-xs gap-0.5 sm:gap-2 resume-print-sub">
                  <div>
                    <span className="font-bold text-gray-900">MCA – Computer Science</span>
                    <span className="text-gray-600"> | Delhi Skill and Entrepreneurship University</span>
                  </div>
                  <span className="text-[10px] xs:text-[11px] text-gray-600 font-medium">2022 – 2024</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[10.5px] xs:text-xs gap-0.5 sm:gap-2 resume-print-sub">
                  <div>
                    <span className="font-bold text-gray-900">BCA – Computer Science</span>
                    <span className="text-gray-600"> | Institute of Technology and Science</span>
                  </div>
                  <span className="text-[10px] xs:text-[11px] text-gray-600 font-medium">2019 – 2022</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
