import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify";

const Status = () => {
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);


  const handleCheckIn = () => {
    setCheckIn(true);
    setCheckOut(false);
    toast("Checked in successfully");
  };


  const handleCheckOut = () => {
    setCheckOut(true);
    setCheckIn(false);
    toast("Checked out successfully");
  };

  return (
    <div className="d-flex justify-content-center">
      <ToastContainer />
      <div>
        <button 
          onClick={handleCheckIn} 
          disabled={checkIn} 
          className="btn btn-primary" 
          style={{marginTop: "10rem"}}
        >
          Check In
        </button>
        {checkIn &&<p>You are checked in</p> }
        <div className="">
        <button 
           onClick={handleCheckOut} 
           disabled={checkOut} 
           className="btn btn-primary" 
           style={{marginTop: "3rem" }}
        >
          check Out
        </button>
        </div>
        
        {checkOut && <p>You are checked out</p> }
      </div>
    </div>
  )
}

export default Status;
