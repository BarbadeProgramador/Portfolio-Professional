'use client'

import '../styles/components/Section-project.css'
import { Projects_Professional, Projects_Freelance, Projects_personal } from '../data/Data'
import { Card } from './Card-Project'
import { useState } from 'react'

export function SectionProject() {
  const [filter, setFilter] = useState('profesionales')

  const Professional = Projects_Professional
  const Freelance = Projects_Freelance
  const Personal = Projects_personal

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
          {filter === "profesionales" &&
            Professional.map((project, index) => (
              <Card key={index} data={project} />
            ))}

          {filter === "freelance" &&
            Freelance.map((project, index) => (
              <Card key={index} data={project} />
            ))}

          {filter === "personales" &&
            Personal.map((project, index) => (
              <Card key={index} data={project} />
            ))}
        </div>
      </div>
    </section>
  )
}
