"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ["about", "work", "skills", "philosophy", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Philosophy", href: "#philosophy", id: "philosophy" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#08090B]/85 backdrop-blur-md border-b border-white/[0.07] shadow-lg shadow-black/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Name */}
          <a
            href="#"
            className="group flex flex-col text-white transition-opacity hover:opacity-90"
          >
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-[#00F0FF] transition-colors">
              Tanuj Kashyap
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
              Software Developer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D0F12]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-white bg-white/[0.08] shadow-sm"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Resume */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#12151A] hover:bg-[#181C22] border border-white/10 hover:border-[#00F0FF]/40 text-xs font-mono font-medium text-white transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#00F0FF] group-hover:scale-110 transition-transform" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717A] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-full bg-[#12151A] border border-white/10 text-xs font-mono text-[#00F0FF]"
              aria-label="Resume"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#12151A] border border-white/10 text-white hover:border-[#00F0FF]/40 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08090B]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/[0.06] text-lg font-medium text-white hover:text-[#00F0FF] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#71717A]">#0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 rounded-lg bg-[#12151A] border border-[#00F0FF]/30 text-white font-mono text-sm flex items-center justify-center gap-2 hover:bg-[#181C22] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#00F0FF]" />
              <span>VIEW RESUME (PDF)</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-lg bg-[#00F0FF] text-[#08090B] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#00F0FF]/90 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
