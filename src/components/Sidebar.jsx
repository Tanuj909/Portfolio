//------------------------------------------Making Sidebar as progress Bar/Not Dynamic----------------------------------------------------//
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col '>

//         {/* Step-1  HERO */}
//         <div className='flex items-start cursor-pointer'>

//             <div className='flex flex-col items-center mr-3'>
//                 {/* Circle */}
//                 <div className='w-12 h-12 bg-blue-600 rounded-full'></div>

//                 {/* Line below the circle */}
//                 <div className='w-2 bg-blue-400 h-15 rounded-md mt-2'></div>

//             </div>
//             <p className='mt-2'>Hero</p>
//         </div>

//         {/* Step-2  ABOUT*/}
//         <div className='flex items-start cursor-pointer mt-2'>

//             <div className='flex flex-col items-center mr-3'>
//                 {/* Circle */}
//                 <div className='w-12 h-12 bg-blue-600 rounded-full '></div>

//                 {/* Line below the circle */}
//                 <div className='w-2 bg-blue-400 h-15 rounded-md mt-2'></div>

//             </div>
//             <p className='mt-2'>About</p>
//         </div>

//         {/* Step-3  PROJECTS*/}
//         <div className='flex items-start cursor-pointer mt-2'>

//             <div className='flex flex-col items-center mr-3'>
//                 {/* Circle */}
//                 <div className='w-12 h-12 bg-blue-600 rounded-full '></div>

//                 {/* Line below the circle */}
//                 <div className='w-2 bg-blue-400 h-15 rounded-md mt-2'></div>

//             </div>
//             <p className='mt-2'>Projects</p>
//         </div>

//         {/* Step-4  SKILLS*/}
//         <div className='flex items-start cursor-pointer mt-2'>

//             <div className='flex flex-col items-center mr-3'>
//                 {/* Circle */}
//                 <div className='w-12 h-12 bg-blue-600 rounded-full '></div>

//                 {/* Line below the circle */}
//                 <div className='w-2 bg-blue-400 h-15 rounded-md mt-2'></div>

//             </div>
//             <p className='mt-2'>Skills</p>
//         </div>


//         {/* Step-5  CONTACT*/}
//         <div className='flex items-start cursor-pointer mt-2'>

//             <div className='flex flex-col items-center mr-3'>
//                 {/* Circle */}
//                 <div className='w-12 h-12 bg-blue-600 rounded-full '></div>

//                 {/* Line below the circle */}
//                 {/* <div className='w-3 bg-blue-400 h-20 rounded-md mt-2'></div> */}

//             </div>
//             <p className='mt-2'>Contact</p>
//         </div>

//     </div>
//   )
// }

// export default Sidebar


//------------------------------------------Making Sidebar as progress Bar Compact/Dynamic----------------------------------------------------//
import React from "react";
import { motion } from "framer-motion";

const steps = ["Hero", "About", "Work", "Skills", "Contact"];

const STEP_GAP = 120; // distance between steps (circle + line)

const Sidebar = ({ activeStep, onStepChange }) => {
  return (
    <div className="relative flex flex-col">

      {/* MOVING INDICATOR */}
      <motion.div
        className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-600 z-10"
        animate={{ y: activeStep * STEP_GAP }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      />

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start cursor-pointer relative"
          onClick={() => onStepChange(index)}
        >
          <div className="flex flex-col items-center mr-3">
            {/* STATIC CIRCLE PLACEHOLDER */}
            <div className="w-10 h-10 rounded-full mt-2 bg-gray-300" />

            {/* LINE */}
            {index < steps.length - 1 && (
              <div className="w-2 h-16 mt-2 rounded-md bg-gray-300" />
            )}
          </div>

          <p
            className={`mt-2 transition-colors duration-300 ${activeStep === index ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


