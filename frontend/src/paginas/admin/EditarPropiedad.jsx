import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormularioEditarPropiedad from '../../../componentes/FormularioEditarPropiedad'
import useAdmin from '../../../hooks/useAdmin'


const EditarPropiedad = () => {

  const { id } = useParams();
  const { obtenerPropiedad, propiedad, cargando} = useAdmin()

  useEffect(() => {
      obtenerPropiedad(id)
  }, [id])

  if(cargando) return 'Cargando...'
  console.log(id)
  console.log(propiedad)

  return (

    <main className='nueva-propiedad'>
        <div className='nueva-propiedad__descripcion'>
            <h1 className='nueva-propiedad__titulo'>Editando la propiedad: <span>{propiedad.titulo}</span> </h1>
        </div>
            
        <FormularioEditarPropiedad propiedad={propiedad} idPropiedad={id}/>
    </main>
    
  )
}

export default EditarPropiedad
