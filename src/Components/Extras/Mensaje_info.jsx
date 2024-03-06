import React, { useState } from 'react';
import './Utils_Mensajes.css';
import { FaTimes } from "react-icons/fa";



// NAVBAR DE ASESOR
export const Mensaje_info = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fondo-mensaje-info'>
            <div className='mensaje-container'>
                <div className='body-card-mensaje'>
                <div className='titulo-mensaje'>
                <h1>Informacion</h1>
                </div>
                <div className='contanido-mensaje'>
                  <p>Algo nuevo esta pasando y necesita de tu atencion</p>    
                </div> 
                
                
                </div>  
                <div className='close-button-mensaje'>
                 <button><FaTimes size={20}/></button> 
                </div>                             
            </div>
        </div>

    );
};