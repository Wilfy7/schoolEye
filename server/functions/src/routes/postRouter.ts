import { Router } from "express";
import { 
    createPost, 
    deletePost, 
    editPost, 
    getAllPosts, 
    getSinglePost
} from "../controllers/post.controller";


const postRouter = Router();

postRouter.post("/post", createPost);
postRouter.get("/posts/all", getAllPosts);
postRouter.get("/post/:id", getSinglePost);
postRouter.put("/post/update/:id", editPost);
postRouter.delete("/post/del/:id", deletePost);


export default postRouter;