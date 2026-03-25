import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HeroSection } from './Hero'
import { ProjectSection } from './ProjectSection'
import { AboutMe } from './About'
import { Contact } from './Contact'

import Logo from './assets/personal_logo.svg?react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="top" className="h-0"/>

    <div className="p-5 sticky top-0">
      <Logo className="w-10 h-10 hover:opacity-70 transition duration-200 ease-out cursor-pointer" onClick={() => scrollToSection("top")}/>
    </div>

    <section>
      <HeroSection />
    </section>

    <div className="h-100"/>

    <section id="about">
      <AboutMe />
    </section>

    <div className="h-10"/>

    <section id="projects">
      <ProjectSection />
    </section>

    <div className="h-100"/>

    <section id="contact">
      <Contact />
    </section>

  </StrictMode>,
)
