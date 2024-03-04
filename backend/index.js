import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js'
import usuariosRoutes from './routes/usuariosRoutes.js';
import propiedadesRoutes from './routes/propiedadesRoutes.js';
import mensajesRoutes from './routes/mensajesRoutes.js';
import blogRoutes from './routes/blogRoutes.js';


const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));


//Routing 
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/propiedades", propiedadesRoutes);
app.use("/api/mensajes", mensajesRoutes);
app.use("/api/blog", blogRoutes);


const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
