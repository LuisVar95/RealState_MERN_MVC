import express from "express";
const router = express.Router();
import { autenticar, perfil } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

//Autenticacion de usuarios
router.post("/login", autenticar);
router.get("/perfil", checkAuth, perfil);

export default router;