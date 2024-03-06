import React from "react";
import "./Asesor.css";
import { Navbar } from "../Extras/Navbar";
import Footer from "../Extras/Footer";
import { Link } from "react-router-dom";
import Search from "../Extras/svg/Search.svg";
import DocSearch from "../Extras/svg/DocSearch.svg";
import DocStar from "../Extras/svg/DocStar.svg";
import Forms from "../Extras/svg/Forms.svg";

const Asesor = () => {
  return (
    <main>
      <Navbar></Navbar>
      <body className="container">
        <div>
          <h1>BIENVENIDO ASESOR</h1>
        </div>

        <div>
          <div className="row">
            <Link to="/asesor/main/Formularios">
              <div className="panel">
                <div className="column">
                  <img src={Forms} className="Big-Icon" />
                  <h4>FORMULARIOS</h4>
                </div>
              </div>
            </Link>

            <Link to="/asesor/main/Revisionmemorias">
              <div className="panel">
                <h4>MEMORIAS EN REVISION</h4>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/asesor/main/Memoriasvalidadas">
              <div className="panel">
                <h4>MEMORIAS VALIDADAS</h4>
              </div>
            </Link>
            <div className="panel">
              <h4>CONSULTA DE MEMORIAS</h4>
            </div>
          </div>
        </div>

        {/* <div className="Horizontal-list">
                <li>
                    <button></button>
                </li>
            </div> */}
      </body>
      <Footer></Footer>
    </main>
  );
};

const Panel = ({ title }) => {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <p>Contenido del panel {title}</p>
    </div>
  );
};

export default Asesor;
