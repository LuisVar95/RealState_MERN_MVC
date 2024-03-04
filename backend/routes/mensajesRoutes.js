import express from 'express';
import { obtenerMensajes, obtenerMensaje, crearMensaje, eliminarMensaje } from '../controllers/mensajeController.js';
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get('/',checkAuth, obtenerMensajes);
router.get('/:id',checkAuth, obtenerMensaje);
router.post('/nuevo', crearMensaje);
router.delete('/:id',checkAuth, eliminarMensaje);

export default router;