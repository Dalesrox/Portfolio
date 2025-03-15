import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '/assets/images/ml_logo.jpg';
import LogosCarousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Leonardo!</span>
          </h1>
          <h2>Data Scientist & Machine Learning Engineer</h2>
          <p>
            I enjoy transforming data into real, scalable, ethical, and
            sustainable solutions with Python, Machine Learning, and Cloud
            Technologies, creating interactive and interpretable interfaces
            for everyone.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View Projects
            </Link>
            <Link to="/resume" className="secondary-button">
              My Resume
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={profileImage}
            alt="Your profile photo"
            className="profile-image"
          />
        </div>
      </section>
      
      <section className="companies-section">
        <h2>I've worked with:</h2>
        <LogosCarousel />
      </section>

      <section className="specialties-section">
        <h2>Specialties</h2>
        <div className="specialties-grid">
          <div className="specialty-card">
            <div className="specialty-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Machine Learning</h3>
            <p>
              Developing classification, regression, and clustering models
              with scikit-learn, TensorFlow, and PyTorch, with the ability
              to adapt to other frameworks.
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Analysis</h3>
            <p>
              Extracting, cleaning, and visualizing insights from large data
              volumes using tools ranging from pandas or polars to PySpark
              for Big Data cases.
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud Computing</h3>
            <p>
              Certified as a Professional Machine Learning Engineer in
              Google Cloud Platform, capable of building end-to-end projects
              from scratch and deploying them in the cloud (Models, APIs,
              Visualization, and Architecture).
            </p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">
              <i className="fas fa-comment-alt"></i>
            </div>
            <h3>NLP</h3>
            <p>
              Natural Language Processing for sentiment analysis and
              information extraction, using text classification tools, large
              language models (LLMs), transformers, etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
