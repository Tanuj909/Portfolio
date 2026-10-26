"use client";

import React from "react";
import { Briefcase, Code2, GraduationCap, MapPin } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      value: "1+",
      label: "Years of Experience",
      icon: <Briefcase className="w-5 h-5 text-[#8E3666]" />,
    },
    {
      value: "5+",
      label: "Projects Completed",
      icon: <Code2 className="w-5 h-5 text-[#8E3666]" />,
    },
    {
      value: "MCA",
      label: "Computer Science",
      icon: <GraduationCap className="w-5 h-5 text-[#8E3666]" />,
    },
    {
      value: "Delhi NCR",
      label: "Location",
      icon: <MapPin className="w-5 h-5 text-[#8E3666]" />,
    },
  ];

  return (
    <div className="hidden lg:block relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-6">
      <div className="rounded-2xl bg-white border border-[#B58AA8]/25 p-3.5 sm:p-5 shadow-[0_12px_32px_-6px_rgba(75,38,63,0.09)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 sm:gap-4 px-1.5 sm:px-4 lg:px-6 ${
                idx !== 0 ? "lg:border-l lg:border-[#B58AA8]/20" : ""
              }`}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#FCECEE] flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                {stat.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-2xl font-bold font-display text-[#241821] tracking-tight leading-tight truncate">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-[#8E7485] font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
