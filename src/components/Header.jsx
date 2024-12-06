import '../styles/components/Header.css'
import React, { useState, useEffect } from 'react';

export  function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav>
            <ul className="nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
            </ul>
          </nav>
        </div>
        <div className="gradient"></div>
      </header>
    );
  }
  