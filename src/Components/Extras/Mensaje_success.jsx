import React, { useState } from 'react';
import './Utils_Mensajes.css';
import Logo from "../Extras/UPQROO-Logo.png"
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



// NAVBAR DE ASESOR
export const Mensaje_success = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fondo-mensaje-success'>
            <div className='mensaje-container'>
                <div className='titulo-mensaje'>
                  <h1>Exito</h1>
                </div>
                <div className='contanido-mensaje'>
                  <p>La accion tuvo exito</p>    
                </div>                                   
            </div>
        </div>

    );
};