// import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './Routers/AppRouter'
// import { AuthContext, authReducer } from './Components/Login';
// import { Navbar } from './Components/Extras/Navbar';
import Inicio from './Components/Inicio/Inicio';


// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }


export const App = () => {
    
    // const [ user, dispatch ] = useReducer(authReducer, {}, init);

    // useEffect(() => {
    //     localStorage.setItem( 'user', JSON.stringify(user) );
    // }, [user])

    return (
        <AppRouter></AppRouter>

        // <AuthContext.Provider value={{ user, dispatch }}>
        //     <AppRouter />
        // </AuthContext.Provider>
        // <Inicio></Inicio>

    )
}

export default App