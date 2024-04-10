import React, { useState } from "react";
import "./RegistrationStyles.scss"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../service/user.service";

const Registration = () => {
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        password: "",
        child: "",
        position: ""
    });
    
    //Navigate from the registration
    const navigate = useNavigate();

    //Handle change
    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setInput({
            ...input, 
            [name]:value
    });
};

const handleSubmit = (e: any) => {
    e.preventDefault()

    registerUser(input)
    navigate("/login")
}

  return (
<div className="resgistration__container">
  <div className="resgistration__content ">
    <h2>Registration</h2>
    <form onSubmit={handleSubmit}>
     <div className="mb-3">
        <label 
          htmlFor="exampleInputfullName1" 
          className="form-label">
            Full Name
        </label>
        <input 
          type="text" 
          className="form-control" 
          id="exampleInputfullName" 
          name="fullName"
          value={input.fullName}
          onChange={handleInputChange}
        />
    </div>
    <div className="mb-3">
        <label 
          htmlFor="exampleInputEmail1" 
          className="form-label">
            Email address
            </label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          name="email"
          value={input.email}
          onChange={handleInputChange}
        />
      <div id="emailHelp" className="form-text">
            Your data is safe with us 
      </div>
    </div>
    <div className="mb-3">
        <label 
          htmlFor="exampleInputPassword1" 
          className="form-label">
            Password
        </label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
    </div>
    <div className="mb-3">
        <label 
          className="form-label" 
          htmlFor="exampleInputChild">
            Child
        </label>
        <input 
          type="child" 
          className="form-control" 
          id="exampleInputChild" 
          name="child"
          value={input.child}
          onChange={handleInputChange}
        />
    </div>
    <div className="mb-3">
        <label 
          className="form-label" 
          htmlFor="exampleInputPosition1">
            Position
        </label>
        <input 
          type="child" 
          className="form-control" 
          id="exampleInputPosition1" 
          name="position"
          value={input.position}
          onChange={handleInputChange}
        />
    </div>
    <button type="submit" className="btn btn-secondary"
          style={{marginTop: "1rem"}}
        >
            Register
        </button>
   </form>
  </div>
</div>
  )
};

export default Registration;
