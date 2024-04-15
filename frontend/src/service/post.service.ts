import axios from "axios";
import { token } from "./user.service";

const baseUrl = process.env.REACT_APP_API;

//Create a post
export const createPost = async (contentData: any, toast: any) => {
   try {
     const res = await axios.post(`${baseUrl}/post`, contentData);
     toast(res.data.message)
     return res.data

   } catch (error) {
     toast(error);
   } 
};

//Get all Posts 
export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/posts/all`, {
      headers: {
        Authorization: token
      }
    });
    return res.data
  } catch (error) {
    console.log(error)
  }
};

//Get a single post
export const getSinglePost = async () => {
  try {
    const res = await axios.get(`${baseUrl}`, {
      headers: {
        Authorization: token
      }
    });
    return res.data

  } catch (error) {
    console.log(error)
  }
}


