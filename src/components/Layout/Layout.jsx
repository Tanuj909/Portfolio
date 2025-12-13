import React from 'react'
import Sidebar from '../Sidebar'
import { useState } from 'react';

const Layout = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["hero", "about", "work", "skills", "contact"];

  // Scroll to section when sidebar item is clicked
  const handleStepChange = (index) => {
    setActiveStep(index);
    const sectionId = steps[index];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Improved scroll logic to avoid "stuttering" or fighting with click scroll is usually handled by 
  // temporarily disabling scroll listener or just letting it settle. 
  // For this simple implementation, the above `useEffect` might fight if not careful, 
  // but let's try a standard IntersectionObserver approach which is often cleaner.

  // Re-writing the useEffect to be more robust with IntersectionObserver
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
    <div className="flex">

      {/* LEFT SIDEBAR */}
      {/* FIXED SIDEBAR */}
      <div className="w-[200px] fixed left-8 top-0 min-h-screen 
                      flex flex-col justify-center p-4">

        <Sidebar activeStep={activeStep} onStepChange={handleStepChange} />

      </div>
      {/* RIGHT CONTENT */}
      {/* RIGHT CONTENT (SCROLL SNAP CONTAINER) */}
      <div
        className="flex-1 ml-[200px] h-screen overflow-y-scroll overflow-x-hidden
             snap-y snap-mandatory scroll-smooth"
      >
        {children}
      </div>


    </div>
  )
}

export default Layout
