import mongoose from "mongoose";
import { IChild } from "../interface/child.interface";


export const childSchema = new mongoose.Schema({
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    childName: { type: String, required: true},
    childClass: { type: String, required: true}
},

{
    timestamps: true
} 

);

const Child = mongoose.model<IChild>("Child", childSchema);
export default Child;