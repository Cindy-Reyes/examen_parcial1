import React, { useState } from 'react';
import './App.css';
import profile from './profile.jpeg';

function App() {
  const [verDescargas, setVerDescargas] = useState(false);
  const nombreAlumno = "Cindy Alejandra reyes Arce ";

  if (verDescargas) {
    return (
      <div className="pantalla-oscura">
        <div className="centro-descargas-directo">
          <h1 className="titulo-seccion">Centro de Descargas</h1>
          <div className="lista-botones">
            
            {/* 1. Comandos React */}
            <a href="/comandos.pdf" download="Comandos_React_Danna_Michell.pdf">
              <button className="btn btn-azul">COMANDOS BÁSICOS DE REACT</button>
            </a>

            {/* 2. ISO / IEEE */}
            <a href="/ieee.pdf" download="ISO_Estándar_IEEE_Cindy_Alejandra_Reyes_Arce.pdf">
              <button className="btn btn-verde">ISO / ESTANDAR IEEE</button>
            </a>

            {/* 3. Requerimientos */}
            <a href="/requerimientos.pdf" download="Requerimientos_Cindy_Alejandra_Reyes_Arce.pdf">
              <button className="btn btn-gris">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button>
            </a>

            {/* 4. Python SHA-256 */}
            <a href="/sha_256.pdf" download="Codigo_Python_SHA256_Cindy_Alejandra_Reyes_Arce.pdf">
              <button className="btn btn-gris">CÓDIGO PYTHON ALGORITMO SHA-256</button>
            </a>

            <button className="btn btn-gris" onClick={() => setVerDescargas(false)} style={{marginTop: '20px', border: '1px solid #555'}}>
              VOLVER AL PERFIL
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={profile} alt="Perfil" className="foto-perfil-simple" />
        <h1 className="evaluacion-texto">EVALUACIÓN PARCIAL 1</h1>
        <p className="alumno-texto">Alumno: {nombreAlumno}</p>
        <div className="enlaces-inferiores">
          <a href="https://www.linkedin.com/in/cindy-alejandra-reyes-arce-6b78383aa/" target="_blank" rel="noreferrer">
            Visitar mi perfil de Linkedin
          </a>
          <button onClick={() => setVerDescargas(true)} className="boton-enlace">
            Documentación Parcial 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;