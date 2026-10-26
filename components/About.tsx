"use client";

import React, { useState } from "react";
import { FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";
import QuickDetailsModal from "./QuickDetailsModal";

interface AboutProps {
  onOpenResume?: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section id="about" className="pt-6 sm:pt-10 pb-14 sm:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E3666] font-bold px-3.5 py-1.5 rounded-full bg-[#FCECEE] border border-[#B58AA8]/30 shadow-2xs">
            About Me
          </span>
          <div className="h-[1px] bg-[#B58AA8]/30 flex-1 max-w-xs" />
        </div>

        {/* Full-Width Frosted Glass Card */}
        <div className="w-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
          
          {/* Subtle atmospheric corner glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-[#F8D5C9]/35 to-[#FCECEE]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#241821] leading-[1.18] mb-6">
              Building scalable software with{" "}
              <span className="text-[#8E3666] relative inline-block">
                clean architecture
                <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#B58AA8] to-transparent rounded-full" />
              </span>{" "}
              and high performance.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#634E5D] leading-relaxed">
              <p>
                Hi, I&apos;m <span className="font-semibold text-[#241821]">{profileData.name}</span> — a Software Developer based in Delhi NCR with 1+ years of experience engineering high-performance backend systems, secure REST APIs, and responsive web applications.
              </p>
              <p>
                I specialize in <span className="text-[#5C2849] font-medium">Java & Spring Boot</span>, modular layered architecture, database optimization across PostgreSQL and MySQL, and in-memory Redis caching. Passionate about solving real-world challenges with clean, maintainable, production-ready code.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-8 mt-8 border-t border-[#B58AA8]/20">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5C2849] hover:bg-[#441D36] text-[#FFF8F2] text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(92,40,73,0.2)] hover:shadow-[0_6px_20px_rgba(68,29,54,0.3)] active:scale-98 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F8D5C9]" />
                  <span>View Resume</span>
                </button>
              )}

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FCECEE] hover:bg-[#F8D5C9] text-[#8E3666] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#B58AA8]/30"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Quick Details Button: Placed right next to Get In Touch */}
              <button
                onClick={() => setIsDetailsOpen(true)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/95 hover:bg-[#FCECEE] text-[#5C2849] hover:text-[#8E3666] text-xs font-semibold uppercase tracking-wider transition-all border border-[#B58AA8]/35 shadow-xs cursor-pointer active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8E3666]" />
                <span>Quick Details</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Details Interactive Modal */}
      <QuickDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onOpenResume={onOpenResume}
      />
    </section>
  );
}
