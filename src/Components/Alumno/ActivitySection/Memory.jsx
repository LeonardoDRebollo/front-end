import React from 'react';
import './Memory.css'; // Crea este archivo para los estilos de la memoria

function Memory() {
    return (
        <div className="memory">
            <h3>Mi memoria</h3>
            <div className="memory-content">
                <h4>Memoria de Alumno</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                {/* Más contenido de la memoria aquí */}
            </div>
        </div>
    );
}

export default Memory;
