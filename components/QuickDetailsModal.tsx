"use client";

import React, { useEffect } from "react";
import {
  X,
  Briefcase,
  GraduationCap,
  MapPin,
  Code2,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  Cpu,
} from "lucide-react";
import { profileData } from "../data/profile";

interface QuickDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

export default function QuickDetailsModal({
  isOpen,
  onClose,
  onOpenResume,
}: QuickDetailsModalProps) {
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

  const summaryItems = [
    {
      icon: <Briefcase className="w-4 h-4 text-[#8E3666]" />,
      label: "Experience",
      value: "1+ Years Professional",
      sub: "DSD Systems • Backend & Full-Stack",
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-[#8E3666]" />,
      label: "Education",
      value: "MCA in Computer Science",
      sub: "Delhi Skill & Entrepreneurship Univ ('24)",
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#8E3666]" />,
      label: "Location",
      value: "Delhi NCR, India",
      sub: "Available for Remote & On-site",
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#8E3666]" />,
      label: "Specialization",
      value: "Java & High-Throughput REST APIs",
      sub: "Spring Boot, Security & Microservices",
    },
  ];

  const skillGroups = [
    {
      title: "Backend & Systems",
      icon: <Cpu className="w-3.5 h-3.5 text-[#8E3666]" />,
      skills: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate / JPA", "Microservices"],
    },
    {
      title: "Database & Caching",
      icon: <Database className="w-3.5 h-3.5 text-[#5C2849]" />,
      skills: ["PostgreSQL", "MySQL", "Redis Caching", "Query Optimization"],
    },
    {
      title: "Frontend & Tooling",
      icon: <Layers className="w-3.5 h-3.5 text-[#8E3666]" />,
      skills: ["React.js", "Next.js", "Flutter", "Docker", "Git", "Postman"],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-3xl bg-[#FFF8F2] border border-[#B58AA8]/30 shadow-[0_25px_60px_-15px_rgba(75,38,63,0.3)] overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative atmospheric background accent */}
        <div className="absolute -top-14 -right-14 w-60 h-60 bg-gradient-to-br from-[#F8D5C9]/40 to-[#FCECEE]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="px-6 py-4 sm:px-7 sm:py-4.5 border-b border-[#B58AA8]/20 flex items-center justify-between bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#5C2849] text-[#FFF8F2] flex items-center justify-center font-bold text-sm shadow-xs tracking-tight">
              TK
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-bold text-base sm:text-lg text-[#241821] font-display">
                  {profileData.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCECEE] border border-[#B58AA8]/30 text-[11px] font-mono text-[#8E3666] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <p className="text-xs text-[#634E5D]">
                Software Developer • Java Backend & Modern Web Architecture
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FCECEE] text-[#8E7485] hover:text-[#5C2849] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content: 2 Columns, Wide & Low-Height */}
        <div className="p-6 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
            
            {/* Left Column: 4 Key Snapshot Cards in 2x2 Grid (6 cols) */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E7485] font-semibold">
                  Professional Snapshot
                </span>
                <span className="text-[11px] text-[#8E3666] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Verified Profile
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {summaryItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/90 border border-[#B58AA8]/25 shadow-2xs hover:border-[#8E3666]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E7485] font-semibold">
                        {item.label}
                      </span>
                      <div className="p-1 rounded-lg bg-[#FCECEE]">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#241821] font-display leading-snug">
                        {item.value}
                      </h4>
                      <p className="text-[11px] text-[#634E5D] mt-0.5 leading-tight truncate">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight Quote Strip */}
              <div className="p-3 rounded-xl bg-[#FCECEE]/70 border border-[#B58AA8]/25 text-xs text-[#5C2849] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8E3666] shrink-0" />
                <span className="leading-snug">
                  Experience designing high-throughput systems, Redis broadcasting & production microservices.
                </span>
              </div>
            </div>

            {/* Right Column: Categorized Technical Expertise (6 cols) */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E7485] font-semibold block">
                Technical Capabilities
              </span>

              <div className="space-y-2.5">
                {skillGroups.map((group, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-white/90 border border-[#B58AA8]/25 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#241821]">
                      {group.icon}
                      <span>{group.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-lg bg-[#FFF8F2] border border-[#B58AA8]/25 text-[11px] font-medium text-[#5C2849]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-3.5 sm:px-7 sm:py-3.5 border-t border-[#B58AA8]/20 bg-white/70 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#634E5D]">
            <span className="font-mono text-[#8E7485]">MCA Graduate</span>
            <span className="text-[#B58AA8]">•</span>
            <span>Delhi NCR, India</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full hover:bg-[#FCECEE] text-xs font-semibold text-[#634E5D] transition-colors cursor-pointer"
            >
              Close
            </button>

            {onOpenResume && (
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5C2849] hover:bg-[#441D36] text-[#FFF8F2] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <FileText className="w-3.5 h-3.5 text-[#F8D5C9]" />
                <span>Full Resume</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#FCECEE] hover:bg-[#F8D5C9] text-[#8E3666] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#B58AA8]/30 shadow-2xs"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
