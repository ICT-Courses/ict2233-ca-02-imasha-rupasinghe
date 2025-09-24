// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  const [publicRepos, setPublicRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Manual projects
  const manualProjects = [
    {
      id: 'manual-1',
      name: 'MotivateME-motivation App',
      description: 'stand alone application developed using c# and wpf as a university assignment.',
      html_url: 'https://github.com/ICT-Courses/application-development-ca1-imasha-rupasinghe.git',

    },
    {
      id: 'manual-2',
      name: 'SilkSheild-Invoice generator',
      description: 'A full-stack desktop application built for SilkShield(pvt)Ltd.',
      html_url: 'https://github.com/UdeshiEdirisinghe25/SilkShield-New.git',
    },
    {
      id: 'manual-3',
      name: 'Personal Portfolio website',
      description: 'a website that developed with javascript,vite and tailwind css',
      html_url: 'https://github.com/ICT-Courses/ict2233-ca-02-imasha-rupasinghe.git',
    },
  ];

  useEffect(() => {
    const fetchPublicRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/imasha-rupasinghe/repos');
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setPublicRepos(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicRepos();
  }, []);

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">My Projects</h2>
      
      {/* Manually Listed Projects */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {manualProjects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>

      <hr className="border-t border-gray-700 my-8" />
      
      {/* Dynamically Fetched Public Repositories */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">Other Public Repositories</h3>
      {loading ? (
        <div className="text-center p-4 text-gray-400">Loading public repositories...</div>
      ) : error ? (
        <div className="text-center p-4 text-red-400">Error fetching repositories: {error}</div>
      ) : publicRepos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicRepos.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center p-4 text-gray-400">No public repositories found for your username.</div>
      )}
    </div>
  );
};

export default Projects;