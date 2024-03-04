import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import clienteAxios from '../../../config/clienteAxios';
import useAuth from '../../../hooks/useAuth';
import Alerta from '../../../componentes/Alerta';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }
        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin/propiedades')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta


  return (
    <div className='login'>
        <h1>Inicia sesión</h1>
        <h2>Completa la información con tus datos</h2>

        {msg && <Alerta alerta={alerta } />}

        <form className="login__formulario" onSubmit={handleSubmit}>
            <div className="login__campo">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Tu email"
                    name="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>
            <div className="login__campo">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Tu password"
                    name="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" className="login__boton" value="Iniciar Sesion"/>
        </form>
    </div>
       
  )
}

export default Login
