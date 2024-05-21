import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getSingleChild, updateChild } from "../../service/child.service";
import "react-toastify/dist/ReactToastify.css";

const Child = () => {
    const [child, setChild] = useState({
        
        childName: "",
        childClass: "",
        _id: "",
    });

    //Use params hook to get the id
    const { id }: any = useParams();

    //Handle change function
    const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
        setChild({ ...child, [e.target.name]: e.target.value});
    };

    //Handle the edit function
    const handleEdit = async () => {
        await updateChild(id, child);

        toast.success("Child updated successfully");
    };

    useEffect(() => {
        const fetchChildData = async () => {
            const res = await getSingleChild(id);
            setChild(res)
        };
        fetchChildData()
    }, [id])

  return (
    <div className="container">
       <ToastContainer />
       <h1>Edit {child?._id} Info</h1>
       <table className="table mt-3 table-bordered">
        <thead>
            <tr>
               <th>Id</th>
               <th>Name</th>
               <th> Class</th>
               <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>{child._id}</td>
                <td>
                    <input 
                      type="text"
                      value={child.childName || ""}
                      className="form-control"
                      name= "childName"
                      onChange={handleChange}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                     />
                </td>
                <td>
                    <input 
                      type="text"
                      value={child.childClass || ""}
                      className="form-control"
                      name= "childClass"
                      onChange={handleChange}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                     />
                </td>
                
                <td>
                    <button onClick={handleEdit} className="btn btn-primary me-3">
                        Update
                    </button>
                </td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}

export default Child;
