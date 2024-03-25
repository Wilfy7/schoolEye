import { Request, Response } from "express";
import { comparePassword, hashedPassword } from "../service/securePassword";
import { genToken } from "../service/genToken";
import User from "../models/user.model";


//Create a User
export const registerUser = async (req: Request, res: Response) => {
    try {
        //Get data from the request body
        const userData = req.body;
        
        //Check if the data is provided
        const {fullName, email, password} = userData
        if(!fullName || !email || !password)
        return res.status(400).json({
        message: "Please provide the required info in the fields"
    });

    //Check if the user exist
    const existingUser = await User.findOne({email: userData.email})
      if(existingUser)
    return res.status(400).json({
        message: "User already exist"
    });

    //Hash the password
    const passwordhashed = await hashedPassword (password)
    //Create a new user
    const newUser = new User({
        ...userData,
        password: passwordhashed
    });


    const savedUser = await newUser.save()
        return res.status(200).json({
        message: "User Successfully registered",
        savedUser
        });
    } catch (error) {
        console.log(error)
      return res.status(500).json({
      message:"Server Error"
      }) ; 
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        //Get the info from 
        const {email, password} = req.body
        
        //Check if user exist
        const existingUser = await User.findOne({email});
        if(!existingUser) 
            return res.status(400).json({
            message: "User does not exist"
            });
       
        //Check if password matches
        const isMatch = await comparePassword(password, existingUser.password)
        if(!isMatch) 
            return res.status(400).json({
            message: "Invalid credentials"
            });

        //Find a user without password
        const user = await User.findOne({email}).select({
            password: 0,
        });

        const token = genToken({user}, "3d")

        return res.status(200).json({
        message: "User logged in successfully",
        token
        })
        
        
    } catch (error) {
      return res.status(500).json({
      message: "Server Error"
      });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        //Get the id from the request params
        const { id } = req.params

        //Get user from the database
        const existingUser = await User.findById(id).select({
            password: 0,
            __v: 0
        });

        if(!existingUser)
        return res.status(400).json({
        message: "User does not exist"
    });

    return res.status(200).json({
     message: "User Data",
     user: existingUser   
    });
    
    } catch (error) {
      return res.status(500).json({
      message: "Server Error"  
      })  
    }
};

//Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        //Get all users from the database
        const users = await User.find({}).select({
            password: 0,
            __v: 0
        });

        return res.status(200).json({
        message: "All Users",
        users
        });

    } catch (error) {
      return res.status(500).json({
      message: "Server Error"
      }); 
    }
};

//Update User
export const updateUser = async (req: Request, res: Response) => {
    try {
        //Get the id from the params
        const { id } = req.params;

        //Get user's full name and email from the request body
        const {fullName, email} = req.body;

        //Check if the user exist
        const existingUser = await User.findById(id);
        if(!existingUser) {
        return res.status(400).json({
        message: "User does ot exist"
     }); 
    }
    
    const updatedUser = await User.findByIdAndUpdate(
        id,
       { fullName, email },
       {new: true}
    );

    if(!updateUser) {
        return res.status(400).json({
         message: "User not found"
        });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
    
    } catch (error) {
      return res.status(500).json({
      message: "Server error"  
      }); 
    }
};

//Delete User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        //Get the id from the params
        const { id } = req.params;

        //Check if the user exist
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser) {
        return res.status(404).json({message: "User not found"});
        }

        return res.status(200).json({
            message: "User delete"
        });
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      });  
    }
};