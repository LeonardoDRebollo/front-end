import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Navbar } from "../Extras/Navbar";
import "./Memoria.css";
import "./Asesor.css";
import Next from "../Extras/svg/Next.svg";
import Previous from "../Extras/svg/Previous.svg";
import Back from "../Extras/svg/Back.svg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"></script>;

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;

class MemoriaVisualizacion extends React.Component {
  render() {
    return (
      <body>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", marginRight: "10px" }}>
            <iframe
              title="PDF Viewer"
              src="https://www.st-georges-wrotham.kent.sch.uk/assets/Documents/Attachments/dummy.pdf"
              width="100%"
              height="700px"
            />
          </div>

          <div style={{ width: "50%" }} className="background">
            <div className="info-header">
              <img src={Back} className="Icon" />
            </div>
            <div className="info-title">
              <h2>MEMORIA DE CARLOS ALBERTO</h2>
            </div>

            <div className="more-info">
              <div className="row">
                <div className="column">
                  <h3>NOMBRE COMPLETO</h3>
                  <h4>Carlos Alberto Fuentes</h4>
                </div>

                <div className="column">
                  <h3>MATRICULA</h3>
                  <h4>202100114</h4>
                </div>

                <div className="column">
                  <h3>PROGRAMA EDUCATIVO</h3>
                  <h4>ING. EN SOFTWARE</h4>
                </div>
              </div>
            </div>

            <div className="resume">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                venenatis, porttitor habitant semper malesuada senectus non
                curae, consequat magnis velit taciti maecenas viverra
                ullamcorper. Per porta tempus purus consequat neque risus id
                ultrices justo etiam,
              </p>
            </div>

            <div className="buttons">
              <div className="row">
                <a href="#" class="buttonClassSuccess">
                  Aceptar memoria
                </a>
                <a href="#" class="buttonClassWrong">
                  Rechazar memoria
                </a>
              </div>
            </div>

            <div className="separator"></div>

            <div className="pagination">
              <img src={Previous} className="Icon" />
              <img src={Next} className="Icon" />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default MemoriaVisualizacion;
