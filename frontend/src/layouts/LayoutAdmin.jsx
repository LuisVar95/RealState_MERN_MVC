import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";


const LayoutAdmin = () => {

    const {cerrarSesionPropiedades} = useAdmin()
    const {auth, cargando, cerrarSesionAuth} = useAuth();
    if(cargando) return 'Cragando...'

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionPropiedades()
    }


    return (
    <>
        {auth._id ? (
            <>
                <header className="headerAdmin">
                    <Link to='/admin/propiedades'>
                        <div className="headerAdmin__logo">
                            <img src="/img/logo.svg" alt="logo real state"/>
                        </div>
                    </Link>
                    <div>
                        <button onClick={handleCerrarSesion} className="headerAdmin__boton">Cerrar Sesion</button>
                    </div>
                </header>
                <main>
                    <div className="contenedor">
                        <Outlet/>
                    </div>
                </main>  
            </>
        ) : <Navigate to="/login"/>}
    </>
  )
}

export default LayoutAdmin;