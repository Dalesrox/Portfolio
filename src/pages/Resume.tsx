import React, { useState } from 'react';
import { Resume as ResumeType } from '../types';
import './Resume.css';

const Resume: React.FC = () => {
  const [resume] = useState<ResumeType>({
    name: "David Leonardo Espinosa Rodríguez",
    title: "Data Scientist | Machine Learning Engineer | Python Expert",
    summary: "Data Scientist with over 4 years of experience in developing and implementing analytical solutions and machine learning models. Specialized in natural language processing, computer vision, and predictive analytics. Expert in Python and cloud technologies.",
    contact: {
      email: "david.leonardo.espinosa@hotmail.com",
      phone: "+57 313 285 5274",
      location: "Medellín, Colombia",
      linkedin: "https://www.linkedin.com/in/david-leonardo-espinosa-a88b0a170/",
      github: "https://github.com/Dalesrox"
    },
    experience: [
      {
        company: "Globant",
        position: "SSR-ADV Data Scientist",
        period: "Mar 2024 - Present",
        description: [
          "The MagnifAI Project: https://magnif.ai/es/, which accelerates the testing process in Dev teams by 4x and reduces task accomplishment time by 56%.",
          "Developing end-to-end agentic systems leveraging Large Language Models (LLMs) for the automated generation of test cases from user histories in seconds.",
          "Improved visual testing algorithms using Convolutional Neural Networks and OpenCV, achieving a +20% accuracy."
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "Podman", "OpenCV", "FastAPI", "Autogen", "LLMs"]
      },
      {
        company: "Grupo Éxito - Viva Malls",
        position: "Data Scientist",
        period: "Oct 2020 - Mar 2024",
        description: [
          "Invoices register time went from 48 hours to 2 minutes using our custom pipeline to read and interpret texts from images sent via WhatsApp, self-register invoices in our CRM and communicate benefits to customers.",
          "Discovered +400 hot spots for creating retail stores in Colombia using a Machine Learning + Spatial analysis-based project (our own designed ANN evaluated with cross validated ROC AUC).",
          "Handled 4 billion rows datasets and extracted insights as quickly as possible (in minutes), using GCP's infrastructure (Python + GCP Bigquery + GCP Dataproc + GCP Cloud Storage).",
          "Extracted, transformed, and loaded 2M sale and rental price data points for houses, offices, and empty plots in Colombia, using Web Scraping (Python) and visualization in PowerBI."
        ],
        technologies: ["PowerBI", "Python", "Scikit-learn", "SQL", "Pandas", "Rabbit-MQ", "Tensorflow", "Google Cloud Platform", "BigQuery", "Dataproc", "PySpark", "Selenium"]
      }
    ],
    education: [
      {
        institution: "Universidad Pontificia Bolivariana",
        degree: "Industrial Engineer",
        period: "2016 - 2020",
        description: ["Certified in data analysis for solving industry problems."]
      },
      {
        institution: "Google",
        degree: "Professional Machine Learning Engineer (exp. 2025-2027)",
        period: "2025",
        description: [
          "A Professional Machine Learning Engineer builds, evaluates, productionizes, and optimizes ML models using Google Cloud technologies and proven models and techniques.",
          "Also handles large, complex datasets and creates repeatable, reusable code.",
          "Considers responsible AI and fairness throughout the ML model development process, collaborating closely with other roles to ensure the long-term success of ML-based applications."
        ]
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["Python", "R", "SQL", "TypeScript"]
      },
      {
        category: "Machine Learning & Data Science",
        items: ["Scikit-learn", "TensorFlow", "PySpark", "SparkNLP", "PyTorch", "Pandas", "NumPy", "Keras", "NLTK", "SpaCy"]
      },
      {
        category: "Cloud & DevOps",
        items: ["GCP", "Docker", "Kubernetes", "CI/CD", "MLOps"]
      },
      {
        category: "Data Visualization",
        items: ["Matplotlib", "Streamlit", "Seaborn", "Plotly", "Tableau", "Power BI"]
      }
    ],
    certifications: [
      "Google Professional Machine Learning Engineer",
      "AI Agents in LangGraph",
      "Pytorch Ultimate 2024",
      "Architecting with Google Kubernetes Engine: Foundations",
      "Google Core Fundamentals",
      "Advanced PowerBI",
      "Linux"
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional (C1)" }
    ]
  });

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1vck4Bs97RBNr2XXEE24an7ymj7GJjRYg/view?usp=sharing", "_blank");
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="resume-header-content">
          <h1>{resume.name}</h1>
          <h2>{resume.title}</h2>
          <p className="resume-summary">{resume.summary}</p>
        </div>
        <div className="resume-actions">
          <button onClick={downloadResume} className="download-button">
            See my resume
          </button>
        </div>
      </div>

      <div className="resume-content">
        <div className="resume-sidebar">
          <section className="contact-section">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>{resume.contact.phone}</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{resume.contact.location}</span>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a href={resume.contact.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              </li>
            </ul>
          </section>

          <section className="skills-section">
            <h3>Skills</h3>
            {resume.skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="certifications-section">
            <h3>Certifications</h3>
            <ul className="certification-list">
              {resume.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>

          <section className="languages-section">
            <h3>Languages</h3>
            <ul className="languages-list">
              {resume.languages.map((lang, index) => (
                <li key={index}>
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="resume-main">
          <section className="experience-section">
            <h3>Professional Experience</h3>
            {resume.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4>{exp.position}</h4>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="technology-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="education-section">
            <h3>Education</h3>
            {resume.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h4>{edu.degree}</h4>
                  <div className="institution-info">
                    <span className="institution-name">{edu.institution}</span>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
