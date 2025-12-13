import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
    Frontend: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Framer Motion",
    ],
    Backend: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "JPA",
        "Hibernate",
        "REST APIs",
    ],
    Database: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
    ],
    Tools: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
        "Docker (Basic)",
    ],
};

const categories = Object.keys(skillsData);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    // Calculate position for a skill based on its index and total count
    const getPosition = (index, total) => {
        const radius = 180; // Distance from center
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top (-90deg)
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center min-h-screen justify-center overflow-hidden">

            {/* SECTION TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Skills
            </h2>

            {/* CATEGORY BUTTONS (Preserved Style) */}
            <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-20">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full font-medium transition
              ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* ORBITAL LAYOUT CONTAINER */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">

                {/* Central Category Hub */}
                <motion.div
                    key={activeCategory}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-10 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-xl border-4 border-blue-50 flex items-center justify-center text-center p-4"
                >
                    <span className="text-xl font-bold text-blue-600">
                        {activeCategory}
                    </span>
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-100 animate-ping opacity-20" />
                    <div className="absolute -inset-4 rounded-full border border-dashed border-gray-200" />
                </motion.div>

                {/* Orbiting Skills */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + "-orbit"}
                        className="absolute inset-0"
                        initial={{ opacity: 0, rotate: -20 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {skillsData[activeCategory].map((skill, index) => {
                            const total = skillsData[activeCategory].length;
                            const pos = getPosition(index, total);

                            return (
                                <motion.div
                                    key={skill}
                                    className="absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg border border-gray-100 text-sm font-semibold text-gray-800 text-center p-2 hover:scale-110 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                                    style={{
                                        left: `calc(50% + ${pos.x}px)`,
                                        top: `calc(50% + ${pos.y}px)`,
                                        marginLeft: "-48px", // Half width to center
                                        marginTop: "-48px", // Half height to center
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: index * 0.1
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Fallback Warning (Optional visual check, mostly handled by responsive sizing) */}
            </div>

        </div>
    );
};

export default Skills;
