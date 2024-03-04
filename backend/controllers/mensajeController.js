import Mensaje from "../models/Mensaje.js";

const obtenerMensajes = async (req, res) => {
    const mensajes = await Mensaje.find()

    res.json(mensajes)
};

const obtenerMensaje = async (req, res) => {
    const {id} = req.params;

    const mensaje = await Mensaje.findById(id);

    if(!mensaje) {
        const error = new Error('No encontrado')
        return res.status(404).json({ msg: error.message});
    }

    res.json(mensaje)
};

const crearMensaje = async (req, res) => {
    const mensaje = new Mensaje(req.body);

    try {
        const mensajeAlmacenado = await mensaje.save();
        res.json(mensajeAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarMensaje = async (req, res) => {
    const  { id } = req. params;

    const mensaje = await Mensaje.findById(id);

    if(!mensaje) {
        const error = new Error('No encontrado')
        return res.status(404).json({ msg: error.message});
    }

    try {
        await mensaje.deleteOne();
        res.json({ msg: 'Mensaje eliminado'})
    } catch (error) {
        console.log(error)
    }
};

export {
    obtenerMensajes,
    obtenerMensaje,
    crearMensaje,
    eliminarMensaje
}