import mongoose from "mongoose";

const PropiedadSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        precio : {
            type: Number, 
            required: true,
            trim: true,
        },
        imagen : {
            type: String,
        },
        estacionamiento : {
            type: Number,
            trim: true
        },
        habitaciones : {
            type: Number,
            trim: true
        },
        wc : {
            type: Number,
            trim: true
        }
    }, 
    {
        timestamps: true
    }
);

const Propiedades = mongoose.model("Propiedades", PropiedadSchema, "propiedades");
export default Propiedades;