import axios from "axios";

const baseUrl = process.env.REACT_APP_API

//Retrieve the data from the localstorage
const userData: any = localStorage.getItem("schoolEye");

//Convert the retrieved data to json
const tokenData  = JSON.parse(userData);

//Get the token from the data
export const { token } = tokenData || "";

export const registerUser = async (user: any) => {
    try {
      const res = await axios.post(`${baseUrl}/users/register`, user);
      return res.data

    } catch (error) {
      console.log(error)  
    }
};

