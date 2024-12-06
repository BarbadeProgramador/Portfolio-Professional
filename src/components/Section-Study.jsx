import React from 'react';
import '../styles/components/Section-Study.css';

export  function Study() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Estudios</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Desarrollador Full Stack</h3>
            <h4>TechInnovate Solutions</h4>
            <p className="timeline-date">2021 - Presente</p>
            <p className="timeline-description">
              Desarrollo y mantenimiento de aplicaciones web escalables utilizando React, Node.js y MongoDB. Implementación de nuevas características y optimización del rendimiento de las aplicaciones existentes.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Analista de Datos Junior</h3>
            <h4>DataInsight Corp</h4>
            <p className="timeline-date">2019 - 2021</p>
            <p className="timeline-description">
              Análisis de grandes conjuntos de datos utilizando Python y SQL. Creación de dashboards interactivos con Tableau para presentar insights a los stakeholders. Colaboración en proyectos de machine learning para predicción de tendencias de mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}