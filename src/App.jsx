import React from 'react';
import HeroSection from './components/HeroSection';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <NavigationBar />
      </div>
      <AboutSection />
      <ProjectsSection />
    </>
  );
}

export default App;