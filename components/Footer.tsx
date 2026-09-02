"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#060708] text-xs font-mono text-[#71717A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0D0F12] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#00F0FF]">
              TK
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium tracking-tight">
                {profileData.name}
              </span>
              <span className="text-[10px] text-[#71717A]">
                Software Developer • Systems & Mobile
              </span>
            </div>
          </div>

          {/* Center: System Status & Tagline */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white">All systems nominal</span>
            <span>•</span>
            <span>Designed & built with intention</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0F12] hover:bg-[#12151A] border border-white/[0.08] hover:border-[#00F0FF]/40 text-[#A1A1AA] hover:text-white transition-all"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F0FF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p>© 2026 {profileData.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00F0FF] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-[#00F0FF] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
