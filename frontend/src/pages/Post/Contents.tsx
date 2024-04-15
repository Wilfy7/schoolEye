import React, { useState } from "react";
import "./PostStyles.scss"
import { createPost } from "../../service/post.service";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contents = () => {

  const getUserData: any = localStorage.getItem("schoolEye");

  const userData = JSON.parse(getUserData)

  //Using the question mark means is optional in typescript terms
  //getting the user id from the user data
  const userId = userData?.user._id 

    const [content, setContent] = useState({
      user: userId,
      post: ""
    });
 

//Handle change
const handleChange = (e: any) => {
  const { name, value } = e.target
  setContent({
    ...content, 
    [name]: value
  })
};

const handleSubmit = async (e: any) => {
  e.preventDefault();
  
  createPost(content, toast)

  setContent({
    post: "",
    user: ""
  })
}

  return (
  <div className="container">
    <ToastContainer />
    <form onSubmit={handleSubmit} className="form control">
     <div >  
        <textarea 
         className="poster" 
         id="exampleFormControlTextarea1" 
         placeholder="Write Post"
         name="post" 
         value={content.post}
         onChange={handleChange}
        ></textarea>
     </div> 
     <button type="submit" className="btn btn-primary">
        Done
     </button>
    </form>
  </div>
    
  )
}

export default Contents;
