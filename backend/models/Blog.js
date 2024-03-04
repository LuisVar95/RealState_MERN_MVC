import mongoose from "mongoose";

const BlogSchema = mongoose.Schema (
    {
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        fecha: {
            type: String,
            required: true,
            trim: true
        }, 
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        imagen: {
            type: String
        }   
    }, { 
        timestamps: true 
    }
)

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;