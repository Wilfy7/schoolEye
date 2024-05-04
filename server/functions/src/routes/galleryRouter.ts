import { Router } from "express";
import { createGallery, getAllImages, getImage} from "../controllers/gallery.controller";
import multer from "multer"
import path from "path";

const galleryRouter = Router();
 
//Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../uploads"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) //Use the original file name for uploaded image
    },
});

const upload = multer({storage})


galleryRouter.post("/upload", upload.single("image"), createGallery);

galleryRouter.get("/images/all", getAllImages);

galleryRouter.get("/image/:id", getImage)



export default galleryRouter; 