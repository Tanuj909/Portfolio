"use client";

import React from "react";
import { profileData } from "../data/profile";
import { ArrowRight, Compass } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#75405F] font-semibold px-3 py-1 rounded-full bg-[#F8D5C9]/50 border border-[#B58AA8]/30">
            Principles
          </span>
          <div className="h-[1px] bg-[#B58AA8]/30 w-12" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#30252E]">
              How I Build.
            </h2>
            <p className="text-sm sm:text-base text-[#634E5D] max-w-xl mt-2 font-normal">
              Guiding engineering principles that ensure software is maintainable, fault-tolerant, and delivers tangible business value.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#4B263F] bg-[#FFF8F2] border border-[#B58AA8]/30 px-3.5 py-2 rounded-xl shadow-xs">
            <Compass className="w-4 h-4 text-[#75405F]" />
            <span>Architectural Discipline</span>
          </div>
        </div>

        {/* 4 Numbered Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.philosophies.map((item) => (
            <div
              key={item.number}
              className="group p-6 sm:p-8 rounded-3xl bg-[#FFF8F2] border border-[#B58AA8]/30 hover:border-[#75405F]/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_15px_35px_-10px_rgba(75,38,63,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(75,38,63,0.1)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-[#75405F]">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono text-[#8E7485] uppercase tracking-wider">
                    Core Principle
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[#4B263F] mb-2 group-hover:text-[#75405F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-[#30252E] mb-2">
                  {item.description}
                </p>

                <p className="text-xs text-[#634E5D] leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono text-[#8E7485]">
                <span>Applied to every commit</span>
                <span className="text-[#75405F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                  Reliability <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
