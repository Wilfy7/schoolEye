import mongoose from "mongoose";
import { ISchool } from "../interface/school.interface";


export const schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true
    },
    schoolAddress: {
        type: String,
        required: true
    },
    postCode: {
        type: String,
        required: true
    }
})

const School = mongoose.model<ISchool>("School", schoolSchema);
export default School;