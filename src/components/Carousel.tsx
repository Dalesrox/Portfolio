import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { Logo } from '../types';

const Carousel: React.FC = () => {
  const logos: Logo[] = [
    {
      id: 1,
      src: '/assets/images/grupo-exito.png',
      alt: 'Grupo Éxito',
      url: 'https://www.grupoexito.com.co/',
    },
    {
      id: 2,
      src: '/assets/images/viva-malls.png',
      alt: 'Viva Malls',
      url: 'https://ccviva.com/',
    },
    {
      id: 3,
      src: '/assets/images/globant-logo.png',
      alt: 'Globant',
      url: 'https://www.globant.com/',
    },
    {
      id: 4,
      src: '/assets/images/magnifai-logo.png',
      alt: 'MagnifAI',
      url: 'https://magnif.ai/es/',
    },
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 500);
      
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="companies-section">
      
      <div className="logos-grid">
        {logos.map((logo, index) => (
          <a
            key={logo.id}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`logo-item ${currentLogoIndex === index ? 'active' : ''}`}
          >
            <div className="logo-frame">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          </a>
        ))}
      </div>
      
      <div className="mobile-carousel">
        <div className="carousel-container">
          <a
            href={logos[currentLogoIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`carousel-item ${isAnimating ? 'fade-out' : 'fade-in'}`}
          >
            <div className="logo-wrapper">
              <img 
                src={logos[currentLogoIndex].src} 
                alt={logos[currentLogoIndex].alt} 
              />
            </div>
          </a>
        </div>
        
        <div className="carousel-indicators">
          {logos.map((_, index) => (
            <div 
              key={index} 
              className={`indicator ${currentLogoIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentLogoIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;