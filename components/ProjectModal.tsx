"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Radio,
  MapPin,
  Wallet,
  ShieldCheck,
  Calendar,
  Maximize2,
  Bell,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { ProjectItem, ProjectSnapshot } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  const [activeSnapshot, setActiveSnapshot] = useState<ProjectSnapshot | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (project?.snapshots && project.snapshots.length > 0) {
      setActiveSnapshot(project.snapshots[0]);
    } else {
      setActiveSnapshot(null);
    }
    setIsZoomOpen(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomOpen) {
          setIsZoomOpen(false);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, isZoomOpen]);

  if (!project) return null;

  // Visual component for projects without snapshot images
  const renderProjectVisual = () => {
    if (project.id === "riderzz") {
      return (
        <div className="rounded-2xl bg-white/90 border border-[#B58AA8]/25 p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#B58AA8]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E3666] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#5C2849]">
                DISPATCH & ROUTING ENGINE
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FCECEE] text-[#8E3666] font-semibold border border-[#B58AA8]/30">
              LOGISTICS
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#FCECEE] text-[#8E3666]">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241821] block">
                    Redis In-Memory Driver Broadcast
                  </span>
                  <span className="text-[11px] text-[#8E7485]">
                    Geohash lookup & near-instant notification
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#8E3666]">&lt; 15ms</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#8E3666]" />
                <span className="text-xs font-medium text-[#241821]">Google Routes API</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <Wallet className="w-3.5 h-3.5 text-[#5C2849]" />
                <span className="text-xs font-medium text-[#241821]">Razorpay Driver Wallet</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
            <span className="text-[#8E7485]">DB LOAD REDUCTION</span>
            <span className="text-[#8E3666] font-bold">90%+ VIA RAM</span>
          </div>
        </div>
      );
    }

    if (project.id === "hospital-management-system") {
      return (
        <div className="rounded-2xl bg-white/90 border border-[#B58AA8]/25 p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#B58AA8]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E3666] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#5C2849]">
                CLINICAL SCHEDULING ENGINE
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FCECEE] text-[#8E3666] font-semibold border border-[#B58AA8]/30">
              HEALTHCARE
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#FCECEE] text-[#8E3666]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241821] block">
                    Zero-Overlap Appointment Engine
                  </span>
                  <span className="text-[11px] text-[#8E7485]">
                    Doctor roster & slot concurrency validation
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#8E3666]">Instant</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8E3666]" />
                <span className="text-xs font-medium text-[#241821]">Spring Security RBAC</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <span className="w-4 h-4 rounded-full bg-[#FCECEE] text-[#5C2849] flex items-center justify-center text-[10px] font-bold">
                  DB
                </span>
                <span className="text-xs font-medium text-[#241821]">Hibernate / MySQL</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
            <span className="text-[#8E7485]">SECURITY ISOLATION</span>
            <span className="text-[#8E3666] font-bold">100% RBAC</span>
          </div>
        </div>
      );
    }

    if (project.id === "notification-system") {
      return (
        <div className="rounded-2xl bg-white/90 border border-[#B58AA8]/25 p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#B58AA8]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E3666] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#5C2849]">
                REAL-TIME DISPATCH ENGINE
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FCECEE] text-[#8E3666] font-semibold border border-[#B58AA8]/30">
              MESSAGING
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#FCECEE] text-[#8E3666]">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241821] block">
                    Redis Pub/Sub & WebSockets
                  </span>
                  <span className="text-[11px] text-[#8E7485]">
                    Multi-channel async broadcast
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#8E3666]">&lt; 10ms</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#8E3666]" />
                <span className="text-xs font-medium text-[#241821]">Rate Limiting</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FFF8F2] border border-[#B58AA8]/25 flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C2849]" />
                <span className="text-xs font-medium text-[#241821]">99.9% Delivery</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
            <span className="text-[#8E7485]">SYSTEM THROUGHPUT</span>
            <span className="text-[#8E3666] font-bold">10,000+ MSG/SEC</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-[#FFF8F2] border border-[#B58AA8]/30 shadow-[0_25px_60px_-15px_rgba(75,38,63,0.3)] overflow-hidden relative animate-in zoom-in-95 duration-200 text-[#241821]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-4.5 bg-white/90 backdrop-blur-md border-b border-[#B58AA8]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FCECEE] text-[#8E3666] border border-[#B58AA8]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#8E7485]">
              {project.projectType} • {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5C2849] hover:bg-[#441D36] text-[#FFF8F2] text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3 h-3 text-[#F8D5C9]" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FCECEE] text-[#8E7485] hover:text-[#5C2849] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#241821] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#634E5D] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 3 Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white/90 border border-[#B58AA8]/25 shadow-2xs flex flex-col justify-between"
              >
                <span className="text-lg sm:text-xl font-bold font-display text-[#5C2849]">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-[#8E7485] uppercase tracking-wider mt-0.5 font-semibold">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Two-Column Structured Section: Highlights vs Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
            
            {/* Left Column: Key Highlights & Tech Stack */}
            <div className={`${project.snapshots?.length ? "lg:col-span-6" : "lg:col-span-7"} space-y-4`}>
              <div className="p-5 rounded-2xl bg-white/90 border border-[#B58AA8]/25 shadow-2xs space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E7485] font-semibold block">
                  Key Technical Achievements
                </span>
                <div className="space-y-3">
                  {project.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8E3666] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-[#241821]">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-[#634E5D] mt-0.5 leading-relaxed">
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="p-4 rounded-2xl bg-white/90 border border-[#B58AA8]/25 shadow-2xs space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E7485] font-semibold block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#FCECEE]/70 border border-[#B58AA8]/25 text-xs font-medium text-[#5C2849]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview or Interactive Screenshots */}
            <div className={`${project.snapshots?.length ? "lg:col-span-6" : "lg:col-span-5"} space-y-3`}>
              {project.snapshots && project.snapshots.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8E7485] font-semibold">
                      Production Screens ({project.snapshots.length})
                    </span>
                    <button
                      onClick={() => setIsZoomOpen(true)}
                      className="text-xs font-semibold text-[#8E3666] hover:text-[#5C2849] flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom View</span>
                    </button>
                  </div>

                  {/* Active Large Screen Preview */}
                  {activeSnapshot && (
                    <div
                      onClick={() => setIsZoomOpen(true)}
                      className="cursor-pointer group rounded-2xl bg-white border border-[#B58AA8]/30 overflow-hidden shadow-xs hover:border-[#8E3666]/50 transition-all"
                    >
                      <div className="px-3.5 py-2 bg-[#FFF4ED] border-b border-[#B58AA8]/20 flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-[#241821] truncate max-w-[260px]">
                          {activeSnapshot.title}
                        </span>
                        <span className="text-[11px] text-[#8E3666] font-medium group-hover:underline">
                          Click to enlarge
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] bg-[#F8ECE4] overflow-hidden">
                        <Image
                          src={activeSnapshot.image}
                          alt={activeSnapshot.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-xs text-[#634E5D]">
                          {activeSnapshot.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Horizontal Thumbnail Strip */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                    {project.snapshots.map((snap, idx) => {
                      const isActive = activeSnapshot?.title === snap.title;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveSnapshot(snap)}
                          className={`relative shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            isActive
                              ? "border-[#5C2849] shadow-xs scale-105"
                              : "border-[#B58AA8]/30 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={snap.image}
                            alt={snap.title}
                            fill
                            sizes="64px"
                            className="object-cover object-top"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E7485] font-semibold block">
                    Architecture & Flow
                  </span>
                  {renderProjectVisual()}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 sm:py-4 bg-white/90 backdrop-blur-md border-t border-[#B58AA8]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#634E5D] font-mono">
            {project.role} • {project.industry}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full hover:bg-[#FCECEE] text-xs font-semibold text-[#634E5D] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#5C2849] hover:bg-[#441D36] text-[#FFF8F2] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F8D5C9]" />
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Snapshot Zoom Lightbox */}
      {isZoomOpen && activeSnapshot && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FFF8F2] border border-[#B58AA8]/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-[#B58AA8]/20">
              <div>
                <span className="font-bold text-sm text-[#241821] font-display">
                  {activeSnapshot.title}
                </span>
                <span className="text-xs text-[#8E7485] ml-2 font-mono">
                  ({project.title})
                </span>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#FCECEE] text-[#8E7485] hover:text-[#5C2849] transition-colors cursor-pointer"
                aria-label="Close zoom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-white/50 flex items-center justify-center p-4">
              <img
                src={activeSnapshot.image}
                alt={activeSnapshot.title}
                className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-md border border-[#B58AA8]/20"
              />
            </div>

            <div className="px-5 py-3 bg-white border-t border-[#B58AA8]/20 flex items-center justify-between text-xs text-[#634E5D]">
              <span>{activeSnapshot.description}</span>
              <span className="font-mono text-[#8E7485] hidden sm:inline">Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
