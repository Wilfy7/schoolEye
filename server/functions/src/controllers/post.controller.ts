import { Request, Response } from "express";
import Content from "../models/content.model";
import User from "../models/user.model";




export const createPost = async (req: Request, res: Response) => {
    try {
        //Get the post from the request body
        const { post, user } = req.body;

        //find the user in the database by name
        const nameUser = await User.findOne({name: post.user});

        const userId = nameUser?._id;

        //Check if user exist
        if(!nameUser) {
          return res.status(404).json({
            message: "User not found",
          });
        }

        //Check if post exist  
        if(!post) {
            return res.status(400).json({
                message: "Enter post"
            });
        }

        const newPost =  new Content({
            post,
            user,
            nameUser: userId
        })

        const savedPost = await newPost.save()

        return res.status(200).json({
            message: "Post made successfully",
            data: savedPost
        });

    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      }); 
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      //Get all post from the database
      const allPosts = await Content.find()
      .populate("user")
      .sort({createdAt: -1})

      return res.status(200).json({
        message: "Posts fetched successfully",
        data: allPosts
      });

    } catch (error) {
      return res.status (500).json({
      message: "Server Error"  
      }) 
    }
};

export const getSinglePost = async (req: Request, res: Response) => {
    try {
        //Get the id from
        const {id } = req.params

        //Get the post from the database
        const singlePost = await Content.findById(id);

        if(!singlePost) {
            return res.status(400).json({
            message: "Post does not exist"
            });
        }

        return res.status(200).json({
            message: "Post fetched successfull",
            data: singlePost
        })
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      });  
    }
};

export const editPost = async (req: Request, res: Response) => {
    try {
      //Get the id from the request params
      const { id } = req.params;

      //Get Post from req body
      const post = req.body
      
      //Check if post exist
      const existingPost = await Content.findById(id);

      if (!existingPost) {
        return res.status(400).json({
        message: "Post Cannot be edited"
        });
      }

      const updatedPost = await Content.findByIdAndUpdate(id, post, {
        new: true
      });


      return res.status(200).json({
        message: "Post updated successfully",
        data: updatedPost
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      });  
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
      //Get the id from the request params
      const { id } = req.params;
      
      const deletedPost = await Content.findByIdAndDelete(id);

      if(!deletedPost) {
        return res.status(400).json({
        message: "Post doet not exist"
        });
      }

      return res.status(200).json({
        message: "Post deleted successfully"
      });

    } catch (error) {
      return res.status(500).json({
        message: "Srever Error"
      });  
    }
};