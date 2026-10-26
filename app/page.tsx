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
import { ProjectItem } from "../data/projects";

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
