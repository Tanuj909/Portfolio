"use client";

import React, { useState } from "react";
import { Server, Database, Terminal, Layout, Cpu, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { skillsData, TechCategory } from "../data/skills";

export default function Skills() {
  const [activeTabId, setActiveTabId] = useState<string>("backend");

  const activeCategory =
    skillsData.find((cat) => cat.id === activeTabId) || skillsData[0];

  const getCategoryIcon = (iconType: string, className = "w-4 h-4") => {
    switch (iconType) {
      case "backend":
        return <Server className={className} />;
      case "database":
        return <Database className={className} />;
      case "tools":
        return <Terminal className={className} />;
      case "frontend":
        return <Layout className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getAccentTheme = (iconType: string) => {
    switch (iconType) {
      case "backend":
        return {
          color: "#00F0FF",
          border: "border-[#00F0FF]/40",
          glow: "shadow-[0_0_30px_rgba(0,240,255,0.25)]",
          badgeBg: "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30",
          stroke: "rgba(0, 240, 255, 0.4)",
          dot: "bg-[#00F0FF]",
        };
      case "database":
        return {
          color: "#10B981",
          border: "border-[#10B981]/40",
          glow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
          badgeBg: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30",
          stroke: "rgba(16, 185, 129, 0.4)",
          dot: "bg-[#10B981]",
        };
      case "tools":
        return {
          color: "#38BDF8",
          border: "border-[#38BDF8]/40",
          glow: "shadow-[0_0_30px_rgba(56,189,248,0.25)]",
          badgeBg: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30",
          stroke: "rgba(56, 189, 248, 0.4)",
          dot: "bg-[#38BDF8]",
        };
      case "frontend":
        return {
          color: "#A78BFA",
          border: "border-[#A78BFA]/40",
          glow: "shadow-[0_0_30px_rgba(167,139,250,0.25)]",
          badgeBg: "bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/30",
          stroke: "rgba(167, 139, 250, 0.4)",
          dot: "bg-[#A78BFA]",
        };
      default:
        return {
          color: "#00F0FF",
          border: "border-[#00F0FF]/40",
          glow: "shadow-[0_0_30px_rgba(0,240,255,0.25)]",
          badgeBg: "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/30",
          stroke: "rgba(0, 240, 255, 0.4)",
          dot: "bg-[#00F0FF]",
        };
    }
  };

  const theme = getAccentTheme(activeCategory.iconType);

  // Radial positions for 8 connected satellite nodes centered around (50%, 50%)
  const nodePositions = [
    { top: "12%", left: "50%" }, // Top
    { top: "22%", left: "78%" }, // Top-Right
    { top: "50%", left: "86%" }, // Right
    { top: "78%", left: "78%" }, // Bottom-Right
    { top: "88%", left: "50%" }, // Bottom
    { top: "78%", left: "22%" }, // Bottom-Left
    { top: "50%", left: "14%" }, // Left
    { top: "22%", left: "22%" }, // Top-Left
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#08090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
            {"// 03. TECHNICAL CAPABILITIES"}
          </span>
          <div className="h-[1px] bg-white/[0.08] w-12" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
              TECHNOLOGY ECOSYSTEM.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mt-2 font-light">
              Connected architectural nodes linking the core system engine to supporting production technologies.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] bg-[#0D0F12] border border-white/[0.06] px-3.5 py-2 rounded-full w-fit">
            <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>INTERACTIVE ARCHITECTURE HUB</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {skillsData.map((tab) => {
            const isActive = activeTabId === tab.id;
            const tabTheme = getAccentTheme(tab.iconType);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`group flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#08090B] shadow-lg shadow-white/10 scale-105"
                    : "bg-[#0D0F12] hover:bg-[#15181E] text-[#A1A1AA] hover:text-white border border-white/[0.08] hover:border-white/20"
                }`}
              >
                <span className={isActive ? "text-[#08090B]" : "text-white/60 group-hover:text-white"}>
                  {getCategoryIcon(tab.iconType, "w-4 h-4")}
                </span>
                <span>{tab.name}</span>
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tabTheme.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Central Connected Ecosystem Canvas */}
        <div className="relative rounded-3xl bg-[#0D0F12]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-12 overflow-hidden shadow-2xl shadow-black/80">
          {/* Subtle Ambient Radial Glow in the center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500"
            style={{ backgroundColor: theme.color }}
          />

          {/* Top Info Bar inside canvas */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-white/[0.06] text-center sm:text-left">
            <div>
              <span
                className="text-[11px] font-mono tracking-widest uppercase block font-semibold mb-1"
                style={{ color: theme.color }}
              >
                {activeCategory.name}
              </span>
              <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
                {activeCategory.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[#71717A] bg-[#12151A] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>{activeCategory.skills.length + 1} LINKED NODES</span>
            </div>
          </div>

          {/* DESKTOP VIEW: Radial Hub with Connected Circuit Lines (lg screens) */}
          <div className="hidden lg:block relative w-full h-[620px] my-4 select-none">
            {/* SVG Connecting Lines between Center Node & Outer Satellites */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{ overflow: "visible" }}
            >
              {/* Concentric Orbit Guide Rings */}
              <circle
                cx="50%"
                cy="50%"
                r="36%"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="6 6"
              />
              <circle
                cx="50%"
                cy="50%"
                r="20%"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
              />

              {/* Connecting Spoke Lines directly from 50%, 50% to pos.left, pos.top */}
              {nodePositions.slice(0, activeCategory.skills.length).map((pos, idx) => (
                <g key={idx}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={pos.left}
                    y2={pos.top}
                    stroke={theme.stroke}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-70 transition-all duration-300"
                  />
                  {/* Subtle Node Connector Dot precisely at target */}
                  <circle
                    cx={pos.left}
                    cy={pos.top}
                    r="4"
                    fill={theme.color}
                    className="opacity-90 animate-pulse"
                  />
                </g>
              ))}
            </svg>

            {/* CENTER NODE (Exactly 3 clean lines, No Icon, No Core System Node label) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center p-6 sm:p-7 rounded-3xl bg-[#12151A] border-2 shadow-2xl transition-all duration-500 hover:scale-105 cursor-default min-w-[240px] text-center"
              style={{
                borderColor: theme.color,
                boxShadow: `0 0 40px ${theme.color}33`,
              }}
            >
              {/* Line 1: Category Name */}
              <span
                className="font-mono text-[11px] tracking-widest uppercase font-semibold mb-1"
                style={{ color: theme.color }}
              >
                {activeCategory.name}
              </span>

              {/* Line 2: Core Technology */}
              <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-white px-2">
                {activeCategory.coreNode}
              </h3>

              {/* Line 3: Subtitle */}
              <span className="text-xs text-[#A1A1AA] font-light mt-1">
                {activeCategory.coreSubtitle}
              </span>
            </div>

            {/* SATELLITE NODES (Positioned right over the line connection point) */}
            {activeCategory.skills.map((skill, idx) => {
              const pos = nodePositions[idx] || nodePositions[0];
              return (
                <div
                  key={idx}
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-10 group/node cursor-default transition-all duration-300 hover:scale-110"
                >
                  <div
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D0F12]/95 border border-white/10 hover:border-white/30 backdrop-blur-md shadow-lg shadow-black/70 transition-all duration-200 group-hover/node:bg-[#181C22]"
                    style={{
                      borderLeftColor: theme.color,
                      borderLeftWidth: "3px",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full opacity-80 group-hover/node:opacity-100 group-hover/node:scale-125 transition-all shrink-0"
                      style={{ backgroundColor: theme.color }}
                    />
                    <span className="text-xs font-mono font-medium text-[#E4E4E7] group-hover/node:text-white whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET VIEW: Connected Linear Hub Network (<lg screens) */}
          <div className="lg:hidden relative py-6 flex flex-col items-center">
            {/* Center Node on Mobile - Exactly 3 clean lines */}
            <div
              className="w-full max-w-sm p-5 rounded-2xl bg-[#12151A] border-2 shadow-xl flex flex-col items-center text-center relative z-10 mb-8"
              style={{
                borderColor: theme.color,
                boxShadow: `0 0 30px ${theme.color}25`,
              }}
            >
              {/* Line 1: Category Name */}
              <span
                className="font-mono text-[10px] tracking-widest uppercase font-semibold mb-1"
                style={{ color: theme.color }}
              >
                {activeCategory.name}
              </span>

              {/* Line 2: Core Technology */}
              <h3 className="text-sm sm:text-base font-bold font-display text-white">
                {activeCategory.coreNode}
              </h3>

              {/* Line 3: Subtitle */}
              <span className="text-[11px] text-[#A1A1AA] font-light mt-0.5">
                {activeCategory.coreSubtitle}
              </span>
            </div>

            {/* Connecting line divider */}
            <div className="relative w-full max-w-xs flex items-center justify-center mb-6">
              <div
                className="w-full h-[1px] opacity-40"
                style={{ backgroundColor: theme.color }}
              />
              <span
                className="absolute px-3 py-0.5 rounded-full bg-[#0D0F12] border font-mono text-[10px] text-white/80"
                style={{ borderColor: `${theme.color}50` }}
              >
                CONNECTED TECHNOLOGIES
              </span>
            </div>

            {/* Surrounding Connected Satellite Pills on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              {activeCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#12151A] border border-white/[0.08] hover:border-white/20 transition-all text-left"
                  style={{
                    borderLeftColor: theme.color,
                    borderLeftWidth: "3px",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="text-xs font-mono font-medium text-[#D4D4D8] truncate">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Verification Footer inside canvas */}
          <div className="relative z-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#71717A]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>All nodes integrated in active production workflows</span>
            </div>
            <span>UPDATED 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
