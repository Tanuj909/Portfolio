"use client";

import React, { useState } from "react";
import {
  User,
  Settings,
  FolderGit2,
  Send,
  ExternalLink,
  Quote,
  Check,
  CheckCircle2,
  Database,
  Server,
  Layers,
  Code2,
  Smartphone,
  Globe,
  Radio,
  FileCode,
} from "lucide-react";
import Image from "next/image";
import { projectsData, ProjectItem } from "../data/projects";

interface DashboardGridProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenResume: () => void;
}

export default function DashboardGrid({ onSelectProject, onOpenResume }: DashboardGridProps) {
  // Contact form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please reach out to tanujkashyap913@gmail.com directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 12 exact skills from reference image with specific icons & colors
  const skillsList = [
    { name: "Java", icon: "☕", color: "text-[#E76F00]" },
    { name: "Spring Boot", icon: "🍃", color: "text-[#6DB33F]" },
    { name: "React.js", icon: "⚛️", color: "text-[#00D8FF]" },
    { name: "Flutter", icon: "📱", color: "text-[#02569B]" },
    { name: "PostgreSQL", icon: "🐘", color: "text-[#336791]" },
    { name: "MySQL", icon: "🐬", color: "text-[#00758F]" },
    { name: "Redis", icon: "🔺", color: "text-[#D82C20]" },
    { name: "REST APIs", icon: "🔗", color: "text-[#8E3666]" },
    { name: "Git", icon: "📦", color: "text-[#F05032]" },
    { name: "HTML/CSS", icon: "🛡️", color: "text-[#E34F26]" },
    { name: "JavaScript", icon: "⚡", color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: "🔷", color: "text-[#3178C6]" },
  ];

  const riderzzProject = projectsData.find((p) => p.id === "riderzz") || projectsData[0];
  const hospitalProject =
    projectsData.find((p) => p.id === "hospital-management-system") || projectsData[1];
  const dashblockProject = projectsData.find((p) => p.id === "dashblock") || projectsData[2];
  const salonProject = projectsData.find((p) => p.id === "salon-management") || projectsData[3];
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ================= LEFT MAIN COLUMN (8 cols) ================= */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* TOP ROW: About Me + My Skills */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* 1. About Me Card (5 cols on md) */}
            <div
              id="about"
              className="md:col-span-5 rounded-2xl bg-white border border-[#B58AA8]/25 p-5 sm:p-6 shadow-[0_8px_25px_-5px_rgba(75,38,63,0.06)] flex flex-col justify-between hover:shadow-[0_12px_30px_-5px_rgba(75,38,63,0.1)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FCECEE] flex items-center justify-center text-[#8E3666] shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#241821] font-display">
                      About Me
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FCECEE] text-[10px] font-semibold text-[#8E3666] border border-[#B58AA8]/20">
                    Software Dev
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#634E5D] leading-relaxed mb-4">
                  Software Developer with 1 year of experience in building scalable web and mobile applications using Java, Spring Boot, React, and modern technologies.
                </p>

                {/* Quick focus badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded-md bg-[#FFF8F2] border border-[#B58AA8]/25 text-[10.5px] font-medium text-[#4B263F]">
                    MCA • Computer Science
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FFF8F2] border border-[#B58AA8]/25 text-[10.5px] font-medium text-[#4B263F]">
                    Backend & Full-Stack
                  </span>
                </div>
              </div>

              {/* Pink Highlight Quote Box */}
              <div className="p-3.5 rounded-xl bg-[#FCECEE] border border-[#B58AA8]/20 flex items-start gap-2.5 shadow-2xs group-hover:border-[#8E3666]/30 transition-colors">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E3666] shrink-0 rotate-180 mt-0.5" />
                <p className="text-xs text-[#5C2849] font-medium leading-relaxed italic">
                  Passionate about solving real-world problems and building impactful solutions.
                </p>
              </div>
            </div>

            {/* 2. My Skills Card (7 cols on md) */}
            <div
              id="skills"
              className="md:col-span-7 rounded-2xl bg-white border border-[#B58AA8]/25 p-5 sm:p-6 shadow-[0_8px_25px_-5px_rgba(75,38,63,0.06)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FCECEE] flex items-center justify-center text-[#8E3666] shrink-0">
                    <Settings className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#241821] font-display">
                    My Skills
                  </h3>
                </div>
                <button
                  onClick={onOpenResume}
                  className="text-xs font-semibold text-[#8E3666] hover:text-[#5C2849] transition-colors cursor-pointer"
                >
                  View All →
                </button>
              </div>

              {/* Grid of 12 skills (3 cols x 4 rows) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {skillsList.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#FBF6F3] border border-[#B58AA8]/20 hover:border-[#8E3666]/40 hover:bg-white transition-all shadow-2xs"
                  >
                    <span className="text-sm shrink-0">{skill.icon}</span>
                    <span className="text-xs font-medium text-[#30252E] truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Featured Projects Card */}
          <div
            id="projects"
            className="rounded-2xl bg-white border border-[#B58AA8]/25 p-5 sm:p-6 shadow-[0_8px_25px_-5px_rgba(75,38,63,0.06)]"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FCECEE] flex items-center justify-center text-[#8E3666] shrink-0">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#241821] font-display">
                  Featured Projects
                </h3>
              </div>
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group text-xs font-semibold text-[#8E3666] hover:text-[#5C2849] transition-colors flex items-center gap-1 cursor-pointer py-1 px-3 rounded-full hover:bg-[#FCECEE]"
              >
                <span>{showAllProjects ? "Show Featured ←" : "View All Projects (4) →"}</span>
              </button>
            </div>

            {/* Project Cards Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 ${showAllProjects ? "lg:grid-cols-4" : ""} gap-4`}>
              
              {/* Project 1: Riderzz */}
              <div
                onClick={() => onSelectProject(riderzzProject)}
                className="group p-3.5 rounded-xl bg-[#FDF9F6] border border-[#B58AA8]/25 hover:border-[#8E3666]/60 hover:bg-white hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* High-Fidelity Mobile App Map Mockup */}
                  <div className="relative h-36 sm:h-40 rounded-xl bg-gradient-to-b from-[#FFF1E8] to-[#FCECEE] overflow-hidden mb-3 border border-[#B58AA8]/25 flex items-center justify-center p-2 group-hover:border-[#8E3666]/40 transition-colors">
                    <div className="relative w-24 sm:w-28 h-32 sm:h-36 rounded-2xl bg-[#241821] p-1.5 shadow-lg border border-[#8E3666]/30 flex flex-col group-hover:scale-[1.03] transition-transform duration-300">
                      {/* Dynamic Island / Speaker notch */}
                      <div className="w-6 h-1 rounded-full bg-black mx-auto mb-1 shrink-0" />
                      
                      {/* App Screen */}
                      <div className="flex-1 rounded-xl bg-white overflow-hidden relative flex flex-col">
                        {/* Top App Header */}
                        <div className="bg-[#5C2849] px-2 py-1 flex items-center justify-between text-white shrink-0">
                          <span className="text-[7px] font-bold tracking-wider font-mono">RIDERZZ</span>
                          <span className="text-[6.5px] bg-[#10B981] px-1 py-0.2 rounded-full font-semibold">LIVE</span>
                        </div>

                        {/* Map simulation canvas */}
                        <div className="flex-1 bg-[#F9F6F0] relative overflow-hidden">
                          {/* Soft grid & street roads */}
                          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <line x1="0" y1="25" x2="100" y2="25" stroke="#E5E0D8" strokeWidth="4" />
                            <line x1="0" y1="65" x2="100" y2="65" stroke="#E5E0D8" strokeWidth="6" />
                            <line x1="30" y1="0" x2="30" y2="100" stroke="#E5E0D8" strokeWidth="5" />
                            <line x1="75" y1="0" x2="75" y2="100" stroke="#E5E0D8" strokeWidth="4" />
                            {/* Park block */}
                            <rect x="35" y="30" width="35" height="30" fill="#E8F4E8" rx="2" />
                            {/* Route path */}
                            <path d="M15 75 Q 30 65 30 45 T 75 25" fill="none" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 2" />
                          </svg>

                          {/* Pickup Pin A */}
                          <div className="absolute left-[12%] bottom-[20%] w-3 h-3 rounded-full bg-[#E11D48] flex items-center justify-center text-[6px] text-white font-bold shadow-xs">
                            A
                          </div>

                          {/* Destination Pin B */}
                          <div className="absolute right-[20%] top-[20%] w-3 h-3 rounded-full bg-[#10B981] flex items-center justify-center text-[6px] text-white font-bold shadow-xs">
                            B
                          </div>

                          {/* Moving Vehicle with radar pulse */}
                          <div className="absolute left-[26%] top-[40%] flex items-center justify-center">
                            <span className="absolute w-5 h-5 rounded-full bg-[#E11D48]/30 animate-ping" />
                            <div className="relative w-3.5 h-3.5 rounded-full bg-[#5C2849] border border-white flex items-center justify-center shadow-xs">
                              <span className="text-[6px]">🚗</span>
                            </div>
                          </div>

                          {/* Bottom Trip Floating Card */}
                          <div className="absolute bottom-1 left-1 right-1 bg-white/95 backdrop-blur-xs rounded-md p-1 shadow-sm border border-[#B58AA8]/20 flex items-center justify-between">
                            <div>
                              <div className="text-[6.5px] font-bold text-[#241821]">Arriving in 3m</div>
                              <div className="text-[5.5px] text-[#8E7485]">Nearby Driver • ★ 4.9</div>
                            </div>
                            <span className="text-[6.5px] font-mono font-bold text-[#5C2849]">₹180</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-[#241821] group-hover:text-[#8E3666] transition-colors flex items-center gap-1.5">
                      <span>Riderzz</span>
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E3666] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-[#634E5D] leading-relaxed mb-3">
                    Logistics application with real-time tracking, booking, and payments.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {["Java", "Spring Boot", "PostgreSQL", "Flutter", "Redis"].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded bg-[#FCECEE] text-[10px] font-medium text-[#5C2849]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2: Hospital Management System */}
              <div
                onClick={() => onSelectProject(hospitalProject)}
                className="group p-3.5 rounded-xl bg-[#FDF9F6] border border-[#B58AA8]/25 hover:border-[#2563EB]/60 hover:bg-white hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* High-Fidelity Healthcare Dashboard Mockup */}
                  <div className="relative h-36 sm:h-40 rounded-xl bg-gradient-to-b from-[#EBF3FC] to-[#F0F7FF] overflow-hidden mb-3 border border-[#B58AA8]/25 flex items-center justify-center p-2 group-hover:border-[#2563EB]/40 transition-colors">
                    <div className="relative w-36 sm:w-40 h-28 sm:h-32 rounded-xl bg-white border border-[#2563EB]/25 shadow-lg p-1.5 flex flex-col group-hover:scale-[1.03] transition-transform duration-300">
                      {/* Browser chrome with macOS dots */}
                      <div className="h-3 bg-[#F8FAFC] border-b border-[#E2E8F0] -mx-1.5 -mt-1.5 px-2 mb-1 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        </div>
                        <span className="text-[6px] text-gray-400 font-mono">hospital-portal.org/records</span>
                        <div className="w-3" />
                      </div>

                      {/* Main dashboard content */}
                      <div className="flex-1 flex gap-1.5 overflow-hidden">
                        {/* Left mini sidebar */}
                        <div className="w-4 bg-[#EFF6FF] rounded-xs flex flex-col items-center py-1 gap-1">
                          <span className="w-2 h-2 rounded-xs bg-[#2563EB] text-[5px] text-white flex items-center justify-center">✚</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/30" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/30" />
                        </div>

                        {/* Dashboard cards & table */}
                        <div className="flex-1 flex flex-col justify-between">
                          {/* Top 2 stat tiles */}
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-[#EFF6FF] p-1 rounded-xs border border-[#BFDBFE]">
                              <span className="text-[5.5px] text-gray-500 block">Patients</span>
                              <span className="text-[7.5px] font-bold text-[#1E40AF]">142 Active</span>
                            </div>
                            <div className="bg-[#F0FDF4] p-1 rounded-xs border border-[#BBF7D0]">
                              <span className="text-[5.5px] text-gray-500 block">Bed Occ</span>
                              <span className="text-[7.5px] font-bold text-[#166534]">92% Full</span>
                            </div>
                          </div>

                          {/* Appointments table rows */}
                          <div className="bg-[#F8FAFC] rounded-xs p-1 border border-gray-100 space-y-0.5">
                            <div className="flex items-center justify-between text-[6px] pb-0.5 border-b border-gray-200">
                              <span className="font-semibold text-gray-700">Patient / Room</span>
                              <span className="font-semibold text-gray-700">Status</span>
                            </div>
                            <div className="flex items-center justify-between text-[5.5px]">
                              <span className="text-gray-600 truncate max-w-[55px]">Sarah J. (304)</span>
                              <span className="px-1 py-0.2 rounded-xs bg-emerald-100 text-emerald-700 font-medium">Stable</span>
                            </div>
                            <div className="flex items-center justify-between text-[5.5px]">
                              <span className="text-gray-600 truncate max-w-[55px]">David C. (OPD)</span>
                              <span className="px-1 py-0.2 rounded-xs bg-blue-100 text-blue-700 font-medium">10:30 AM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-[#241821] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                      <span>Hospital Management System</span>
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-[#634E5D] leading-relaxed mb-3">
                    Web application to manage patients, appointments and medical records.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {["Java", "Spring Boot", "MySQL", "React.js", "Tailwind CSS"].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded bg-[#EBF3FC] text-[10px] font-medium text-[#1E40AF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 3: DashBlock */}
              <div
                onClick={() => onSelectProject(dashblockProject)}
                className="group p-3.5 rounded-xl bg-[#FDF9F6] border border-[#B58AA8]/25 hover:border-cyan-500/60 hover:bg-white hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* High-Fidelity Web3 Crypto Terminal Mockup */}
                  <div className="relative h-36 sm:h-40 rounded-xl bg-gradient-to-b from-[#0F172A] to-[#1E1B4B] overflow-hidden mb-3 border border-cyan-500/20 flex items-center justify-center p-2 group-hover:border-cyan-400/50 transition-colors">
                    <div className="relative w-36 sm:w-40 h-28 sm:h-32 rounded-xl bg-[#090D16] border border-cyan-500/30 p-1.5 flex flex-col shadow-lg group-hover:scale-[1.03] transition-transform duration-300">
                      {/* Top crypto bar */}
                      <div className="flex items-center justify-between pb-1 mb-1 border-b border-gray-800 shrink-0">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span className="text-[6.5px] font-mono font-bold text-cyan-300 tracking-wider">ETH / USD</span>
                        </div>
                        <span className="text-[6.5px] font-mono text-emerald-400 font-semibold">$3,480 ▲ +4.2%</span>
                      </div>

                      {/* Glowing SVG Price Chart */}
                      <div className="relative h-12 bg-[#0E1526] rounded-xs p-1 mb-1 overflow-hidden border border-gray-800/80">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M 0 35 Q 15 25 30 28 T 60 15 T 85 20 T 100 5 L 100 40 L 0 40 Z" fill="url(#dashGrad)" />
                          <path d="M 0 35 Q 15 25 30 28 T 60 15 T 85 20 T 100 5" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="absolute bottom-0.5 right-1 text-[5px] font-mono text-cyan-400/80">Gas: 16 Gwei</span>
                      </div>

                      {/* Live Blocks Stream */}
                      <div className="space-y-0.5 text-[5.5px] font-mono">
                        <div className="flex items-center justify-between text-gray-400 px-1 py-0.5 bg-gray-900/60 rounded-xs">
                          <span className="text-cyan-400 truncate">#1984210</span>
                          <span className="text-gray-400">142 txs</span>
                          <span className="text-emerald-400">✓ Verified</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-500 px-1 py-0.5">
                          <span className="text-gray-400 truncate">#1984209</span>
                          <span className="text-gray-400">89 txs</span>
                          <span className="text-emerald-400/80">✓ Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-[#241821] group-hover:text-cyan-700 transition-colors flex items-center gap-1.5">
                      <span>DashBlock</span>
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-[#634E5D] leading-relaxed mb-3">
                    Blockchain dashboard to visualize transactions and analytics in real-time.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {["React.js", "Node.js", "TypeScript"].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 rounded bg-[#F3F4F6] text-[10px] font-medium text-[#374151]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 4: Salon Discovery & Booking Platform (Expanded when Show All is clicked) */}
              {showAllProjects && (
                <div
                  onClick={() => onSelectProject(salonProject)}
                  className="group p-3.5 rounded-xl bg-[#FDF9F6] border border-[#B58AA8]/25 hover:border-[#8E3666]/60 hover:bg-white hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200"
                >
                  <div>
                    {/* Real Screenshot Preview */}
                    <div className="relative h-36 sm:h-40 rounded-xl bg-gradient-to-b from-[#FFF5ED] to-[#FCECEE] overflow-hidden mb-3 border border-[#B58AA8]/25 flex items-center justify-center p-2 group-hover:border-[#8E3666]/40 transition-colors">
                      <div className="relative w-36 sm:w-40 h-28 sm:h-32 rounded-xl bg-white border border-[#B58AA8]/25 shadow-lg overflow-hidden flex flex-col group-hover:scale-[1.03] transition-transform duration-300">
                        {/* Browser Bar */}
                        <div className="h-3 bg-[#F8FAFC] border-b border-[#E2E8F0] px-2 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          </div>
                          <span className="text-[6px] text-gray-400 font-mono">salon-platform.com</span>
                          <div className="w-3" />
                        </div>
                        {/* Real image preview */}
                        <div className="relative flex-1 w-full bg-[#FAF5F0]">
                          <Image
                            src="/Salon/home.png"
                            alt="Salon Platform"
                            fill
                            className="object-cover object-top"
                            sizes="160px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-[#241821] group-hover:text-[#8E3666] transition-colors flex items-center gap-1.5">
                        <span>Salon Platform</span>
                      </h4>
                      <ExternalLink className="w-3.5 h-3.5 text-[#8E3666] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#634E5D] leading-relaxed mb-3">
                      Multi-vendor salon appointment discovery and booking platform.
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {["React.js", "Node.js", "MongoDB", "Express"].map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded bg-[#FCECEE] text-[10px] font-medium text-[#5C2849]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: Contact Me (4 cols) ================= */}
        <div className="lg:col-span-4">
          <div
            id="contact"
            className="rounded-2xl bg-white border border-[#B58AA8]/25 p-5 sm:p-6 shadow-[0_8px_25px_-5px_rgba(75,38,63,0.06)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-4 h-4 text-[#8E3666] -rotate-12" />
              <h3 className="font-bold text-base text-[#241821] font-display">
                Hire Me
              </h3>
            </div>

            <p className="text-xs text-[#634E5D] mb-5 leading-relaxed">
              Have a question or want to work together? Feel free to reach out!
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#FCECEE] text-center space-y-2 border border-[#8E3666]/30">
                <Check className="w-8 h-8 text-[#8E3666] mx-auto" />
                <h4 className="font-bold text-sm text-[#241821]">Message Sent!</h4>
                <p className="text-xs text-[#634E5D]">
                  Thanks for connecting. I will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-[#8E3666] font-semibold underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3">
                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-[#FCECEE] text-xs text-[#8E3666]">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FBF6F3] border border-[#B58AA8]/25 text-xs text-[#241821] placeholder-[#8E7485] focus:bg-white focus:border-[#8E3666] focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FBF6F3] border border-[#B58AA8]/25 text-xs text-[#241821] placeholder-[#8E7485] focus:bg-white focus:border-[#8E3666] focus:outline-none transition-all"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#FBF6F3] border border-[#B58AA8]/25 text-xs text-[#241821] placeholder-[#8E7485] focus:bg-white focus:border-[#8E3666] focus:outline-none transition-all"
                />

                {/* Message */}
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#FBF6F3] border border-[#B58AA8]/25 text-xs text-[#241821] placeholder-[#8E7485] focus:bg-white focus:border-[#8E3666] focus:outline-none transition-all resize-none"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-[#5C2849] hover:bg-[#461C36] text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 -rotate-12" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
