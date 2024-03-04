import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const autenticar = async (req, res) => {
    const {email, password} = req.body;

    //comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error("El Usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    //comprobar su password
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        });
    } else {
        const error = new Error("El Password es Incorrecto");
        return res.status(403).json({ msg: error.message });
    }
};

const perfil = async (req, res) => {
    const { usuario } = req;

    res.json(usuario);
}

export {
    autenticar,
    perfil
}