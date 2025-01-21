import React from 'react';
import ProjectCard from './ProjectCard';
import eCommerceApp from '../images/projects/eCommerceApp.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Full-stack Productivity App',
      description: `Modern productivity application built with Vue.js and Express. Features comprehensive task management, note-taking, and project organization capabilities.

Frontend: Vue.js, Vue Router, CSS3
Backend: Express.js, Node.js, MongoDB, Mongoose
External APIs: Google OAuth 2.0`,
      imageUrl: '/api/placeholder/600/400',
      liveLink: '#',
      codeLink: 'https://github.com/yourusername/productivity-app',
    },
    {
      title: 'Full-stack E-commerce Web Application',
      description: `Full-stack e-commerce application developed with a team using agile methodology. Features user interfaces for managers, cashiers, and customers.

Frontend: React, Tailwind CSS, JavaScript
Backend: Express.js, Node.js, Sequelize, PostgreSQL, JavaScript
External APIs: Google OAuth 2.0, Azure Translate, OpenWeather API`,
      imageUrl: eCommerceApp,
      liveLink: 'https://project-3-team-xc-2.onrender.com/',
      codeLink: 'https://github.com/jooliaju/DoordashMe',
    }
  ];

  return (
    <section 
      id="projects" 
      className="bg-slate-800 scroll-mt-[52px]"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projects
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              imageOnRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;