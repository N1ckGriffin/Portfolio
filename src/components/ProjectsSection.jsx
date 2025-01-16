import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'A full-stack application built with React and Node.js. Features include user authentication, real-time updates, and a responsive design.',
      imageUrl: '/api/placeholder/600/400',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project Two',
      description:
        'An e-commerce platform with a focus on user experience. Includes a shopping cart, product filtering, and secure payment integration.',
      imageUrl: '/api/placeholder/600/400',
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project Three',
      description:
        'A data visualization dashboard that displays real-time analytics. Built with React and D3.js for interactive charts and graphs.',
      imageUrl: '/api/placeholder/600/400',
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-slate-800 scroll-mt-[52px]"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="space-y-12">
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