import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Alerta from './Alerta';

  const FormularioEditarPropiedad = ({ propiedad, idPropiedad }) => {

    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState('');
    const [estacionamiento, setEstacionamiento] = useState('');
    const [habitaciones, setHabitaciones] = useState('');
    const [wc, setWc] = useState('');

    useEffect(() => {
        if (propiedad) {
            setId(propiedad?._id || '');
            setTitulo(propiedad?.titulo || '');
            setDescripcion(propiedad?.descripcion || '');
            setPrecio(propiedad?.precio || '');
            setEstacionamiento(propiedad?.estacionamiento || '');
            setHabitaciones(propiedad?.habitaciones || '');
            setWc(propiedad?.wc || '');
        }
    }, [idPropiedad]);
    
    
    const {mostrarAlerta, alerta, editarPropiedad} = useAdmin();

    const handleSubmit = async e => {
        e.preventDefault();

        if([titulo, descripcion, precio, estacionamiento, habitaciones, wc].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            
            return
        }

        const formData = new FormData();
        formData.append('id', id);
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('estacionamiento', estacionamiento);
        formData.append('habitaciones', habitaciones);
        formData.append('wc', wc);
        formData.append('imagen', imagen);
    
        // Pasar los datos hacia el provider
        await editarPropiedad(formData, propiedad)

        setId('');
        setTitulo('');
        setDescripcion('');
        setImagen('')
        setPrecio('');
        setEstacionamiento('');
        setHabitaciones('');
        setWc('');
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
                <label htmlFor="title" className="propiedadForm__label">Título de Propiedad:</label>
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
                  <label htmlFor="description" className="propiedadForm__label">Descripción de Propiedad:</label>
                      <textarea
                          id="description"
                          className="propiedadForm__textarea"
                          required
                          value={descripcion}
                          onChange={ e => setDescripcion(e.target.value)}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <label htmlFor="image" className="propiedadForm__label">Imagen de Propiedad:</label>
                      <input
                          type="file"
                          id="image"
                          className="propiedadForm__input"
                          name='imagen'
                          onChange={(e) => setImagen(e.target.files[0])}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <label htmlFor="price" className="propiedadForm__label">Precio de Propiedad:</label>
                      <input
                          type="number"
                          id="price"
                          className="propiedadForm__input"
                          required
                          value={precio}
                          onChange={ e => setPrecio(e.target.value)}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <label htmlFor="estacionamiento" className="propiedadForm__label">Estacionamiento:</label>
                      <input
                          type="number"
                          id="estacionamiento"
                          className="propiedadForm__input"
                          required
                          value={estacionamiento}
                          onChange={ e => setEstacionamiento(e.target.value)}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <label htmlFor="habitaciones" className="propiedadForm__label">Habitaciones:</label>
                      <input
                          type="number"
                          id="habitaciones"
                          className="propiedadForm__input"
                          required
                          value={habitaciones}
                          onChange={ e => setHabitaciones(e.target.value)}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <label htmlFor="wc" className="propiedadForm__label">Baños: </label>
                      <input
                          type="number"
                          id="wc"
                          className="propiedadForm__input"
                          required
                          value={wc}
                          onChange={ e => setWc(e.target.value)}
                      />
              </div>

              <div className="propiedadForm__campo">
                  <button type="submit" className="propiedadForm__submit">Submit</button>
              </div>
          </form>
          </>
      )
  }

export default FormularioEditarPropiedad