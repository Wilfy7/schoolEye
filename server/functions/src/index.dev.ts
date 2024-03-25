import express from "express";
import chalk from "chalk";
import * as functions from "firebase-functions";
import devApp from "./config/index.config"
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/connectDB";
import userRouter from "./routes/userRouter";
import childRouter from "./routes/childRouter";
import schoolRouter from "./routes/schoolRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());
 
const port = devApp.dev.port 


//Route for the server
app.get("/", (req: express.Request, res: express.Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to School Eye"
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server Error"
      }); 
    }
});

//Routes
app.use("/api/v1", userRouter );
app.use("/api/v1", childRouter );
app.use("/api/v1", schoolRouter)

app.listen(port, () => {
 console.log(chalk.yellowBright(`Server is running on port http://localhost:${port}`));
});
connectDB();

export const schoolEye = functions.https.onRequest(app);