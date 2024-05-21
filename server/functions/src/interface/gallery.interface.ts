import { Document } from "mongoose";

export interface IGallery extends Document {
    fileName: string,
    mimeType: string,
    data: Buffer
}