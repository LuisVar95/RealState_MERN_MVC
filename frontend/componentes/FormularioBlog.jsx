import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Alerta from './Alerta';

const FormularioBlog = () => {

    const [id, setId] = useState(null);
    const [titulo, setTitulo] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')

    const {alerta, mostrarAlerta, nuevaEntrada} = useAdmin()
    

    const handleSubmit = async e => {
        e.preventDefault();

        if([titulo, fecha, descripcion].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            
            return
        }

        const formData = new FormData();
        formData.append('id', id);
        formData.append('titulo', titulo);
        formData.append('fecha', fecha);
        formData.append('descripcion', descripcion);
        formData.append('imagen', imagen);

        // Pasar los datos hacia el provider
        await nuevaEntrada(formData)

        setId('');
        setTitulo('');
        setFecha('');
        setDescripcion('')
    }

    const { msg } = alerta

  return (
    <>
        <div className='volver'>
            <Link to="/admin/propiedades" className='volver__boton'>
                Regresar
            </Link>
        </div>

        {msg && <Alerta alerta={alerta}/>}

        <form className="propiedadForm" onSubmit={handleSubmit}>
            <div className="propiedadForm__campo">
                <label htmlFor="title" className="propiedadForm__label">Título de la Entrada:</label>
                    <input
                        type="text"
                        id="title"
                        className="propiedadForm__input"
                        required
                        value={titulo}
                        onChange={ e => setTitulo(e.target.value)}
                    />
            </div>

            <div className="propiedadForm__campo">
                <label htmlFor="title" className="propiedadForm__label">Fecha:</label>
                    <input
                        type="date"
                        id="title"
                        className="propiedadForm__input"
                        required
                        value={fecha}
                        onChange={ e => setFecha(e.target.value)}
                    />
            </div>

            <div className="propiedadForm__campo">
                <label htmlFor="description" className="propiedadForm__label">Descripción de Entrada:</label>
                    <textarea
                        id="description"
                        className="propiedadForm__textarea"
                        required
                        value={descripcion}
                        onChange={ e => setDescripcion(e.target.value)}
                    />
            </div>

            <div className="propiedadForm__campo">
                <label htmlFor="image" className="propiedadForm__label">Imagen de Entrada:</label>
                    <input
                        type="file"
                        id="image"
                        className="propiedadForm__input"
                        name='imagen'
                        onChange={(e) => setImagen(e.target.files[0])}
                    />
            </div>

            <div className="propiedadForm__campo">
                <button type="submit" className="propiedadForm__submit">Submit</button>
            </div>
        </form>
      </>
  )
}

export default FormularioBlog