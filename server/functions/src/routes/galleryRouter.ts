import { Router } from "express";
import { createGallery, getAllImages, getImage} from "../controllers/gallery.controller";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import mongoose from "mongoose";

const galleryRouter = Router();

const DB_URL = "mongodb+srv://localhost:4001/galleries"

const Url = DB_URL;


//Multer configuration for handling file uploads
const storage = new GridFsStorage ({ 
    url: Url,
    file: (req, file) => {
        console.log("File object", file)
      //Generate  a new objectId for the file 
      const _id = new mongoose.Types.ObjectId() 
      console.log(_id)
      //If it is an image, save to gallery
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      return {
        _id,
        bucketName: "gallery",
        filename: `${Date.now()}_${file.originalname}`, //Use the original file name for uploaded image
    };
} else {

    //Otherwise save to default bucket
    return {
        _id,
        bucketName: "default",
        filename: `${Date.now()}_${file.originalname}`,
};
}
},
});

const upload = multer({storage})


galleryRouter.post("/upload", upload.single("image"), createGallery);

galleryRouter.get("/images/all", getAllImages);

galleryRouter.get("/image/:id", getImage)



export default galleryRouter; 