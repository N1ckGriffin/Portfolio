import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Git', icon: '📂' },
    { name: 'Python', icon: '🐍' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="aspect-square w-48 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            
            <p className="text-slate-600 leading-relaxed">
              A passionate front end developer with a deep interest in creating 
              intuitive and efficient web applications. I bring a strong foundation 
              in modern web technologies and a keen eye for design to every project 
              I undertake.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Skills & Technologies
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md 
                           transition-shadow duration-300 text-center"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="text-slate-700 font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;