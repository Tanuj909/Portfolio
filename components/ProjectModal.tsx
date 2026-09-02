"use client";

import React, { useEffect, useState } from "react";
import { X, ExternalLink, ArrowUpRight, CheckCircle2, Cpu, Terminal, Sparkles, Activity } from "lucide-react";
import { ProjectItem, ProjectSnapshot } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  const [selectedSnapshot, setSelectedSnapshot] = useState<ProjectSnapshot | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedSnapshot) {
          setSelectedSnapshot(null);
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
  }, [project, onClose, selectedSnapshot]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-auto rounded-2xl bg-[#0D0F12] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden text-[#F4F4F5]">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0D0F12]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border"
              style={{
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
                borderColor: `${project.accentColor}30`,
              }}
            >
              PROJECT OVERVIEW
            </span>
            <span className="text-xs font-mono text-[#71717A] hidden sm:inline">
              {"// " + project.year}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00F0FF] text-[#08090B] text-xs font-semibold hover:bg-[#00F0FF]/90 transition-colors shadow-sm"
              >
                <span>Live Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#12151A] hover:bg-[#181C22] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Section 1: Header & Key Metrics */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#71717A]">
              <span className="text-white font-medium">{project.role}</span>
              <span>•</span>
              <span className="text-[#A1A1AA]">{project.industry}</span>
              {project.client && (
                <>
                  <span>•</span>
                  <span style={{ color: project.accentColor }}>{project.client}</span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {project.description}
            </p>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.08] flex flex-col"
                >
                  <span
                    className="text-xl sm:text-2xl font-bold font-display"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A] uppercase mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Core Engineering & Architecture Highlights (Resume Points) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Cpu className="w-4 h-4 text-[#00F0FF]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                KEY TECHNICAL ACHIEVEMENTS & ARCHITECTURE
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {project.keyPoints.map((point, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] flex items-start gap-3.5 hover:border-white/15 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white font-display mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Tech Stack Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Terminal className="w-4 h-4 text-[#00F0FF]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                TECHNOLOGY STACK
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.techStackBreakdown.map((cat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase block mb-2 font-medium">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-[#0D0F12] border border-white/[0.08] text-[11px] font-mono text-[#E4E4E7]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Production Screen Snapshots (If snapshots exist) */}
          {project.snapshots && project.snapshots.length > 0 && (
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#10B981]" />
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                    PRODUCTION UI SNAPSHOTS & SCREENS
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#10B981]">
                  {project.snapshots.length} Verified Screens
                </span>
              </div>

              {/* Grouped Snapshots */}
              {Array.from(new Set(project.snapshots.map((s) => s.category))).map((catName) => {
                const catSnapshots = project.snapshots?.filter((s) => s.category === catName) || [];
                return (
                  <div key={catName} className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#D4D4D8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span className="font-semibold uppercase tracking-wider text-white">
                        {catName}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {catSnapshots.map((snap, sIdx) => (
                        <div
                          key={sIdx}
                          onClick={() => setSelectedSnapshot(snap)}
                          className="group/snap cursor-pointer rounded-xl bg-[#12151A] border border-white/[0.08] hover:border-[#10B981]/50 overflow-hidden transition-all duration-300 shadow-md flex flex-col"
                        >
                          {/* Browser Bar */}
                          <div className="flex items-center justify-between px-3 py-1.5 bg-[#0D0F12] border-b border-white/[0.06] text-[10px] font-mono text-[#71717A]">
                            <span className="text-white/80 font-medium truncate max-w-[200px]">
                              {snap.title}
                            </span>
                            <span className="text-[#10B981] group-hover/snap:underline">
                              Click to Zoom
                            </span>
                          </div>

                          {/* Image */}
                          <div className="relative aspect-[16/10] bg-black/60 overflow-hidden">
                            <img
                              src={snap.image}
                              alt={snap.title}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/snap:scale-105"
                              loading="lazy"
                            />
                          </div>

                          {/* Caption */}
                          <div className="p-3 bg-[#12151A] flex-1">
                            <h5 className="text-xs font-semibold text-white mb-0.5">
                              {snap.title}
                            </h5>
                            <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                              {snap.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Section 5: Key Verified Outcomes */}
          <div className="p-5 rounded-xl bg-[#12151A] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#00F0FF]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                VERIFIED OUTCOMES & IMPACT
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#08090B]/80 border border-white/[0.04] text-xs text-[#A1A1AA] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-[#F4F4F5]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: CTA */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#08090B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold font-display text-white">
                Interested in building a similar production system?
              </h4>
              <p className="text-xs text-[#71717A] mt-0.5">
                Let&apos;s discuss backend architecture, database scaling, or project requirements.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#00F0FF] text-[#08090B] font-semibold text-xs tracking-wider flex items-center gap-2 hover:bg-[#00F0FF]/90 transition-all shrink-0"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Snapshot Lightbox Modal */}
      {selectedSnapshot && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedSnapshot(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0D0F12] border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0D0F12] border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 uppercase">
                  {selectedSnapshot.category}
                </span>
                <span className="font-display font-bold text-sm text-white">
                  {selectedSnapshot.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedSnapshot(null)}
                className="p-1.5 rounded-full bg-[#181C22] hover:bg-[#20252D] text-[#A1A1AA] hover:text-white transition-colors"
                aria-label="Close zoom preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="flex-1 overflow-auto bg-black/90 flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedSnapshot.image}
                alt={selectedSnapshot.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Footer Caption */}
            <div className="px-5 py-3 bg-[#0A0C0E] border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
              <span>{selectedSnapshot.description}</span>
              <span className="text-[#71717A] hidden sm:inline">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
