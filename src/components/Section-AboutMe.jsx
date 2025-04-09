import React from 'react';
import '../styles/components/Section-AboutMe.css';

export  function AboutMe() {
  return (

    <div className="container-about">

      <div className="content-about">
        <h2 className="timeline-title">
           Sobre Mi
        </h2>
        
        <div className="profile-section">
          
          <div className="info-box">
            <p className="info-text">
            Desarrollador apasionado por crear experiencias digitales únicas y funcionales. Me motiva transformar ideas en soluciones tecnológicas que impacten positivamente. En un mundo tecnológico que evoluciona constantemente, me mantengo en aprendizaje continuo para adaptarme, innovar y aportar valor en cada proyecto.
            </p>
          </div>

          <div className="profile-image-container">
            <div className='absolute-container'>
              <img
                src="/images/aboutMe.webp"
                alt="Profile"
                className="profile-image1"
                loading="lazy"
              />
              <img
                src="/images/yoGoogle.webp"
                alt="Profile"
                className="profile-image2"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
