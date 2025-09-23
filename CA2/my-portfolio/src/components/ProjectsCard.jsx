
import React from 'react';

const ProjectsCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-pink-500">{project.name}</h3>
      <p className="text-gray-400 mb-4">{project.description || 'No description provided.'}</p>
      <a 
        href={project.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-purple-400 hover:text-purple-500 font-semibold transition-colors duration-200"
      >
        View on GitHub &rarr;
      </a>
    </div>
  );
};

export default ProjectsCard;