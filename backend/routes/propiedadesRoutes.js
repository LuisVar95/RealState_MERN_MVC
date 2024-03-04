import express from 'express';
import { crearPropiedad, obtenerPropiedades, editarPropiedad, eliminarPropiedad, obtenerPropiedad } from '../controllers/propiedadController.js';
import checkAuth from '../middleware/checkAuth.js';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'c:/Users/Luis/Desktop/RealState_MERN_MVC/frontend/public/uploads');
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

router.get("/", obtenerPropiedades);
router.get("/:id", obtenerPropiedad);
router.post("/crear", checkAuth, upload.single('imagen'), crearPropiedad);
router.put("/editar/:id", checkAuth, upload.single('imagen'), editarPropiedad);
router.delete("/eliminar/:id", checkAuth, eliminarPropiedad);

export default router;