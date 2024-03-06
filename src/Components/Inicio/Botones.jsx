import React from "react";
import { Link } from 'react-router-dom';

const Botones = () => {
    return (
        <div>
            <Link to="/login"><h1>Login</h1></Link>
            <Link to="/admin"><h1>Admin</h1></Link>
            <Link to="/alumno"><h1>Alumno</h1></Link>
            <Link to="/asesor"><h1>Asesor</h1></Link>
        </div>
    );
};

export default Botones;
