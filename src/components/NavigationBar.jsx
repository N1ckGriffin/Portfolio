import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsFixed(window.scrollY >= heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isFixed && <div className="h-[52px]" />}
      <nav 
        id="nav"
        className={`w-full bg-white shadow-sm transition-all duration-300 z-50 ${
          isFixed ? 'fixed top-0' : 'relative'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li>
              <a href="#hero" className="text-slate-600 hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-600 hover:text-blue-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-600 hover:text-blue-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-600 hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;