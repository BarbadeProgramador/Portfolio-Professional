import '../styles/components/SectionTop.css'
import { SplitText }  from './ui/Split';

export function SectionTop(){
    return ( 
    <div className="hero-container">
      
      <div className="hero-content">
        <div className="text-section">
          <h1>Hola, Soy <span>Juan Sebastian Rodriguez</span></h1>
          <p className="role"><span>Desarrollador &</span> Analista</p>
          <div className='button-container'>
          <button className="status-button">Disponible para trabajar</button>
          </div>      
          
        </div>

        <div className="image-section">
          <img src="images/budaimagen.png" alt="Gorilla illustration" className='image-gorilla' />
        </div>
        
      </div>


      
      
      <div className="bottom-section">
        <p className="experience-text">
          2 años de experiencia en el desarrollo de Software y analisis<br />
          de datos. Especializado en encontrar soluciones eficientes
        </p>
        
        <div className="social-links">
        <button className="status-technology">LinkedIn</button>
        <button className="status-technology">Gitgub</button>
        <button className="status-technology">Correo</button>
          {/* <a href="#" aria-label="LinkedIn">
            <img src="images/linkedin.png" alt="" />
          </a>
          <a href="#" aria-label="GitHub">
            <img src="images/github.png" alt="" />
          </a>
          <a href="#" aria-label="GitHub Alternate">
            <img src="images/github.png" alt="" /> */}
          {/* </a> */}
        </div>
      </div>
    </div>
      );
}