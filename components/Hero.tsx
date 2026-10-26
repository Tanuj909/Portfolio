"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[560px] flex flex-col justify-end lg:flex-row lg:items-end pt-20 sm:pt-22 lg:pt-20 pb-6 sm:pb-8 lg:pb-0 overflow-hidden"
    >
      {/* 1. Full-Width Mountain Sunset Banner Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/banner.png"
          alt="Pastel Mountain Sunset Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] lg:object-[center_28%]"
        />

        {/* Soft atmospheric gradient scrim on left to ensure high text contrast while keeping mountains vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F2]/75 via-[#FFF8F2]/30 to-transparent lg:w-[55%]" />
        
        {/* Mobile atmospheric scrim */}
        <div className="absolute inset-0 bg-[#FFF8F2]/55 sm:bg-[#FFF8F2]/45 lg:hidden" />

        {/* Ambient atmospheric glowing drift orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#FFD4B2]/40 to-[#E8A598]/20 blur-3xl pointer-events-none animate-ambient-1" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#8E3666]/20 to-[#B58AA8]/20 blur-3xl pointer-events-none animate-ambient-2" />

        {/* Crisp subtle bottom edge blend into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFF8F2] to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-end">
          
          {/* Photo Column: Displayed FIRST on mobile (order-1), right side on desktop (order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex flex-col items-center lg:items-start lg:pl-6 xl:pl-10 mt-6 sm:mt-8 lg:mt-0">
            
            {/* Circular Backdrop + Cutout Container (Responsive sizes) */}
            <div className="relative w-[230px] h-[260px] sm:w-[280px] sm:h-[320px] lg:w-[370px] lg:h-[430px] flex items-end justify-center">
              
              {/* Concentric Circle Backdrops */}
              <div className="absolute top-2 sm:top-4 lg:top-7 w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] lg:w-[345px] lg:h-[345px] flex items-center justify-center pointer-events-none">
                
                {/* Outer Thin Concentric Orbital Arc (Half-circle arc with draw-in and gentle rocking) */}
                <div className="absolute inset-[-10px] sm:inset-[-12px] lg:inset-[-15px] w-[calc(100%+20px)] sm:w-[calc(100%+24px)] lg:w-[calc(100%+30px)] h-[calc(100%+20px)] sm:h-[calc(100%+24px)] lg:h-[calc(100%+30px)] pointer-events-none select-none animate-orbit-rock">
                  <svg
                    className="w-full h-full pointer-events-none select-none"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="rgba(255, 255, 255, 0.45)"
                      strokeWidth="0.55"
                      strokeLinecap="round"
                      className="animate-ring-draw"
                    />
                  </svg>
                </div>

                {/* Inner Translucent Tinted Circular Disc with soft breathing halo aura */}
                <div
                  className="w-full h-full rounded-full shadow-2xl pointer-events-none animate-halo-pulse"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(133, 54, 100, 0.45) 0%, rgba(92, 41, 74, 0.62) 65%, rgba(68, 29, 54, 0.78) 100%)",
                  }}
                />
              </div>

              {/* Tanuj's Cutout Portrait with Rising Entrance Animation */}
              <div className="relative z-10 w-[92%] sm:w-[90%] lg:w-[92%] h-[96%] sm:h-[98%] lg:h-[100%] flex items-end justify-center pointer-events-none animate-hero-rise">
                <div className="relative w-full h-full">
                  <Image
                    src="/tanuj_cutout.png"
                    alt="Tanuj Kashyap - Software Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 230px, (max-width: 1024px) 280px, 370px"
                    className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(43,24,37,0.3)]"
                  />
                </div>
              </div>

              {/* Tilted Handwritten Text Callout (Permanently tilted at -8deg, static without floating) */}
              <div className="absolute -top-1 sm:top-1 lg:top-8 -right-3 sm:-right-4 lg:left-[350px] xl:left-[380px] lg:right-auto z-30 pointer-events-none select-none whitespace-nowrap scale-[0.72] sm:scale-85 lg:scale-100 origin-top-right lg:origin-top-left hero-fade-3">
                <div className="transform -rotate-8 text-right lg:text-left">
                  <span
                    className="block text-2xl sm:text-3xl lg:text-[32px] text-[#8E3666] font-bold leading-tight drop-shadow-xs"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    Turning
                    <br />
                    Ideas into
                    <br />
                    Real Solutions
                  </span>
                  
                  {/* Hand-drawn scribble underline with self-drawing animation */}
                  <svg
                    className="w-24 sm:w-28 h-3 ml-auto lg:ml-0 mt-0.5 text-[#8E3666] overflow-visible"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C20 3 50 2 98 6C75 10 35 11 15 9"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      className="animate-scribble-draw"
                    />
                  </svg>
                </div>
              </div>

            </div>

            {/* Mobile Stats Dock: Positioned directly under image, half inside & half outside with thin lines and small text (Experience & Location only) */}
            <div className="lg:hidden relative z-30 -mt-6 sm:-mt-8 w-[88%] max-w-[280px] sm:max-w-[320px] mx-auto hero-fade-5">
              <div className="rounded-xl bg-white/95 backdrop-blur-md border border-[#B58AA8]/20 shadow-[0_4px_16px_rgba(75,38,63,0.08)] py-1.5 px-2.5">
                <div className="grid grid-cols-2 divide-x divide-[#B58AA8]/15">
                  
                  {/* Experience */}
                  <div className="flex flex-col items-center justify-center text-center px-2 py-0.5">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#241821] leading-none block">
                      1+
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#8E7485] font-medium leading-tight block mt-0.5 truncate">
                      Years of Experience
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col items-center justify-center text-center px-2 py-0.5">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#241821] leading-none block">
                      Delhi NCR
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#8E7485] font-medium leading-tight block mt-0.5 truncate">
                      Location
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Typography & CTAs: Displayed BELOW the photo on mobile (order-2), left side on desktop (order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:self-center pt-2 sm:pt-4 lg:pt-0 pb-2 sm:pb-4 lg:pb-0">
            
            {/* Small Introductory Text */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#4A3E47] uppercase mb-1.5 sm:mb-2 hero-fade-1">
              HI, I&apos;M
            </span>

            {/* Main Heading: Tanuj Kashyap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight leading-[1.08] mb-2 text-[#241821] hero-fade-2">
              Tanuj{" "}
              <span className="text-[#8E3666]">
                Kashyap
              </span>
            </h1>

            {/* Profession */}
            <div className="text-lg sm:text-2xl lg:text-[28px] font-semibold text-[#2E222B] mb-5 sm:mb-7 lg:mb-8 font-display hero-fade-3">
              Software Developer
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto hero-fade-4">
              {/* Primary CTA: View My Work */}
              <a
                href="#projects"
                className="group relative overflow-hidden px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#5C2849] hover:bg-[#461C36] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_-5px_rgba(92,40,73,0.4)] active:scale-95 cursor-pointer"
              >
                {/* Shimmer light sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              {/* Secondary CTA: Contact Me */}
              <a
                href="#contact"
                className="group px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FFF8F2]/90 hover:bg-[#FFF8F2] border border-[#8E3666]/60 hover:border-[#8E3666] hover:shadow-[0_8px_20px_-4px_rgba(142,54,102,0.25)] text-[#5C2849] font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-xs shadow-xs active:scale-95 cursor-pointer"
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8E3666] -rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-6 transition-transform duration-300" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
