import Propiedades from "../models/Propiedad.js";

// Obtener todas las propiedades
const obtenerPropiedades = async (req, res) => {
    const propiedades = await Propiedades.find()
    res.json(propiedades)
};

//Obtener una propiedad con su id
const obtenerPropiedad = async (req, res) => {
    const { id } = req.params;

    const propiedad = await Propiedades.findById(id)

    if(!propiedad){
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message});
    }

    res.json(propiedad);
}

// Crear nuevas propiedades
const crearPropiedad = async (req, res) => {
    try {
        const { titulo, descripcion, precio, estacionamiento, habitaciones, wc} = req.body;

        const { filename: imagen } = req.file;


        const propiedad = new Propiedades({
            titulo, 
            descripcion,
            imagen,
            precio,
            estacionamiento,
            habitaciones,
            wc
        });

        const propiedadAlmacenada = await propiedad.save();
        res.json(propiedadAlmacenada);
    } catch (error) {
        console.log(error)
    }
};

// Editar las propiedades
const editarPropiedad = async (req, res) => {
    const { id } = req.params;

    const propiedad = await Propiedades.findById(id);

    if(!propiedad) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message});
    }

    propiedad.titulo = req.body.titulo || propiedad.titulo;
    propiedad.descripcion = req.body.descripcion || propiedad.descripcion;
    propiedad.precio = req.body.precio || propiedad.precio;
    propiedad.imagen = req.file.filename || propiedad.imagen;
    propiedad.estacionamiento = req.body.estacionamiento || propiedad.estacionamiento;
    propiedad.habitaciones = req.body.habitaciones || propiedad.habitaciones;
    propiedad.wc = req.body.wc || propiedad.wc;

    try {
        const propiedadAlmacenada = await propiedad.save();
        res.json(propiedadAlmacenada);
    } catch (error) {
        console.log(error);
    }
};

const eliminarPropiedad = async (req, res) => {
    const { id } = req.params;

    const propiedad = await Propiedades.findById(id);

    if(!propiedad) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message});
    }

    try {
        await propiedad.deleteOne();
        res.json({ msg: "Proyecto Eliminado"});
    } catch (error) {
        console.log(error);
    }
}


export {
    crearPropiedad,
    obtenerPropiedades,
    editarPropiedad,
    eliminarPropiedad,
    obtenerPropiedad
}