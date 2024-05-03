import { Request, Response } from "express"
import Gallery from "../models/gallery.model";


export const createGallery = async (req: Request, res: Response ) => {
    try {
        
        const fileName = req.file;
        //Check if picture exist 
        if(!fileName) 
            return res.status(400).json({
                message: "Please upload a file",
            });
        

        //Handle file uploaded logic here
        const newFile = new Gallery({
            fileName: req.file?.originalname
        })

        //Save the file/image to the database
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
        const images = await Gallery.find({})
        return res.status(200).json({
            message: "Images fetched successfully",
            data: images
        });

    } catch (error) {
      return res.status(500).json({
        message: "Error getting all images"
      }) 
    }
};

export const getImage = async (req: Request, res: Response) => {
    try {
        const image = await Gallery.findById(req.params.id);
        if(!image) {
            return res.status(400).json({
                message: "Image not found"
            });
        }

        //Convert image buffer to base64 string
        const baseImage = image.fileName.toString()
        const dataurl = `data: ${image.fileName}; base64, ${baseImage}`;
        return res.json({imageUrl: dataurl})
        
    } catch (error) {
      console.log("Error fetching image");
      throw error  
    }
};
