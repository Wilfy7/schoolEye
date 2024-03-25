import { Document } from "mongoose";

export interface ISchool extends Document{
   schoolName: string;
   schoolAddress: string;
   postCode: string
}