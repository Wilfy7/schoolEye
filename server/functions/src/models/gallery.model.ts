import mongoose from "mongoose";
import { IGallery } from "../interface/gallery.interface";


export const gallerySchema = new mongoose.Schema({
    image: {
        type: String,
        data: Buffer,
        trim: true

    }
});

const Gallery = mongoose.model<IGallery>("Gallery", gallerySchema);
export default Gallery;