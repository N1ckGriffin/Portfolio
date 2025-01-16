import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white">Hello, I'm </span>
          <span className="text-blue-400">Nicholas Griffin</span>
          <span className="text-white">.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-300 mb-12">
          I'm an aspiring software developer.
        </h2>
        
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg 
                     hover:bg-blue-600 transition-colors duration-300"
        >
          View my work
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;