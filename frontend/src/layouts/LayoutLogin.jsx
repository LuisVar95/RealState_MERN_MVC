import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const LayoutLogin = () => {
return (
    <>
        <header className="headerAdmin">
            <Link to='/admin/propiedades'>
                <div className="headerAdmin__logo">
                    <img src="/img/logo.svg" alt="logo real state"/>
                </div>
            </Link>
        </header>
        <main>
            <div className="contenedor">
                <Outlet/>
            </div>
        </main>  
    </>
  )
}

export default LayoutLogin;