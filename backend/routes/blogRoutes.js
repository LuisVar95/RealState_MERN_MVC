import express from 'express';
import checkAuth from "../middleware/checkAuth.js";
import { obtenerEntradas, obtenerEntrada, crearEntrada, eliminarEntrada, editarEntrada } from '../controllers/blogController.js';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'c:/Users/Luis/Desktop/RealState_MERN_MVC/frontend/public/uploads/blog');
    },
    filename: function(req, file, cb){
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png'];
    if(tiposPermitidos.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);s
    }
}

let upload = multer({ storage, fileFilter})

router.get('/', obtenerEntradas);
router.get('/:id', obtenerEntrada);
router.post('/nuevo', checkAuth, upload.single('imagen'), crearEntrada);
router.put('/editar/:id', checkAuth, upload.single('imagen'), editarEntrada);
router.delete('/:id',checkAuth, eliminarEntrada);

export default router;