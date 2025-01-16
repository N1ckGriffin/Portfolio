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

const AboutSection = () => {
  const columnOne = [
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'CSS', icon: css },
  ];

  const columnTwo = [
    { name: 'HTML', icon: html },
    { name: 'Node.js', icon: nodejs },
    { name: 'Python', icon: python },
    { name: 'Git', icon: git },
  ];

  const columnThree = [
    { name: 'Java', icon: java },
    { name: 'C++', icon: cplusplus },
    { name: 'R', icon: r },
  ];

  const SkillIcon = ({ skill }) => (
    <div className="flex flex-col items-center mb-10">
      <div className="p-5 bg-slate-700 border border-slate-500 rounded-lg">
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="w-14 h-14 object-contain"
        />
      </div>
      <span className="mt-3 text-base text-slate-300">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-slate-800 scroll-mt-[52px]"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="aspect-square w-56 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
            <p className="text-slate-300 text-lg leading-relaxed">
              A passionate front end developer with a deep interest in creating
              intuitive and efficient web applications. I bring a strong foundation
              in modern web technologies and a keen eye for design to every project
              I undertake.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 items-start justify-items-center">
            <div className="flex flex-col items-center mt-8">
              {columnOne.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>

            <div className="flex flex-col items-center">
              {columnTwo.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>

            <div className="flex flex-col items-center mt-8">
              {columnThree.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;