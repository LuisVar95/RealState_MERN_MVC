import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/clienteAxios';


const Contacto = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');
  const [alerta, setAlerta] = useState({})

  const navigate = useNavigate()

  const handleSumbit = async e => {
    e.preventDefault();

    if([nombre, email, motivo].includes('')){
        setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
        });
        return 
    }

    try {
      await clienteAxios.post('/mensajes/nuevo', {nombre, email, telefono, motivo})
      setAlerta({})
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  } 

  return (
    <div className="formulario-contacto">
    <h2 className="formulario-contacto__titulo">Contacto</h2>
      <form className="formulario-contacto__form" onSubmit={handleSumbit}>
          <div className="campo">
            <label htmlFor="name" className="campo__label">Nombre:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                className="campo__input" 
                required 
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="email" className="campo__label">Correo Electrónico:</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                className="campo__input" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="telefono" className="campo__label">Telefono:</label>
            <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                className="campo__input" 
                required 
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
            />
          </div>
          
          <div className="campo">
            <label htmlFor="message" className="campo__label">Mensaje:</label>
            <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="campo__textarea" 
                required
                value={motivo}
                onChange={e => setMotivo(e.target.value)}
                ></textarea>
          </div>

          <button type="submit" className="boton">Enviar Mensaje</button>
      </form>
  </div>
  );
};

export default Contacto;