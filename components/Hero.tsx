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

        {/* Crisp subtle bottom edge blend into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFF8F2] to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-end">
          
          {/* Photo Column: Displayed FIRST on mobile (order-1), right side on desktop (order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex items-end justify-center lg:justify-start lg:pl-6 xl:pl-10">
            
            {/* Circular Backdrop + Cutout Container (Responsive sizes) */}
            <div className="relative w-[230px] h-[260px] sm:w-[280px] sm:h-[320px] lg:w-[370px] lg:h-[430px] flex items-end justify-center">
              
              {/* Concentric Circle Backdrops */}
              <div className="absolute top-2 sm:top-4 lg:top-7 w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] lg:w-[345px] lg:h-[345px] flex items-center justify-center pointer-events-none">
                
                {/* Outer Thin Concentric Orbital Ring */}
                <div className="absolute inset-[-10px] sm:inset-[-12px] lg:inset-[-14px] rounded-full border border-white/35 pointer-events-none" />

                {/* Inner Translucent Tinted Circular Disc */}
                <div
                  className="w-full h-full rounded-full shadow-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(133, 54, 100, 0.45) 0%, rgba(92, 41, 74, 0.62) 65%, rgba(68, 29, 54, 0.78) 100%)",
                  }}
                />
              </div>

              {/* Tanuj's Cutout Portrait */}
              <div className="relative z-10 w-[92%] sm:w-[90%] lg:w-[92%] h-[96%] sm:h-[98%] lg:h-[100%] flex items-end justify-center pointer-events-none">
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

              {/* Tilted Handwritten Text Callout (Responsive scaling & positioning) */}
              <div className="absolute -top-1 sm:top-1 lg:top-8 -right-3 sm:-right-4 lg:left-[350px] xl:left-[380px] lg:right-auto z-30 pointer-events-none select-none transform rotate-[-8deg] whitespace-nowrap scale-[0.72] sm:scale-85 lg:scale-100 origin-top-right lg:origin-top-left">
                <div className="text-right lg:text-left">
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
                  
                  {/* Hand-drawn scribble underline */}
                  <svg
                    className="w-24 sm:w-28 h-3 ml-auto lg:ml-0 mt-0.5 text-[#8E3666]"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C20 3 50 2 98 6C75 10 35 11 15 9"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>

          {/* Typography & CTAs: Displayed BELOW the photo on mobile (order-2), left side on desktop (order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:self-center pt-2 sm:pt-4 lg:pt-0 pb-2 sm:pb-4 lg:pb-0">
            
            {/* Small Introductory Text */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#4A3E47] uppercase mb-1.5 sm:mb-2">
              HI, I&apos;M
            </span>

            {/* Main Heading: Tanuj Kashyap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight leading-[1.08] mb-2 text-[#241821]">
              Tanuj{" "}
              <span className="text-[#8E3666]">
                Kashyap
              </span>
            </h1>

            {/* Profession */}
            <div className="text-lg sm:text-2xl lg:text-[28px] font-semibold text-[#2E222B] mb-5 sm:mb-7 lg:mb-8 font-display">
              Software Developer
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* Primary CTA: View My Work */}
              <a
                href="#projects"
                className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#5C2849] hover:bg-[#461C36] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Contact Me */}
              <a
                href="#contact"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FFF8F2]/90 hover:bg-[#FFF8F2] border border-[#8E3666]/60 hover:border-[#8E3666] text-[#5C2849] font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-xs shadow-xs active:scale-95 cursor-pointer"
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8E3666] -rotate-12" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
