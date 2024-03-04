import Blog from "../models/Blog.js";

const obtenerEntradas = async (req, res) => {
    const entradas = await Blog.find()

    res.json(entradas)
}

const obtenerEntrada = async (req, res) => {
    const {id} = req.params;

    const entrada = await Blog.findById(id);

    if(!entrada) {
        const error = new Error('No encontrado')
        return res.status(404).json({ msg: error.message});
    }

    res.json(entrada)
}

const crearEntrada = async (req, res) => {
    const {titulo, fecha, descripcion} = req.body;

    const { filename: imagen } = req.file;

    const entrada = new Blog({
        titulo, 
        fecha,
        descripcion,
        imagen
    });

    try {
        const entradaAlmacenada = await entrada.save();
        res.json(entradaAlmacenada);
    } catch (error) {
        console.log(error);
    }

}

const editarEntrada = async (req, res) => {
    const { id } = req.params;

    const entrada = await Blog.findById(id);

    if(!entrada) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message});
    }

    entrada.titulo = req.body.titulo || entrada.titulo;
    entrada.fecha = req.body.fecha || entrada.fecha;
    entrada.descripcion = req.body.descripcion || entrada.descripcion;
    entrada.imagen = req.file.filename || entrada.imagen;
   
    try {
        const entradaAlmacenada = await entrada.save();
        res.json(entradaAlmacenada);
    } catch (error) {
        console.log(error);
    }
};

const eliminarEntrada = async (req, res) => {
    const  { id } = req. params;

    const entrada = await Blog.findById(id);

    if(!entrada) {
        const error = new Error('No encontrado')
        return res.status(404).json({ msg: error.message});
    }

    try {
        await entrada.deleteOne();
        res.json({ msg: 'Entrada eliminada'})
    } catch (error) {
        console.log(error)
    }
}

export {
    obtenerEntradas,
    obtenerEntrada,
    crearEntrada,
    editarEntrada,
    eliminarEntrada
}