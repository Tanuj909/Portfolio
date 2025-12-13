
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import skills from "../Data/skills";

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate categories every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % skills.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
    };

    const currentCategory = skills[activeIndex];

    return (
        <div className="min-h-screen  flex items-center justify-center p-8 overflow-hidden">
            <div className="max-w-7xl w-full">

                {/* Header */}
                <div className="text-center mb-16 space-y-3">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto font-medium"
                    >
                        My comprehensive technical expertise
                    </motion.p>
                </div>

                {/* SPLIT CONTAINER */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: Category HUB */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCategory.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Large Circle Hub */}
                                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-[6px] border-slate-50 relative z-10">
                                    <div className="absolute inset-4 rounded-full border border-slate-100 border-dashed animate-[spin_10s_linear_infinite]"></div>

                                    <img
                                        src={currentCategory.image}
                                        alt={currentCategory.title}
                                        className="w-32 h-32 object-contain mb-4 drop-shadow-md"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                    <h3 className="text-3xl font-bold text-slate-800">{currentCategory.title}</h3>
                                    <span className="text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">
                                        {currentCategory.technologies.length} Technologies
                                    </span>
                                </div>

                                {/* Decorative Blur behind */}
                                <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] z-0 rounded-full"></div>
                            </motion.div>
                        </AnimatePresence>

                        {/* CONTROLS (Below Image) */}
                        <div className="flex gap-6 mt-12">
                            <button
                                onClick={prevSlide}
                                className="bg-white hover:bg-slate-50 p-4 rounded-full shadow-lg border border-slate-200 text-slate-600 transition-all hover:scale-110 active:scale-95 group"
                            >
                                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="bg-white hover:bg-slate-50 p-4 rounded-full shadow-lg border border-slate-200 text-slate-600 transition-all hover:scale-110 active:scale-95 group"
                            >
                                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* DOTS */}
                        <div className="flex justify-center gap-2 mt-6">
                            {skills.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? 'w-8 bg-indigo-600'
                                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Tech GRID */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCategory.id}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 }
                                    },
                                    exit: { opacity: 0 }
                                }}
                                className="grid grid-cols-2 md:grid-cols-3 gap-6"
                            >
                                {currentCategory.technologies.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, scale: 0.9 },
                                            visible: { opacity: 1, y: 0, scale: 1 },
                                        }}
                                    >
                                        <TechCard tech={tech} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Sub-component for individual Tech Cards
const TechCard = ({ tech }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 p-5 flex flex-col items-center gap-4 transition-all duration-300 hover:border-indigo-100 hover:-translate-y-1 group h-full">
            <div className="w-16 h-16 flex items-center justify-center p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-inner transition-colors">
                {!imgError ? (
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className="text-2xl font-bold text-slate-400">
                        {tech.name.charAt(0)}
                    </span>
                )}
            </div>

            <span className="text-base font-semibold text-slate-700 text-center">
                {tech.name}
            </span>
        </div>
    );
};

export default Skills;