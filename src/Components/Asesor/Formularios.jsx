import { Outlet } from "react-router-dom";

function Formularios() {
  return (
    <body>
      <div className="PrincipalPanel">
        <h3>FORMULARIOS</h3>
        <div className="FormPanel">
          <div className="column">
            <div className="Info-container">
              <h4>NOMBRE DEL ALUMNO</h4>
              <p>Carlos Alberto Fuentes</p>
              <br />
              <h4>MATRICULA</h4>
              <p>202100114</p>
            </div>
          </div>
        </div>
        <div className="FormPanel">
          <div className="column">
            <div className="Info-container">
              <h4>NOMBRE DEL ALUMNO</h4>
              <p>Carlos Alberto Fuentes</p>
              <br />
              <h4>MATRICULA</h4>
              <p>202100114</p>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </body>
  );
}

export default Formularios;
