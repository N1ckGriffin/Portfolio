import React, { useState, useEffect, useRef } from 'react';

const NavigationBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsFixed(window.scrollY >= heroBottom);
      }
  
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Track middle of viewport
  
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isFixed && <div className="h-[52px] w-full" />}
      <nav
        ref={navRef}
        id="nav"
        className={`w-full bg-slate-900 shadow-lg transition-all duration-300 z-50 h-[52px] flex items-center
          ${isFixed ? 'fixed top-0 left-0 right-0' : 'relative'}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 w-full">
          <ul className="flex justify-center space-x-8">
            <NavigationItem
              id="nav-hero"
              href="#hero"
              active={activeSection === 'hero'}
            >
              Home
            </NavigationItem>
            <NavigationItem
              id="nav-about"
              href="#about"
              active={activeSection === 'about'}
            >
              About
            </NavigationItem>
            <NavigationItem
              id="nav-projects"
              href="#projects"
              active={activeSection === 'projects'}
            >
              Projects
            </NavigationItem>
            <NavigationItem
              id="nav-contact"
              href="#contact"
              active={activeSection === 'contact'}
            >
              Contact
            </NavigationItem>
          </ul>
        </div>
      </nav>
    </>
  );
};

const NavigationItem = ({ id, href, active, children }) => (
  <li>
    <a
      id={id}
      href={href}
      className={`text-slate-300 hover:text-blue-400 transition-colors duration-300 ${
        active ? 'text-blue-400 font-medium' : ''
      }`}
    >
      {children}
    </a>
  </li>
);

export default NavigationBar;