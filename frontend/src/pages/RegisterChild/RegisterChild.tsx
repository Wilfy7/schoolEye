import React, { useState } from "react"

const RegisterChild = () => {
  const [input, setInput] = useState({
    childName: "",
    parent: "",
    childClass: ""
  });

  const handleInputChange = (e:any) => {
     const {name, value} = e.target
     setInput({
        ...input,
        [name]: value
       }); 
    }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <>
       <div className="resgistration__container">
    <div className="resgistration__content">
      <h2>Register child</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className= "form-label" htmlFor="emailInputchildName1">
                Name
            </label>
            <input 
              type="text"
              className="form-control"
              id="exampleInputchildName1"
              name="childName"
              value={input.childName} 
              onChange={handleInputChange}
            />
            <div id="emailHelp" className="form-text">
                Your data is safe with us
            </div>
        </div>
        <div className="">
            <label className="form-label" htmlFor="exampleparent1">
                Parent
            </label>
            <input 
              type="text" 
              className="form-control"
              id="exampleInputparent1"
              name="parent"
              value={input.parent}
              onChange={handleInputChange}
            />
        </div>
        <div className="">
            <label className="form-label" htmlFor="exampleInputchildCLass1">
              Class
            </label>
            <input 
              type="text" 
              className="form-control"
              id="exampleInputchildClass1"
              name="childClass"
              value={input.childClass}
              onChange={handleInputChange}
            />
        </div>
        <button type="submit" className="btn btn-secondary"
          style={{marginTop: "1rem"}}
        >
            Submit
        </button>
        <div>
            
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default RegisterChild; 
