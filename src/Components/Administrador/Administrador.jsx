import React from "react";
import "../Administrador/Administrador.css";
import logoUpqroo from "../Images/logoupqroo.png";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div className="admin-container">
      {/* Barra superior con opciones */}
      <header className="admin-header">
        <Link to ='/'><img src={logoUpqroo} alt="Universidad Politécnica" /></Link>
        <h1>Memorias Upqroo</h1>
        <button class="Btn">
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="text">Salir</div>
        </button>
      </header>
      {/* Contenido principal */}
      <main className="admin-main">
        <div className="content-container">
          {/* Barra de navegación lateral */}
          <nav className="admin-nav">
            <ul>
              <li>
                <a href="#Inicio">Inicio</a>
              </li>
              <li>
                <a href="#Asesor">Asesor</a>
              </li>
              <li>
                <a href="#Bibliotecario">Bibliotecario</a>
              </li>
              <li>
                <a href="#Memorias">Memorias</a>
              </li>
              <li>
                <a href="#Palabras">Palabras</a>
              </li>
              <li>
                <a href="#Cambios">Cambios</a>
              </li>
            </ul>
          </nav>
            <div class="card-container">
              <div class="card">
                <div class="front-content">
                  <p>Bienvenido</p>
                </div>
                <div class="content">
                  <p class="heading">Bienvenido</p>
                  <p>
                    El administrador, tiene acceso a funciones avanzadas y
                    críticas del sistema. Por favor, tenga cuidado al realizar
                    cambios y asegúrese de comprender el impacto de sus
                    acciones. Recuerde que tiene la responsabilidad de mantener
                    la integridad y seguridad del sistema.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
};

export default Administrador;
