import React from 'react';
import { Resume as ResumeType } from '../types';
import './Contact.css';

const Contact: React.FC = () => {
  const resume: ResumeType = {
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
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: []
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me for any inquiries or project discussions.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
              </p>
            </div>

            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>{resume.contact.phone}</p>
            </div>

            <div className="contact-method">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>{resume.contact.location}</p>
            </div>

            <div className="contact-method">
              <i className="fab fa-linkedin"></i>
              <h3>LinkedIn</h3>
              <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-method">
              <i className="fab fa-github"></i>
              <h3>GitHub</h3>
              <a href={resume.contact.github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
