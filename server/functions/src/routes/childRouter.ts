import { Router } from "express";
import { 
    deleteChild,
    getChildren, 
    getSingleChild, 
    registerChild, 
    updateChild
} from "../controllers/child.controller";



const childRouter = Router();

childRouter.post("/child", registerChild);
childRouter.get("/children", getChildren);
childRouter.get("/child/:id", getSingleChild);

//Update child route
childRouter.put("/update-child/:id", updateChild);

//Delete child route
childRouter.delete("/child/delete/:id", deleteChild)



export default childRouter;