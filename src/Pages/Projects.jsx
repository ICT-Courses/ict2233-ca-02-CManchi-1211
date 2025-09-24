import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard.jsx';

// Manual data for projects since GitHub API fetch isn't working for classroom repos
const projectsData = [
  {
    id: 1,
    name: "Indoor Plant Management System (Desktop Application)",
    image: "/Images/IPMS.jpg",
    description: "A secure, role-based C# .NET desktop application that includes a plant inventory, real-time sales recording, and staff management with low-stock alerts and detailed PDF reports.",
    html_url: "https://github.com/ICT-Courses/application-development-ca1-CManchi-1211"
  },
  {
    id: 2,
    name: "QuoteGallery (React SPA)",
    image: "/Images/QuoteGallery.jpg",
    description: "A responsive React single-page application featuring a dynamic quote display, categorized browsing, and author-specific pages using reusable components like Navbar and QuoteCard.",
    html_url: "https://github.com/ICT-Courses/ict2233-ca-01-CManchi-1211"
  },
{
    id: 3,
    name: "SilkShield-GroupProject (Desktop Application)",
    image: "/Images/SilkShield-GroupProject.jpg",
    description: "A user-friendly C# .NET desktop application that automates invoice generation and total calculations, maintains a secure customer and inventory database, and provides offline access.",
    html_url: "https://github.com/UdeshiEdirisinghe25/SilkShield-New"
  }
];

// List of repositories from the GtHub account and show them in seperate cards
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/CManchi-1211/repos');
        if (!response.ok) {
          setProjects(projectsData);
          throw new Error('Failed to fetch projects from GitHub API.');
        }
        const data = await response.json();
        if (data.length > 0) {
          setProjects(data);
        } else {
          setProjects(projectsData);
        }
      } catch (err) {
        setError(err.message);
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

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
        Here are some of the projects I've worked on.
      </p>
      <div className="themed-card border-2 p-6 b-radius overflow-hidden mt-6">
        <table className="w-full border-collapse border-separate border-spacing-x-25 border-spacing-y-12">
          <tbody>
            {/* Create a new row for every two projects */}
            {projects.reduce((rows, project, index) => {
              if (index % 2 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(project);
              return rows;
            }, []).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((project) => (
                  <td key={project.id} className="p-[100px] align-top text-center">
                    <ProjectCard project={project} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;