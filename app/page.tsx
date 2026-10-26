"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import ResumeModal from "../components/ResumeModal";
import CustomCursor from "../components/CustomCursor";
import { ArrowUpRight } from "lucide-react";
import { projectsData, ProjectItem } from "../data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleContactClick = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFF8F2] text-[#30252E]">
      {/* Subtle Custom Follower Cursor */}
      <CustomCursor />

      {/* Default Panoramic Background Image: /images/background.png (except Hero which has its own banner) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image
          src="/images/background.png"
          alt="Site Background Panorama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft atmospheric scrim overlay so cards, badges, and typography remain crystal clear */}
        <div className="absolute inset-0 bg-[#FFF8F2]/82 backdrop-blur-[1px]" />
      </div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Mountain Sunset Hero Section (Has its own /images/banner.png and z-10) */}
      <div className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Floating Statistics Strip */}
        <Stats />

        {/* Full-Width Recent Projects Strip with Left-to-Right Glowing Effect */}
        <div className="relative w-full my-8 sm:my-10 z-20">
          
          {/* 1. Centered 'Recent Projects' Heading Badge */}
          <div className="relative flex items-center justify-center mb-4 sm:mb-5">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#B58AA8]/30" />
            </div>
            <a
              href="#projects"
              className="relative inline-flex items-center bg-[#FFF8F2] px-5 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#B58AA8]/35 shadow-2xs hover:border-[#8E3666] transition-all cursor-pointer group"
            >
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase font-display text-[#5C2849]">
                Recent Projects
              </span>
            </a>
          </div>

          {/* 2. Full-Screen Width Div for the 2 Projects with Left-to-Right Glowing Effect */}
          <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFF8F2]/60 via-white/85 to-[#FFF8F2]/60 backdrop-blur-md border-y border-[#B58AA8]/30 py-3.5 sm:py-4.5 shadow-[0_4px_20px_-4px_rgba(75,38,63,0.06)]">
            
            {/* Continuous Left-to-Right Ambient Glowing Beam */}
            <div className="absolute inset-y-0 w-2/5 -left-1/3 bg-gradient-to-r from-transparent via-[#8E3666]/20 via-[#F3C6C8]/35 to-transparent blur-xl pointer-events-none animate-glow-beam" />
            
            {/* Continuous Laser Hairline Shimmer on Top & Bottom Borders */}
            <div className="absolute top-0 w-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#8E3666] to-transparent pointer-events-none animate-glow-beam" />
            <div className="absolute bottom-0 w-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#8E3666] to-transparent pointer-events-none animate-glow-beam" />

            {/* Content Container (Riderzz & Notification System) */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              
              {/* Project 1: Riderzz (Logistic Platform) */}
              <button
                onClick={() => {
                  const riderzz = projectsData.find((p) => p.id === "riderzz");
                  if (riderzz) setSelectedProject(riderzz);
                }}
                className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 hover:bg-white px-4 sm:px-5 py-2 rounded-full border border-[#B58AA8]/35 shadow-2xs hover:border-[#8E3666] hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-[#75405F] group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-[#241821] group-hover:text-[#8E3666] transition-colors">
                  Riderzz
                </span>
                <span className="text-[11px] sm:text-xs text-[#8E7485] font-medium">
                  (Logistic Platform)
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8E3666] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Elegant Divider Dot on desktop */}
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B58AA8]/40" />

              {/* Project 2: Notification System */}
              <button
                onClick={() => {
                  const notif = projectsData.find((p) => p.id === "notification-system");
                  if (notif) setSelectedProject(notif);
                }}
                className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/95 hover:bg-white px-4 sm:px-5 py-2 rounded-full border border-[#B58AA8]/35 shadow-2xs hover:border-[#8E3666] hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-[#8E3666] group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-[#241821] group-hover:text-[#8E3666] transition-colors">
                  Notification System
                </span>
                <span className="text-[11px] sm:text-xs text-[#8E7485] font-medium">
                  (Real-Time Engine)
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8E3666] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>
          </div>
        </div>

        {/* 1. Dedicated About Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Dedicated Projects Section (Work) */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Dedicated Skills Section */}
        <Skills />

        {/* 4. Dedicated Contact Section */}
        <Contact />

        {/* 5. Minimal Footer */}
        <Footer />
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactClick}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
