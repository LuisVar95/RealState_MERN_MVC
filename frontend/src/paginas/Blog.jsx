import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import { formatearFecha } from '../../helpers/formatos';

const Blog = () => {

    const {entradasPublic} = useAdmin();

  return (
    <div className='m-t-2'>
       <section class="testimoniales-blog__blog">
            <h2 class="testimoniales-blog__heading">Últimas entradas <span>de nuestro Blog</span> </h2>
            {entradasPublic.map(entrada => (
                <div class="entrada">
                    <div class="entrada__imagen-contenedor">
                        <img class="entrada__imagen" src={`/public/uploads/blog/${entrada.imagen}`} alt="imagen blog"/>
                    </div>
                    <div class="entrada__contenido">
                        <h3 class="entrada__nombre">{entrada.titulo}</h3>
                        <p class="entrada__meta">Publicado por bienes raices el {`${formatearFecha(entrada.fecha)}`} - 10 Comentarios</p>
                        <p class="entrada__texto">{entrada.descripcion.length > 120 ? `${entrada.descripcion.slice(0, 120)}...` : entrada.descripcion}</p>
                        <a class="entrada__enlace" href="#">Leer Artículo</a>
                    </div>
                </div>
            ))}
        </section>
    </div>
  );
};

export default Blog;
