import React from 'react'
import FormularioBlog from '../../../componentes/FormularioBlog'

const CrearBlog = () => {
  return (
    <main className='nueva-propiedad'>
        <div className='adminTittle'>
            <h1>Llena el formulario para crear una propiedad</h1>
        </div>
            
        <FormularioBlog/>
    </main>
  )
}

export default CrearBlog