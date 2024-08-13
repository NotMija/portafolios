import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={process.env.PUBLIC_URL + '/tu-foto.jpg'} alt="Tu nombre" className="profile-pic" />
        <h1>Tu Nombre</h1>
        <p>Una breve descripción sobre ti.</p>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/adrian-mijarra-5bb0812b0/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tu-email@example.com">Correo</a>
          <a href="/path/to/CV.pdf" download>Descargar CV</a>
        </div>
        <h2>Mis Proyectos</h2>
        <ul>
          <li><a href="https://github.com/tu-usuario/proyecto1" target="_blank" rel="noopener noreferrer">Proyecto 1</a></li>
          <li><a href="https://github.com/tu-usuario/proyecto2" target="_blank" rel="noopener noreferrer">Proyecto 2</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
