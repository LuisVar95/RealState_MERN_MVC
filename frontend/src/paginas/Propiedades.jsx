import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import { formatearDinero } from '../../helpers/formatos';

const Propiedades = () => {

    const {propiedadesPublic} = useAdmin();

  return (
    <div className='m-t-2'>
      <h2 className="propiedades__heading m-b">Nuestras <span>Propiedades</span></h2>

      <div className="propiedades__grid">
        {propiedadesPublic.map(propiedad => (
             <div className="propiedad">
             <div className="propiedad__imagen">
                <img src={`/public/uploads/${propiedad.imagen}`} alt={`imagen-${propiedad.imagen}`} />
                <h3 className="propiedad__nombre">{propiedad.titulo}</h3>
             </div>
             <div className="propiedad__contenido">
                 <p className="propiedad__texto">{propiedad.descripcion.length > 260 ? `${propiedad.descripcion.slice(0, 260)}...` : propiedad.descripcion}</p>
                 <p className="propiedad__precio">{formatearDinero(propiedad.precio)}</p>
                 <a className="propiedad__enlace" href="#">Ver Propiedad</a>
             </div>
         </div> 
        ))}
         
      </div>
    </div>
  );
};

export default Propiedades;