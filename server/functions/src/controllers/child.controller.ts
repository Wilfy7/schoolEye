import { Request, Response } from "express";
import Child from "../models/child.model";



export const registerChild = async (req: Request, res: Response) => {
    try { 
        //get the child from the request body
        const {childName, childClass} = req.body;
         
        //Check if child's details are complete
        if(!childName || !childClass) {
          return res.status(400).json({
            message: "Class and Child's name required"
          });
        }

        //Register a child
        const newCommer = new Child({
          childName: childName,
          childClass: childClass,
           
        });

        const savedChild = await newCommer.save();

        return res.status(200).json({
            message: "Child registered successfully",
            data: savedChild
        });

    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      });  
    }
};

export const getChildren = async (req: Request, res: Response) => {
  try {
     //Get all children from the database
     const children = await Child.find({});

     return res.status(200).json({
      message: "Data fetched successfully",
      data: children
     })
  } catch (error) {
    return res.status(500).json({
      message: "Server Error"
    });
  }
};

export const getSingleChild = async (req: Request, res: Response) => {
  try {
    //Get a child from the request params
    const childId = req.params.id;

    //Get the child 
    const existingChild = await Child.findById(childId);
      
    if(!existingChild) {
      return res.status(404).json({
        message: "Child does not exist"
      })
    }

    return res.status(200).json({
      message: "Child found succefully",
      child: existingChild
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error"
    });
  }
};

export const updateChild = async (req: Request, res: Response) => {
  try {
    //Get the id from the params
    const { id } = req.params;
    
    //Get child's info from request body
    const child = req.body;

    const childexist = await Child.findById(id);
    if(!childexist) {
      return res.status(404).json({
        message: "Child not found"
      });
    }

    const updatedChild = await Child.findByIdAndUpdate( id, child, {
      new: true
    })

    return res.status(200).json({
      message: "Child updated succefully",
      dat: updatedChild
    })

  } catch (error) {
    return res.status(500).json({
      message: "Server Error"
    })
  }
 
}; 

export const deleteChild = async (req: Request, res: Response) => {
  try {
    //Get the id from the params
    const { id } = req.params;

    //Check if the childExist
    const deletedChild = await Child.findByIdAndDelete(id)

    if(!deletedChild) {
      return res.status(404).json({
        message: "Child not found"
      });
    }

    return res.status(200).json({
      message: "Child deleted"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Server Error"
    });
  }
};