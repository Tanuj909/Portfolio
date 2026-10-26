"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#36192B] text-[#FFF8F2] border-t border-[#5C2849]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#5C2849]/60">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#5C2849] border border-[#B58AA8]/40 flex items-center justify-center font-bold text-sm text-[#FFF8F2] shadow-xs">
              TK
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#FFF8F2] tracking-tight">
                {profileData.name}
              </span>
              <span className="text-xs text-[#F8D5C9]/80 font-medium">
                Software Developer • Delhi NCR
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#FCECEE]/90 font-medium">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#5C2849] hover:bg-[#72325B] border border-[#B58AA8]/30 text-xs text-[#FFF8F2] transition-all shadow-xs cursor-pointer active:scale-95"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F8D5C9] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#F8D5C9]/70 font-mono">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="/Resume/Resume.pdf"
              download="Tanuj_Kashyap_Resume.pdf"
              className="hover:text-white transition-colors"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
