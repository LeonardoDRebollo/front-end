import "./Asesor.css";
import Footer from "../Extras/Footer";
import Search from "../Extras/svg/Search.svg";
import DocSearch from "../Extras/svg/DocSearch.svg";
import DocStar from "../Extras/svg/DocStar.svg";
import Forms from "../Extras/svg/Forms.svg";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../Extras/Navbar";

function AsesorMenu() {
  return (
    <body>
      <header>
        <Navbar></Navbar>
      </header>

      <div className="row">
        <div className="separator"></div>

        <div className="column">
          <div className="panel-menu">
            <Link to="/asesor/main/Formularios">
              <ul>
                <li>
                  <a>
                    <div className="row">
                      <img src={Forms} className="Icon" />
                      <h4>FORMULARIOS</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </Link>

            <Link to="/asesor/main/Revisionmemorias">
              <ul>
                <li>
                  <a>
                    <div className="row">
                      <img src={DocSearch} className="Icon" />
                      <h4>MEMORIAS EN REVISION</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </Link>

            <Link to="/asesor/main/Memoriasvalidadas">
              <ul>
                <li>
                  <a>
                    <div className="row">
                      <img src={DocStar} className="Icon" />
                      <h4>MEMORIAS VALIDADAS</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </Link>
          </div>

          <div className="separator"></div>

          <div className="consult-button">
            <img src={Search} className="Icon" />
            <h4>CONSULTA DE MEMORIAS</h4>
          </div>
        </div>
        <Outlet />

      </div>

      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default AsesorMenu;
