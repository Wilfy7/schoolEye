import mongoose from "mongoose";
import { IUser } from "../interface/user.interface";


export const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "please enter full name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    child: {
        type: Array,
        required: [true,"Please enter child name"],
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    postCode: {
        type: String,
        required: true,
        trim: true
    }

})

const User = mongoose.model<IUser>("User", userSchema)
export default User;