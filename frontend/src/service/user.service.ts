import axios from "axios";

const baseUrl = process.env.REACT_APP_API

//Retrieve the data from the localstorage
const userData: any = localStorage.getItem("schoolEye");

//Convert the retrieved data to json
export const tokenData = JSON.parse(userData);

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

export const loginUser = async (user: any) => {
  try {
    localStorage.removeItem("schoolEye");
    const res = await axios.post(`${baseUrl}/users/login`, user)

    //Save the data to the local storage
    const data = res.data
    console.log(res.data)
    localStorage.setItem("schoolEye", JSON.stringify(data))
    window.location.href = "/"; //To redirect to hompage
    return res.data

  } catch (error) {
    console.log(error)
  }
};


//Get all Users
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/users/all`, {
      headers: {
        Authorization: token
      },
    });
    return res.data.users

  } catch (error) {
    console.log(error)
  }
};

//Get a single user
export const getUser = async (id: string) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${id}`, {
      headers: {
        Authorization: token
      },
    });
    return res.data.user;

  } catch (error) {
    console.log(error)
  }
};

//Update a user 
export const UpdateUser = async (id: string, editData: any) => {
  try {
    const res = await axios.put(`${baseUrl}/users/update/${id}`, {
      editData,
      headers: {
        Authorization: token
      }
    });
    return res.data

  } catch (error) {
    console.log(error)
  }
};

//Delete a user 
export const deleteUser = async (id: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/users/delete/${id}`, {
      headers: {
        Authorization: token
      }
    });
    return res.data.message;

  } catch (error) {
    console.log(error)
  }
};

export const logOutUser = () => {
  try {
    localStorage.removeItem("schoolEye");
    window.location.href = "/login";

  } catch (error) {
    console.log(error)
  }
};



