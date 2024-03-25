import { Document } from "mongoose";

export interface IChild extends Document{
   childName: string;
   class: string;
}