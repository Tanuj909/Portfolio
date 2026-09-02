"use client";

import React from "react";
import { profileData } from "../data/profile";
import { ArrowRight, Compass } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
            {"// 04. ENGINEERING PHILOSOPHY"}
          </span>
          <div className="h-[1px] bg-white/[0.08] w-12" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              HOW I BUILD.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mt-2 font-light">
              Guiding architectural principles that ensure software is maintainable, fault-tolerant, and delivers tangible business value.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] bg-[#0D0F12] border border-white/[0.06] px-3.5 py-2 rounded-lg">
            <Compass className="w-4 h-4" />
            <span>ARCHITECTURAL DISCIPLINE</span>
          </div>
        </div>

        {/* 4 Numbered Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {profileData.philosophies.map((item) => (
            <div
              key={item.number}
              className="group p-6 sm:p-8 rounded-2xl bg-[#0D0F12] border border-white/[0.08] hover:border-[#00F0FF]/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-[#00F0FF] group-hover:scale-105 transition-transform">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-[#F4F4F5] mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>APPLIED TO EVERY COMMIT</span>
                <span className="text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  SYSTEM VALUE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
