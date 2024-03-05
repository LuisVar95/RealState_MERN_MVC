import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';
import useAuth from "../hooks/useAuth";


const AdminContext = createContext();

const AdminProvider = ({children}) => {

    const [propiedades, setPropiedades] = useState([]);
    const [propiedadesSlice, setPropiedadesSlice] = useState([]);
    const [propiedadesPublic, setPropiedadesPublic] = useState([]);
    const [propiedad, setPropiedad] = useState({});
    const [cargando, setCargando] = useState(false);
    const [mensajes, setMensajes] = useState([]);
    const [entradas, setEntradas] = useState([]);
    const [entrada, setEntrada] = useState({})
    const [entradasSlice, setEntradasSlice] = useState([]);
    const [entradasPublic, setEntradasPublic] = useState([]);
    
    const [alerta, setAlerta] = useState({});
    
    const navigate = useNavigate();
    const { auth } = useAuth()

    /***********  Propiedades  *********** */

    useEffect(() => {
        const obtenerPropiedadesSlice = async () => {
            try {
                const { data } = await clienteAxios('/propiedades')
                setPropiedadesSlice(data.slice(0, 6))
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPropiedadesSlice()
    }, [])

    useEffect(() => {
        const obtenerPropiedades = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/propiedades', config)
                setPropiedades(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPropiedades()
    }, [auth])

    useEffect(() => {
        const obtenerPropiedadesPublic = async () => {
            try {
                const { data } = await clienteAxios('/propiedades')
                setPropiedadesPublic(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPropiedadesPublic()
    }, [])




    const obtenerPropiedad = async id => {
        setCargando(true)
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            } 

            const { data } = await clienteAxios.get(`/propiedades/${id}`, config)
            setPropiedad(data)
            setAlerta({})
        } catch (error) {
            navigate('/admin/propiedades')
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        } finally {
            setCargando(false)
        }
    }

    const nuevaPropiedad = async formData => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/propiedades/crear', formData, config)

            setPropiedades([...propiedades, data])

            setAlerta({
                msg: 'Propiedad Creada Correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    const editarPropiedad = async (formData, propiedad) => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.put(`/propiedades/editar/${propiedad._id}`, formData, config)

            // Sincronizar el state
            const propiedadesActualizadas = propiedades.map(propiedadState => propiedadState._id === data._id ? data : propiedadState)
            setPropiedades(propiedadesActualizadas)

            setAlerta({
                msg: 'Propiedad Actualizada Correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarPropiedad = async id => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/propiedades/eliminar/${id}`, config)

            // Sincronizar el state
            const propiedadesActualizadas = propiedades.filter(propiedadState => propiedadState._id !== id)
            setPropiedades(propiedadesActualizadas);

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    /***********  Mensajes  *********** */

    useEffect(() => {
        const obtenerMensajes = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios('/mensajes', config)
                setMensajes(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerMensajes()
    }, [auth])


    const eliminarMensaje = async id => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/mensajes/${id}`, config)

            // Sincronizar el state
            const mensajesActualizados = mensajes.filter(mensajeState => mensajeState._id !== id)
            setMensajes(mensajesActualizados);

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 200)
        } catch (error) {
            console.log(error)
        }
    }

    /***********  Entradas  *********** */

    useEffect(() => {
        const obtenerEntradas = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios('/blog', config)
                setEntradas(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEntradas()
    }, [auth])


    useEffect(() => {
        const obtenerEntradasSlice = async () => {
            try {
                const {data} = await clienteAxios('/blog')
                setEntradasSlice(data.slice(0, 3))
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEntradasSlice()
    }, [])

    useEffect(() => {
        const obtenerEntradasPublic = async () => {
            try {
                const {data} = await clienteAxios('/blog')
                setEntradasPublic(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEntradasPublic()
    }, [])

    const obtenerEntrada = async id => {
        console.log('entrando')
        setCargando(true)
        try {
            console.log('entrando')
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            } 

            const { data } = await clienteAxios.get(`/blog/${id}`, config)
            setEntrada(data)
            setAlerta({})
        } catch (error) {
            navigate('/admin/propiedades')
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        } finally {
            setCargando(false)
        }
    }


    const nuevaEntrada = async formData => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/blog/nuevo', formData, config)

            setEntradas([...entradas, data])

            setAlerta({
                msg: 'Proyecto Creado Correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            })
        } catch (error) {
            console.log(error)
        }
    }

    const editarEntrada = async (formData, entrada) => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.put(`/blog/editar/${entrada._id}`, formData, config)

            // Sincronizar el state
            const entradasActualizadas = entradas.map(entradaState => entradaState._id === data._id ? data : entradaState)
            setEntradas(entradasActualizadas)

            setAlerta({
                msg: 'Entrada Actualizada Correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }


    const eliminarEntrada = async id => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/blog/${id}`, config)

            // Sincronizar el state
            const entradasActualizadas = entradas.filter(entradaState => entradaState._id !== id)
            setEntradas(entradasActualizadas);

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/admin/propiedades')
            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    /***********  Alerta  *********** */

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    /*************  Cerrar Sesion propiedades  ****************/
    const cerrarSesionPropiedades = () => {
        setPropiedades([])
        setPropiedad({})
        setEntradas([])
        setEntrada({})
        setMensajes([])
        setAlerta({})
    }


    return (
        <AdminContext.Provider
            value={{
                entradasSlice,
                entradasPublic,
                propiedadesSlice,
                propiedadesPublic,
                propiedades,
                propiedad,
                mensajes,
                entradas,
                entrada,
                alerta,
                cargando,
                obtenerPropiedad,
                obtenerEntrada,
                nuevaPropiedad,
                editarPropiedad,
                nuevaEntrada,
                editarEntrada,
                eliminarPropiedad,
                eliminarEntrada,
                eliminarMensaje,
                mostrarAlerta,
                cerrarSesionPropiedades
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider
}

export default AdminContext;