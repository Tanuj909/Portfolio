import React from 'react'
import Hero from '../Hero'
import Projects from '../section/Projects'
import Skills from '../section/Skills'
import About from '../section/About'
import Contact from '../section/Contact'
import WorkSection from '../section/WorkSection'

const Home = () => {
  return (
    <div className=''>

<section id="hero" className="h-screen snap-start">
  <Hero />
</section>

<section id="about" className="h-screen snap-start">
  <About />
</section>

<section id="work" className="h-screen snap-start">
  <WorkSection />
</section>

<section id="skills" className="h-screen snap-start">
  <Skills />
</section>

<section id="contact" className="h-screen snap-start">
  <Contact />
</section>

    </div>
  )
}

export default Home