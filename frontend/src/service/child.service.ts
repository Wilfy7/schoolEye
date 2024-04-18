import axios from "axios"

const baseUrl = process.env.REACT_APP_API


export const registerChild = async(child: any, toast: any) => {
    try {
      const res = await axios.post(`${baseUrl}/child`, child);
      return res.data

    } catch (error: any) {
        toast(error.res.data.message, {
          type: "error"
        });
        return error  
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
}