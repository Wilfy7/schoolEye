import React, { useEffect, useState } from "react";
import { deleteChild, getAllChildren } from "../../service/child.service";
import { useNavigate } from "react-router-dom";

const Children = () => {
   const [children, setChildren] = useState([]);

   const navigate = useNavigate()

   //Handle Edit function
   const handleEdit = (id: string) => {
     navigate(`/child/${id}`);
     console.log(id)
   };

   const handleDelete = (id: string) => {
    deleteChild(id);
    setChildren(children.filter((child: any) => child._id !==id))
   }

   //Using useEffect to get all children
   useEffect(() => {
      const fetchAllChildren = async () => {
        const allChildren = await getAllChildren();
        setChildren(allChildren.data)
      };
      fetchAllChildren()
   }, []);

  return (
    <div className="container">
      <h1>All Children</h1>
      { children.length === 0 && <div>Loading...</div> }
      <div>
        <table className="table mt-3 table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Class</th>
            </tr>
            </thead>
          <tbody>
            {children.length > 0 && 
            children.map((child: any) => 
            <tr key={child._id}>
            <td> {child.childName}</td>
            <td> {child._id}</td>
            <td> {child.childClass}</td>
            <td>
              <button 
               onClick={() => handleEdit(child._id)}
               className="btn btn-primary me-3"
              >
                Edit
              </button>
              <button 
               onClick={() => handleDelete(child._id)}
               className="btn btn-danger"
              >
                Delete
              </button>
            </td>
            </tr>
          
             )}
          </tbody>
      
      </table>
      </div>
    </div>
  )
};

export default Children;
