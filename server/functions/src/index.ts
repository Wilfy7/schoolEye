import express from "express";
import * as functions from "firebase-functions";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRouter";
import childRouter from "./routes/childRouter";
import schoolRouter from "./routes/schoolRouter";

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

//Routes for the server
app.get("/", (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({
        message: "Welcome to School Eye"
    });

  } catch (error) {
    return res.status(500).json({
    message: "Server error"
    });
  }
});

app.use("/api/v1", userRouter);
app.use("/api/v1", childRouter );
app.use("/api/vi", schoolRouter );

//Handle unknown routes (404 Not Found)
app.use("/", (req: express.Request, res: express.Response) => {
    return res.status(400).json({
        message: "Page not found"
    });
});


export const schoolEye = functions.https.onRequest(app);
