import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { GithubProject } from './types';
import './App.css';

const App: React.FC = () => {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const githubUsername = 'dalesrox';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Error fetching GitHub projects');
        }
        
        const data = await response.json();
        
        const filteredProjects = data
          .filter((project: any) => !project.fork && !project.private)
          .map((project: any) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            html_url: project.html_url,
            language: project.language,
            stargazers_count: project.stargazers_count,
            forks_count: project.forks_count,
            updated_at: project.updated_at,
            topics: project.topics,
            homepage: project.homepage
          }));
        
        setProjects(filteredProjects);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  return (
    <Router basename='/portfolio'>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/projects" 
              element={<Projects projects={projects} loading={loading} error={error} />} 
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;