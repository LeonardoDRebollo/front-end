import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../Extras/UPQROO-Logo.png"
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



// NAVBAR DE ASESOR
export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fondo'>
            <div className='logo-container'>
                <Link to='/'><img src={Logo} className='Logo' /></Link>
                <h1> Memorias </h1>

                <div className='user-info'>
                    <div className='user-navbar-container'>
                        <h4>ASESOR ACADEMICO</h4>
                        <p>asesor.software@upqroo.edu.mx</p>
                    </div>
                <FaChevronDown onClick={toggleMenu} />
                <FaUserCircle size={40} />
                </div>
            </div>
        </div>

    );
};
    
    // <div className='bg-black flex justify-center w-full items-center'>
    //   <div className='bg-black w-full h-0.5 opacity-2'></div>
    // </div>
 