import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { GithubProject } from '../types';
import './Projects.css';

interface ProjectsProps {
  projects: GithubProject[];
  loading: boolean;
  error: string | null;
}

const Projects: React.FC<ProjectsProps> = ({ projects, loading, error }) => {
  const [filter, setFilter] = useState<string>('');
  const [activeTopic, setActiveTopic] = useState<string>('');

  const languages = Array.from(new Set(projects.map(p => p.language).filter(Boolean)));
  
  const allTopics = projects.reduce((acc: string[], project) => {
    project.topics.forEach(topic => {
      if (!acc.includes(topic)) {
        acc.push(topic);
      }
    });
    return acc;
  }, []);
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = filter === '' || 
      project.name.toLowerCase().includes(filter.toLowerCase()) ||
      (project.description && project.description.toLowerCase().includes(filter.toLowerCase()));
    
    const matchesTopic = activeTopic === '' || 
      project.topics.includes(activeTopic);
    
    return matchesSearch && matchesTopic;
  });

  if (loading) {
    return <div className="loading-container"><div className="loader"></div></div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="projects-container">
      <h2>My Data Science Projects</h2>
      
      <div className="projects-filter">
        <input
          type="text"
          placeholder="Search projects..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
        
        <div className="topics-filter">
          <button 
            className={`topic-button ${activeTopic === '' ? 'active' : ''}`}
            onClick={() => setActiveTopic('')}
          >
            All
          </button>
          
          {allTopics.slice(0, 8).map(topic => (
            <button
              key={topic}
              className={`topic-button ${activeTopic === topic ? 'active' : ''}`}
              onClick={() => setActiveTopic(topic === activeTopic ? '' : topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <p className="no-projects">No projects found matching your criteria.</p>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;