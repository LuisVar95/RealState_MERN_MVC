import React from 'react'
import { Link } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin';

const Mensajes = () => {

  const {mensajes} = useAdmin();


  return (
    <>
      <h2 className='titulo-mensajes'>MENSAJES </h2>
      <div className='volver'>
              <Link to="/admin/propiedades" className='volver__boton'>
                  Regresar
              </Link>
        </div>
      <div className='mensajes'>
        {mensajes.length ?  
          mensajes.map(mensaje => (
            <Link to={`/admin/mensajes/${mensaje._id}`}>
              <ul className='mensajes__campo'>
                <li className='mensajes__texto'>correo: <span>{mensaje.email}</span></li>
                <li className='mensajes__texto'>telefono: <span>{mensaje.telefono}</span></li>
              </ul>
            </Link>
          )) : <p>No hay Mensajes</p> }
      </div>
    </>
  )
}

export default Mensajes