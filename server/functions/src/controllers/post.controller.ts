import { Request, Response } from "express";
import Content from "../models/content.model";




export const createPost = async (req: Request, res: Response) => {
    try {
        //Get the post from the request body
        const { post } = req.body;

        //Check for post 
        if(!post) {
            return res.status(400).json({
                message: "Enter post"
            });
        }

        const newPost =  new Content({
            post
        })

        const savedPost = newPost.save()


        return res.status(200).json({
            message: "Post made successfully",
            savedPost
        });

    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      }); 
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      //Get all post fromthe database
      const allPosts = await Content.find()
      .populate("user");
      
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