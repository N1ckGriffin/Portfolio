import React from 'react';

const ProjectCard = ({ title, description, imageUrl, liveLink, codeLink, imageOnRight }) => {
  const contentOrder = imageOnRight ? 'order-1' : 'order-2';
  const imageOrder = imageOnRight ? 'order-2' : 'order-1';

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12">
      {/* Project Info */}
      <div className={`w-full md:w-1/2 ${contentOrder}`}>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="whitespace-pre-line text-gray-300 mb-8">{description}</p>
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-slate-500 text-slate-300 rounded hover:border-slate-400 hover:text-white transition-colors duration-300"
          >
            View Code
          </a>
        </div>
      </div>

      {/* Project Image */}
      <div className={`w-full md:w-1/2 ${imageOrder}`}>
        <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;