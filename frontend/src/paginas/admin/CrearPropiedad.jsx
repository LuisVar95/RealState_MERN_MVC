import FormularioPropiedad from "../../../componentes/FormularioPropiedas"

const CrearPropiedad = () => {
  return (

    <main className='nueva-propiedad'>
        <div className='nueva-propiedad__descripcion'>
            <h1 className='nueva-propiedad__titulo'>Llena el formulario para crear una propiedad</h1>
        </div>
            
        <FormularioPropiedad/>
    </main>
    
  )
}

export default CrearPropiedad