import React from 'react';
import Notifications from './Notifications';
import Memory from './Memory';
import './ActivitySection.css'; // Asegúrate de crear este archivo CSS para tus estilos de la sección de actividad
import { Navbar } from '../../Extras/Navbar';
import Footer from '../../Extras/Footer';

function ActivitySection() {
    return (
        <div >
            <Navbar/>
            <div>
                <h1>MI ACTIVIDAD</h1>
            </div>
            <div className="activity-section">
                <Notifications />
                <Memory />
                
            </div>
            <Footer />
        </div>
    );
}

export default ActivitySection;
