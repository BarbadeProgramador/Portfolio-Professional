'use client'

import { useState } from 'react'
import '../styles/components/Section-project.css'
// import Image from 'next/image'

export function SectionProject() {
  const [filter, setFilter] = useState('profesionales')

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">&lt;/&gt; Proyectos</h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-button ${filter === "profesionales" ? "active" : ""}`}
            onClick={() => setFilter("profesionales")}
          >
            Profesionales
          </button>
          <button 
            className={`filter-button ${filter === "freelance" ? "active" : ""}`}
            onClick={() => setFilter("freelance")}
          >
            Freelance
          </button>
          <button 
            className={`filter-button ${filter === "personales" ? "active" : ""}`}
            onClick={() => setFilter("personales")}
          >
            Personales
          </button>
        </div>

        <div className="projects-grid">
          {filter === "profesionales" && (
            <>
              <div className="project-card">
                <div className="project-image">
                <img src="" 
                alt="" 
                width={585}
                height={200}
                layout="responsive"/>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Kardex</h3>
                  <p className="project-description">Aplicativo para la gestion de entrega de dotacion</p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                {/* <img src="" 
                alt="" 
                width={400}
                height={200}
                layout="responsive"/> */}
                </div>
                <div className="project-info">
                  <h3 className="project-title">Diagramacion Power BI</h3>
                  <p className="project-description">Diagramas BI multiple information</p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                <img src="" 
                alt="" 
                width={585}
                height={200}
                layout="responsive"/>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Kardex</h3>
                  <p className="project-description">Aplicativo para la gestion de entrega de dotacion</p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                <img src="" 
                alt="" 
                width={585}
                height={200}
                layout="responsive"/>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Kardex</h3>
                  <p className="project-description">Aplicativo para la gestion de entrega de dotacion</p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                <img src="" 
                alt="" 
                width={585}
                height={200}
                layout="responsive"/>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Kardex</h3>
                  <p className="project-description">Aplicativo para la gestion de entrega de dotacion</p>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                <img src="" 
                alt="" 
                width={585}
                height={200}
                layout="responsive"/>
                </div>
                <div className="project-info">
                  <h3 className="project-title">Kardex</h3>
                  <p className="project-description">Aplicativo para la gestion de entrega de dotacion</p>
                </div>
              </div>
            </>
          )}
          {filter === "freelance" && (
            <div className="project-card">
              <div className="project-image">
                {/* <img src="" 
                alt="" 
                width={400}
                height={200}
                layout="responsive"/> */}
              </div>
              <div className="project-info">
                <h3 className="project-title">Otech</h3>
                <p className="project-description">Aplicativo para la gestion de Solicitudes y Ordenes de compra</p>
              </div>
            </div>
          )}
          {filter === "personales" && (
            <div className="project-card">
              <div className="project-image">
                {/* <img src="" 
                    alt="" 
                    width={400}
                    height={200}
                    layout="responsive"/> */}
                </div>
              <div className="project-info">
                <h3 className="project-title">Evaluacion digital</h3>
                <p className="project-description">Formulario para calificacion de servicios</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

