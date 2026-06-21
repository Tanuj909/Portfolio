import React from 'react';
import { Check, User } from 'lucide-react';

export default function AboutUsSection() {
  const checkItems = [
    "Skilled in Java, Spring Boot, React.js & SQL — comfortable owning both sides of the stack.",
    "Experienced in designing scalable systems and high-performance REST APIs.",
    "Focus on clean code, optimized performance, and reliable backend architecture.",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white w-full">
      <div className="w-full max-w-5xl">

        {/* Profile Card */}
        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-5 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium text-lg flex-shrink-0">
            FS
          </div>
          <div>
            <p className="font-medium text-gray-900 text-base mb-0.5">Java Backend Developer</p>
            <p className="text-sm text-gray-500">Spring Boot · Microservices · REST APIs · JWT · Redis · MySQL</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
              <span className="text-xs text-gray-400">Open to opportunities</span>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-gray-400 mb-1">Experience</p>
            <p className="text-base font-medium text-gray-900">~1 year</p>
          </div>
        </div>

        {/* Tag */}
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
          Who am I?
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-medium text-gray-900 leading-snug mb-4">
          Crafting scalable &amp; high-performance web applications
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed mb-7">
          Java Backend Developer with 1 year of professional experience, specializing in scalable REST APIs 
          and Microservices using Spring Boot. Proficient in JWT-based security, Redis caching, MySQL 
          optimization, and clean layered architecture. Adept at building secure, maintainable, and 
          production-grade backend systems with a strong focus on performance and scalability.
        </p>

        {/* Check List */}
        <div className="flex flex-col gap-3 mb-7">
          {checkItems.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-7" />

        {/* CTA */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors">
          <User className="w-4 h-4" />
          Know more ↗
        </button>

      </div>
    </div>
  );
}