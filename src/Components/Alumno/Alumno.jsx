import React from "react";
import { Navbar } from "../Extras/Navbar";
import Section1 from "./AlumnoInicio/Section1";
import Footer from "../Extras/Footer";
// import ActivitySection from "./ActivitySection/ActivitySection";

const Alumno = () => {
    return (
        <div>
        <main className="container">
            <Navbar />
            <Section1 />
            
            {/* <ActivitySection /> */}
        </main>
        <Footer />
        </div>
    );
};

export default Alumno;