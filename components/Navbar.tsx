"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 260) {
        setActiveSection("hero");
        return;
      }

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Resume", href: "#resume", id: "resume", isResumeAction: true },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#FFF8F2]/90 backdrop-blur-md border-b border-[#B58AA8]/20 shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="flex items-center text-2xl font-bold tracking-tight">
              <span className="text-[#30252E]">T</span>
              <span className="text-[#B58AA8]">K</span>
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#2B222A]">
              Tanuj Kashyap
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              if (link.isResumeAction) {
                return (
                  <button
                    key={link.id}
                    onClick={onOpenResume}
                    className="relative text-sm font-medium text-[#4A3E47] hover:text-[#8E3666] transition-colors py-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    isActive ? "text-[#241821] font-semibold" : "text-[#4A3E47] hover:text-[#8E3666]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8E3666] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume Pill Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/Resume/Resume.pdf"
              download="Tanuj_Kashyap_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5C2849] hover:bg-[#461C36] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded-full bg-[#5C2849] text-white text-xs font-semibold"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/70 border border-[#B58AA8]/30 text-[#2B222A]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FFF8F2]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E7485] mb-2 px-2">
              Navigation
            </span>
            {navLinks.map((link) => {
              if (link.isResumeAction) {
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-between py-3 px-3 rounded-xl border-b border-[#B58AA8]/15 text-left text-base font-medium text-[#30252E] hover:text-[#8E3666]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#8E7485]">View</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-xl border-b border-[#B58AA8]/15 text-base font-medium text-[#30252E] hover:text-[#8E3666]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#8E7485]">#{link.id}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4">
            <a
              href="/Resume/Resume.pdf"
              download="Tanuj_Kashyap_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#5C2849] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
