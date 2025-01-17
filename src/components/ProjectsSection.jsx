import React from 'react';
import ProjectCard from './ProjectCard';
import eCommerceApp from '../images/projects/eCommerceApp.png'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Full-stack E-commerce Web Application',
      description: `Full-stack e-commerce application developed with a team using agile methodology. Features user interfaces for managers, cashiers, and customers.

Frontend: React, Tailwind CSS, JavaScript
Backend: Express.js, Node.js, Sequelize, PostgreSQL, JavaScript
External APIs: Google OAuth 2.0, Azure Translate, OpenWeather API`,
      imageUrl: eCommerceApp,
      liveLink: 'https://project-3-team-xc-2.onrender.com/',
      codeLink: 'https://github.com/jooliaju/DoordashMe',
    },
    {
      title: 'Socioeconomic Analysis Software',
      description: `Data analysis tool that processes and visualizes socioeconomic indicators. Built with Python and modern data science libraries.

Tech Stack: Python, Pandas, NumPy, Matplotlib
Features: Data cleaning, statistical analysis, visualization
Database: SQLite for local data storage`,
      imageUrl: '/api/placeholder/600/400',
      liveLink: '#',
      codeLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Real-time Weather Dashboard',
      description: `Interactive weather dashboard providing real-time updates and forecasts. Integrates multiple weather APIs for comprehensive data.

Frontend: React, D3.js, Material-UI
APIs: OpenWeather, WeatherAPI
Features: Location-based updates, 7-day forecast, weather alerts`,
      imageUrl: '/api/placeholder/600/400',
      liveLink: 'https://weather.yourdomain.com',
      codeLink: 'https://github.com/yourusername/project3',
    },
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