import React from 'react';
import cplusplus from '../images/tech/cplusplus.svg';
import css from '../images/tech/css.svg';
import git from '../images/tech/git.svg';
import html from '../images/tech/html.svg';
import java from '../images/tech/java.svg';
import javascript from '../images/tech/javascript.svg';
import nodejs from '../images/tech/nodejs.svg';
import python from '../images/tech/python.svg';
import r from '../images/tech/r.svg';
import react from '../images/tech/react.svg';
import vue from '../images/tech/vue.svg';
import tailwind from '../images/tech/tailwind.svg';
import profile from '../images/profile.svg';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'CSS', icon: css },
    { name: 'Vue', icon: vue },
    { name: 'HTML', icon: html },
    { name: 'Node.js', icon: nodejs },
    { name: 'Python', icon: python },
    { name: 'Git', icon: git },
    { name: 'Java', icon: java },
    { name: 'C++', icon: cplusplus },
    { name: 'R', icon: r },
    { name: 'Tailwind', icon: tailwind },
  ];

  const SkillIcon = ({ skill }) => (
    <div className="flex flex-col items-center">
      <div className="p-5 bg-slate-700 border border-slate-500 rounded-lg">
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="w-14 h-14 object-contain"
        />
      </div>
      <span className="mt-3 text-base text-slate-300 text-center">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section
      id="about"
      className="bg-slate-800 scroll-mt-[52px]"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-36 items-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="aspect-square w-56 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full relative">
              <img 
                src={profile} 
                alt="Profile"
                className="absolute inset-0 w-full h-full p-8"
              />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed text-left">
            Fully committed to the idea of lifelong learning, I'm a software developer with a deep passion to create intuitive and engaging 
            frontend experiences, build robust and efficient backend systems, and leverage data science to uncover insights and drive data-informed decisions. When I'm 
            not working I like to spend my time keeping fit, reading, talking sports and film, traveling, and experiencing new things. 
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {skills.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;