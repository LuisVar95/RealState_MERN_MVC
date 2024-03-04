import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';


const Layout = () => {
  const location = useLocation();
  const paginaHome = location.pathname === '/'

  return (
    <>
      <div>
        <header class={`${paginaHome ? 'header' : 'headerSin'}`}>
          <div class="header__barra contenedor">
              <div class="header__logo">
                  <Link to="/">
                      <img src="/img/logo.svg" alt="logo real state"/> 
                  </Link>
              </div>

              <nav className="navegacion">
                  <Link to="/nosotros" className="navegacion__link">Nosotros</Link>
                  <Link to="/propiedades" className="navegacion__link">Propiedades</Link>
                  <Link to="/blog" className="navegacion__link">Blog</Link>
                  <Link to="/testimoniales" className="navegacion__link">Testimoniales</Link>
                  <Link to="/contacto" className="navegacion__link">Contacto</Link>
              </nav>
          </div>

          <div class="contenedor">
              <div class="header__contenido ">
                  {paginaHome ?
                    <>
                      <h1 class="header__heading">Encuentra tu casa de lujo al mejor precio</h1>
                      <p class="header__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea pariatur dolores ducimus! Repellendus maiores nemo tempore, cupiditate pariatur expedita
                      </p>

                      
                        <img class="header__imagen" src="img/imagenHeader.jpg" alt="imagen header"/>
                    </> 
                  : null }
              </div>
          </div>
      </header>
        
        {/* Contenido de la página */}
        <main className={ ` ${paginaHome ? 'm-t m-b' : 'contenedor' } `}>
          <Outlet/>
        </main>

        {/* Pie de página, información de contacto, etc. */}
        <footer class="footer">
        <div class="footer__grid contenedor">
            <div class="footer__box">
                <h3 class="footer__heading">Navegación</h3>
                <nav class="footer__navegacion">
                <Link to="/nosotros" className="footer__link">Nosotros</Link>
                  <Link to="/propiedades" className="footer__link">Propiedades</Link>
                  <Link to="/blog" className="footer__link">Blog</Link>
                  <Link to="/testimoniales" className="footer__link">Testimoniales</Link>
                  <Link to="/contacto" className="footer__link">Contacto</Link>
                </nav>
            </div>

            <div class="footer__box">
                <h3 class="footer__heading">Nosotros</h3>
                <p class="footer__texto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore quo tempore! Atque porro quibusdam voluptas nisi corrupti. Unde, ipsam vel deleniti magnam nulla nemo suscipit sunt porro blanditiis? Nemo.
                </p>
            </div>

            <div class="footer__box">
                <img src="/img/logo.svg" alt="imagen logo"/>
            </div>
        </div>

        <p class="footer__copyright">Todos los Derechos Reservados Real State</p>
    </footer>

    <script src="js/app.js"></script>
      </div>
    </>
  );
};

export default Layout;
