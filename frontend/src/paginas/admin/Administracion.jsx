import React from 'react'
import { Link } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin'
import Alerta from '../../../componentes/Alerta'

const Administracion = () => {

    const {propiedades, entradas, eliminarPropiedad, alerta, eliminarEntrada} = useAdmin()

    const handleDeletePropiedad = async (id) => {

        await eliminarPropiedad(id)

    }

    const handleDeleteEntrada = async (id) => {

        await eliminarEntrada(id)
    }

    const {msg} = alerta
    


  return (
    <>
        <div className='adminTittle'>
            <h1>Crea y administra tus propiedades</h1>
        </div>
        <div>
    <div className='crear'>
        <div className="botones-container">
            <Link to="/admin/propiedades/crear" className='crear__boton crear__boton-verde'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 crear__plus">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Nueva Propiedad
            </Link>

            <Link to="/admin/mensajes" className='crear__boton crear__boton-azul'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 crear__icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                Mensajes clientes
            </Link>
        </div>
    </div>
</div>
        <main>

        {msg && <Alerta alerta={alerta}/>}

            <table className="propiedades">
                <thead className='propiedades__head'>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                   {propiedades.length ? 
                        propiedades.map(propiedad => (
                            <tr key={propiedad._id}>
                                <td>{propiedad._id}</td>
                                <td>{propiedad.titulo}</td>
                                <td><img src={`/public/uploads/${propiedad.imagen}`} alt="Propiedad 1" className="propiedades__imagen"/></td>
                                <td>$ {propiedad.precio}</td>
                                <td className='acciones'>
                                    <Link>
                                        <button onClick={() => handleDeletePropiedad(propiedad._id)} className="acciones__botonRojo">Eliminar</button>
                                    </Link>
                                    <Link to={`/admin/propiedades/editar/${propiedad._id}`}>
                                        <button className="acciones__botonAmarillo" value="Editar">Editar</button>
                                    </Link>
                                </td>
                            </tr>
                        )) : <tr><td> No hay Proyectos aun</td></tr>}
                </tbody>
            </table>
        </main>

        <section className='m-b'>
            <div className='adminTittle'>
                <h1>Crea y administra tus Entradas de Blog</h1>
            </div>
                <div className="botones-container">
                <Link to="/admin/blog/crear" className='crear__boton crear__boton-verde'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 crear__plus">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nueva Entrada
                </Link>

            </div>
            <div>
                <table className="propiedades">
                    <thead className='propiedades__head'>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Imagen</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                    {entradas.length ? 
                            entradas.map(entrada => (
                                <tr key={entrada._id}>
                                    <td>{entrada._id}</td>
                                    <td>{entrada.titulo}</td>
                                    <td><img src={`/public/uploads/blog/${entrada.imagen}`} alt="Propiedad 1" className="propiedades__imagen"/></td>
                                    <td>{entrada.fecha}</td>
                                    <td className='acciones'>
                                        <Link>
                                            <button onClick={() => handleDeleteEntrada(entrada._id)} className="acciones__botonRojo">Eliminar</button>
                                        </Link>
                                        <Link to={`/admin/blog/editar/${entrada._id}`}>
                                            <button className="acciones__botonAmarillo">Editar</button>
                                        </Link>
                                    </td>
                                </tr>
                            )) : <tr><td> No hay Entradas aun</td></tr>}
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

export default Administracion