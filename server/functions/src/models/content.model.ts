import mongoose from "mongoose";
import { IContent } from "../interface/content.interface";

export const contentSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},

    post: { type: String, required: true }
},
{
        timestamps: true
    } 
);

const Content = mongoose.model<IContent>("Content", contentSchema);

export default Content;