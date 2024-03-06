import React from 'react';
import './Section1.css'; // Tus estilos actualizados estarán aquí
import { Link } from 'react-router-dom';
import Image from '../../Images/descarga.png'

function MainContent() {
  return (
    <div className="main-content">
      <div className="message">
        <h1>Bienvenido "Alumno"</h1>
      </div>
      <div className="content-sections">
        <div className="student-data">
        <h2>Nombre del alumno</h2>
            <p>Correo institucional:</p>
            <p>202100000@upqroo.edu.mx</p>
            <p>Matrícula:</p>
            <p>202100000</p>
            <button class="btn btn-primary"> Formulario (Activacion de memoria)</button>
          
        </div>
        <Link to='/alumno/memoria' onClick={handleCardClick}>
        <div className="memory-card">
            <div>
            <img src={Image} className='Image'/>
            </div>
            <div className='contenido'>
          <h3>Nombre/Titulo de la memoria</h3>
          <p>Contenido de memoria/descripcion</p>
        </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

function handleCardClick() {
  // La lógica para manejar el clic en la tarjeta
}

export default MainContent;
