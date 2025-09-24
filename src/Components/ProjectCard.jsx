import React from 'react';


// Display Project Details
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300">
      {/* Add image at the top of the card */}
      <img src={project.image} alt={project.name} className="w-full h-auto object-cover" />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description || 'No description available.'}</p>
        <div className="flex space-x-4">
          {project.html_url && (
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;