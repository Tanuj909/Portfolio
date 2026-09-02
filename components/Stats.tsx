"use client";

import React from "react";
import { profileData } from "../data/profile";

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#0D0F12]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx !== 0 ? "lg:border-l lg:border-white/[0.06] lg:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-[#00F0FF] text-xl font-mono">_</span>
              </div>
              <span className="text-sm font-semibold text-[#F4F4F5] tracking-tight mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#71717A] leading-relaxed">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
