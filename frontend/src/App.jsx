import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout';
import Index from './paginas/Index';
import Propiedades from './paginas/Propiedades';
import Blog from './paginas/Blog';
import Testimoniales from './paginas/Testimoniales';
import Contacto from './paginas/Contacto';
import Nosotros from './paginas/Nosotros';
// Area privada.
import LayoutAdmin from './layouts/LayoutAdmin';
import Login from './paginas/admin/Login';
import Administracion from './paginas/admin/Administracion';
import CrearPropiedad from './paginas/admin/CrearPropiedad';
import EditarPropiedad from './paginas/admin/EditarPropiedad';
import { AuthProvider } from '../context/AuthProvider';
import { AdminProvider } from '../context/AdminProvider';
import Mensajes from './paginas/admin/Mensajes';
import Mensaje from './paginas/admin/Mensaje';
import CrearBlog from './paginas/admin/CrearBlog';
import EditarBlog from './paginas/admin/EditarBLog';

import LayoutLogin from './layouts/layoutLogin';


const App = () => {
  return (
    <Router>
    <AuthProvider>
      <AdminProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="propiedades" element={<Propiedades />} />
            <Route path="blog" element={<Blog />} />
            <Route path="testimoniales" element={<Testimoniales />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
          <Route path='/login' element={<LayoutLogin/>}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path='propiedades' element={<Administracion />} />
            <Route path="propiedades/crear" element={<CrearPropiedad />} />
            <Route path="propiedades/editar/:id" element={<EditarPropiedad />} />
            <Route path="mensajes" element={<Mensajes />} />
            <Route path="mensajes/:id" element={<Mensaje />} />
            <Route path="blog/crear" element={<CrearBlog />} />
            <Route path="blog/editar/:id" element={<EditarBlog />} />
          </Route>
        </Routes>
      </AdminProvider>
    </AuthProvider>
  </Router>
  );
};

export default App;