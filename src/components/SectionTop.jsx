import '../styles/components/SectionTop.css'

export function SectionTop(){
    return ( <div className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <h1>HOLA, SOY JUAN<br />Autodidacta</h1>
          <p className="role">Desarrollador & Analista</p>
          <button className="status-button">Disponible</button>
        </div>
        <div className="image-section">
          <img src="images/gorilla21.png" alt="Gorilla illustration" />
        </div>
      </div>
      
      <div className="bottom-section">
        <p className="experience-text">
          2 años de experiencia en el desarrollo de Software y analisis<br />
          de datos. Especializado en encontrar soluciones eficientes
        </p>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">
            <img src="images/linkedin.png" alt="" />
          </a>
          <a href="#" aria-label="GitHub">
            <img src="images/github.png" alt="" />
          </a>
          <a href="#" aria-label="GitHub Alternate">
            <img src="images/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
      );
}