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

export const getSingleChild = async (id: string) => {
    try {
      const res = await axios.get(`${baseUrl}/child/${id}`);
      return res.data;

    } catch (error) {
      console.log(error)  
    }
};

export const updateChild = async ( id: string, childData:any) => {
  try {
    const res = await axios.put(`${baseUrl}/update-child/${id}`, childData);
    return res.data;

  } catch (error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error('Server Error:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Network Error:', error.request);
  } else {
    // Something happened in setting up the request that triggered an error
    console.error('Error:', error.message);
  }
  // Return null or throw the error to handle it in the caller function
  throw error;
  }
};

export const deleteChild = async (id: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/child/delete/${id}`);
    return res.data.message
  } catch (error) {
    console.log(error)
  }
}