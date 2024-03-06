import React from "react";
import { Navbar } from "../Extras/Navbar";
import { Mensaje_error } from "../Extras/Mensaje_error";
import { Mensaje_info } from "../Extras/Mensaje_info";
import { Mensaje_warning } from "../Extras/Mensaje_warning";
import { Mensaje_success } from "../Extras/Mensaje_success";
import './Inicio.css';
import Botones from "./Botones";
import Footer from "../Extras/Footer";

const Inicio = () => {
  return (
    <div className="todo">
      <div className="fondo">
        <Navbar />
        
      </div> 
      <Mensaje_success/>
      <Mensaje_info/>
      <Mensaje_warning/>
      <Mensaje_error/>
      <Footer />
    </div>
  );
};

export default Inicio;
