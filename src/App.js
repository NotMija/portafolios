import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={process.env.PUBLIC_URL + '/tu-foto.jpg'} 
          alt="Tu nombre" 
          className="profile-pic" 
        />
        <h1>Adrian Mijarra</h1>
        <p>Una breve descripción sobre ti.</p>
        <div className="buttons">
          <a 
            href="https://www.linkedin.com/in/adrian-mijarra-5bb0812b0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-link"
          >
            <FaLinkedin size={40} />
          </a>
          <a 
            href="mailto:adrian.mijarra@gmail.com" 
            className="button-link"
          >
            <FaEnvelope size={40} />
          </a>
          <a 
            href="/path/to/CV.pdf" 
            download
            className="button-link"
          >
            Descargar CV
          </a>
        </div>
        <h2>Mis Proyectos</h2>
        <ul>
          <li>
            <a 
              href="https://github.com/tu-usuario/proyecto1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={20} /> Proyecto 1
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/tu-usuario/proyecto2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={20} /> Proyecto 2
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
