import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './index.css';

const App = () => {
  return (
    <div>
      <HeroSection />
      <NavigationBar />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;