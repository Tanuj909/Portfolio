"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { profileData } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out directly via email.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
            {"// 05. CONTACT & COLLABORATION"}
          </span>
          <div className="h-[1px] bg-white/[0.08] w-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline & Direct Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-white leading-[1.08] mb-4">
                LET&apos;S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-white to-[#38BDF8]">
                  SOMETHING USEFUL.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-lg leading-relaxed">
                Have a project in mind, an architectural challenge to solve, or looking to hire a dedicated software developer? Let&apos;s start a conversation.
              </p>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0D0F12] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                  DIRECT EMAIL CHANNEL
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#10B981]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  RESPONDS WITHIN 24 HOURS
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#00F0FF] shrink-0" />
                  <span className="text-sm font-mono text-white truncate">
                    {profileData.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="px-3.5 py-1.5 rounded-lg bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-xs font-semibold text-[#08090B] flex items-center gap-1 transition-colors"
                  >
                    <span>COMPOSE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Connections */}
            <div className="space-y-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0F12] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-[#00F0FF]" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Connect on LinkedIn</h4>
                    <span className="text-[10px] font-mono text-[#71717A]">tanuj-kashyap-909934275</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0F12] border border-white/[0.08] shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>SEND DIRECT DISPATCH</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#12151A] border border-[#10B981]/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">
                    Dispatch Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                    Thank you for connecting. An automated confirmation email has been sent to your inbox, and I will reach out to you within <span className="text-[#00F0FF] font-medium">24 hours</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/[0.06] text-xs font-mono text-white hover:bg-white/10 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#FCA5A5] flex items-start gap-2">
                      <span className="font-bold">Error:</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-[#12151A] border border-white/[0.08] focus:border-[#00F0FF] focus:outline-none text-xs sm:text-sm text-white placeholder-[#71717A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#12151A] border border-white/[0.08] focus:border-[#00F0FF] focus:outline-none text-xs sm:text-sm text-white placeholder-[#71717A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase mb-1.5">
                      Project Details / Inquiry
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Brief overview of project scope, timelines, or technology requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-[#12151A] border border-white/[0.08] focus:border-[#00F0FF] focus:outline-none text-xs sm:text-sm text-white placeholder-[#71717A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-[#08090B] font-semibold text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.25)] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SENDING DISPATCH...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
