"use client";

import React from "react";
import { ArrowUpRight, ArrowRight, Layers, ShieldCheck, Database, Radio, MapPin, Wallet, Server, CheckCircle2 } from "lucide-react";
import { projectsData, ProjectItem } from "../data/projects";

interface WorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function Work({ onSelectProject }: WorkProps) {
  // Visual schematic icons per project
  const getProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case "logistics-porter-platform":
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#0F1720] via-[#0D1117] to-[#08090B] rounded-2xl border border-[#00F0FF]/20 shadow-2xl overflow-hidden group-hover:border-[#00F0FF]/40 transition-all">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-mono text-xs text-white font-semibold tracking-wider">
                  LOGISTICS // DISPATCH ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                PROD LIVE
              </span>
            </div>

            {/* Middle Graphic / Architecture Representation */}
            <div className="my-6 space-y-3">
              {/* Driver Redis Stream Pill */}
              <div className="p-3.5 rounded-xl bg-[#121820] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                    <Radio className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-white block">
                      Redis In-Memory Broadcast
                    </span>
                    <span className="text-[10px] text-[#A1A1AA]">
                      Near-instantaneous driver geohash matching
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#00F0FF]">&lt; 15ms</span>
              </div>

              {/* Google Routes & Razorpay Flow */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#121820] border border-white/[0.08] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[11px] font-mono text-[#D4D4D8]">Google Routes</span>
                </div>
                <div className="p-3 rounded-xl bg-[#121820] border border-white/[0.08] flex items-center gap-2">
                  <Wallet className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[11px] font-mono text-[#D4D4D8]">Razorpay Wallet</span>
                </div>
              </div>
            </div>

            {/* Bottom Key Stat */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717A]">DATABASE PRESSURE REDUCTION</span>
              <span className="text-[#00F0FF] font-bold">90%+ IN RAM</span>
            </div>
          </div>
        );

      case "salon-saas-platform":
        return (
          <div className="relative w-full h-full flex flex-col justify-between rounded-2xl border border-[#10B981]/25 bg-[#0D1210] shadow-2xl overflow-hidden group-hover:border-[#10B981]/50 transition-all">
            {/* Top Browser Spec Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0D0B]/90 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                <span className="font-mono text-[11px] text-white/70 ml-1">
                  salon-saas.production.app
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                PROD PREVIEW
              </span>
            </div>

            {/* Screenshot Container with subtle zoom on card hover */}
            <div className="relative flex-1 w-full overflow-hidden bg-black/40">
              <img
                src="/Salon/home.png"
                alt="Salon Multi-Tenant SaaS Platform"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60" />
              
              {/* Bottom Feature Pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-[#0D0F12]/90 backdrop-blur-md border border-white/10 text-xs font-mono">
                <span className="text-white font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Multi-Tenant SaaS Storefront
                </span>
                <span className="text-[#10B981] font-bold">11 Screenshots</span>
              </div>
            </div>
          </div>
        );

      case "dsd-enterprise-microservices":
      default:
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#121826] via-[#0E131E] to-[#08090B] rounded-2xl border border-[#38BDF8]/20 shadow-2xl overflow-hidden group-hover:border-[#38BDF8]/40 transition-all">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-mono text-xs text-white font-semibold tracking-wider">
                  DSD SYSTEMS // MICROSERVICES
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                OPTIMIZED
              </span>
            </div>

            {/* Middle Graphic / Architecture Representation */}
            <div className="my-6 space-y-3">
              {/* MySQL Query & Index Optimization */}
              <div className="p-3.5 rounded-xl bg-[#131D2E] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-white block">
                      MySQL Query & Index Tuning
                    </span>
                    <span className="text-[10px] text-[#A1A1AA]">
                      B-Tree compound indexing on core entities
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#38BDF8]">45% FASTER</span>
              </div>

              {/* Exception Handling & Postman */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#131D2E] border border-white/[0.08] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[11px] font-mono text-[#D4D4D8]">Global @Advice</span>
                </div>
                <div className="p-3 rounded-xl bg-[#131D2E] border border-white/[0.08] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[11px] font-mono text-[#D4D4D8]">Postman Suites</span>
                </div>
              </div>
            </div>

            {/* Bottom Key Stat */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717A]">UNHANDLED ERROR RATE</span>
              <span className="text-[#38BDF8] font-bold">0% (STANDARDIZED)</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
              {"// 02. SELECTED WORK"}
            </span>
            <div className="h-[1px] bg-white/[0.08] w-12" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            ENGINEERED FOR PRODUCTION.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 font-light">
            Real-world backend architectures, scalable microservices, and client platforms engineered with technical rigor and verified in production.
          </p>
        </div>

        {/* Alternating Zig-Zag Project Showcase */}
        <div className="space-y-20 lg:space-y-28">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative p-[2px] rounded-3xl overflow-hidden shadow-2xl shadow-black/90"
              >
                {/* Rotating Conic Liquid Stream */}
                <div
                  className="absolute -inset-[150%] animate-liquid-border"
                  style={{
                    background:
                      project.id === "logistics-porter-platform"
                        ? "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 60deg, rgba(0, 240, 255, 0.05) 120deg, rgba(0, 240, 255, 0.2) 200deg, #0ea5e9 260deg, #38BDF8 310deg, #00F0FF 345deg, #E0F7FA 356deg, transparent 360deg)"
                        : "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 60deg, rgba(16, 185, 129, 0.05) 120deg, rgba(16, 185, 129, 0.2) 200deg, #059669 260deg, #34D399 310deg, #10B981 345deg, #D1FAE5 356deg, transparent 360deg)",
                  }}
                />

                {/* Diffused Liquid Glow */}
                <div
                  className="absolute -inset-[150%] animate-liquid-border blur-md opacity-70"
                  style={{
                    background:
                      project.id === "logistics-porter-platform"
                        ? "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 100deg, rgba(0, 240, 255, 0.15) 180deg, #00F0FF 300deg, #38BDF8 345deg, transparent 360deg)"
                        : "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 100deg, rgba(16, 185, 129, 0.15) 180deg, #10B981 300deg, #34D399 345deg, transparent 360deg)",
                  }}
                />

                {/* Inner Card Frame */}
                <div className="relative rounded-[22px] bg-[#0D0F12] p-6 sm:p-8 lg:p-10 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Preview Card (Left on even, Right on odd) */}
                  <div
                    className={`lg:col-span-5 h-[340px] sm:h-[380px] w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {getProjectVisual(project)}
                  </div>

                  {/* Project Detailed Information (Right on even, Left on odd) */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between space-y-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Index & Meta Header */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                      <span
                        className="font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]"
                        style={{ color: project.accentColor }}
                      >
                        // PROJECT 0{index + 1}
                      </span>
                      <span className="text-[#71717A]">•</span>
                      <span className="text-[#A1A1AA]">{project.projectType}</span>
                      <span className="text-[#71717A]">•</span>
                      <span className="text-[#71717A]">{project.year}</span>
                    </div>

                    {/* Project Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono mt-1 text-[#00F0FF]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Minimal Quick Summary Highlights */}
                    <ul className="space-y-2 text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
                      {project.highlights.slice(0, 3).map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: project.accentColor }}
                          />
                          <span className="text-[#D4D4D8]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Chips */}
                    <div className="pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 6).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#12151A] border border-white/[0.08] text-xs font-mono text-[#D4D4D8]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-[#71717A]">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center gap-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-6 py-2.5 rounded-full bg-[#00F0FF] text-[#08090B] font-bold text-xs font-mono tracking-wider flex items-center gap-2 hover:bg-[#00F0FF]/90 transition-all active:scale-95 shadow-[0_0_16px_rgba(0,240,255,0.25)]"
                      >
                        <span>KNOW MORE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
