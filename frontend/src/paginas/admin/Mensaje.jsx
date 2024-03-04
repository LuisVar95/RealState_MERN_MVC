import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from '../../../config/clienteAxios';
import useAdmin from '../../../hooks/useAdmin';


const Mensaje = () => {
    const { id } = useParams();
    const [mensaje, setMensaje] = useState([]);

    const {eliminarMensaje} = useAdmin();

useEffect(() => {
    const obtenerMensaje = async () => {
        try {
            const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

            const {data} = await clienteAxios(`/mensajes/${id}`, config)
            setMensaje(data)
        } catch (error) {
            
        }
    }
    obtenerMensaje();
}, [id]);

const handleEliminarMensaje = async (id) => {
    await eliminarMensaje(id)

  }


return (
    <>
        <div className='inbox'>
            <div className='inbox__grid'>
                <ul className='inbox__campo'>
                    <h2 className='inbox__heading'>Datos Personales </h2>
                    <li className='inbox__li'>nombre: <span>{mensaje.nombre}</span></li>
                    <li className='inbox__li'>Correo de contacto: <span>{mensaje.email}</span></li>
                    <li className='inbox__li'>Telefono: <span>{mensaje.telefono}</span></li>
                </ul>
                
                <ul className='inbox__campo'>
                    <h2 className='inbox__heading'>Datos extra </h2>
                    <ul>
                        <li className='inbox__li'>Fecha: <span>{mensaje.createdAt}</span></li>
                    </ul>
                    <button onClick={() => handleEliminarMensaje(id)} className='inbox__boton'>Eliminar</button>
                </ul>
            </div>

            <div className='inbox__motivo'>
                <h2 className='inbox__heading'>Motivo</h2>
                <p>{mensaje.motivo}</p>
            </div>
        </div>
    </>
  )
}

export default Mensaje