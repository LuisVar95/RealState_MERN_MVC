import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true, 
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        token: {
            type: String,
        },
        admin: {
            type: Number,
        }
    }
); 

usuarioSchema.methods.comprobarPassword = function (passwordFormulario) {
    // Comparar el password proporcionado en el formulario con el almacenado en la base de datos
    return passwordFormulario === this.password;
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;