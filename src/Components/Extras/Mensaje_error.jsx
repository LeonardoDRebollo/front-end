import React, { useState } from 'react';
import './Utils_Mensajes.css';
import Logo from "../Extras/UPQROO-Logo.png"
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



// NAVBAR DE ASESOR
export const Mensaje_error = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fondo-mensaje-error'>
            <div className='mensaje-container'>
                <div className='titulo-mensaje'>
                  <h1>Error</h1>
                </div>
                <div className='contanido-mensaje'>
                  <p>Ah ocurrido un error del tipo -TIPO_ERROR- por favor intentelo de nuevo</p>    
                </div>                                   
            </div>
        </div>

    );
};