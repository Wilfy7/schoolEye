import mongoose from "mongoose";
import { IGallery } from "../interface/gallery.interface";


export const gallerySchema = new mongoose.Schema({
    fileName: {
        type: String,
        trim: true

    },
mimeType: {
    type: String,
    trim: true
},
data: {
    type: Buffer,
    trim: true
}
});

const Gallery = mongoose.model<IGallery>("Gallery", gallerySchema);
export default Gallery;