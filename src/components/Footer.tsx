import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Leo's Portfolio</h3>
            <p>Data Scientist | ML Engineer | Python Expert</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Social</h4>
              <ul>
                <li><a href="https://github.com/Dalesrox" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/david-leonardo-espinosa-a88b0a170/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} David Leonardo Espinosa. All rights reserved.</p>
          <p>Created with React, TypeScript, Python, and deployed on Github Pages.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
