"use client";

import React, { useState } from "react";
import { Server, Database, Smartphone, Terminal, Sparkles, Layers } from "lucide-react";
import { allSkills, skillCategories, SkillItem } from "../data/skills";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredSkills =
    activeFilter === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeFilter);

  const getBadgeStyle = (theme: SkillItem["badgeTheme"]) => {
    switch (theme) {
      case "peach":
        return "bg-[#F8D5C9]/60 text-[#4B263F] border-[#F8D5C9] hover:bg-[#F8D5C9]";
      case "blush":
        return "bg-[#F3C6C8]/60 text-[#4B263F] border-[#F3C6C8] hover:bg-[#F3C6C8]";
      case "mauve":
        return "bg-[#B58AA8]/30 text-[#4B263F] border-[#B58AA8]/50 hover:bg-[#B58AA8]/45";
      case "lavender":
        return "bg-[#DCD0E5]/60 text-[#4B263F] border-[#DCD0E5] hover:bg-[#DCD0E5]";
      case "cream":
      default:
        return "bg-[#FFF8F2] text-[#4B263F] border-[#B58AA8]/40 hover:bg-[#F8D5C9]/35";
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "backend":
        return <Server className="w-4 h-4 text-[#75405F]" />;
      case "database":
        return <Database className="w-4 h-4 text-[#4B263F]" />;
      case "frontend":
        return <Smartphone className="w-4 h-4 text-[#B58AA8]" />;
      case "tools":
        return <Terminal className="w-4 h-4 text-[#75405F]" />;
      default:
        return <Layers className="w-4 h-4 text-[#75405F]" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E3666] font-bold px-3.5 py-1.5 rounded-full bg-[#FCECEE] border border-[#B58AA8]/30 shadow-2xs">
                Technical Stack
              </span>
              <div className="h-[1px] bg-[#B58AA8]/30 w-12" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#241821]">
              Core Skills & Technologies.
            </h2>
            <p className="text-sm sm:text-base text-[#634E5D] max-w-xl mt-2 font-normal">
              Production technologies utilized across backend microservices, relational databases, and modern web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 shadow-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#5C2849] text-white shadow-xs"
                  : "text-[#634E5D] hover:text-[#241821]"
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveFilter("backend")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "backend"
                  ? "bg-[#5C2849] text-white shadow-xs"
                  : "text-[#634E5D] hover:text-[#241821]"
              }`}
            >
              Backend & APIs
            </button>
            <button
              onClick={() => setActiveFilter("database")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "database"
                  ? "bg-[#5C2849] text-white shadow-xs"
                  : "text-[#634E5D] hover:text-[#241821]"
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "frontend"
                  ? "bg-[#5C2849] text-white shadow-xs"
                  : "text-[#634E5D] hover:text-[#241821]"
              }`}
            >
              Web & Mobile
            </button>
            <button
              onClick={() => setActiveFilter("tools")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === "tools"
                  ? "bg-[#5C2849] text-white shadow-xs"
                  : "text-[#634E5D] hover:text-[#241821]"
              }`}
            >
              Tooling
            </button>
          </div>
        </div>

        {/* Compact Responsive Badges Grid */}
        <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 p-6 sm:p-10 shadow-[0_12px_32px_-8px_rgba(75,38,63,0.08)] mb-10">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={`group px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-2xs hover:-translate-y-0.5 hover:shadow-sm flex items-center gap-2.5 cursor-default ${getBadgeStyle(
                  skill.badgeTheme
                )}`}
              >
                <span className="w-2 h-2 rounded-full bg-[#8E3666]/60 group-hover:scale-125 transition-transform" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Categorized Detail Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-[#B58AA8]/25 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8E3666]/40 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-[#FCECEE] border border-[#B58AA8]/20">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="text-sm font-bold font-display text-[#241821]">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs text-[#8E7485] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#B58AA8]/20">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-2.5 py-1 rounded-lg bg-[#FCECEE] text-[11px] font-medium text-[#5C2849]"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
