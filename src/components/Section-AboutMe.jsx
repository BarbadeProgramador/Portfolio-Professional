import React from 'react';
import '../styles/components/Section-AboutMe.css';

export  function AboutMe() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">
          <span role="img" aria-label="man technologist">👨‍💻</span> Sobre Mi
        </h1>
        
        <div className="profile-section">
          <div className="info-box">
            <p className="info-text">
              Soy un desarrollador apasionado por crear experiencias digitales únicas. 
              Me especializo en desarrollo web frontend con React y tengo experiencia 
              trabajando con diversas tecnologías modernas.
            </p>
            <div>
              <h2 className="skills-title">Habilidades</h2>
              <div className="skills-list">
                {['React', 'TypeScript', 'Next.js', 'CSS', 'Node.js'].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-image-container">
            <img
              src="/images/aboutMe.jpg"
              alt="Profile"
              className="profile-image"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
