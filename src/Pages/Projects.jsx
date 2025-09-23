import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard.jsx';

// Get a list of repositories in the GtHub account and show them seperate cards
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://github.com/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch projects.');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []); // The empty array ensures this effect runs only once, on component mount.

  if (loading) {
    return (
      <div className="page-container pt-10 text-center text-gray-600 dark:text-gray-300">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container pt-10 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="page-container pt-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">My Projects</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
        Here are some of the projects I've worked on. Note that some are private, so they won't be shown here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;