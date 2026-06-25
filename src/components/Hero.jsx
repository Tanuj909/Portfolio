import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Sidebar from "./Sidebar";


const Hero = ({onWorkClick}) => {
  return (
    <div className="w-full min-h-screen md:h-screen flex items-center justify-center px-6 md:px-20 pt-20 md:pt-0 bg-white overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-center -translate-y-20 md:-translate-y-8">
        {/* LEFT SIDE – IMAGE WITH RING */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative mb-4 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pothole Ring */}
          <div className="absolute bottom-0 w-44 h-8 sm:w-56 sm:h-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full blur-xl opacity-70"></div>

          {/* IMAGE */}
          <motion.img
            src="/tanuj.png"
            alt="Tanuj"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: -6, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-3 md:space-y-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-blue-600">Tanuj</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Java Developer", 1500,
                "Frontend Developer", 1500,
                "Backend Developer", 1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-xl md:text-3xl font-medium text-blue-600 block mt-3"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
            <motion.button
              onClick={onWorkClick}
              className="group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.a
              href="/TANUJ_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-semibold border-2 border-gray-100 hover:border-gray-200 shadow-sm hover:shadow transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
