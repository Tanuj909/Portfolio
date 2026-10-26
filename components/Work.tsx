"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Radio,
  MapPin,
  Wallet,
  Activity,
  ShieldCheck,
  Calendar,
  Layers,
  ExternalLink,
} from "lucide-react";
import { projectsData, ProjectItem } from "../data/projects";

interface WorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function Work({ onSelectProject }: WorkProps) {
  const getProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case "riderzz":
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#FFF4ED] via-[#FFF8F2] to-[#F8ECE4] border border-[#B58AA8]/30 shadow-xs overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#B58AA8]/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#75405F] animate-pulse" />
                <span className="font-mono text-xs text-[#4B263F] font-bold tracking-wider">
                  DISPATCH & ROUTING ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F8D5C9] text-[#75405F] border border-[#B58AA8]/30 font-semibold">
                LOGISTICS
              </span>
            </div>

            {/* Architecture Flow */}
            <div className="my-5 space-y-3">
              <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#F8D5C9] text-[#75405F]">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#30252E] block">
                      Redis In-Memory Broadcast
                    </span>
                    <span className="text-[10px] text-[#8E7485]">
                      Near-instant driver geohash lookup
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#75405F]">&lt; 15ms</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#B58AA8]" />
                  <span className="text-[11px] font-medium text-[#4B263F]">Google Routes</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-xs">
                  <Wallet className="w-3.5 h-3.5 text-[#75405F]" />
                  <span className="text-[11px] font-medium text-[#4B263F]">Razorpay Wallet</span>
                </div>
              </div>
            </div>

            {/* Bottom Metric */}
            <div className="pt-3 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E7485]">DATABASE LOAD REDUCTION</span>
              <span className="text-[#4B263F] font-bold">90%+ IN RAM</span>
            </div>
          </div>
        );

      case "hospital-management-system":
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#FFF4ED] via-[#FFF8F2] to-[#F3C6C8]/25 border border-[#B58AA8]/30 shadow-xs overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#B58AA8]/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4B263F] animate-pulse" />
                <span className="font-mono text-xs text-[#4B263F] font-bold tracking-wider">
                  CLINICAL WORKFLOW & APPOINTMENTS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F3C6C8] text-[#4B263F] border border-[#B58AA8]/30 font-semibold">
                HEALTHCARE
              </span>
            </div>

            {/* Middle Workflow */}
            <div className="my-5 space-y-3">
              <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#F3C6C8] text-[#4B263F]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#30252E] block">
                      Patient Appointment Dispatch
                    </span>
                    <span className="text-[10px] text-[#8E7485]">
                      Doctor roster & conflict-free scheduling
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#4B263F]">REAL-TIME</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#75405F]" />
                  <span className="text-[11px] font-medium text-[#4B263F]">Spring Security RBAC</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-xs">
                  <Activity className="w-3.5 h-3.5 text-[#B58AA8]" />
                  <span className="text-[11px] font-medium text-[#4B263F]">Patient EHR History</span>
                </div>
              </div>
            </div>

            {/* Bottom Metric */}
            <div className="pt-3 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E7485]">ACCESS SECURITY ISOLATION</span>
              <span className="text-[#4B263F] font-bold">100% RBAC</span>
            </div>
          </div>
        );

      case "salon-saas-platform":
      default:
        return (
          <div className="relative w-full h-full flex flex-col justify-between rounded-2xl border border-[#B58AA8]/30 bg-[#FFF8F2] shadow-xs overflow-hidden">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFF4ED] border-b border-[#B58AA8]/20 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B58AA8]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F3C6C8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#75405F]/60" />
                <span className="font-mono text-[11px] text-[#8E7485] ml-2">
                  salon-saas.platform
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F8D5C9] text-[#75405F] font-semibold border border-[#B58AA8]/30">
                11 SCREENS
              </span>
            </div>

            {/* Screenshot Container */}
            <div className="relative flex-1 w-full overflow-hidden bg-[#F8ECE4]">
              <Image
                src="/Salon/home.png"
                alt="Salon Platform Multi-Tenant SaaS"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E3666] font-bold px-3.5 py-1.5 rounded-full bg-[#FCECEE] border border-[#B58AA8]/30 shadow-2xs">
              Projects
            </span>
            <div className="h-[1px] bg-[#B58AA8]/30 w-12" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#241821]">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#634E5D] max-w-2xl mt-2 font-normal">
            Real-world applications and scalable backend systems I&apos;ve built with clean architecture and modern technologies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10 sm:space-y-14">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 p-6 sm:p-8 lg:p-10 shadow-[0_12px_32px_-8px_rgba(75,38,63,0.08)] hover:border-[#8E3666]/50 hover:shadow-[0_20px_40px_-10px_rgba(75,38,63,0.14)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Preview (Left on even, Right on odd) */}
                  <div
                    className={`lg:col-span-5 h-[300px] sm:h-[340px] w-full ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {getProjectVisual(project)}
                  </div>

                  {/* Project Information */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between space-y-4 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8E7485]">
                      <span className="font-bold uppercase tracking-wider text-[#8E3666] px-2.5 py-0.5 rounded-full bg-[#FCECEE] border border-[#B58AA8]/25">
                        {project.projectType}
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                      {project.industry && (
                        <>
                          <span>•</span>
                          <span className="text-[#634E5D]">{project.industry}</span>
                        </>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#241821] group-hover:text-[#8E3666] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#8E3666] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Concise Description */}
                    <p className="text-sm text-[#634E5D] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-1.5 text-xs text-[#241821]">
                      {project.highlights.slice(0, 3).map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E3666] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#FCECEE] border border-[#B58AA8]/25 text-xs font-mono font-medium text-[#5C2849]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 border-t border-[#B58AA8]/20 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-6 py-2.5 rounded-full bg-[#5C2849] hover:bg-[#461C36] text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
                      >
                        <span>Know More & Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-full bg-white hover:bg-[#FCECEE] border border-[#B58AA8]/35 text-[#5C2849] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
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
