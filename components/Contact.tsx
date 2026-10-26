"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { profileData } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
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
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please check server email credentials in .env.local or email me directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8E3666] font-semibold px-3 py-1 rounded-full bg-[#FCECEE] border border-[#B58AA8]/40 shadow-xs">
            Contact
          </span>
          <div className="h-[1px] bg-[#B58AA8]/30 w-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Inquiries & Email Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#241821] leading-[1.12] mb-3">
                Let&apos;s build something{" "}
                <span className="text-[#5C2849] relative inline-block">
                  meaningful.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#8E3666] to-transparent rounded-full" />
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#634E5D] leading-relaxed">
                Whether you have a full-time role, a backend architectural challenge, or a contract project in mind, I&apos;d love to connect.
              </p>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-wider text-[#8E7485] font-semibold">
                  Direct Email Channel
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#8E3666] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#8E3666] animate-pulse" />
                  Responds in 24 hours
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#B58AA8]/25 shadow-xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="p-2 rounded-xl bg-[#FCECEE] text-[#8E3666] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#30252E] truncate font-medium">
                    {profileData.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-xl bg-[#FCECEE] hover:bg-[#F8D5C9] text-xs font-mono text-[#5C2849] flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#8E3666]" />
                        <span className="text-[#8E3666]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="px-3 py-1.5 rounded-xl bg-[#5C2849] hover:bg-[#441D36] text-xs font-medium text-[#FFF8F2] flex items-center gap-1 transition-colors shadow-xs"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/80 border border-[#B58AA8]/25 hover:border-[#8E3666]/50 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#FCECEE] text-[#5C2849]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#241821]">Connect on LinkedIn</h4>
                    <span className="text-[11px] font-mono text-[#8E7485]">tanuj-kashyap-909934275</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E7485] group-hover:text-[#5C2849] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-[#B58AA8]/30 p-6 sm:p-10 shadow-sm">
              
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8E3666] font-bold mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Message</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FFF8F2] border border-[#8E3666]/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#FCECEE] text-[#8E3666] flex items-center justify-center mx-auto border border-[#B58AA8]/40 shadow-xs">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#241821]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#634E5D] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. An automated confirmation email has been dispatched to your inbox, and I will review your message within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-full bg-[#5C2849] text-xs font-medium text-[#FFF8F2] hover:bg-[#441D36] transition-colors shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-[#FCECEE] border border-[#8E3666]/40 text-xs text-[#5C2849] flex items-start gap-2">
                      <span className="font-bold">Notice:</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#634E5D] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#B58AA8]/30 text-xs sm:text-sm text-[#241821] placeholder-[#8E7485] focus:border-[#5C2849] focus:ring-2 focus:ring-[#5C2849]/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#634E5D] mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#B58AA8]/30 text-xs sm:text-sm text-[#241821] placeholder-[#8E7485] focus:border-[#5C2849] focus:ring-2 focus:ring-[#5C2849]/15 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#634E5D] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity / Architecture Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#B58AA8]/30 text-xs sm:text-sm text-[#241821] placeholder-[#8E7485] focus:border-[#5C2849] focus:ring-2 focus:ring-[#5C2849]/15 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#634E5D] mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share a brief overview of your project, scope, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-[#B58AA8]/30 text-xs sm:text-sm text-[#241821] placeholder-[#8E7485] focus:border-[#5C2849] focus:ring-2 focus:ring-[#5C2849]/15 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#5C2849] hover:bg-[#441D36] text-[#FFF8F2] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(92,40,73,0.25)] hover:shadow-[0_6px_20px_rgba(68,29,54,0.35)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#F8D5C9]" />
                        <span>Send Message</span>
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
