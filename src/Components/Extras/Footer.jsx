import React from 'react';
import './Footer.css'; // Asegúrate de tener un archivo de estilo para el footer, Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Escuela XYZ</p>
        <p>Dirección: Calle Principal, Ciudad, País</p>
        <p>Teléfono: +123456789</p>
        <p>Email: info@escuelaxyz.com</p>
      </div>
    </footer>
  );
};

export default Footer;
