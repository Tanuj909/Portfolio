"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import ProjectModal from "../components/ProjectModal";
import Skills from "../components/Skills";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import ResumeModal from "../components/ResumeModal";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
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
    <main className="relative min-h-screen bg-[#08090B] text-[#F4F4F5]">
      {/* Subtle Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating Minimal Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section */}
      <About />

      {/* Selected Work Showcase */}
      <Work onSelectProject={(project) => setSelectedProject(project)} />

      {/* Interactive Technology Ecosystem */}
      <Skills />

      {/* Engineering Philosophy ("HOW I BUILD") */}
      <Philosophy />

      {/* Contact & Dispatch */}
      <Contact />

      {/* Minimal Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactClick}
      />

      {/* Interactive Resume View Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
