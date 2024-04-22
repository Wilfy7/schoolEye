import axios from "axios"

const baseUrl = process.env.REACT_APP_API

//Retrieve the child data from the local storage
const childData: any = localStorage.getItem("schoolEye");

//Convert the data to json 
export const chilD = JSON.parse(childData);

//Get the token now from the data after the conversion
export const { token } = chilD || "";

export const registerChild = async(child: any) => {
    try {
      const res = await axios.post(`${baseUrl}/child`, child);
      return res.data

    } catch (error: any) {
        console.log(error);
    }
  };

export const getAllChildren = async () => {
    try {
       const res = await axios.get(`${baseUrl}/children`);
       return res.data

    } catch (error) {
      console.log(error);
    }
};

export const getSingleChild = async () => {
    try {
      const res = await axios.get(`${baseUrl}/child/{id}`);
      return res.data;

    } catch (error) {
      console.log(error)  
    }
};