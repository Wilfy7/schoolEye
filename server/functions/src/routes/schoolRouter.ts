import { Router } from "express";
import { 
    createSchool, 
    getSchools, 
    getSingleSchool, 
    updateSchool 
} from "../controllers/school.controller";


const schoolRouter = Router();

//Create school router
schoolRouter.post("/school", createSchool);

schoolRouter.get("/school/all", getSchools);

schoolRouter.get("/school/:id", getSingleSchool);

schoolRouter.put("/school/update/:id", updateSchool)


export default schoolRouter;