import { Router } from "express";
import { 
    registerUser,
    loginUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
} from "../controllers/user.controller";



const userRouter = Router();

//Create user route
userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);

userRouter.get("/users/:id", getUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/users/update/:id", updateUser);
userRouter.delete("/users/delete/:id", deleteUser);


export default userRouter;