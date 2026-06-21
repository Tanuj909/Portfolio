import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const steps = ["hero", "about", "work", "skills", "contact"];
  const stepLabels = ["Hero", "About", "Work", "Skills", "Contact"];

  // Scroll to section when sidebar/menu item is clicked
  const handleStepChange = (index) => {
    setActiveStep(index);
    setIsMobileMenuOpen(false);
    const sectionId = steps[index];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Active when element is in the middle of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = steps.indexOf(entry.target.id);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    steps.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-white w-full overflow-x-hidden">

      {/* MOBILE STICKY NAVBAR (Only visible < md) */}
      <header className="md:hidden sticky top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-40">
        <span className="font-bold text-xl text-gray-900 tracking-tight">
          Portfolio
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-30 flex flex-col p-4 space-y-3 shadow-lg"
          >
            {stepLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => handleStepChange(index)}
                className={`py-3 px-4 text-left font-medium rounded-xl transition-all ${
                  activeStep === index
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT SIDEBAR (Only visible on desktop md+) */}
      <div className="hidden md:flex w-[200px] fixed left-8 top-0 min-h-screen flex-col justify-center p-4 z-30">
        <Sidebar activeStep={activeStep} onStepChange={handleStepChange} />
      </div>

      {/* RIGHT CONTENT (SCROLL CONTAINER - Snap only on md+) */}
      <div
        className="flex-1 w-full ml-0 md:ml-[200px] min-h-[calc(100vh-4rem)] md:h-screen overflow-visible md:overflow-y-auto overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth"
      >
        {children}
      </div>

    </div>
  );
};

export default Layout;
