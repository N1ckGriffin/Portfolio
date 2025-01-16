import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <NavigationBar />
      </div>
      <AboutSection />
    </>
  );
}

export default App;