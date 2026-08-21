import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Expertise2 from './components/Expertise2';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Credentials from './components/Credentials';
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveChatbot from './components/InteractiveChatbot';
import { contactData } from './data/contact';

function App() {
  // Section refs for navigation
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    portfolio: useRef(null),
    credentials: useRef(null),
    vision: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    if (sectionRefs[sectionName]?.current) {
      sectionRefs[sectionName].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="scroll-container">
        <Navigation scrollToSection={scrollToSection} />
      <section id="hero" ref={sectionRefs.hero}>
        <Hero scrollToSection={scrollToSection} />
      </section>
      <section id="about" ref={sectionRefs.about}>
        <About scrollToSection={scrollToSection} />
      </section>
      <section>
        <Expertise scrollToSection={scrollToSection} />
      </section>
      <section>
        <Expertise2 scrollToSection={scrollToSection} />
      </section>
      <section id="skills" ref={sectionRefs.skills}>
        <Skills />
      </section>
      <section id="education" ref={sectionRefs.education}>
        <Education />
      </section>
      <section id="experience" ref={sectionRefs.experience}>
        <Experience />
      </section>
      <section id="portfolio" ref={sectionRefs.portfolio}>
        <Portfolio />
      </section>
      <section id="credentials" ref={sectionRefs.credentials}>
        <Credentials />
      </section>
      <section id="vision" ref={sectionRefs.vision}>
        <VisionMission />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <Contact />
      </section>
      <Footer
        leftLinks={[
          { href: '/resume.pdf', label: 'Resume' },
          { href: contactData.linkedin, label: 'LinkedIn' },
          { href: contactData.github, label: 'GitHub' },
        ]}
        rightLinks={[
          { href: contactData.twitter, label: 'Twitter' },
          { href: `mailto:${contactData.email}`, label: 'Email' },
          { href: `tel:${contactData.phone.replace(/\s+/g, '')}`, label: 'Phone' },
        ]}
        copyrightText={`Abhijeet Singh ${new Date().getFullYear()}. All Rights Reserved`}
        barCount={23}
      />
      <InteractiveChatbot />
    </div>
    </>
  );
}

export default App;
