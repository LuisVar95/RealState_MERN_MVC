import mongoose from "mongoose";

const MensajeSchema = mongoose.Schema (
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        telefono: {
            type: Number,
            trim: true,
        },
        motivo: {
            type: String,
            required: true,
            trim: true
        }
    }, { 
        timestamps: true 
    }
)

const Mensaje = mongoose.model("Mensaje", MensajeSchema);

export default Mensaje;