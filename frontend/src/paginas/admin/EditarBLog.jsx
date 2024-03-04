import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin'
import FormularioEditarBlog from '../../../componentes/FormularioEditarBlog';

const EditarBlog = () => {

  const { id } = useParams();
  const { obtenerEntrada, entrada} = useAdmin()

  useEffect(() => {
    console.log('entrando')
    obtenerEntrada(id)
  }, [id])
  console.log(id)
  console.log(entrada)

  return (

    <main className='nueva-propiedad'>
        <div className='nueva-propiedad__descripcion'>
            <h1 className='nueva-propiedad__titulo'>Editando La entrada: <span>{entrada.titulo}</span></h1>
        </div>
            
        <FormularioEditarBlog entrada={entrada} idEntrada={id}/>
    </main>
    
  )
}

export default EditarBlog