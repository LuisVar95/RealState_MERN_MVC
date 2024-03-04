import React, {useState} from 'react';
import useAdmin from '../../hooks/useAdmin';
import { formatearFecha, formatearDinero } from '../../helpers/formatos';


const Index = () => {

    const {propiedadesSlice, entradasSlice} = useAdmin();

  return (
    <>
      <div className='contenedor'>
        <h2 class="propiedades__heading">Nuestras <span>Propiedades</span></h2>

            <div class="propiedades__grid">
                {propiedadesSlice.map(propiedad => (
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
      
    <section class="destacada">
        <div class="destacada__grid contenedor">
            <div class="destacada__contenido">
                <h3 class="destacada__heading">Propiedad Destacada</h3>
                <p class="destacada__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum voluptatem suscipit ratione sapiente hic nobis quisquam, voluptates sed voluptatum enim totam quod nostrum tempore laboriosam magnam, repudiandae temporibus! Cupiditate!</p>
                <p class="destacada__precio">$ 1,200,000.00</p>
                <a class="destacada__enlace" href="#">Ver Propiedad</a>
            </div>
        </div>
    </section>

    <div class="testimoniales-blog contenedor">
        <section class="testimoniales-blog__testimoniales">
            <h2 class="testimoniales-blog__heading">Que dicen <span>Nuestros Clientes</span> </h2>

            <div class="testimonial">
                <img class="testimonial__imagen" src="/img/testimonial.jpg" alt="imagen testimonial"/>

                <div class="testimonial__contenido">
                    <p class="testimonial__nombre">Familia Hernández</p>
                    <p class="testimonial__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam deleniti. Id, quas porro illo deleniti excepturi hic unde eum vel mollitia aliquid molestiae earum harum exercitationem doloribus iste. Nostrum.</p>
                </div>
            </div>
        </section>
        <section class="testimoniales-blog__blog">
            <h2 class="testimoniales-blog__heading">Últimas entradas <span>de nuestro Blog</span> </h2>
            {entradasSlice.map(entrada => (
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
    </>
  );
};

export default Index;