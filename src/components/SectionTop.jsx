import '../styles/components/SectionTop.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaFilePdf } from "react-icons/fa";
import { SplitText } from './ui/Split';

export  function  SectionTop() {

  return (
    
    <div className="hero-container" >

      <div className="hero-content" > 

        <div className='content-message' data-aos="fade-up">
          <p><span>"Imagina sin límites y actúa con decisión..." </span> - Brain Tracy</p>
        </div>

        <div className="text-section"  >
          <div className='content-name' >
            <h1>Hola, Soy <span>Juan Sebastian Rodriguez</span></h1>
          </div>
          <p className="role"><strong><span>Desarrollador &</span> Analista</strong></p>
          {/* <div className='button-container'>
            <button className="status-button">
              Disponible
            </button>

          </div> */}

        </div>

        <div className="image-section">
          <img src="images/budaimagen.webp" alt="Buda illustration" className='image-gorilla' />
        </div>

      </div>




      <div className="bottom-section">
        <p className="experience-text">
          <span>2 años de experiencia</span> en el desarrollo de Software y analisis<br />
          de datos. Especializado en encontrar soluciones eficientes
        </p>

        <div className="social-links">

          <a href="/files/Curriculum-JuanRV.pdf" download>
            <button className="icon-button" aria-label="Curriculum">
              <FaFilePdf size={32} />
            </button>
          </a>


          <a href="https://www.linkedin.com/in/juanserod/" target="_blank" rel="linekdin">
            <button className="icon-button" aria-label="LinkedIn">
              <FaLinkedin size={32} />
            </button>
          </a>

          <a href="https://github.com/BarbadeProgramador" target="_blank" rel="git">
            <button className="icon-button" aria-label="GitHub">
              <FaGithub size={32} />
            </button>
          </a>

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