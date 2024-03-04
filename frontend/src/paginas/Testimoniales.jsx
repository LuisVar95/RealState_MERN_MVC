import React from 'react';

const Testimoniales = () => {
  return (
    <div className='m-t-2'>
        <section class="testimoniales-blog__testimoniales">
            <h2 class="testimoniales-blog__heading">Que dicen <span>Nuestros Clientes</span> </h2>

            <div class="testimonial">
                <img class="testimonial__imagen" src="/img/testimonial.jpg" alt="imagen testimonial"/>

                <div class="testimonial__contenido">
                    <p class="testimonial__nombre">Familia Hernández</p>
                    <p class="testimonial__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam deleniti. Id, quas porro illo deleniti excepturi hic unde eum vel mollitia aliquid molestiae earum harum exercitationem doloribus iste. Nostrum.</p>
                </div>
            </div>

            <div class="testimonial m-t-2">
                <img class="testimonial__imagen" src="/img/testimonial2.jpg" alt="imagen testimonial"/>

                <div class="testimonial__contenido">
                    <p class="testimonial__nombre">Familia Sanchez</p>
                    <p class="testimonial__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam deleniti. Id, quas porro illo deleniti excepturi hic unde eum vel mollitia aliquid molestiae earum harum exercitationem doloribus iste. Nostrum.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Testimoniales;