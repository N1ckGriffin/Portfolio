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

      // Track active section
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
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
        className={`w-full bg-slate-900 shadow-md transition-all duration-300 z-50 h-[52px] flex items-center ${
          isFixed ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
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
  <div
    id={id}
    className={`navigation__item text-gray-300 hover:text-blue-400 transition-colors duration-200 ${
      active ? 'text-blue-400 font-medium' : ''
    }`}
  >
    <a href={href}>{children}</a>
  </div>
);

export default NavigationBar;