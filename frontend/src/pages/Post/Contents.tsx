import React, { useState } from "react";
import "./PostStyles.scss"
import { createPost } from "../../service/post.service";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contents = () => {
    const [content, setContent] = useState({
      user: "",
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
