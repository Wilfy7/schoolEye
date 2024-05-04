import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { getAllChildren } from "../../service/child.service";
//import { token } from "../../service/child.service";

const Status = () => {
  
  //Get the children id from the data
  const [children, setChildren] = useState([]);
  const [isCheckIn, setIsCheckIn] = useState(true);
  const [color, setColor] = useState("");

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const childrenData = await getAllChildren();
        setChildren(childrenData.data);

      } catch (error: any) {
        toast("error fetching the children", error)
      }
    };

    fetchChildren();
  },[]);

  const handleToggleCheck = (child: any) => {
    try {
       if (color === child) {
        setColor("");
       } else {
        setColor(child)
       }

      const control = isCheckIn ? "Checked in" : "Checked out";
      toast.success(`${control} successfully`);
      setIsCheckIn(!isCheckIn);
      
    } catch (error: any) {
      toast(`Failed to ${isCheckIn ? "check in" : "check out"}`);
    }
  };
  

  return (
    <div className="d-flex justify-content-center">
      <ToastContainer />
      <div className="checkInAndOut">
        {children.map((child: any)=> (
          <div key={child._id}>

         <div className="card col-md-6"  
         style={{
          marginLeft: "4rem",
          marginTop: "7rem", 
          height:"160px", 
          width:"200px",
          border: "none",
          justifyContent: "center",
          backgroundColor: color === child._id ? "#aad2eb" : "#5fa3cd",
          cursor: "pointer"
          }}
          onClick={() => handleToggleCheck(child._id)} 
          >
        <div>
          {child.childName[0]}
          {child.childName.split(" ")[1]?.charAt(0)}
        </div>
      </div>
      </div>
      ))}
      </div>
    </div>
  )
};

export default Status;
