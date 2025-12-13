import React, { useState, useEffect, useRef } from "react";
import projects from "../Data/projects";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WorkSection = () => {
  const [current, setCurrent] = useState(0);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);
  const isUnlocked = useRef(false);
  const unlockTimer = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Reset lock when slide changes
  useEffect(() => {
    isUnlocked.current = false;
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
  }, [current]);

  // 🚀 SCROLL HANDLER
  useEffect(() => {
    const handleScroll = (event) => {
      const isScrollingDown = event.deltaY > 0;
      const isAtLastSlide = current === projects.length - 1;
      const isAtFirstSlide = current === 0;

      // ===============================
      // 🔒 EDGE LOCK LOGIC
      // ===============================

      // Check if we are trying to leave the carousel boundary
      if ((isAtLastSlide && isScrollingDown) || (isAtFirstSlide && !isScrollingDown)) {

        // If explicitly unlocked by a pause/timeout, allow the natural scroll (exit section)
        if (isUnlocked.current) {
          return;
        }

        // otherwise, BLOCK the scroll and start/reset the "deliberate pause" timer
        event.preventDefault();


        if (unlockTimer.current) clearTimeout(unlockTimer.current);

        // User must stop scrolling for 100ms to unlock the exit
        unlockTimer.current = setTimeout(() => {
          isUnlocked.current = true;
        }, 100);

        return;
      }

      // ===============================
      // 🎠 NORMAL CAROUSEL SCROLL
      // ===============================

      // If we are inside the carousel moving slides, always block page scroll
      isUnlocked.current = false; // Re-lock just in case
      event.preventDefault();

      if (Math.abs(event.deltaY) > 20 && !scrollTimeout.current) {
        if (isScrollingDown) {
          nextSlide();
        } else {
          prevSlide();
        }

        scrollTimeout.current = setTimeout(() => {
          scrollTimeout.current = null;
        }, 700);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, [current]);


  return (
    <div ref={containerRef} className="relative w-full max-w-7xl bg-white py-20 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Featured Work
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Explore some of my recent projects and experiments.
        </p>
      </div>

      {/* SLIDE WRAPPER */}
      <div className="w-full flex justify-center px-4 md:px-12">
        <AnimatePresence mode="wait">
          <div key={current} className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT: IMAGE (Vertical Animation) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group perspective-1000"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT: CONTENT (Horizontal Animation) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">{projects[current].title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed line-clamp-2">
                  {projects[current].description}
                </p>
              </div>

              {projects[current].techStack && (
                <div className="flex flex-wrap gap-2">
                  {projects[current].techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-4">
                {projects[current].github && (
                  <a
                    href={projects[current].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {projects[current].demo && (
                  <a
                    href={projects[current].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}

                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md ">
                  More?
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-[60%] lg:top-1/2 left-4 md:left-8 -translate-y-1/2 p-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-[60%] lg:top-1/2 right-4 md:right-8 -translate-y-1/2 p-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === idx ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
