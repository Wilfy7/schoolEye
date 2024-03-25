import { Request, Response } from "express"
import School from "../models/school.model";



export const createSchool = async (req: Request, res: Response) => {
    try {
        //Get the data from request body
        const {schoolName, schoolAddress, postCode} = req.body;

        if(!schoolName || !schoolAddress || !postCode) {
            return res.status(404).json({
                message: "Please provide the rquired info"
            });
        }
      
        //Register a school
        const newSchool = new School({
         schoolName: schoolName,
         schoolAddress: schoolAddress,
         postCode: postCode

        });

        const saveSchool = await newSchool.save();
        
        return res.status(200).json({
            message: "School registered successfully",
            data: saveSchool
        });

    } catch (error) {
      return res.status(500).json({
        message: "Serve Error"
      });
    }
};

export const getSchools = async (req: Request, res: Response) => {
    try {
      //Get all schools from the database
      const schools = await School.find({});

      return res.status(200).json({
        message: "Schools fetched",
        data: schools
      });

    } catch (error) {
      return res.status(500).json({
      message: "Server Error"
      });  
    }
};

export const getSingleSchool = async (req: Request, res: Response) => {
    try {
        //Get the id from the request params
        const { id } = req.params;

        const singleSchool = await School.findById(id);

        if(!singleSchool) {
            return res.status(400).json({
            message: "School does not exist"
            });
        }

        return res.status(200).json({
            message: "School fetched successfully",
            data: singleSchool
        });


    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      });  
    }
};

export const updateSchool = async (req: Request, res: Response) => {
    try {
        //Get the id from the request params
        const { id } = req.params;

        //Get the school from the request body
        const school = req.body;

        const existingSchool = await School.findById(id);
        
        if(!existingSchool) {
            return res.status(400).json({
            message: "School not found"
            });
        }

        const updatedSchool = await School.findByIdAndUpdate(id, school, {
            new: true
        });

        return res.status(200).json({
         message: "School updated successfully",
         data: updatedSchool
        })

    } catch (error) {
      return res.status(500).json({
      message: "Server Error"
      }); 
    } 
};

export const deleteSchool = async (req: Request, res: Response) => {
    try {
        //Get the id from the params
        const { id } = req.params;

        const deletedSchool = await School.findByIdAndDelete(id);
        if(!deletedSchool) {
            return res.status(400).json({
                message: "School deos not exist"
            });
        }

        return res.status(200).json({
            message: "School deleted Successfully"
        });
    } catch (error) {
      return res.status(500).json({
       message: "Server Error" 
      });  
    }
};