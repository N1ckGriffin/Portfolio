import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) {
        const navPosition = nav.offsetTop;
        setIsSticky(window.scrollY >= navPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="nav"
      className={`w-full bg-white z-50 ${
        isSticky ? 'fixed top-0' : 'relative'
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
  );
};

export default NavigationBar;