import React from 'react'
import Hero from '../Hero'
import Projects from '../section/Projects'
import Skills from '../section/Skills'
import About from '../section/About'
import Contact from '../section/Contact'
import WorkSection from '../section/WorkSection'
import { useRef } from 'react';

const Home = () => {

  const workRef = useRef(null);

  return (
    <div className="w-full flex flex-col">

      <section id="hero" className="min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center w-full">
        <Hero onWorkClick={() => workRef.current?.scrollIntoView({ behavior: "smooth" })} />
      </section>

      <section id="about" className="min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center w-full">
        <About />
      </section>

      <section ref={workRef} id="work" className="min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center w-full">
        <WorkSection />
      </section>

      <section id="skills" className="min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center w-full">
        <Skills />
      </section>

      <section id="contact" className="min-h-screen md:h-screen md:snap-start flex flex-col items-center justify-center w-full">
        <Contact />
      </section>

    </div>
  );
};

export default Home