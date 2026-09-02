import React from "react";
import { Server, ShieldCheck, Database, Layers } from "lucide-react";
import { profileData } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with section numbering */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
            {"// 01. ABOUT ME"}
          </span>
          <div className="h-[1px] bg-white/[0.08] flex-1 max-w-xs" />
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display tracking-tight text-white leading-[1.15] mb-6">
              THE HUMAN // <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38BDF8]">
                BEHIND THE CODE.
              </span>
            </h2>

            <div className="p-5 rounded-2xl bg-[#0D0F12] border border-white/[0.08] space-y-3 mt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
                <Server className="w-4 h-4" />
                <span>CORE ENGINEERING FOCUS</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Specialized in Java, Spring Boot microservices, secure JWT authentication, and relational query optimization. I build systems that perform reliably under high concurrency.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
            {profileData.aboutStory.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
