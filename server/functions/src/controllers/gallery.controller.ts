import { Request, Response } from "express"
import Gallery from "../models/gallery.model";
import { IGallery } from "../interface/gallery.interface";


export const createGallery = async (req: Request, res: Response ) => {
    try {
        
        //Check if picture exist 
        if(!req.file) {
        return res.status(400).json({
            message: "Please upload a file",
        });

       }
       //Estract file data from the request
        const {originalname, mimetype, buffer} = req.file;
        

        //Handle file uploaded logic here
        const newFileData: Partial<IGallery> = {
            fileName: originalname,
            mimeType: mimetype,
            data: buffer
        
        }

        //Save the file/image to the database
        const newFile = new Gallery(newFileData)
         await newFile.save();


        return res.status(200).json({
            message: "File uploaded successfully",
            data: newFile
        });


    } catch (error) {
      return res.status(500).json({
        message: "Error uploading file"
      });  
    }
};


export const getAllImages = async (req: Request, res: Response) => {
    try {
        const images = await Gallery.find({});
        
        return res.status(200).json({
            message: "Images fetched successfully",
            data: images
        });

    } catch (error) {
      return res.status(500).json({
        message: "Error getting all images"
      }); 
    }
};

export const getImage = async (req: Request, res: Response) => {
    try {
        const imageId = req.params.id;

        const existingImage = await Gallery.findById(imageId)
        if(!existingImage) {
            return res.status(400).json({
                message: "Image not found"
            });
        }
       return res.status(200).json({
        message: "Image fetched successfully"
       });
        
    } catch (error) {
      return res.status(500).json({
        message: "Server error"
      });
    }
};
