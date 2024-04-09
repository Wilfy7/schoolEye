import {Document} from "mongoose";

export interface IContent extends Document {
    post: string;
}