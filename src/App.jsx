import React from 'react';
import HeroSection from './components/HeroSection';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <NavigationBar />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;