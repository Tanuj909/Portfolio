import React, { useState, useEffect, useRef } from "react";
import projects from "../Data/projects";
import { ChevronLeft, ChevronRight, Github, ExternalLink, X, Check, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Project Details Modal Component
const ProjectModal = ({ project, onClose }) => {
  const [showSnapshots, setShowSnapshots] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const nextImg = (e) => {
    e.stopPropagation();
    if (!project.images || project.images.length === 0) return;
    setImgIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (!project.images || project.images.length === 0) return;
    setImgIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl w-full p-6 md:p-8 overflow-y-auto custom-scrollbar max-h-[90vh] flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-white/90 hover:bg-gray-100 text-gray-800 rounded-full shadow-lg border border-gray-200 transition-transform hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded">
                Featured Project
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 leading-snug">
                {project.title}
              </h3>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Overview
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features & Highlights */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Key Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <div className="mt-0.5 p-0.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* View Snapshots Button */}
            {project.images && project.images.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setShowSnapshots(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-md shadow-blue-600/10 hover:shadow-lg active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  View Snapshots
                </button>
              </div>
            )}
          </div>

          {/* Action Links & Footer */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-all text-xs shadow-sm hover:shadow active:scale-95"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all text-xs shadow-md shadow-blue-600/10 hover:shadow-lg active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Snapshots Lightbox Overlay */}
      <AnimatePresence>
        {showSnapshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSnapshots(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Lightbox Button */}
            <button
              onClick={() => setShowSnapshots(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
              aria-label="Close snapshots"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <div
              className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={project.images[imgIndex]}
                  alt={`${project.title} snapshot ${imgIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg transition-transform active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-lg transition-transform active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Info and Indicators */}
            <div
              className="mt-6 text-center text-white space-y-2 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-semibold">
                {project.title} — Snapshot {imgIndex + 1} of {project.images.length}
              </p>
              {project.images.length > 1 && (
                <div className="flex justify-center space-x-1.5 mt-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImgIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        imgIndex === idx ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to snapshot ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const WorkSection = () => {
  const [current, setCurrent] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    setActiveModalProject(null);
  }, [current]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-7xl bg-white pt-16 pb-24 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Featured Work
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Explore some of my recent projects and experiments.
        </p>
      </div>

      {/* SLIDE WRAPPER */}
      <div 
        className="w-full flex justify-center px-4 md:px-12"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
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
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{projects[current].title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">
                  {projects[current].description}
                </p>
              </div>

              {projects[current].techStack && (
                <div className="flex flex-wrap gap-1.5">
                  {projects[current].techStack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {projects[current].techStack.length > 5 && (
                    <span className="px-2.5 py-1 text-gray-400 text-xs font-semibold">
                      +{projects[current].techStack.length - 5} more
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center gap-2 pt-4 w-full">
                {projects[current].github && (
                  <a
                    href={projects[current].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {projects[current].demo && (
                  <a
                    href={projects[current].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-medium transition-colors shadow-lg shadow-blue-600/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(projects[current])}
                  className="px-3.5 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl text-xs font-medium transition-colors ml-auto"
                >
                  More?
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <button
        onClick={prevSlide}
        disabled={current === 0}
        className="absolute top-[50%] left-2 md:left-4 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        disabled={current === projects.length - 1}
        className="absolute top-[50%] right-2 md:right-4 -translate-y-1/2 p-2.5 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

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

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkSection;
