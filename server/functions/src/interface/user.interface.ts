import { Document } from "mongoose";

export interface IUser extends Document{
   fullName: string;
   email: string;
   password: string;
   child: [string];
   position: string;
   address: string;
   postCode: string
   post: string
}