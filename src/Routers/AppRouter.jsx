// import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../Components/Inicio/Inicio';
import Alumno from '../Components/Alumno/Alumno';
import AlumnoMemoria from '../Components/Alumno/ActivitySection/ActivitySection';
import Login from '../Components/Login/Login';
import Admin from '../Components/Administrador/Administrador'
import Asesor from '../Components/Asesor/AsesorMain';
import AsesorMenu from '../Components/Asesor/MenuDashboard';
import RevMemoriesPanel from '../Components/Asesor/RevMemoriesPanel';
import Memoriasvalidadas from '../Components/Asesor/MemoriasValidadas';
import Formularios from '../Components/Asesor/Formularios';
import MemoriaVisualizacion from '../Components/Asesor/VistaMemoria';


export const AppRouter = () => {
    // const { user } = useContext(AuthContext);
  
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/admin' element={<Admin/>}/> 
            <Route path='/alumno' element={<Alumno/>}/>
            <Route path='/alumno/memoria' element={<AlumnoMemoria/>}/>
            <Route path='/asesor' element={<Asesor/>}/>
            <Route path='/asesor/main' element={<AsesorMenu/>}>
                <Route path='Revisionmemorias' element={<RevMemoriesPanel/>}/>
                <Route path='Memoriasvalidadas' element={<Memoriasvalidadas/>}/>
                <Route path='Formularios' element={<Formularios/>}/>
            </Route>
            <Route path='/asesor/viewmemoria' element={<MemoriaVisualizacion/>}/>

            {/* <Route path="/product/:id" element={<Product />} /> */}
            {/* <Route path="/dashboard" element={<PrivateRoutes isAuth={user.logged} element={<Dashboard />} />} /> */}
          </Routes>
        </div>
      </Router>
    );
  };