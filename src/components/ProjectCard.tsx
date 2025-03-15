import React from 'react';
import { GithubProject } from '../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: GithubProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
        {project.language && (
          <span className="project-language">{project.language}</span>
        )}
      </div>
      
      <p className="project-description">
        {project.description || 'No description available'}
      </p>
      
      <div className="project-topics">
        {project.topics.slice(0, 4).map((topic, index) => (
          <span key={index} className="topic-tag">
            {topic}
          </span>
        ))}
      </div>
      
      <div className="project-stats">
        <span className="project-updated">
          Updated: {formatDate(project.updated_at)}
        </span>
      </div>
      
      <div className="project-links">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
        {project.homepage && (
          <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;