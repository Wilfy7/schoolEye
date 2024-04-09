import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

//Cretae a post
export const createPost = async (contentData: any, toast: any) => {
   try {
     const res = await axios.post(`${baseUrl}/post`, contentData);
     toast(res.data.message)
     return res.data

   } catch (error) {
     toast(error);
   } 
};