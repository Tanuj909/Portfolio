
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInTop = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <p className="text-gray-500 lg:text-4xl uppercase tracking-wider">
              Who am I?
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Crafting Scalable & High-Performance Web Applications
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
I’m a Full Stack Developer with hands-on experience in building efficient, scalable,
  and production-ready web applications. I work across both frontend and backend,
  creating seamless user experiences with React and robust server-side architectures
  using Java and Spring Boot. With almost one year of experience, I focus on clean
  code, optimized performance, and delivering reliable APIs that power modern applications.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-lg">
                  Full Stack Developer With almost 1 year of experience, skilled in Java, Spring Boot, React.js & SQL.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-lg">
                   Experienced in designing scalable systems and high-performance REST APIs.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-lg">
                  Hands-on experience in both frontend and backend development.
                </p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Want to know more?
            </button>
          </motion.div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* Top Image - From Top */}
              <motion.div
                className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInTop}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Image - From Left */}
              <motion.div
                className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInLeft}
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=450&fit=crop"
                  alt="Professional working"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="pt-12">
              {/* Tall Image - From Right */}
              <motion.div
                className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInRight}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop"
                  alt="Focused professional"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}