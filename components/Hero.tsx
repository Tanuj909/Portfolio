import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { profileData } from "../data/profile";
import HeroBackgroundShader from "./HeroBackgroundShader";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Interactive WebGL Shader Background */}
      <HeroBackgroundShader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D0F12] border border-white/[0.08] text-xs font-mono text-[#A1A1AA] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="tracking-wide uppercase text-[11px] text-[#F4F4F5]">
                OPEN TO EXCITING OPPORTUNITIES
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display mb-6">
              BUILDING DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F4F5] to-[#A1A1AA]">
                PRODUCTS THAT
              </span> <br />
              <span className="text-[#00F0FF] relative inline-block">
                SOLVE REAL PROBLEMS.
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#00F0FF] to-transparent opacity-60" />
              </span>
            </h1>

            {/* Positioning Statement - Crisp & Clean */}
            <p className="text-lg sm:text-xl text-[#A1A1AA] font-light max-w-xl leading-relaxed mb-8">
              Hi, I&apos;m <span className="text-white font-semibold">Tanuj Kashyap</span> — Software Developer crafting scalable backends and modern web platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#00F0FF] text-[#08090B] font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#00F0FF]/90 hover:shadow-[0_0_24px_rgba(0,240,255,0.35)] transition-all active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0D0F12] hover:bg-[#12151A] border border-white/10 hover:border-white/20 text-white font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#00F0FF]" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-transparent hover:border-white/[0.08] text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Secondary Links & Technical Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.06] w-full">
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                CONNECT:
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image with Flowing Liquid Water Border (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-sm">
              {/* Liquid Fluid Glow Tube Container */}
              <div className="relative p-[2.5px] rounded-2xl overflow-hidden shadow-2xl shadow-black/90">
                {/* Rotating Conic Liquid Stream (Longer Fluid Wave) */}
                <div
                  className="absolute -inset-[120%] animate-liquid-border"
                  style={{
                    background:
                      "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 60deg, rgba(0, 240, 255, 0.05) 120deg, rgba(0, 240, 255, 0.2) 200deg, #0ea5e9 260deg, #38BDF8 310deg, #00F0FF 345deg, #E0F7FA 356deg, transparent 360deg)",
                  }}
                />

                {/* Diffused Liquid Water Glow */}
                <div
                  className="absolute -inset-[120%] animate-liquid-border blur-md opacity-80"
                  style={{
                    background:
                      "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 100deg, rgba(0, 240, 255, 0.15) 180deg, #00F0FF 300deg, #38BDF8 345deg, transparent 360deg)",
                  }}
                />

                {/* Inner Card Frame */}
                <div className="relative rounded-[14px] bg-[#0D0F12] p-3 overflow-hidden">
                  {/* Top Border Spec Strip */}
                  <div className="flex items-center justify-between px-1 pb-2.5 mb-2.5 border-b border-white/[0.06] text-[10px] font-mono text-[#71717A]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[#A1A1AA]">IT WORKS // DON'T ASK</span>
                    </div>
                    <span className="text-[#00F0FF]">PORTFOLIO.2026</span>
                  </div>

                  {/* Profile Photo */}
                  <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-[#08090B] border border-white/[0.08]">
                    <Image
                      src="/tanuj.png"
                      alt="Tanuj Kashyap"
                      width={500}
                      height={560}
                      priority
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Border Spec Strip */}
                  <div className="flex items-center justify-between px-1 pt-2.5 mt-2.5 border-t border-white/[0.06] text-[10px] font-mono text-[#71717A]">
                    <span>[ BACKEND • WEB ]</span>
                    <span className="text-white/80 font-medium">JAVA / NEXT.JS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
