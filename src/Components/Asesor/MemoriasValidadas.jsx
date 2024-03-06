import { Outlet } from "react-router-dom";

function Memoriasvalidadas() {
  return (
    <body>
      <div className="PrincipalPanel">
        <h3>MEMORIAS VALIDADAS</h3>
        <div className="SecondaryPanel">
          <div className="row">
            <div className="column">
              <h2>Memoria de Carlos</h2>
              <h4>Carlos Alberto Fuentes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                venenatis, porttitor habitant semper malesuada senectus non
                curae, consequat magnis velit taciti maecenas viverra
                ullamcorper. Per porta tempus purus consequat neque risus id
                ultrices justo etiam,
              </p>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </body>
  );
}

export default Memoriasvalidadas;
